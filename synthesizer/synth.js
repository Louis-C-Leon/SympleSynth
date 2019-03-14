import Oscillator from './oscillators';
import ScaleMap from './keyboard_scale';

class Synth {

  constructor(ctx) {
    this.context = ctx;
    this.masterFreq = 440;
    this.semitone = Math.pow(2, 1/12);
    let osc1 = new Oscillator({type: "sine", context: ctx, frequency: this.masterFreq});
    let osc2 = new Oscillator({type: "square", context: ctx, frequency: this.masterFreq});
    let osc3 = new Oscillator({type: "sawtooth", context: ctx, frequency: this.masterFreq});
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
    
  }
}

export default Synth;