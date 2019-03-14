class Oscillator {

  constructor(options) {
    this.type = options.type;
    this.frequency = options.frequency || 440;
    this.state = "stop";
    this.context = options.context;

    this.node = new OscillatorNode(this.context, {type: this.type, frequency: this.frequency});
    this.volumeNode = this.context.createGain();
    this.volumeNode.gain.value = 0;
    this.node.connect(this.volumeNode);
    this.endpoint = this.volumeNode;
    this.node.start();
  }

  play() {
    this.volumeNode.gain.value = 1;
    this.state = "play";
  }

  pause() {
    this.volumeNode.gain.value = 0;
    this.state = "stop"
  }

  destroy() {
    this.node.stop();
    this.node.disconnect();
    this.volumeNode.disconnect();
  }

  setFrequency(freq) {
    this.frequency = freq;
    if (this.node !== null) {
      this.node.frequency.setValueAtTime(freq, this.context.currentTime);
    }
  }

  setWave(form) {
    this.node.type = form;
  }

  connect(connection) {
    this.endpoint.connect(connection);
    this.endpoint = connection; 
  }

}

export default Oscillator;