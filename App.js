import Synth from './synthesizer/synth';

const Ctx = window.AudioContext || window.webkitAudioContext;
const currContext = new Ctx();
const synthesizer = new Synth(currContext);

document.addEventListener("DOMContentLoaded", () => {
  const play = document.getElementById("synthPlay");
  const toggle = document.getElementById("toggleOsc");

  play.addEventListener("click", () => synthesizer.playNote(200));

  toggle.addEventListener("click", () => {
    for (let i = 0; i < 3; i++) {
      synthesizer.setWaveform({index: i, type: "sine"});
    }
  })
  
});