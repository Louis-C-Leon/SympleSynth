import Synth from './synthesizer/synth';
import Keyboard from './GUI/keyboard';
import {visualize, visualize2} from './GUI/visualizer';

const Ctx = window.AudioContext || window.webkitAudioContext;
const currContext = new Ctx();
const synthesizer = new Synth(currContext);

document.addEventListener("DOMContentLoaded", () => {
  const keyboard = new Keyboard(synthesizer);
  window.keyboard = keyboard;
  const draw1 = visualize(synthesizer);
  const draw2 = visualize2(synthesizer);
  draw1();
  draw2();

  const gitHub = document.getElementById("gitHub");
  const linkedIn = document.getElementById("linkedIn");
  gitHub.addEventListener("click", () => {
    console.log("click")
    document.getElementById("gitHubLink").click();
  })
  linkedIn.addEventListener("click", () => {
    console.log("click")
    document.getElementById("linkedInLink").click();
  })
});