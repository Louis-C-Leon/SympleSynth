# SynthesizerJS
[Live Link](http://www.symplesynth.net)

SympleSynth is a browser-based application that emulates an old-school analogue synthesizer and allows
users to create and modify thier own sounds via JavaScript and the native Web Audio API. I designed a responsive
user interface to control the synthesizer object and implemented it with vanilla JavaScript/HTML/CSS.

Features include:
* 3 audio sources that can be individually controlled (pitch and volume)
* 2 filter modules that can be assigned to different filter types and run either in series or in sequence
* 2 effects (reverb and distortion) that can be adjusted, enabled, or disabled
* Envelope modulation of volume and filter frequency
* LFO modulation of volume, note frequency, or filter frequency
* Wet/dry and volume controlls to control the sound and volume throughout sections
* Dynamic user interface that informs the user about the function of each control, which control the user has selected, etc.
* Audio visualization using HTML Canvas; visualizes frequency/volume graph and waveshape

One notable challenge I had to overcome during this project was dealing with certain bugs with the 
Web Audio API. This API is still relatively new to the web, and I encountered some bugs that prevented
me from getting the intended behavior, specifically with methods that would change audio parameters over time rather
than instantly to avoid audio artifacts. I may come back to this problem and try to solve it using Web Audio methods, 
but for now I took the opportunity to learn how to implement the same behavior using the JavaScript event loop. I wrote
the following methods in my envelope class to allow the envelopes to gradually modulate the desired audio parameters over
time:
```
  attack() {
    let ampStepSize;
    if(this.amp.attack <= 0) {
      ampStepSize = 1;
    } else { 
      ampStepSize = 1 / (this.amp.attack * 1000 / 10)
    }

    let filterStepSize;
    if(this.filter.attack <= 0) {
      filterStepSize = this.synth.endFreq1 - this.synth.startFreq1;
    } else {
      filterStepSize = (this.synth.endFreq1 - this.synth.startFreq1) / (this.filter.attack * 1000 / 10)
    }

    if(this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    }

    this.interval = setInterval(function() {
      this.attackInterval(ampStepSize, filterStepSize);
    }.bind(this), 10);
  }
  
  attackInterval(ampStep, filterStep) {
    //Increment param values if needed
    if (this.filters[0].value < this.synth.endFreq1) {
      this.filters[0].value += filterStep;
    }
    if (this.filters[1].value < this.synth.endFreq2) {
      this.filters[1].value += filterStep;
    }
    if (this.ampOut.value < 1) {
      this.ampOut.value += ampStep;
    }
    
    //Clear the interval if the attack is complete
    if (Math.abs(this.filters[0].value - this.synth.endFreq1) < 5 &&
        Math.abs(this.filters[1].value - this.synth.endFreq2) < 5 &&
        Math.abs(this.ampOut.value - 1) < .01) {
          clearInterval(this.interval);
          this.interval = null;
    }
  }
```

When I get the time to return to this project, I aim to complete the following goals:

* Work on better cross-browser compatibility (currently only really works on google chrome)
* Fix annoying audio artifacts that can occur when using the LFO to modulate filter frequency
* Implement step sequencer for recording simple melodies
* Implement sound storage for saving favorite sounds with LocalStorage
