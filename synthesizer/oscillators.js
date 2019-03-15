class Oscillator {

  constructor(options) {
    this.type = options.type;
    this.state = "stop";
    this.context = options.context;
    this.interval = 0;
    this.frequency = 440;
    this.semitone = Math.pow(2, 1/12);
    this.node = new OscillatorNode(this.context, {type: this.type});
    this.volumeNode = this.context.createGain();
    this.node.connect(this.volumeNode);
    this.endpoint = this.volumeNode;
    this.node.start();
  }

  setInterval(semitones) {
    this.interval = semitones;
    this.setFrequency(this.frequency);
  }

  setFrequency(freq) {
    this.frequency = freq;
    let frequency = freq * Math.pow(this.semitone, this.interval);
    this.node.frequency.setValueAtTime(frequency, this.context.currentTime);
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