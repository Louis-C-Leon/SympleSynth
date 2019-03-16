class Envelopes {
  constructor(ctx, synth, premixer, filters) {
    this.context = ctx;
    this.synth = synth;
    this.filters = [filters.filter1.frequency, filters.filter2.frequency];
    this.filterAmt = 1.6;
    this.ampOut = premixer.ampOut.gain;

    this.amp = {attack: .2, release: .2}
    this.filter = {attack: .6, release: .2}

    this.attack = this.attack.bind(this);
    this.release = this.release.bind(this);

    this.filterSustain = null;
    this.filterOrigin = this.synth.filterFreqs[0];

    this.stepInterval = null;
    this.checkInterval = null;
  }

  setAmpEnvelope(options) {
    Object.keys(options).forEach( (param) => {
      this.amp[param] = options.param;
    });
  }

  setFilterEnvelope(options) {
    Object.keys(options).forEach( (param) => {
      this.amp[param] = options.param;
    });
  }

  attack() {
    let ampStepSize;
    if(this.amp.attack <= 0) {
      ampStepSize = 1;
    } else { 
      ampStepSize = 1 / (this.amp.attack * 1000 / 10)
    }

    let filterStepSize;
    if(this.filter.attack <= 0) {
      filterStepSize = 1000 * this.filterAmt
    } else {
      filterStepSize = (1000 * this.filterAmt) / (this.filter.attack * 1000 / 10)
    }

    let filterTarget;
    if (this.filterSustain === null) {
      this.filterOrigin = this.synth.filterFreqs[0]
      filterTarget = this.filterOrigin + (800 * this.filterAmt);
      this.filterSustain = filterTarget;
    } else {
      filterTarget = this.filterSustain;
    }

    if (this.stepInterval !== null) {
      clearInterval(this.stepInterval);
      this.stepInterval = null;
    }
    if (this.checkInterval !== null) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }

    console.log(this.filterSustain);

    this.stepInterval = setInterval(function(){
      this.step(ampStepSize, filterStepSize, filterTarget, 1)}.bind(this), 10);
    
    this.checkInterval = setInterval(function(){
      this.check(1, filterTarget, "play")}.bind(this), 10);
  }

  release() {
      let ampStepSize;
      if(this.amp.release <= 0) {
        ampStepSize = 0 - (this.ampOut.value);
      } else { 
        ampStepSize = 0 - (this.ampOut.value / (this.amp.release * 1000 / 5))
      }

      let filterStepSize;
      if(this.filter.attack <= 0) {
        filterStepSize = this.filterOrigin - this.filters[0].value
      } else {
        filterStepSize = (this.filterOrigin - this.filters[0].value) / (this.filter.attack * 1000 / 5)
      }

      const filterTarget = this.filterOrigin;

      if (this.stepInterval !== null) {
        clearInterval(this.stepInterval);
        this.stepInterval = null;
      }
      if (this.checkInterval !== null) {
        clearInterval(this.checkInterval);
        this.checkInterval = null;
      }

      console.log(this.filterOrigin);
      this.stepInterval = setInterval(function(){
        this.step(ampStepSize, filterStepSize, filterTarget, 0)}.bind(this), 10);

      this.checkInterval = setInterval(function(){
        this.check(0, filterTarget, "pause")}.bind(this), 10);
  }

  step(ampStep, filterStep, filter1Target, ampTarget) {
    if (Math.abs(this.ampOut.value - ampTarget) > .001) {
      this.ampOut.value = this.ampOut.value + ampStep;
    }
    if (Math.abs(this.filters[0].value - filter1Target) > 5) {
      this.filters[0].value = this.filters[0].value + filterStep;
      this.filters[1].value = this.filters[1].value + filterStep;
    }
  }

  check(ampTarget, filter1Target, state) {
    if((Math.abs(this.ampOut.value - ampTarget) <= .001 &&
      Math.abs(this.filters[0].value - filter1Target) <= 5) ) {
        console.log("clearing!")
        clearInterval(this.stepInterval);
        clearInterval(this.checkInterval);
        this.stepInterval = null;
        this.clearInterval = null;

        this.filterOrigin = null;
        this.filterSustain = null;
    }
  }
}

export default Envelopes;