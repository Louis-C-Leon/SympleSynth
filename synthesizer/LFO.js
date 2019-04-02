class LFO {
  constructor(ctx, synth) {
    this.lfo = ctx.createOscillator();
    this.lfo.frequency.value = 1.0;
    this.modAmmt = ctx.createGain();
    this.modAmmt.gain.value = 50;
    this.param = synth.master.volume.gain

    this.lfo.connect(this.modAmmt);
    this.modAmmt.connect(this.param);
    // debugger;
  }


}

export default LFO;