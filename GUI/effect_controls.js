export const setupEffectsControls = function(synth) {
  const distortionToggle = document.getElementById("distortionToggle");
  const reverbToggle = document.getElementById("reverbToggle");

  distortionToggle.addEventListener("click", function(){
    distortionToggle.classList.toggle("buttonSelected");
    synth.toggleEffect("distortion");
  }.bind(this));

  reverbToggle.addEventListener("click", function(){
    reverbToggle.classList.toggle("buttonSelected");
    synth.toggleEffect("reverb")
  });
}