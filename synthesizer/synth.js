import ScaleMap from './keyboard_scale';
import Oscillator from './oscillators';
import PreMixer from './pre_mixer';
import Filters from './filters';
import Effects from './effects';
import Envelopes from './envelopes';
import MasterMix from './master_mixer';
import LFO from './LFO';
import { mergeParams } from "./reverb";

class Synth {

  constructor(ctx) {
    this.state = "pause";

    this.context = ctx;
    this.semitone = Math.pow(2, 1/12);
    this.octave = 3;

    let osc1 = new Oscillator({type: "sine", context: ctx});
    let osc2 = new Oscillator({type: "square", context: ctx});
    let osc3 = new Oscillator({type: "sawtooth", context: ctx});
    this.oscBank = [osc1, osc2, osc3]
    
    this.preMixer = new PreMixer(ctx, this.oscBank);
    this.filters = new Filters(ctx);

    // Store start and end filter frequencies for use by the envelopes
    this.envAmt = 1
    this.startFreq1 = 400;
    this.endFreq1 = this.startFreq1 + (1000 * this.envAmt);
    this.startFreq2 = 400;
    this.endFreq2 = this.startFreq2 + (1000 * this.envAmt);

    this.envelopes = new Envelopes(ctx, this, this.preMixer, this.filters);
    this.preMixer.connect(this.filters);

    this.effects = new Effects(ctx, this.filters);
    this.analyzer = ctx.createAnalyser();
    this.master = new MasterMix(ctx, this.effects);

    this.master.connect(this.analyzer);
    this.analyzer.connect(ctx.destination);

    this.stop = this.stop.bind(this);

    this.lfo = new LFO(ctx, this);

    this.LFO_PARAMS = {
      filter: [this.filters.filter1.frequency, this.filters.filter2.frequency], 
      amp: [this.master.volume.gain], 
      freq: this.oscBank.map( osc => osc.node.frequency),
      none: []
    }

    this.toggleEffect = this.toggleEffect.bind(this);
  }

  setLfo(options) {
    if (options.mode) {
      this.lfo.setParam(this.LFO_PARAMS[options.mode], options.mode);
    }
    if (options.params) {
      this.lfo.setOptions(options.params);
    }
  }

  preMix(options) {
    this.preMixer.setLevels(options);
  }

  setMasterVolume(vol) {
    this.master.setVolume(vol)
  }

  setFilterOptions(options) {
    if(options.envAmt !== undefined) {
      this.filters.setEnvelope(options.envAmt);
    }

    if (options.filter1 !== undefined) {
      let f1options = options.filter1;
      if(f1options.frequency !== undefined) {
        this.startFreq1 = parseInt(f1options.frequency);
        this.endFreq1 = this.startFreq1 + (1000 * this.envAmt);
        if (this.state === "play") {
          this.filters.setFrequency(1, this.endFreq1);
        } else {
          this.filters.setFrequency(1, this.startFreq1);
        }
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
        this.startFreq2 = parseInt(f2options.frequency);
        this.endFreq2 = this.startFreq2 + (1000 * this.envAmt);
        if (this.state === "play") {
          this.filters.setFrequency(1, this.endFreq2);
        } else {
          this.filters.setFrequency(1, this.startFreq2)
        }
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

  setEnvelope(options) {
    if (options.type === "amp") {
      this.envelopes.setAmpEnvelope(options);
    } else {
      this.envelopes.setFilterEnvelope(options);
    }
  }

  playFreq(freq) {
    this.state = "play";
    if (this.context.state === "suspended") {
      this.context.resume();
    }
    this.oscBank.forEach( function(oscillator) {
      oscillator.setFrequency(freq);
    })

    this.envelopes.attack();
  }

  playNote(note) {
    const freq = 440 * Math.pow(this.semitone, ScaleMap[note]);
    this.playFreq(freq);
  }

  stop() {
    this.state = "pause"
    this.envelopes.release();
  }

  toggleEffect(name) {
    if (name === "distortion") {
      this.effects.toggleDistortion();
    } else {
      this.effects.toggleReverb();
    }
  }

  setEffectsOptions(options) {
    this.effects.setOptions(options);
  }

  setWaveform(options) {
    this.oscBank[options.index].setWave(options.type);
  }

  setOscInterval(options) {
    this.oscBank[options.index].setInterval(options.semitones);
  }
}

export default Synth;