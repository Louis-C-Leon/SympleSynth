class LFO {
  constructor(ctx, synth) {
    this.lfo = ctx.createOscillator();
    this.lfo.frequency.value = 1;
    this.modAmmt = ctx.createGain();
    this.params = [];
    this.maxAmmt = 0;

    this.lfo.start();
    this.lfo.connect(this.modAmmt);
  }

  setParam(params, mode) {
    this.params = params;
    if (mode === "amp") {
      this.maxAmmt = .7;
    } else if (mode === "filter") {
      this.maxAmmt = 10000;
    } else if (mode === "freq") {
      this.maxAmmt = 25;
    } else {  
      this.maxAmmt = 0;
    }
    this.modAmmt.disconnect();
    this.modAmmt.gain.value = this.maxAmmt / 2;
    params.forEach( param => this.modAmmt.connect(param));
  }

  setOptions(options) {
    if (options.frequency) {
      this.lfo.frequency.value = options.frequency;
    }
    if (options.amplitude) {
      this.modAmmt.gain.value = this.maxAmmt * options.amplitude;
    }
  }
}

export default LFO;