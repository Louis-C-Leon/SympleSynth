class Envelopes {
  constructor(ctx, synth, premixer, filters) {
    this.context = ctx;
    this.synth = synth;

    this.rampToValueAtTime = this.rampToValueAtTime.bind(this);
    this.amp = {attack: .2, release: .1, ramp: this.rampToValueAtTime}
    this.filter = {attack: .5, release: .1, ramp: this.rampToValueAtTime}
    this.connect();
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
    this.rampToValueAtTime("play", [premixer.ampOut.gain, filters.filter1.frequency, filters.filter2.frequency], )
  }

  release() {

  }

  rampToValueAtTime(type, params, nextVals, periods) {

    let stepSize;
    const prevTime = this.context.currentTime;
    const initialVal = param.value;
    let prevLoopTime = prevTime;

    if (period === 0 && this.synth.state === type) {
      param.value = nextVal;
    } else {
      while (this.context.currentTime < prevTime + period && this.synth.state === type) {
        stepSize = ((this.context.currentTime - prevLoopTime) / period) * (nextVal - initialVal);
        prevLoopTime = this.context.currentTime;
        param.value = param.value + stepSize;
      }
      if(type === "pause") {
        param.value = 0;
      }
    }
  }

  connect() {

  }
}

export default Envelopes;