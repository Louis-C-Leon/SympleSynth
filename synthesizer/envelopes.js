class Envelopes {
  constructor(ctx, synth, premixer, filters) {
    this.context = ctx;
    this.synth = synth;
    this.filters = filters;
    this.filterAmt = 1.4;
    this.ampOut = premixer.ampOut;

    this.amp = {attack: 0, release: .1}
    this.filter = {attack: .5, release: .1}

    this.attack = this.attack.bind(this);
    this.release = this.release.bind(this);
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
      ampStepSize = 1 / (this.amp.attack * 1000 / 5)
    }

    let filterStepSize;
    if(this.filter.attack <= 0) {
      filterStepSize = 1000 * this.filterAmt
    } else {
      filterStepSize = (1000 * this.filterAmt) / (this.filter.attack * 1000 / 5)
    }

    const filterTarget = this.filters.filter1.frequency.value + (800 * this.filterAmt);

    setInterval(function(){
      this.step(ampStepSize, filterStepSize, filterTarget)}.bind(this), 5);
  }

  release() {
    let ampStepSize;
    if(this.amp.attack <= 0) {
      ampStepSize = 1;
    } else { 
      ampStepSize = 1 / (this.amp.attack * 1000 / 5)
    }

    let filterStepSize;
    if(this.filter.attack <= 0) {
      filterStepSize = 1000 * this.filterAmt
    } else {
      filterStepSize = (1000 * this.filterAmt) / (this.filter.attack * 1000 / 5)
    }

    const filterTarget = this.filters.filter1.frequency.value + (800 * this.filterAmt);

    setInterval(function(){
      this.step(ampStepSize, filterStepSize, filterTarget)}.bind(this), 5);
  }

  step(ampStep, filterStep, filter1Target) {
    if (this.ampOut.gain.value < 1) {
      this.ampOut.gain.value = this.ampOut.gain.value + ampStep;
    }
    if (this.filters.filter1.frequency.value < filter1Target) {
      this.filters.filter2.frequency.value = this.filters.filter2.frequency.value + filterStep;
      this.filters.filter1.frequency.value = this.filters.filter1.frequency.value + filterStep;
    }
    if(this.ampOut.gain.value >= 1 && this.filters.filter1.frequency.value >= filter1Target) {
      clearInterval();
    } 
  }
}

export default Envelopes;