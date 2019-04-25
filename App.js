import Synth from './synthesizer/synth';
import Keyboard from './GUI/keyboard';
import {visualize, visualize2} from './GUI/visualizer';
const isChrome = !!window.chrome

if (isChrome) {


  const Ctx = window.AudioContext || window.webkitAudioContext;
  const currContext = new Ctx();
  const synthesizer = new Synth(currContext);

  document.addEventListener("DOMContentLoaded", () => {
    const keyboard = new Keyboard(synthesizer);
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
} else {
  let errorModal = document.createElement("SECTION");
  let errorTextBox = document.createElement("DIV");
  errorModal.classList.add("errorModal");
  errorTextBox.classList.add("errorTextBox");
  let errorText = document.createTextNode("Sorry! The Web Audio API is still fairly new to browsers, creating some compatibility issues. Please visit this site with Google Chrome.")
  errorTextBox.appendChild(errorText);
  errorModal.appendChild(errorTextBox);
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("body").appendChild(errorModal);
  })
}