import Oscillator from './oscillators';

class Synth {

  constructor(ctx) {
    this.context = ctx;
    let osc1 = new Oscillator({type: "sine", context: ctx, connections: []});
    let osc2 = new Oscillator({type: "square", context: ctx, connections: []});
    let osc3 = new Oscillator({type: "sawtooth", context: ctx, connections: []});
    this.oscBank = [osc1, osc2, osc3]
    this.oscBank.forEach( oscillator => {oscillator.connect(ctx.destination)});
  }

  playNote(freq) {
    if (this.context.state === "suspended") {
      this.context.resume();
    }
    this.oscBank.forEach( function(oscillator) {
      oscillator.setFrequency(freq);
      oscillator.play();
    })

  }

  stop() {
    this.oscBank.forEach( function(oscillator) {
      oscillator.pause()
    })
  }

  setWaveform(options) {
    this.oscBank[options.index].type = options.type;
  }
}

export default Synth;