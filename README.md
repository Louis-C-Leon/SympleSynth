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

When I get the time to return to this project, I aim to complete the following goals:

* Work on better cross-browser compatibility (currently only really works on google chrome)
* Fix annoying audio artifacts that can occur when using the LFO to modulate filter frequency
* Implement step sequencer for recording simple melodies
* Implement sound storage for saving favorite sounds with LocalStorage
