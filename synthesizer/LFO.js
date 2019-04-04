class LFO {
  constructor(ctx, synth) {
    this.lfo = ctx.createOscillator();
    this.lfo.frequency.value = 1;
    this.setMode("volume");
    this.modAmmt = ctx.createGain();
    this.modAmmt.gain.value = 10000;
    this.param = synth.filters.filter2.frequency

    this.lfo.start();
    this.lfo.connect(this.modAmmt);
    // this.modAmmt.connect(this.param);
  }

  setMode(mode) {
    if (mode === "volume") {
      this.maxAmmt = .75;
    } else if (mode === "freq") {
      this.maxAmmt = 1000;
    }
  }


}

export default LFO;