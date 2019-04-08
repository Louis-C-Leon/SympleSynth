function setupEventListeners() {
  const leftText = document.getElementById("infoLeft");
  const rightText = document.getElementById("infoRight");
  leftText.innerHTML = "Welcome to SympleSynth, my homebrewed JavaScript synthesizer for modern browsers! Play notes using your mouse or keyboard, or modify your sound using the controls."
  rightText.innerHTML = "Mouse over one of the controls to learn more."

  const controls = {
    osc1Wave: document.getElementById("osc1Dropdown"),
    osc1Interval: document.getElementById("osc1Interval"),
    osc1Vol: document.getElementById("osc1Vol"),
    osc2Wave: document.getElementById("osc2Dropdown"),
    osc2Interval: document.getElementById("osc2Interval"),
    osc2Vol: document.getElementById("osc2Vol"),
    osc3Wave: document.getElementById("osc3Dropdown"),
    osc3Interval: document.getElementById("osc3Interval"),
    osc3Vol: document.getElementById("osc3Vol"),
    octaveControl: document.getElementById("synthOctave"),
    filter1Type: document.getElementById("filter1Dropdown"),
    filter1Freq: document.getElementById("filter1Freq"),
    filter1Q: document.getElementById("filter1Q"),
    filter2Type: document.getElementById("filter2Dropdown"),
    filter2Freq: document.getElementById("filter2Freq"),
    filter2Q: document.getElementById("filter2Q"),
    filterSeries: document.getElementById("filter1Level"),
    filterMix: document.getElementById("filter2Level"),
    distortionToggle: document.getElementById("distortionToggle"),
    reverbToggle: document.getElementById("reverbToggle"),
    distortionLevel: document.getElementById("distortionAmmt"),
    reverbLevel: document.getElementById("reverbAmmt"),
    effectsMix: document.getElementById("effectsMix"),
    lfoVolume: document.getElementById("lfoAmp"),
    lfoFreq: document.getElementById("lfoFreq"),
    lfoFilter: document.getElementById("lfoFilter"),
    lfoRate: document.getElementById("lfoFrequency"),
    lfoAmmt: document.getElementById("lfoAmplitude"),
    envelopeAmp: document.getElementById("envelopeAmp"),
    envelopeFilter: document.getElementById("envelopeFilter"),
    envelopeAttack: document.getElementById("envelopeAttack"),
    envelopeRelease: document.getElementById("envelopeRelease"),
    envelopeAmmt: document.getElementById("envelopeAmmt"),
    masterVol: document.getElementById("masterVolume"),
  }

  Object.values(controls).forEach( control => {
    control.addEventListener("mouseleave", () => {
      rightText.innerHTML = "Mouse over one of the controls to learn more.";
    })
  })

  controls.osc1Wave.addEventListener("mouseover", () => {
    rightText.innerHTML = "Oscillator 1 Wave: Click to select the waveform being played by oscillator 1. Different waveforms will create different overtones and a noticably different sound.";
  });
  controls.osc1Interval.addEventListener("mouseover", () => {
    rightText.innerHTML = "Oscillator 1 Interval: Select the interval that oscillator 1 will be transposed up or down. Slide all the way to the right to transpose a full octave up, or all the way left to transpose one octave down.";
  });
  controls.osc1Vol.addEventListener("mouseover", () => {
    rightText.innerHTML = "Oscillator 1 Volume: Adjust the volume of oscillator 1 in the mix.";
  });
  controls.osc2Wave.addEventListener("mouseover", () => {
    rightText.innerHTML = "Oscillator 2 Wave: Click to select the waveform being played by oscillator 2. Different waveforms will create different overtones and a noticably different sound.";
  });
  controls.osc2Interval.addEventListener("mouseover", () => {
    rightText.innerHTML = "Oscillator 2 Interval: Select the interval that oscillator 2 will be transposed up or down. Slide all the way to the right to transpose a full octave up, or all the way left to transpose one octave down.";
  });
  controls.osc2Vol.addEventListener("mouseover", () => {
    rightText.innerHTML = "Oscillator 2 Volume: Adjust the volume of oscillator 2 in the mix";
  });
  controls.osc3Wave.addEventListener("mouseover", () => {
    rightText.innerHTML = "Oscillator 3 Wave: Click to select the waveform being played by oscillator 3. Different waveforms will create different overtones and a noticably different sound.";
  });
  controls.osc3Interval.addEventListener("mouseover", () => {
    rightText.innerHTML = "Oscillator 3 Interval: Select the interval that oscillator 3 will be transposed up or down. Slide all the way to the right to transpose a full octave up, or all the way left to transpose one octave down.";
  });
  controls.osc3Vol.addEventListener("mouseover", () => {
    rightText.innerHTML = "Oscillator 3 Volume: Adjust the volume of oscillator 3 in the mix.";
  });
  controls.octaveControl.addEventListener("mouseover", () => {
    rightText.innerHTML = "Octave Control: Adjust the octave of the whole instrument."
  })
  controls.filter1Type.addEventListener("mouseover", () => {
    rightText.innerHTML = "Filter 1 Type: Click to select a type of filter. Highpass filters exclude low frequencies, lowpass filters exclude high frequencies, and bandpass filters exclude frequencies outside of an allowed range, or 'band'.";
  });
  controls.filter1Freq.addEventListener("mouseover", () => {
    rightText.innerHTML = "Filter 1 Frequency: Select the cutoff frequency for filter 1. This will determine the frequency at which the filter starts to exclude frequencies from the signal.";
  });
  controls.filter1Q.addEventListener("mouseover", () => {
    rightText.innerHTML = "Filter 1 'Q value': This slider controls the ammount of resonance for highpass and lowpass filters. For bandpass filters, it determines the range of allowed frequencies (the width of the 'band').";
  }); 
  controls.filter2Type.addEventListener("mouseover", () => {
    rightText.innerHTML = "Filter 2 Type: Click to select a type of filter. Highpass filters exclude low frequencies, lowpass filters exclude high frequencies, and bandpass filters exclude frequencies outside of an allowed range, or 'band'.";
  });
  controls.filter2Freq.addEventListener("mouseover", () => {
    rightText.innerHTML = "Filter 2 Frequency: Select the cutoff frequency for filter 2. This will determine the frequency at which the filter starts to exclude frequencies from the signal.";
  });
  controls.filter2Q.addEventListener("mouseover", () => {
    rightText.innerHTML = "Filter 2 'Q value': This slider controls the ammount of resonance for highpass and lowpass filters. For bandpass filters, it determines the range of allowed frequencies (the width of the 'band').";
  });
  controls.filterSeries.addEventListener("mouseover", () => {
    rightText.innerHTML = "Series/Parallel Control: Adjust whether the filters run in series, or in parallel. Slide to the left to run filters more in parallel (filter outputs are independent from each other), or slide to the right to run them in series (the output of filter 1 goes into the input of filter 2).";
  });
  controls.filterMix.addEventListener("mouseover", () => {
    rightText.innerHTML = "Filter Wet/Dry Mix: Adjust how much the filters will affect the output sound. Slide to the left to get more unfiltered sound from the oscillators, or slide to the right to get more of the filtered signal.";
  });
  controls.distortionToggle.addEventListener("mouseover", () => {
    rightText.innerHTML = "Distortion: Click to toggle distortion effect.";
  });
  controls.reverbToggle.addEventListener("mouseover", () => {
    rightText.innerHTML = "Reverb: Click to toggle reverb effect.";
  });
  controls.distortionLevel.addEventListener("mouseover", () => {
    rightText.innerHTML = "Distortion Ammount: Adjust the ammount of distortion to be applied to the signal when the distortion effect is on.";
  });
  controls.reverbLevel.addEventListener("mouseover", () => {
    rightText.innerHTML = "Reverb Ammount: Adjust the ammount of reverb to be applied to the signal when the reverb effect is on.";
  });
  controls.effectsMix.addEventListener("mouseover", () => {
    rightText.innerHTML = "Effects Wet/Dry Mix: Adjust how much the effects will affect the output sound. Slide to the left to get more of the 'dry' signal, with no effects.";
  });
  controls.lfoVolume.addEventListener("mouseover", () => {
    rightText.innerHTML = "LFO Volume Toggle: When this option is selected, the instrument's volume will be modulated by the LFO, a low-frequency sinusoidal wave. This can create a tremolo effect.";
  });
  controls.lfoFreq.addEventListener("mouseover", () => {
    rightText.innerHTML = "LFO Pitch Toggle: When this option is selected, the instrument's overall pitch will be modulated by the LFO, a low-frequency sinusoidal wave. This can create a vibrato effect";
  });
  controls.lfoFilter.addEventListener("mouseover", () => {
    rightText.innerHTML = "LFO Filter Toggle: When this option is selected, the frequency of the two filters will be modulated by the LFO, a low-frequency sinusoidal wave.";
  });
  controls.lfoRate.addEventListener("mouseover", () => {
    rightText.innerHTML = "LFO Frequency: Adjust the frequency of the LFO to change how fast the modulation occurs.";
  });
  controls.lfoAmmt.addEventListener("mouseover", () => {
    rightText.innerHTML = "LFO Ammount: Adjust the ammount of modulation to determine how much the LFO will affect the parameter it's mapped to.";
  });
  controls.envelopeAmp.addEventListener("mouseover", () => {
    rightText.innerHTML = "Volume Envelope: Selecting this option will allow you to adjust the attack and release times of the volume envelope, i.e. how fast the volume fades in and fades out when pressing and releasing the keys.";
  });
  controls.envelopeFilter.addEventListener("mouseover", () => {
    rightText.innerHTML = "Filter Envelope: Selecting this option will allow you to adjust the attack and release times of the filter envelope, i.e. how fast the volume filter frequency ramps up and down when pressing and releasing the keys.";
  });
  controls.envelopeAttack.addEventListener("mouseover", () => {
    rightText.innerHTML = "Envelope Attack: Adjust the ammount of time after pressing a key before the envelope reaches its maximum value. Slide up to make the volume or filter frequency ramp up more slowly.";
  });
  controls.envelopeRelease.addEventListener("mouseover", () => {
    rightText.innerHTML = "Envelope Release: Adjust the ammount of time after releasing a key before the envelope reaches its minimum value. Slide up to make the volume or filter frequency ramp down more slowly.";
  });
  controls.envelopeAmmt.addEventListener("mouseover", () => {
    rightText.innerHTML = "Filter Ammount: Adjust the ammount that the filter frequency will be affected by the filter envelope.";
  });
  controls.masterVol.addEventListener("mouseover", () => {
    rightText.innerHTML = "Master Volume: Adjust the overall volume of the instrument.";
  });
}

export default setupEventListeners;