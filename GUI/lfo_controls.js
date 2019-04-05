class LfoControls {
  constructor(synth) {
    this.ampToggle = document.getElementById("lfoAmp");
    this.filterToggle = document.getElementById("lfoFilter");
    this.freqToggle = document.getElementById("lfoFreq");
    this.synth = synth;

    this.ampToggle.addEventListener("click", function(e){
      if (this.ampToggle.classList.contains("buttonSelected")) {
        this.ampToggle.classList.remove("buttonSelected");
        this.synth.setLfo("none")
      } else {
        this.ampToggle.classList.add("buttonSelected");
        this.filterToggle.classList.remove("buttonSelected");
        this.freqToggle.classList.remove("buttonSelected");
        this.synth.setLfo("amp");
      }
    }.bind(this))

    this.filterToggle.addEventListener("click", function(e){
      if (this.filterToggle.classList.contains("buttonSelected")) {
        this.filterToggle.classList.remove("buttonSelected");
        this.synth.setLfo("none")
      } else {
        this.filterToggle.classList.add("buttonSelected");
        this.ampToggle.classList.remove("buttonSelected");
        this.freqToggle.classList.remove("buttonSelected");
        this.synth.setLfo("filter");
      }
    }.bind(this))

    this.freqToggle.addEventListener("click", function(e){
      if (this.freqToggle.classList.contains("buttonSelected")) {
        this.freqToggle.classList.remove("buttonSelected");
        this.synth.setLfo("none")
      } else {
        this.freqToggle.classList.add("buttonSelected");
        this.filterToggle.classList.remove("buttonSelected");
        this.ampToggle.classList.remove("buttonSelected");
        this.synth.setLfo("freq");
      }
    }.bind(this))
  }
}

export default LfoControls