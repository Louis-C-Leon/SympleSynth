// Implementation of Manfred Schoeder's Freeverb algorithmic reverb
// inspired by this article https://itnext.io/algorithmic-reverb-and-web-audio-api-e1ccec94621a
// Uses lowpass "comb" filters to simulate delay lines and allpass filters
// to simulate diffusion through the air

// First, define a composite node class to allow for multiple nodes to 
// be bundled together as one
class CompositeAudioNode {
  constructor(ctx, options) {
    this.context = ctx;
    this.input = ctx.createGain();
    this.output = this.context.createGain();
  }

  connect(connection) {
    this.output.connect(connection);
  }

  disconnect() {
    this.output.disconnect.apply(this.output, arguments);
  }
}

class LowPassComb extends CompositeAudioNode {
  constructor(ctx, options) {
    super(ctx, options);
    const {delayTime, gainValue, frequency} = options;
    this.lowPass = new BiquadFilterNode(ctx, {type: 'lowpass', frequency});
    this.delay = new DelayNode(ctx, { delayTime });
    this.gain = ctx.createGain();
    this.gain.gain.value = gainValue;

    this.input.connect(this.delay)
      .connect(this.lowPass)
      .connect(this.gain)
      .connect(this.input)
      .connect(this.output);
  }

  get resonance() {
    return this.gain.gain
  }

  get dampening() {
    return this.delay.delayTime
  }

  get delayTime() {
    return this.delay.delayTime;
  }
}

class Reverb extends CompositeAudioNode {
  constructor(ctx, options) {
    super(ctx, options);
    const {roomSize: resonance, dampening, wetGain, dryGain } = options;
    const sampleRate = 44100;
    const COMB_FILTER_TUNINGS = [1557, 1617, 1491, 1422, 1277, 1356, 1188, 1116]
      .map(delayPerSecond => delayPerSecond / sampleRate);
    const ALLPASS_FREQUENCIES = [225, 556, 441, 341];

    this.wet = ctx.createGain()
    this.wet.gain.setValueAtTime(wetGain, ctx.currentTime)
    this.dry = ctx.createGain()
    this.dry.gain.setValueAtTime(dryGain, ctx.currentTime)
    this.merger = ctx.createChannelMerger(2)
    this.splitter = ctx.createChannelSplitter(2)

    this.combFilters = COMB_FILTER_TUNINGS
      .map(delayTime => new LowPassComb(ctx, {gainValue: dampening, resonance, delayTime}));
    const combLeft = this.combFilters.slice(0, 1);
    const combRight = this.combFilters.slice(7);
    this.allPassFilters = ALLPASS_FREQUENCIES
      .map(freq => new BiquadFilterNode(ctx, {type: 'allpass', freq}));
    this.input.connect(this.wet).connect(this.splitter);
    this.input.connect(this.dry).connect(this.output);

    combLeft.forEach( comb => {
      this.splitter.connect(comb.input, 0).connect(this.merger, 0, 0)
    });
    combRight.forEach( comb => {
      this.splitter.connect(comb.input, 1).connect(this.merger, 0, 1)
    });

    this.merger.connect(this.allPassFilters[0])
      .connect(this.allPassFilters[1])
      .connect(this.allPassFilters[2])
      .connect(this.allPassFilters[3])
      .connect(this.output);
  }

  get wetGain() {
    return this.wet.gain;
  }
  get dryGain() {
    return this.dry.gain;
  }
  get roomSize() {
    return mergeParams(this.combFilters.map(comb => comb.resonance));
  }
  get dampening() {
    return mergeParams(this.combFilters.map(comb => comb.dampening));
  }
}

export default Reverb