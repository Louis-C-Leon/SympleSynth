class FilterBank {

  constructor(ctx) {
    this.context = ctx;
    
    this.filter1 = new BiquadFilterNode(ctx, {frequency: 400});
    this.filter2 = new BiquadFilterNode(ctx, {frequency: 400});
    this.base1 = 400;
    this.base = 400;

    this.filterBank = [this.filter1, this.filter2]

    this.out1 = new GainNode(ctx, {gain: 0.5});
    this.out2 = new GainNode(ctx, {gain:0.5});
    this.series = new GainNode(ctx, {gain: 0});

    this.filter1.connect(this.out1);
    this.filter2.connect(this.out2);

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
    if (options.out1 !== undefined) {
      options.out1 > .5 ? this.out1.gain.value = .5 : this.out1.gain.value = options.out1;
    }
    if (options.series !== undefined) {
      if (options.series > .5) {
        this.series.gain.value = .5;
      } else {
        this.series.gain.value = options.series;
      }
      if (this.out1.gain.value + this.series.gain.value > .5) {
        this.out1.gain.value = .5 - this.series.gain.value;
      }
    }
    if (options.out2 !== undefined) {
      options.out2 > .5 ? this.out2.gain.value = .5 + this.series.gain.value : this.out2.gain.value = options.out2 + this.series.gain.value;
    }
  }

  connect(connection) {
    this.out2.connect(connection);
    this.out1.connect(connection);
  }

}

export default FilterBank;