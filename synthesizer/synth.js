import Oscillator from './oscillators';
import ScaleMap from './keyboard_scale';

class Synth {

  constructor(ctx) {
    this.context = ctx;
    this.masterFreq = 440;
    this.semitone = Math.pow(2, 1/12);
    let osc1 = new Oscillator({type: "sine", context: ctx});
    let osc2 = new Oscillator({type: "square", context: ctx});
    let osc3 = new Oscillator({type: "sawtooth", context: ctx});
    this.oscBank = [osc1, osc2, osc3]
    this.oscBank.forEach( oscillator => {oscillator.connect(ctx.destination)});
  }

  playFreq(freq) {
    if (this.context.state === "suspended") {
      this.context.resume();
    }
    this.oscBank.forEach( function(oscillator) {
      oscillator.setFrequency(freq);
      oscillator.play();
    })
  }

  playNote(note) {
    const freq = 440 * Math.pow(this.semitone, ScaleMap[note]);
    this.playFreq(freq);
  }

  stop() {
    this.oscBank.forEach( function(oscillator) {
      oscillator.pause()
    })
  }

  setWaveform(options) {
    this.oscBank[options.index].setWave(options.type);
  }

  setOscInterval(options) {
    this.oscBank[options.index].setInterval(options.semitones);
  }
}

export default Synth;