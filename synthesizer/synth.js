import ScaleMap from './keyboard_scale';
import Oscillator from './oscillators';
import PreMixer from './pre_mixer';
import Filters from './filters';
import Effects from './effects';

class Synth {

  constructor(ctx) {
    this.state = "pause";

    this.context = ctx;
    this.masterFreq = 440;
    this.semitone = Math.pow(2, 1/12);
    this.octave = 4;

    let osc1 = new Oscillator({type: "sine", context: ctx});
    let osc2 = new Oscillator({type: "sawtooth", context: ctx});
    let osc3 = new Oscillator({type: "sawtooth", context: ctx});
    this.oscBank = [osc1, osc2, osc3]
    
    this.preMixer = new PreMixer(ctx, this.oscBank)
    this.filters = new Filters(ctx);
    this.preMixer.connect(this.filters);

    this.effects = new Effects(ctx, this.filters)

    this.effects.connect(ctx.destination)

    this.stop = this.stop.bind(this);
  }

  preMix(options) {
    this.preMixer.setLevels(options);
  }

  setFilterOptions(options) {
    if (options.filter1 !== undefined) {
      let f1options = options.filter1;
      if(f1options.frequency !== undefined) {
        this.filters.setFrequency(0, f1options.frequency);
      }
      if(f1options.Q !== undefined ) {
        this.filters.setQ(0, f1options.Q)
      }
      if (f1options.type !== undefined) {
        this.filters.setType(0, f1options.type);
      }
    }

    if (options.filter2 !== undefined) {
      let f2options = options.filter2;
      if(f2options.frequency !== undefined) {
        this.filters.setFrequency(1, f2options.frequency);
      }
      if(f2options.Q !== undefined ) {
        this.filters.setQ(1, f2options.Q)
      }
      if (f2options.type !== undefined) {
        this.filters.setType(1, f2options.type);
      }
    }

  }

  setFilterLevels(options) {
    this.filters.setLevels(options);
  }

  playFreq(freq) {
    this.state = "play";
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
    this.state = "pause"
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