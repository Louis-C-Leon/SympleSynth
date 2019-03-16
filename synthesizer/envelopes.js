class Envelopes {
  constructor(ctx, synth, premixer, filters) {
    this.context = ctx;
    this.synth = synth;
    this.filters = filters;
    this.filterAmt = .8;
    this.ampOut = premixer.ampOut;

    this.amp = {attack: .5, release: .1}
    this.filter = {attack: 1, release: .1}

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
    const startTime = this.context.currentTime;
    const freqDiff = 800 * this.filterAmt;

    let prevLoopTime = startTime;
    let loopTime = 0.001
    let ampStepSize;
    let freqStepSize;
    while((this.context.currentTime < startTime + this.amp.attack ||
      this.context.currentTime < startTime + this.filter.attack) &&
      this.synth.state === "play") {
        debugger;
        loopTime = this.context.currentTime - prevLoopTime;
        ampStepSize = loopTime / this.amp.attack;
        freqStepSize = loopTime / this.amp.attack * freqDiff;

        if(this.context.currentTime < startTime + this.amp.attack) {
          this.ampOut.gain.value = this.ampOut.gain.value + ampStepSize;
        }

        if(this.context.currentTime < startTime + this.filter.attack) {
          this.filters.filter1.frequency.value = this.filters.filter1.frequency.value + freqStepSize;
          this.filters.filter2.frequency.value = this.filters.filter2.frequency.value + freqStepSize;
        }

    }

  }

  release() {

  }
}

export default Envelopes;