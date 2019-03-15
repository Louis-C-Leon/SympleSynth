class PostMixer {
  constructor(ctx, synth, effects) {
    this.context = ctx;
    this.synth = synth;
    this.ampOutput = new GainNode(ctx, {gain: 0});
    effects.connect(this.ampOutput);
  }

  connect(connection) {
    this.ampOutput.connect(connection);
  }

}

export default PostMixer