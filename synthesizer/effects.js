class Effects {
  constructor(ctx, filterBank) {
    this.context = ctx;
    this.premixer = { dry: new GainNode(ctx, {gain: 0.5}), wet: new GainNode(ctx, {gain: 0.5})};

    //connect filters to master dry/wet mix
    filterBank.connect(this.premixer.dry);
    filterBank.connect(this.premixer.wet);

    this.distortion = new WaveShaperNode(ctx);
    this.premixer.wet.connect(this.distortion);
  }

  connect(connection) {
    this.distortion.connect(connection);
    this.premixer.dry.connect(connection);
  }

}

export default Effects