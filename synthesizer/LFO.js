class LFO {
  constructor(ctx, synth) {
    this.lfo = ctx.createOscillator();
    this.lfo.frequency.value = 1;
    this.modAmmt = ctx.createGain();
    this.params = [];

    this.lfo.start();
    this.lfo.connect(this.modAmmt);
  }

  setParam(params, mode) {
    this.params = params;
    if (mode === "amp") {
      this.modAmmt.gain.value = .5;
    } else if (mode === "filter") {
      this.modAmmt.gain.value = 2000;
    } else if (mode === "freq") {
      this.modAmmt.gain.value = 10;
    } else {
      this.modAmmt.gain.value = 0;
    }
    this.modAmmt.disconnect();
    params.forEach( param => this.modAmmt.connect(param));
  }
}

export default LFO;