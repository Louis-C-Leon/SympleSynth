import Synth from './synthesizer/synth';
import Keyboard from './GUI/keyboard';
import {visualize, visualize2} from './GUI/visualizer';

const Ctx = window.AudioContext || window.webkitAudioContext;
const currContext = new Ctx();
window.context = currContext;
const synthesizer = new Synth(currContext);
window.synth = synthesizer;

document.addEventListener("DOMContentLoaded", () => {
  const keyboard = new Keyboard(synthesizer);
  window.keyboard = keyboard;
  const draw1 = visualize(synthesizer);
  const draw2 = visualize2(synthesizer);
  draw1();
  draw2();
});