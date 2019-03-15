class PreMixer {

  constructor(ctx, oscillators) {
    this.compressor = ctx.createDynamicsCompressor();
    this.level1 = ctx.createGain();
    this.level2 = ctx.createGain();
    this.level3 = ctx.createGain();

    oscillators[0].connect(this.level1);
    oscillators[1].connect(this.level2);
    oscillators[2].connect(this.level3);

    this.level1.connect(this.compressor);
    this.level2.connect(this.compressor);
    this.level3.connect(this.compressor);
  }

  setLevels(options) {

    if (options.level1 !== undefined) {
      this.level1.gain.value = options.level1
    }

    if (options.level2 !== undefined) {
      this.level2.gain.value = options.level2
    }

    if (options.level3 !== undefined) {
      this.level3.gain.value = options.level3
    }

  }

  connect(connection) {
    this.compressor.connect(connection);
  }

}

export default PreMixer;