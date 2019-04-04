class EnvelopeControls {
  constructor(synth) {
    this.synth = synth;
    this.mode = "amp"
    this.envAttack = document.getElementById("envelopeAttack");
    this.envRelease = document.getElementById("envelopeRelease");
    this.filterButton = document.getElementById("envelopeFilter");
    this.ampButton  = document.getElementById("envelopeAmp");
    this.setupEventListeners();
  }

  setupEventListeners() {

    this.envAttack.addEventListener("input", function(e){
      this.synth.setEnvelope({type: this.mode, attack: parseFloat(e.target.value)})
    }.bind(this))

    this.envRelease.addEventListener("input", function(e){
      this.synth.setEnvelope({type: this.mode, release: parseFloat(e.target.value)})
    }.bind(this))

    this.filterButton.addEventListener("click", function(e) {
      this.mode = "filter";
      this.envAttack.value = this.synth.envelopes.filter.attack;
      this.envRelease.value = this.synth.envelopes.filter.release;
      this.filterButton.classList.toggle("buttonSelected");
      this.ampButton.classList.toggle("buttonSelected");
    }.bind(this));

    this.ampButton.addEventListener("click", function(e) {
      this.mode = "amp";
      this.envAttack.value = this.synth.envelopes.amp.attack;
      this.envRelease.value = this.synth.envelopes.amp.release;
      this.filterButton.classList.toggle("buttonSelected");
      this.ampButton.classList.toggle("buttonSelected");
    }.bind(this));
  }
}

export default EnvelopeControls;