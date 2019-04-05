class LfoControls {
  constructor(synth) {
    this.ampToggle = document.getElementById("lfoAmp");
    this.filterToggle = document.getElementById("lfoFilter");
    this.freqToggle = document.getElementById("lfoFreq");
    this.ammt = document.getElementById("lfoAmplitude");
    this.frequency = document.getElementById("lfoFrequency");
    this.synth = synth;

    this.ampToggle.addEventListener("click", function(e){
      if (this.ampToggle.classList.contains("buttonSelected")) {
        this.ampToggle.classList.remove("buttonSelected");
        this.synth.setLfo({mode: "none"})
      } else {
        this.ampToggle.classList.add("buttonSelected");
        this.filterToggle.classList.remove("buttonSelected");
        this.freqToggle.classList.remove("buttonSelected");
        this.synth.setLfo({mode: "amp"});
      }
    }.bind(this))

    this.filterToggle.addEventListener("click", function(e){
      if (this.filterToggle.classList.contains("buttonSelected")) {
        this.filterToggle.classList.remove("buttonSelected");
        this.synth.setLfo({mode: "none"})
      } else {
        this.filterToggle.classList.add("buttonSelected");
        this.ampToggle.classList.remove("buttonSelected");
        this.freqToggle.classList.remove("buttonSelected");
        this.synth.setLfo({mode: "filter"});
      }
    }.bind(this))

    this.freqToggle.addEventListener("click", function(e){
      if (this.freqToggle.classList.contains("buttonSelected")) {
        this.freqToggle.classList.remove("buttonSelected");
        this.synth.setLfo({mode: "none"})
      } else {
        this.freqToggle.classList.add("buttonSelected");
        this.filterToggle.classList.remove("buttonSelected");
        this.ampToggle.classList.remove("buttonSelected");
        this.synth.setLfo({mode: "freq"});
      }
    }.bind(this))

    this.ammt.addEventListener("input", function(e){
      this.synth.setLfo({params: { amplitude: parseFloat(e.target.value) }})
    }.bind(this));

    this.frequency.addEventListener("input", function(e){
      this.synth.setLfo({params: { frequency: parseFloat(e.target.value) }})
    }.bind(this));
  }
}

export default LfoControls