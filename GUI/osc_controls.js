function setupOscControls(synth) {
  const osc1Dropdown = document.getElementById("osc1Dropdown")
    osc1Dropdown.addEventListener("click", function() {
      document.getElementById("osc1Wave").classList.toggle("showOsc");
    })

    const osc2Dropdown = document.getElementById("osc2Dropdown")
    osc2Dropdown.addEventListener("click", function() {
      document.getElementById("osc2Wave").classList.toggle("showOsc");
    })

    const osc3Dropdown = document.getElementById("osc3Dropdown")
    osc3Dropdown.addEventListener("click", function() {
      document.getElementById("osc3Wave").classList.toggle("showOsc");
    })

    window.addEventListener("click", function(e) {
      const dropdowns = document.getElementsByClassName("dropdownContent");
      let openDropdown;
      let parent;
      for (let i = 0; i < dropdowns.length; i++) {
        openDropdown = dropdowns[i];
        parent = openDropdown.parentElement;
        if ((openDropdown.classList.contains('showOsc') || openDropdown.classList.contains('showFilter')) && parent !== e.target.parentElement) {
          openDropdown.classList.remove('showOsc');
          openDropdown.classList.remove('showFilter')
        }
      }
    })

    const osc1Vol = document.getElementById("osc1Vol");
    osc1Vol.addEventListener("input", function(e) {
      synth.preMix({level1: e.target.value});
    }.bind(this));

    const osc2Vol = document.getElementById("osc2Vol");
    osc2Vol.addEventListener("input", function(e) {
      synth.preMix({level2: e.target.value});
    }.bind(this));

    const osc3Vol = document.getElementById("osc3Vol");
    osc3Vol.addEventListener("input", function(e) {
      synth.preMix({level3: e.target.value});
    }.bind(this));

    const osc1Interval = document.getElementById("osc1Interval");
    osc1Interval.addEventListener("input", function(e) {
      synth.setOscInterval({index: 0, semitones: e.target.value})
    }.bind(this));

    const osc2Interval = document.getElementById("osc2Interval");
    osc2Interval.addEventListener("input", function(e) {
      synth.setOscInterval({index: 1, semitones: e.target.value})
    }.bind(this));

    const osc3Interval = document.getElementById("osc3Interval");
    osc3Interval.addEventListener("input", function(e) {
      synth.setOscInterval({index: 2, semitones: e.target.value})
    }.bind(this));

    const osc1Wave = document.getElementById("osc1Wave");
    osc1Wave.addEventListener("click", function(e) {
      const dropdown = document.getElementById("osc1Dropdown");
      if (e.target.id === "osc1Sine") {
        dropdown.innerHTML = "sine";
        synth.setWaveform({index: 0, type: "sine"});
      } else if (e.target.id === "osc1Square") {
        dropdown.innerHTML = "square";
        synth.setWaveform({index: 0, type: "square"});
      } else if (e.target.id === "osc1Triangle") {
        dropdown.innerHTML = "triangle";
        synth.setWaveform({index: 0, type: "triangle"});
      } else if (e.target.id === "osc1Saw") {
        dropdown.innerHTML = "sawtooth";
        synth.setWaveform({index: 0, type: "sawtooth"});
      }
    }.bind(this));

    const osc2Wave = document.getElementById("osc2Wave");
    osc2Wave.addEventListener("click", function(e) {
      const dropdown = document.getElementById("osc2Dropdown");
      if (e.target.id === "osc2Sine") {
        dropdown.innerHTML = "sine";
        synth.setWaveform({index: 1, type: "sine"});
      } else if (e.target.id === "osc2Square") {
        dropdown.innerHTML = "square";
        synth.setWaveform({index: 1, type: "square"});
      } else if (e.target.id === "osc2Triangle") {
        dropdown.innerHTML = "triangle";
        synth.setWaveform({index: 1, type: "triangle"});
      } else if (e.target.id === "osc2Saw") {
        dropdown.innerHTML = "sawtooth";
        synth.setWaveform({index: 1, type: "sawtooth"});
      }
    }.bind(this));

    const osc3Wave = document.getElementById("osc3Wave");
    osc3Wave.addEventListener("click", function(e) {
      const dropdown = document.getElementById("osc3Dropdown");
      if (e.target.id === "osc3Sine") {
        dropdown.innerHTML = "sine";
        synth.setWaveform({index: 2, type: "sine"});
      } else if (e.target.id === "osc3Square") {
        dropdown.innerHTML = "square";
        synth.setWaveform({index: 2, type: "square"});
      } else if (e.target.id === "osc3Triangle") {
        dropdown.innerHTML = "triangle";
        synth.setWaveform({index: 2, type: "triangle"});
      } else if (e.target.id === "osc3Saw") {
        dropdown.innerHTML = "sawtooth";
        synth.setWaveform({index: 2, type: "sawtooth"});
      }
    }.bind(this));
}

export default setupOscControls;