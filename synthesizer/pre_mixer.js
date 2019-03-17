class PreMixer {

  constructor(ctx, oscillators) {

    this.compressor = ctx.createDynamicsCompressor();
    this.level1 = ctx.createGain();
    this.level2 = ctx.createGain();
    this.level3 = ctx.createGain();

    this.ampOut = new GainNode(ctx, {gain: 0});

    oscillators[0].connect(this.level1);
    oscillators[1].connect(this.level2);
    oscillators[2].connect(this.level3);

    this.level1.connect(this.compressor);
    this.level2.connect(this.compressor);
    this.level3.connect(this.compressor);

    this.out1 = ctx.createGain({gain: 0.5});
    this.out2 = ctx.createGain({gain: 0.5});
    
    this.compressor.connect(this.ampOut);

    this.ampOut.connect(this.out1);
    this.ampOut.connect(this.out2);
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

  setOutput(out1Level) {
    if(out1Level > 1) {
      this.out1.gain.value = 1;
    } else {
      this.out1.gain.value = out1Level;
    }
    this.out2Level = 1 - this.out1Level;
  }

  connect(filters) {
    this.out1.connect(filters.filter1);
    this.out1.connect(filters.filter2);
    this.out2.connect(filters.dryOut);
  }

}

export default PreMixer;