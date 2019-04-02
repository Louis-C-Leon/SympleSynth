class Effects {

  constructor(ctx, filterBank) {
    this.context = ctx;
    this.premixer = { dry: new GainNode(ctx, {gain: .5}), wet: new GainNode(ctx, {gain: .5})};

    //connect filters to master dry/wet mix
    filterBank.connect(this.premixer.dry);
    filterBank.connect(this.premixer.wet);

    this.distortion = new WaveShaperNode(ctx, {curve: this.makeDistortionCurve(0), oversample: "4x"});
    this.reverb = ctx.createConvolver();

    this.premixer.wet.connect(this.distortion);
    // this.premixer.wet.connect(this.reverb);
    // this.toggleEffect = this.toggleEffect.bind(this);
  }

  // toggleEffect(name) {
  //   return function() {
      
  //   }
  // }

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
    this.distortion.connect(connection);
    // this.reverb.connect(connection);
    this.premixer.dry.connect(connection);
  }

}

export default Effects