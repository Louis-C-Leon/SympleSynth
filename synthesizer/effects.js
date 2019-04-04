import Reverb from "./reverb";
class Effects {

  constructor(ctx, filterBank) {
    this.context = ctx;
    this.premixer = { dry: new GainNode(ctx, {gain: 0}), wet: new GainNode(ctx, {gain: 1})};

    //connect filters to master dry/wet mix
    filterBank.connect(this.premixer.dry);
    filterBank.connect(this.premixer.wet);

    this.distortion = new WaveShaperNode(ctx, {curve: this.makeDistortionCurve(0), oversample: "4x"});
    this.reverb = new Reverb(ctx, {roomSize: .95, dampening: 3000, wetGain: .8, dryGain: .2});

    // this.premixer.wet.connect(this.distortion);
    this.premixer.wet.connect(this.reverb.input);
    // this.toggleEffect = this.toggleEffect.bind(this);
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
    // this.distortion.connect(connection);
    this.reverb.connect(connection);
    this.premixer.dry.connect(connection);
  }

}

export default Effects