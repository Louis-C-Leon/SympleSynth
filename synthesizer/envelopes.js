class Envelopes {
  constructor(ctx, synth, premixer, filters) {
    this.context = ctx;
    this.synth = synth;

    this.filters = [filters.filter1.frequency, filters.filter2.frequency];
    this.ampOut = premixer.ampOut.gain;

    this.amp = {attack: .1, release: .1}
    this.filter = {attack: .1, release: .1}

    this.attack = this.attack.bind(this);
    this.release = this.release.bind(this);

    this.interval = null;
  }

  setAmpEnvelope(options) {
    Object.keys(options).forEach( (param) => {
      this.amp[param] = options[param];
    });
  }

  setFilterEnvelope(options) {
    Object.keys(options).forEach( (param) => {
      this.filter[param] = options[param];
    });
  }

  attack() {
    console.log(this.amp, this.filter)
    let ampStepSize;
    if(this.amp.attack <= 0) {
      ampStepSize = 1;
    } else { 
      ampStepSize = 1 / (this.amp.attack * 1000 / 10)
    }

    let filterStepSize;
    if(this.filter.attack <= 0) {
      filterStepSize = this.synth.endFreq1 - this.synth.startFreq1;
    } else {
      filterStepSize = (this.synth.endFreq1 - this.synth.startFreq1) / (this.filter.attack * 1000 / 10)
    }

    if(this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    }

    this.interval = setInterval(function() {
      this.attackInterval(ampStepSize, filterStepSize);
    }.bind(this), 10);
  }

  release() {
    let ampStepSize;
    if(this.amp.release <= 0) {
      ampStepSize = 0 - (this.ampOut.value);
    } else { 
      ampStepSize = 0 - (this.ampOut.value / (this.amp.release * 1000 / 10))
    }

    let filterStepSize;
    if(this.filter.attack <= 0) {
      filterStepSize = this.synth.startFreq1 - this.filters[0].value;
    } else {
      filterStepSize = (this.synth.startFreq1 - this.filters[0].value) / (this.filter.attack * 1000 / 10)
    }

    if(this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    }

    this.interval = setInterval(function() {
      this.decayInterval(ampStepSize, filterStepSize)
    }.bind(this), 10);
  }

  attackInterval(ampStep, filterStep) {
    //Increment param values if needed
    if (this.filters[0].value < this.synth.endFreq1) {
      this.filters[0].value += filterStep;
    }
    if (this.filters[1].value < this.synth.endFreq2) {
      this.filters[1].value += filterStep;
    }
    if (this.ampOut.value < 1) {
      this.ampOut.value += ampStep;
    }

    // debugger;
    //Clear the interval if the attack is complete
    if (Math.abs(this.filters[0].value - this.synth.endFreq1) < 5 &&
        Math.abs(this.filters[1].value - this.synth.endFreq2) < 5 &&
        Math.abs(this.ampOut.value - 1) < .01) {
          clearInterval(this.interval);
          this.interval = null;
    }
  }

  decayInterval(ampStep, filterStep) {
    //Increment param values if needed
    if (this.filters[0].value > this.synth.startFreq1) {
      this.filters[0].value += filterStep;
    }
    if (this.filters[1].value > this.synth.startFreq2) {
      this.filters[1].value += filterStep;
    }
    if (this.ampOut.value > 0) {
      this.ampOut.value += ampStep;
    }

    // debugger;
    //Clear the interval if the attack is complete
    if (Math.abs(this.filters[0].value - this.synth.startFreq1) < 5 &&
        Math.abs(this.filters[1].value - this.synth.startFreq2) < 5 &&
        this.ampOut.value < .01) {
          clearInterval(this.interval);
          this.interval = null;
    }

  }
}

export default Envelopes;