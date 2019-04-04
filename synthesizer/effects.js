import Reverb from "./reverb";
class Effects {

  constructor(ctx, filterBank) {
    this.context = ctx;
    this.input = new GainNode(ctx);
    filterBank.connect(this.input);

    this.premixer = { dry: new GainNode(ctx, {gain: 0}), wet: new GainNode(ctx, {gain: 1})};

    this.input.connect(this.premixer.dry);
    this.input.connect(this.premixer.wet);

    this.toggles = {reverb: true, distortion: true};
    this.output = new GainNode(ctx);

    this.distortion = new WaveShaperNode(ctx, {curve: this.makeDistortionCurve(50), oversample: "4x"});
    this.reverb = new Reverb(ctx, {roomSize: .9, dampening: 3000, wetGain: .8, dryGain: .2});

    this.premixer.wet.connect(this.distortion);
    this.distortion.connect(this.reverb.input);
    this.reverb.connect(this.output);
    this.premixer.dry.connect(this.output);

    this.toggleReverb = this.toggleReverb.bind(this);
    this.toggleDistortion = this.toggleDistortion.bind(this);
  }

  toggleReverb() {
    if (this.toggles.reverb) {
      this.reverb.disconnect();
      if (this.toggles.distortion) {
        this.distortion.disconnect();
        this.distortion.connect(this.output);
      } else {
        this.premixer.wet.disconnect();
        this.premixer.wet.connect(this.output);
      }
      this.toggles.reverb = false;
    } else {
      if (this.toggles.distortion) {
        this.distortion.disconnect();
        this.distortion.connect(this.reverb.input);
        this.reverb.connect(this.output);
      } else {
        this.premixer.wet.disconnect();
        this.premixer.wet.connect(this.reverb.input);
        this.reverb.connect(this.output);
      }
      this.toggles.reverb = true;
    }
  }

  toggleDistortion() {
    if (this.toggles.distortion) {
      this.distortion.disconnect();
      if (this.toggles.reverb) {
        this.premixer.wet.disconnect();
        this.premixer.wet.connect(this.reverb.input);
      } else {
        this.premixer.wet.disconnect();
        this.premixer.wet.connect(this.output);
      }
      this.toggles.distortion = false;
    } else {
      if (this.toggles.reverb) {
        this.premixer.wet.disconnect();
        this.premixer.wet.connect(this.distortion);
        this.distortion.connect(this.reverb.input);
      } else {
        this.premixer.wet.disconnect();
        this.premixer.wet.connect(this.distortion);
        this.distortion.connect(this.output);
      }
      this.toggles.distortion = true;
    }
  }

  makeDistortionCurve(amount) {
    const k = amount
    const numSamples = 4410;
    let curve = new Float32Array(numSamples);
    const degree = Math.PI / 180;
    let x;
    for(let i = 0; i < numSamples; i++) {
      x = i * 2 / numSamples - 1;
      curve[i] = ( 3 + k ) * x * 20 * degree / (Math.PI + k * Math.abs(x) );
    }
    return curve;
  }

  connect(connection) {
    this.output.connect(connection);
  }

}

export default Effects