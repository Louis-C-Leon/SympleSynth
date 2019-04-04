export const setupEffectsControls = function(synth) {
  const distortionToggle = document.getElementById("distortionToggle");
  const reverbToggle = document.getElementById("reverbToggle");
  const distortionAmmt = document.getElementById("distortionAmmt");
  const reverbAmmt = document.getElementById("reverbAmmt");
  const effectsMix = document.getElementById("effectsMix");

  distortionToggle.addEventListener("click", function(){
    distortionToggle.classList.toggle("buttonSelected");
    synth.toggleEffect("distortion");
  }.bind(this));

  reverbToggle.addEventListener("click", function(){
    reverbToggle.classList.toggle("buttonSelected");
    synth.toggleEffect("reverb")
  });

  distortionAmmt.addEventListener("input", function(e) {
    synth.setEffectsOptions({distortion: parseFloat(e.target.value)})
  });

  reverbAmmt.addEventListener("input", function(e) {
    synth.setEffectsOptions({reverb: parseFloat(e.target.value)})
  });

  effectsMix.addEventListener("input", function(e) {
    synth.setEffectsOptions({mix: parseFloat(e.target.value)})
  })

}