import Synth from './synthesizer/synth';

const Ctx = window.AudioContext || window.webkitAudioContext;
const currContext = new Ctx();
const synthesizer = new Synth(currContext);
const waveforms = ["sine", "square", "triangle", "sawtooth"]
let currWaveform1 = 0;
let currWaveform2 = 0;
let currWaveform3 = 0;



document.addEventListener("DOMContentLoaded", () => {
  const play = document.getElementById("synthPlay");

  const toggleOsc1 = document.getElementById("toggleOsc1");
  const toggleOsc2 = document.getElementById("toggleOsc2");
  const toggleOsc3 = document.getElementById("toggleOsc3");

  const level1 = document.getElementById("level1");
  const level2 = document.getElementById("level2");
  const level3 = document.getElementById("level3");

  level1.addEventListener("change", (e) => {
    synthesizer.preMix({level1: e.target.value})
  })

  level2.addEventListener("change", (e) => {
    synthesizer.preMix({level2: e.target.value})
  })

  level3.addEventListener("change", (e) => {
    synthesizer.preMix({level3: e.target.value})
  })

  play.addEventListener("click", () => {
    if (synthesizer.state === "pause") {
      synthesizer.playNote("E3");
    } else {
      synthesizer.stop()
    }
  });

  toggleOsc1.addEventListener("click", () => {
    if (currWaveform1 > 2) {
      currWaveform1 = 0;
    } else {
      currWaveform1 = currWaveform1 + 1
    }
    synthesizer.setWaveform({index: 1, type: waveforms[currWaveform1]})
  })
  toggleOsc2.addEventListener("click", () => {
    if (currWaveform2 > 2) {
      currWaveform2 = 0;
    } else {
      currWaveform2 = currWaveform2 + 1
    }
    synthesizer.setWaveform({index: 2, type: waveforms[currWaveform2]})
  })
  toggleOsc3.addEventListener("click", () => {
    if (currWaveform3 > 2) {
      currWaveform3 = 0;
    } else {
      currWaveform3 = currWaveform3 + 1
    }
    synthesizer.setWaveform({index: 1, type: waveforms[currWaveform3]})
  })
});