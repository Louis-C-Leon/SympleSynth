class FilterBank {

  constructor(ctx) {
    this.context = ctx;
    
    this.filter1 = new BiquadFilterNode(ctx, {frequency: 400});
    this.filter2 = new BiquadFilterNode(ctx, {frequency: 400});
    this.base1 = 400;
    this.base = 400;

    this.filterBank = [this.filter1, this.filter2]

    this.wetOut = new GainNode(ctx, {gain: 0.5});
    this.dryOut = new GainNode(ctx, {gain:0});
    this.series = new GainNode(ctx, {gain: 0});
    this.parallel = new GainNode(ctx, {gain: 0.5})

    this.filter1.connect(this.parallel);
    this.parallel.connect(this.wetOut)
    this.filter2.connect(this.wetOut);

    this.filter1.connect(this.series);
    this.series.connect(this.filter2);
  }

  setFrequency(num, freq) {
    this.filterBank[num].frequency.value = freq;
  }

  setQ(num, ammt) {
    this.filterBank[num].Q.value = ammt;
  }

  setType(num, type){
    this.filterBank[num].type = type;
  }

  setEnvelope(amt){
    if (amt > 1) {
      this.envAmt = 1;
    } else if (amt < 0) {
      this.envAmt = 0;
    } else {
      this.envAmt = amt;
    }
  }

  setLevels(options){
    if (options.series !== undefined) {
      if (options.series > .5) {
        this.series.gain.value = .5;
      } else {
        this.series.gain.value = options.series;
      }
      this.parallel.gain.value = 0.5 - this.series.gain.value;
    }
    if (options.wet !== undefined) {
      if(options.wet > .5) {
        this.wetOut.gain.value = .5;
      } else {
        this.wetOut.gain.value = options.wet;
      }
      this.dryOut.gain.value = 0.5 - this.wetOut.gain.value
    }
  }

  connect(connection) {
    this.wetOut.connect(connection);
    this.dryOut.connect(connection);
  }

}

export default FilterBank;