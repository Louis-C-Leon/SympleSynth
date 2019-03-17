function setupFilterControls(synth) {

  const filter1Dropdown = document.getElementById("filter1Dropdown");
  filter1Dropdown.addEventListener("click", function() {
    document.getElementById("filter1Type").classList.toggle("show");
  });

  const filter1Type = document.getElementById("filter1Type");
    filter1Type.addEventListener("click", function(e) {
      const dropdown = document.getElementById("filter1Dropdown");
      if (e.target.id === "filter1Lowpass") {
        dropdown.innerHTML = "lowpass";
        synth.setFilterOptions({filter1: {type: "lowpass"}});
      } else if (e.target.id === "filter1Highpass") {
        dropdown.innerHTML = "highpass";
        synth.setFilterOptions({filter1: {type: "highpass"}});
      } else if (e.target.id === "filter1Bandpass") {
        dropdown.innerHTML = "bandpass";
        synth.setFilterOptions({filter1: {type: "bandpass"}});
      }
    }.bind(this));

  const filter1Freq = document.getElementById("filter1Freq");
  filter1Freq.addEventListener("input", function(e) {
    synth.setFilterOptions({filter1: {frequency: e.target.value}});
  }.bind(this));

  const filter1Q = document.getElementById("filter1Q");
  filter1Q.addEventListener("input", function(e){
    synth.setFilterOptions({filter1: {Q: e.target.value}});
  }.bind(this));

  const filter1Level = document.getElementById("filter1Level");
  filter1Level.addEventListener("input", function(e){
    synth.setFilterLevels({series: e.target.value});
  }.bind(this));


  const filter2Dropdown = document.getElementById("filter2Dropdown");
  filter2Dropdown.addEventListener("click", function() {
    document.getElementById("filter2Type").classList.toggle("show");
  });

  const filter2Type = document.getElementById("filter2Type");
    filter2Type.addEventListener("click", function(e) {
      const dropdown = document.getElementById("filter2Dropdown");
      if (e.target.id === "filter2Lowpass") {
        dropdown.innerHTML = "lowpass";
        synth.setFilterOptions({filter2: {type: "lowpass"}});
      } else if (e.target.id === "filter2Highpass") {
        dropdown.innerHTML = "highpass";
        synth.setFilterOptions({filter2: {type: "highpass"}});
      } else if (e.target.id === "filter2Bandpass") {
        dropdown.innerHTML = "bandpass";
        synth.setFilterOptions({filter2: {type: "bandpass"}});
      }
    }.bind(this));

  const filter2Freq = document.getElementById("filter2Freq");
  filter2Freq.addEventListener("input", function(e) {
    synth.setFilterOptions({filter2: {frequency: e.target.value}});
  }.bind(this));

  const filter2Q = document.getElementById("filter2Q");
  filter2Q.addEventListener("input", function(e){
    synth.setFilterOptions({filter2: {Q: e.target.value}});
  }.bind(this));

  const filter2Level = document.getElementById("filter2Level");
  filter2Level.addEventListener("input", function(e){
    synth.setFilterLevels({wet: e.target.value / 2});
  }.bind(this));


}

export default setupFilterControls;