class MasterMixer {
  constructor(ctx, effects) {
    this.context = ctx;
    this.volume = new GainNode(ctx, {gain: .7});
    effects.connect(this.volume);
  }

  connect(connector) {
    this.volume.connect(connector);
  }

  setVolume(vol) {
    this.volume.gain.value = vol;
  }

}

export default MasterMixer;