class LFO {
  constructor(ctx, synth) {
    this.lfo = ctx.createOscillator();
    this.lfo.frequency.value = 1;
    this.modAmmt = ctx.createGain();

    this.lfo.start();
    this.lfo.connect(this.modAmmt);
  }

  setParam(params, mode) {
    if (mode === "amp") {
      this.modAmmt.gain.value = .5;
    } else if (mode === "filter") {
      this.modAmmt.gain.value = 500;
    } else if (mode === "freq") {
      this.modAmmt.gain.value = 500;
    } else {
      this.modAmmt.gain = 0;
    }
    this.modAmmt.disconnect();
    params.forEach( param => this.modAmmt.connect(param));
  }
}

export default LFO;