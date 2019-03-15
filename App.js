import Synth from './synthesizer/synth';
import Keyboard from './GUI/keyboard';

const Ctx = window.AudioContext || window.webkitAudioContext;
const currContext = new Ctx();
const synthesizer = new Synth(currContext);
window.synth = synthesizer;

document.addEventListener("DOMContentLoaded", () => {
  const keyboard = new Keyboard(synthesizer);
  window.keyboard = keyboard;
  
});