import Synth from './synthesizer/synth';
import Keyboard from './GUI/keyboard';
import visualize from './GUI/visualizer';

const Ctx = window.AudioContext || window.webkitAudioContext;
const currContext = new Ctx();
window.context = currContext;
const synthesizer = new Synth(currContext);
window.synth = synthesizer;

document.addEventListener("DOMContentLoaded", () => {
  const keyboard = new Keyboard(synthesizer);
  window.keyboard = keyboard;
  const draw = visualize(synthesizer);
  draw();
});