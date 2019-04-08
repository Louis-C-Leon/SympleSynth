/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./App.js":
/*!****************!*\
  !*** ./App.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _synthesizer_synth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./synthesizer/synth */ "./synthesizer/synth.js");
/* harmony import */ var _GUI_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GUI/keyboard */ "./GUI/keyboard.js");
/* harmony import */ var _GUI_visualizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GUI/visualizer */ "./GUI/visualizer.js");




const Ctx = window.AudioContext || window.webkitAudioContext;
const currContext = new Ctx();
const synthesizer = new _synthesizer_synth__WEBPACK_IMPORTED_MODULE_0__["default"](currContext);

document.addEventListener("DOMContentLoaded", () => {
  const keyboard = new _GUI_keyboard__WEBPACK_IMPORTED_MODULE_1__["default"](synthesizer);
  window.keyboard = keyboard;
  const draw1 = Object(_GUI_visualizer__WEBPACK_IMPORTED_MODULE_2__["visualize"])(synthesizer);
  const draw2 = Object(_GUI_visualizer__WEBPACK_IMPORTED_MODULE_2__["visualize2"])(synthesizer);
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

/***/ }),

/***/ "./GUI/effect_controls.js":
/*!********************************!*\
  !*** ./GUI/effect_controls.js ***!
  \********************************/
/*! exports provided: setupEffectsControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupEffectsControls", function() { return setupEffectsControls; });
const setupEffectsControls = function(synth) {
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

/***/ }),

/***/ "./GUI/envelope_controls.js":
/*!**********************************!*\
  !*** ./GUI/envelope_controls.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class EnvelopeControls {
  constructor(synth) {
    this.synth = synth;
    this.mode = "amp"
    this.envAttack = document.getElementById("envelopeAttack");
    this.envRelease = document.getElementById("envelopeRelease");
    this.filterButton = document.getElementById("envelopeFilter");
    this.ampButton  = document.getElementById("envelopeAmp");
    this.setupEventListeners();
  }

  setupEventListeners() {

    this.envAttack.addEventListener("input", function(e){
      this.synth.setEnvelope({type: this.mode, attack: parseFloat(e.target.value)})
    }.bind(this))

    this.envRelease.addEventListener("input", function(e){
      this.synth.setEnvelope({type: this.mode, release: parseFloat(e.target.value)})
    }.bind(this))

    this.filterButton.addEventListener("click", function(e) {
      if (this.mode !== "filter") {
        this.filterButton.classList.toggle("buttonSelected");
        this.ampButton.classList.toggle("buttonSelected");
      }
      this.mode = "filter";
      this.envAttack.value = this.synth.envelopes.filter.attack;
      this.envRelease.value = this.synth.envelopes.filter.release;
    }.bind(this));

    this.ampButton.addEventListener("click", function(e) {
      if (this.mode !== "amp") {
        this.filterButton.classList.toggle("buttonSelected");
        this.ampButton.classList.toggle("buttonSelected");
      }
      this.mode = "amp";
      this.envAttack.value = this.synth.envelopes.amp.attack;
      this.envRelease.value = this.synth.envelopes.amp.release;

    }.bind(this));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (EnvelopeControls);

/***/ }),

/***/ "./GUI/filter_controls.js":
/*!********************************!*\
  !*** ./GUI/filter_controls.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function setupFilterControls(synth) {

  const filter1Dropdown = document.getElementById("filter1Dropdown");
  filter1Dropdown.addEventListener("click", function() {
    document.getElementById("filter1Type").classList.toggle("showFilter");
  });

  const filter1Type = document.getElementById("filter1Type");
    filter1Type.addEventListener("click", function(e) {
      const dropdown = document.getElementById("filter1Dropdown");
      if (e.target.id === "filter1Lowpass") {
        dropdown.innerHTML = "lowpass";
        synth.setFilterOptions({filter1: {type: "lowpass"}});
      } else if (e.target.id === "filter1Highpass") {
        dropdown.innerHTML = "highpass";
        synth.setFilterOptions({filter1: {type: "highpass"}});
      } else if (e.target.id === "filter1Bandpass") {
        dropdown.innerHTML = "bandpass";
        synth.setFilterOptions({filter1: {type: "bandpass"}});
      }
    }.bind(this));

  const filter1Freq = document.getElementById("filter1Freq");
  filter1Freq.addEventListener("input", function(e) {
    synth.setFilterOptions({filter1: {frequency: e.target.value}});
  }.bind(this));

  const filter1Q = document.getElementById("filter1Q");
  filter1Q.addEventListener("input", function(e){
    synth.setFilterOptions({filter1: {Q: e.target.value}});
  }.bind(this));

  const filter1Level = document.getElementById("filter1Level");
  filter1Level.addEventListener("input", function(e){
    synth.setFilterLevels({series: e.target.value});
  }.bind(this));


  const filter2Dropdown = document.getElementById("filter2Dropdown");
  filter2Dropdown.addEventListener("click", function() {
    document.getElementById("filter2Type").classList.toggle("showFilter");
  });

  const filter2Type = document.getElementById("filter2Type");
    filter2Type.addEventListener("click", function(e) {
      const dropdown = document.getElementById("filter2Dropdown");
      if (e.target.id === "filter2Lowpass") {
        dropdown.innerHTML = "lowpass";
        synth.setFilterOptions({filter2: {type: "lowpass"}});
      } else if (e.target.id === "filter2Highpass") {
        dropdown.innerHTML = "highpass";
        synth.setFilterOptions({filter2: {type: "highpass"}});
      } else if (e.target.id === "filter2Bandpass") {
        dropdown.innerHTML = "bandpass";
        synth.setFilterOptions({filter2: {type: "bandpass"}});
      }
    }.bind(this));

  const filter2Freq = document.getElementById("filter2Freq");
  filter2Freq.addEventListener("input", function(e) {
    synth.setFilterOptions({filter2: {frequency: e.target.value}});
  }.bind(this));

  const filter2Q = document.getElementById("filter2Q");
  filter2Q.addEventListener("input", function(e){
    synth.setFilterOptions({filter2: {Q: e.target.value}});
  }.bind(this));

  const filter2Level = document.getElementById("filter2Level");
  filter2Level.addEventListener("input", function(e){
    synth.setFilterLevels({wet: e.target.value / 2});
  }.bind(this));


}

/* harmony default export */ __webpack_exports__["default"] = (setupFilterControls);

/***/ }),

/***/ "./GUI/keyboard.js":
/*!*************************!*\
  !*** ./GUI/keyboard.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _osc_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./osc_controls */ "./GUI/osc_controls.js");
/* harmony import */ var _filter_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter_controls */ "./GUI/filter_controls.js");
/* harmony import */ var _envelope_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./envelope_controls */ "./GUI/envelope_controls.js");
/* harmony import */ var _effect_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./effect_controls */ "./GUI/effect_controls.js");
/* harmony import */ var _mouseover_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mouseover_text */ "./GUI/mouseover_text.js");
/* harmony import */ var _lfo_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lfo_controls */ "./GUI/lfo_controls.js");






class Keyboard {
  constructor(synth) {
    this.synth = synth;
    this.playNote = this.playNote.bind(this);
    this.setupEventListeners();
    this.envelopeControls = new _envelope_controls__WEBPACK_IMPORTED_MODULE_2__["default"](synth);
    this.lfoControls = new _lfo_controls__WEBPACK_IMPORTED_MODULE_5__["default"](synth);
  }

  setupEventListeners() {

    const keyboard = document.querySelector(".keyboard");
    keyboard.addEventListener("mouseover", (e) => {
      e.stopPropagation();
      let key = e.target;
      if (!key.classList.contains("keyPressed")) {
        key.classList.add("keyHover");
      }
    });

    keyboard.addEventListener("mouseout", (e) => {
      e.stopPropagation();
      let key = e.target;
      key.classList.remove("keyHover");
    });

    keyboard.addEventListener("mouseup", () => {
      this.synth.stop();
      let keys = Array.from(document.querySelectorAll(".key"));
      keys.forEach( key => key.classList.remove("keyPressed"));
    })

    const C = document.getElementById("C")
    C.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      C.classList.add("keyPressed");
      let func = this.playNote("C");
      func();
    })
    C.addEventListener("mouseup", this.synth.stop)

    const Cs = document.getElementById("Cs")
    Cs.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      Cs.classList.add("keyPressed");
      let func = this.playNote("Cs");
      func();
    })
    Cs.addEventListener("mouseup", this.synth.stop)

    const D = document.getElementById("D")
    D.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      D.classList.add("keyPressed");
      let func = this.playNote("D");
      func();
    })
    D.addEventListener("mouseup", this.synth.stop)

    const Ds = document.getElementById("Ds")
    Ds.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      Ds.classList.add("keyPressed");
      let func = this.playNote("Ds");
      func();
    })
    Ds.addEventListener("mouseup", this.synth.stop)

    const E = document.getElementById("E")
    E.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      E.classList.add("keyPressed");
      let func = this.playNote("E");
      func();
    })
    E.addEventListener("mouseup", this.synth.stop)

    const F = document.getElementById("F")
    F.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      F.classList.add("keyPressed");
      let func = this.playNote("F");
      func();
    })
    F.addEventListener("mouseup", this.synth.stop)

    const Fs = document.getElementById("Fs")
    Fs.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      Fs.classList.add("keyPressed");
      let func = this.playNote("Fs");
      func();
    })
    Fs.addEventListener("mouseup", this.synth.stop)

    const G = document.getElementById("G")
    G.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      G.classList.add("keyPressed");
      let func = this.playNote("G");
      func();
    })
    G.addEventListener("mouseup", this.synth.stop)

    const Gs = document.getElementById("Gs")
    Gs.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      Gs.classList.add("keyPressed");
      let func = this.playNote("Gs");
      func();
    })
    Gs.addEventListener("mouseup", this.synth.stop);

    const A = document.getElementById("A")
    A.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      A.classList.add("keyPressed");
      let func = this.playNote("A");
      func();
    })
    A.addEventListener("mouseup", this.synth.stop)

    const As = document.getElementById("As")
    As.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      As.classList.add("keyPressed");
      let func = this.playNote("As");
      func();
    })
    As.addEventListener("mouseup", this.synth.stop)

    const B = document.getElementById("B")
    B.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      B.classList.add("keyPressed");
      let func = this.playNote("B");
      func();
    })
    B.addEventListener("mouseup", this.synth.stop);

    const C2 = document.getElementById("C2")
    C2.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      C2.classList.add("keyPressed");
      let func = this.playNote("C2");
      func();
    })
    C2.addEventListener("mouseup", this.synth.stop)

    const Cs2 = document.getElementById("Cs2")
    Cs2.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      Cs2.classList.add("keyPressed");
      let func = this.playNote("Cs2");
      func();
    })
    Cs2.addEventListener("mouseup", this.synth.stop)

    const D2 = document.getElementById("D2")
    D2.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      D2.classList.add("keyPressed");
      let func = this.playNote("D2");
      func();
    })
    D2.addEventListener("mouseup", this.synth.stop)

    const Ds2 = document.getElementById("Ds2")
    Ds2.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      Ds2.classList.add("keyPressed");
      let func = this.playNote("Ds2");
      func();
    })
    Ds2.addEventListener("mouseup", this.synth.stop)

    const E2 = document.getElementById("E2")
    E2.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      E2.classList.add("keyPressed");
      let func = this.playNote("E2");
      func();
    })
    E2.addEventListener("mouseup", this.synth.stop)

    document.addEventListener("keydown", (e) => {
      const key = e.key.toLowerCase();
      if (key === "a") {
        C.classList.add("keyPressed");
        let func = this.playNote("C")
        func();
      } else if (key === "w") {
        Cs.classList.add("keyPressed");
        let func = this.playNote("Cs")
        func();
      } else if (key === "s") {
        D.classList.add("keyPressed");
        let func = this.playNote("D")
        func();
      } else if (key === "e") {
        Ds.classList.add("keyPressed");
        let func = this.playNote("Ds")
        func();
      } else if (key === "d") {
        E.classList.add("keyPressed");
        let func = this.playNote("E")
        func();
      } else if (key === "f") {
        F.classList.add("keyPressed");
        let func = this.playNote("F")
        func();
      } else if (key === "t") {
        Fs.classList.add("keyPressed");
        let func = this.playNote("Fs")
        func();
      } else if (key === "g") {
        G.classList.add("keyPressed");
        let func = this.playNote("G")
        func();
      } else if (key === "y") {
        Gs.classList.add("keyPressed");
        let func = this.playNote("Gs")
        func();
      } else if (key === "h") {
        A.classList.add("keyPressed");
        let func = this.playNote("A")
        func();
      } else if (key === "u") {
        As.classList.add("keyPressed");
        let func = this.playNote("As")
        func();
      } else if (key === "j") {
        B.classList.add("keyPressed");
        let func = this.playNote("B")
        func();
      } else if (key === "k") {
        C2.classList.add("keyPressed");
        let func = this.playNote("C2");
        func();
      } else if (key === "o") {
        Cs2.classList.add("keyPressed");
        let func = this.playNote("Cs2");
        func();
      } else if (key === "l") {
        D2.classList.add("keyPressed");
        let func = this.playNote("D2")
        func();
      } else if (key === "p") {
        Ds2.classList.add("keyPressed");
        let func = this.playNote("Ds2")
        func();
      } else if (key === ";") {
        E2.classList.add("keyPressed");
        let func = this.playNote("E2")
        func();
      }
    }); 

    document.addEventListener("keyup", () => {
      this.synth.stop()
      let keys = Array.from(document.querySelectorAll(".key"));
      keys.forEach( key => key.classList.remove("keyPressed"));
    });

    const volume = document.getElementById("masterVolume");
    volume.addEventListener("input", function(e) {
      this.synth.setMasterVolume(e.target.value);
    }.bind(this));

    const octave = document.getElementById("synthOctave");
    octave.addEventListener("input", function(e) {
      this.synth.octave = (e.target.value)
    }.bind(this));

    Object(_osc_controls__WEBPACK_IMPORTED_MODULE_0__["default"])(this.synth);
    Object(_filter_controls__WEBPACK_IMPORTED_MODULE_1__["default"])(this.synth);
    Object(_effect_controls__WEBPACK_IMPORTED_MODULE_3__["setupEffectsControls"])(this.synth);
    Object(_mouseover_text__WEBPACK_IMPORTED_MODULE_4__["default"])();
  }

  playNote(note) {
    if (note.search("2") === -1) {
      let currNote = note + this.synth.octave;
      return(() => {
        this.synth.playNote(currNote);
      })
    } else {

      note = note.slice(0, note.length - 1);
      let currNote = note + (parseInt(this.synth.octave) + 1);
      return(() => {
        this.synth.playNote(currNote);
      })
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Keyboard);

/***/ }),

/***/ "./GUI/lfo_controls.js":
/*!*****************************!*\
  !*** ./GUI/lfo_controls.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class LfoControls {
  constructor(synth) {
    this.ampToggle = document.getElementById("lfoAmp");
    this.filterToggle = document.getElementById("lfoFilter");
    this.freqToggle = document.getElementById("lfoFreq");
    this.ammt = document.getElementById("lfoAmplitude");
    this.frequency = document.getElementById("lfoFrequency");
    this.synth = synth;

    this.ampToggle.addEventListener("click", function(e){
      if (this.ampToggle.classList.contains("buttonSelected")) {
        this.ampToggle.classList.remove("buttonSelected");
        this.synth.setLfo({mode: "none"})
      } else {
        this.ampToggle.classList.add("buttonSelected");
        this.filterToggle.classList.remove("buttonSelected");
        this.freqToggle.classList.remove("buttonSelected");
        this.synth.setLfo({mode: "amp"});
      }
    }.bind(this))

    this.filterToggle.addEventListener("click", function(e){
      if (this.filterToggle.classList.contains("buttonSelected")) {
        this.filterToggle.classList.remove("buttonSelected");
        this.synth.setLfo({mode: "none"})
      } else {
        this.filterToggle.classList.add("buttonSelected");
        this.ampToggle.classList.remove("buttonSelected");
        this.freqToggle.classList.remove("buttonSelected");
        this.synth.setLfo({mode: "filter"});
      }
    }.bind(this))

    this.freqToggle.addEventListener("click", function(e){
      if (this.freqToggle.classList.contains("buttonSelected")) {
        this.freqToggle.classList.remove("buttonSelected");
        this.synth.setLfo({mode: "none"})
      } else {
        this.freqToggle.classList.add("buttonSelected");
        this.filterToggle.classList.remove("buttonSelected");
        this.ampToggle.classList.remove("buttonSelected");
        this.synth.setLfo({mode: "freq"});
      }
    }.bind(this))

    this.ammt.addEventListener("input", function(e){
      this.synth.setLfo({params: { amplitude: parseFloat(e.target.value) }})
    }.bind(this));

    this.frequency.addEventListener("input", function(e){
      this.synth.setLfo({params: { frequency: parseFloat(e.target.value) }})
    }.bind(this));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (LfoControls);

/***/ }),

/***/ "./GUI/mouseover_text.js":
/*!*******************************!*\
  !*** ./GUI/mouseover_text.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (setupEventListeners);

/***/ }),

/***/ "./GUI/osc_controls.js":
/*!*****************************!*\
  !*** ./GUI/osc_controls.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function setupOscControls(synth) {
  const osc1Dropdown = document.getElementById("osc1Dropdown")
    osc1Dropdown.addEventListener("click", function() {
      document.getElementById("osc1Wave").classList.toggle("showOsc");
    })

    const osc2Dropdown = document.getElementById("osc2Dropdown")
    osc2Dropdown.addEventListener("click", function() {
      document.getElementById("osc2Wave").classList.toggle("showOsc");
    })

    const osc3Dropdown = document.getElementById("osc3Dropdown")
    osc3Dropdown.addEventListener("click", function() {
      document.getElementById("osc3Wave").classList.toggle("showOsc");
    })

    window.addEventListener("click", function(e) {
      const dropdowns = document.getElementsByClassName("dropdownContent");
      let openDropdown;
      let parent;
      for (let i = 0; i < dropdowns.length; i++) {
        openDropdown = dropdowns[i];
        parent = openDropdown.parentElement;
        if ((openDropdown.classList.contains('showOsc') || openDropdown.classList.contains('showFilter')) && parent !== e.target.parentElement) {
          openDropdown.classList.remove('showOsc');
          openDropdown.classList.remove('showFilter')
        }
      }
    })

    const osc1Vol = document.getElementById("osc1Vol");
    osc1Vol.addEventListener("input", function(e) {
      synth.preMix({level1: e.target.value});
    }.bind(this));

    const osc2Vol = document.getElementById("osc2Vol");
    osc2Vol.addEventListener("input", function(e) {
      synth.preMix({level2: e.target.value});
    }.bind(this));

    const osc3Vol = document.getElementById("osc3Vol");
    osc3Vol.addEventListener("input", function(e) {
      synth.preMix({level3: e.target.value});
    }.bind(this));

    const osc1Interval = document.getElementById("osc1Interval");
    osc1Interval.addEventListener("input", function(e) {
      synth.setOscInterval({index: 0, semitones: e.target.value})
    }.bind(this));

    const osc2Interval = document.getElementById("osc2Interval");
    osc2Interval.addEventListener("input", function(e) {
      synth.setOscInterval({index: 1, semitones: e.target.value})
    }.bind(this));

    const osc3Interval = document.getElementById("osc3Interval");
    osc3Interval.addEventListener("input", function(e) {
      synth.setOscInterval({index: 2, semitones: e.target.value})
    }.bind(this));

    const osc1Wave = document.getElementById("osc1Wave");
    osc1Wave.addEventListener("click", function(e) {
      const dropdown = document.getElementById("osc1Dropdown");
      if (e.target.id === "osc1Sine") {
        dropdown.innerHTML = "sine";
        synth.setWaveform({index: 0, type: "sine"});
      } else if (e.target.id === "osc1Square") {
        dropdown.innerHTML = "square";
        synth.setWaveform({index: 0, type: "square"});
      } else if (e.target.id === "osc1Triangle") {
        dropdown.innerHTML = "triangle";
        synth.setWaveform({index: 0, type: "triangle"});
      } else if (e.target.id === "osc1Saw") {
        dropdown.innerHTML = "sawtooth";
        synth.setWaveform({index: 0, type: "sawtooth"});
      }
    }.bind(this));

    const osc2Wave = document.getElementById("osc2Wave");
    osc2Wave.addEventListener("click", function(e) {
      const dropdown = document.getElementById("osc2Dropdown");
      if (e.target.id === "osc2Sine") {
        dropdown.innerHTML = "sine";
        synth.setWaveform({index: 1, type: "sine"});
      } else if (e.target.id === "osc2Square") {
        dropdown.innerHTML = "square";
        synth.setWaveform({index: 1, type: "square"});
      } else if (e.target.id === "osc2Triangle") {
        dropdown.innerHTML = "triangle";
        synth.setWaveform({index: 1, type: "triangle"});
      } else if (e.target.id === "osc2Saw") {
        dropdown.innerHTML = "sawtooth";
        synth.setWaveform({index: 1, type: "sawtooth"});
      }
    }.bind(this));

    const osc3Wave = document.getElementById("osc3Wave");
    osc3Wave.addEventListener("click", function(e) {
      const dropdown = document.getElementById("osc3Dropdown");
      if (e.target.id === "osc3Sine") {
        dropdown.innerHTML = "sine";
        synth.setWaveform({index: 2, type: "sine"});
      } else if (e.target.id === "osc3Square") {
        dropdown.innerHTML = "square";
        synth.setWaveform({index: 2, type: "square"});
      } else if (e.target.id === "osc3Triangle") {
        dropdown.innerHTML = "triangle";
        synth.setWaveform({index: 2, type: "triangle"});
      } else if (e.target.id === "osc3Saw") {
        dropdown.innerHTML = "sawtooth";
        synth.setWaveform({index: 2, type: "sawtooth"});
      }
    }.bind(this));
}

/* harmony default export */ __webpack_exports__["default"] = (setupOscControls);

/***/ }),

/***/ "./GUI/visualizer.js":
/*!***************************!*\
  !*** ./GUI/visualizer.js ***!
  \***************************/
/*! exports provided: visualize, visualize2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visualize", function() { return visualize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visualize2", function() { return visualize2; });
// All visualization code inspired by 
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
function visualize(synth) {

  const canvas = document.getElementById("visualizer");
  const ctx = canvas.getContext("2d");

  synth.analyser.fftSize = 4096;

  let length = synth.analyser.frequencyBinCount;
  let data = new Uint8Array(length);

  return function draw() {
    requestAnimationFrame(draw);

    length = synth.analyser.frequencyBinCount;
    data = new Uint8Array(length);
    synth.analyser.getByteTimeDomainData(data);
    const freq = synth.currFreq;

    let trough = false;
    let start = 0;
    for (let i = 0; i < length; i++) {
      if (data[i] < 128 && trough === false) {
        trough = true;
      } else if (trough === true && data[i] > 128 && start === 0) {
        start = i;
        data = data.slice(i);
        break;
      }
    }

    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(0,0, canvas.width, canvas.height);

    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgb(255, 7, 28)';
    ctx.beginPath();

    let sliceWidth = canvas.width / 1000;
    let x = 0;

    for (let i = 0; i < 1000; i++) {
      let v = data[i] / 128;
      let y = v * canvas.height / 2;

      if(i == 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
      x = x + sliceWidth;
    }
    ctx.lineTo(canvas.width, canvas.height/2);
    ctx.stroke();
  }
}

function visualize2(synth) {
  const canvas = document.getElementById("visualizer2");
  const ctx = canvas.getContext("2d");

  synth.analyser2.fftSize = 256;

  let length = synth.analyser.frequencyBinCount;
  let data = new Uint8Array(length);
  let floaters = new Uint8Array(length);

  let backgroundColor = 'rgb(0, 0, 0)';

  return function draw() {

    requestAnimationFrame(draw);

    synth.analyser2.getByteFrequencyData(data)

    canvas.setAttribute("width", window.outerWidth);
    canvas.setAttribute("height", window.outerHeight);

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let barWidth = (canvas.width / length) * 15;
    let barHeight;
    let floaterHeight;
    let x = 0;
    let totalAmp = 0;
    for (let i = 3; i < length; i ++) {
      barHeight = data[i] * (canvas.height / 150);
      totalAmp += data[i];
      if (floaters[i] < data[i]) {
        floaters[i] = data[i];
      } else if (floaters[i] > 0){
        floaters[i] = floaters[i] - 3;
      }
      if (floaters[i] > 250) {
        floaters[i] = 0;
      }
      floaterHeight = floaters[i] * (canvas.height / 150) + 10;


      ctx.fillStyle = 'rgb(0,0,0)';
      ctx.fillRect(x, canvas.height - (barHeight/2), barWidth,barHeight);
      if (floaters[i] > 1) {
        ctx.fillStyle = 'rgba(255, 255, 255)';
        ctx.fillRect(x, canvas.height - (floaterHeight/2), barWidth, 10);
      }

      x += barWidth + 1;
    }

    //background color changes based on the total volume of the synth
    let red, green, blue
    totalAmp = (totalAmp / 20000) * 255;
    red = Math.round(totalAmp / 1.5);
    green = 0;
    blue = 0;
    if (totalAmp > 60) {
      green = Math.round(totalAmp - 60);
    }
    if (totalAmp > 150) {
      blue = Math.round(totalAmp - 150);
    }
    backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  }
}

/***/ }),

/***/ "./synthesizer/LFO.js":
/*!****************************!*\
  !*** ./synthesizer/LFO.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class LFO {
  constructor(ctx, synth) {
    this.lfo = ctx.createOscillator();
    this.lfo.frequency.value = 1;
    this.modAmmt = ctx.createGain();
    this.params = [];
    this.maxAmmt = 0;

    this.lfo.start();
    this.lfo.connect(this.modAmmt);
  }

  setParam(params, mode) {
    this.params = params;
    if (mode === "amp") {
      this.maxAmmt = .7;
    } else if (mode === "filter") {
      this.maxAmmt = 10000;
    } else if (mode === "freq") {
      this.maxAmmt = 25;
    } else {  
      this.maxAmmt = 0;
    }
    this.modAmmt.disconnect();
    this.modAmmt.gain.value = this.maxAmmt / 2;
    params.forEach( param => this.modAmmt.connect(param));
  }

  setOptions(options) {
    if (options.frequency) {
      this.lfo.frequency.value = options.frequency;
    }
    if (options.amplitude) {
      this.modAmmt.gain.value = this.maxAmmt * options.amplitude;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (LFO);

/***/ }),

/***/ "./synthesizer/effects.js":
/*!********************************!*\
  !*** ./synthesizer/effects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reverb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reverb */ "./synthesizer/reverb.js");

class Effects {

  constructor(ctx, filterBank) {
    this.context = ctx;
    this.input = new GainNode(ctx);
    filterBank.connect(this.input);

    this.premixer = { dry: new GainNode(ctx, {gain: 0}), wet: new GainNode(ctx, {gain: 1})};

    this.input.connect(this.premixer.dry);
    this.input.connect(this.premixer.wet);

    this.toggles = {reverb: true, distortion: true};
    this.output = new GainNode(ctx);

    this.distortion = new WaveShaperNode(ctx, {curve: this.makeDistortionCurve(50), oversample: "4x"});
    this.reverb = new _reverb__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, {roomSize: .9, dampening: 3000, wetGain: .8, dryGain: .2});

    this.premixer.wet.connect(this.distortion);
    this.distortion.connect(this.reverb.input);
    this.reverb.connect(this.output);
    this.premixer.dry.connect(this.output);

    this.toggleReverb = this.toggleReverb.bind(this);
    this.toggleDistortion = this.toggleDistortion.bind(this);
  }

  toggleReverb() {
    if (this.toggles.reverb) {
      this.reverb.disconnect();
      if (this.toggles.distortion) {
        this.distortion.disconnect();
        this.distortion.connect(this.output);
      } else {
        this.premixer.wet.disconnect();
        this.premixer.wet.connect(this.output);
      }
      this.toggles.reverb = false;
    } else {
      if (this.toggles.distortion) {
        this.distortion.disconnect();
        this.distortion.connect(this.reverb.input);
        this.reverb.connect(this.output);
      } else {
        this.premixer.wet.disconnect();
        this.premixer.wet.connect(this.reverb.input);
        this.reverb.connect(this.output);
      }
      this.toggles.reverb = true;
    }
  }

  toggleDistortion() {
    if (this.toggles.distortion) {
      this.distortion.disconnect();
      if (this.toggles.reverb) {
        this.premixer.wet.disconnect();
        this.premixer.wet.connect(this.reverb.input);
      } else {
        this.premixer.wet.disconnect();
        this.premixer.wet.connect(this.output);
      }
      this.toggles.distortion = false;
    } else {
      if (this.toggles.reverb) {
        this.premixer.wet.disconnect();
        this.premixer.wet.connect(this.distortion);
        this.distortion.connect(this.reverb.input);
      } else {
        this.premixer.wet.disconnect();
        this.premixer.wet.connect(this.distortion);
        this.distortion.connect(this.output);
      }
      this.toggles.distortion = true;
    }
  }

  setOptions(options) {
    if (options.distortion !== undefined) {
      this.distortion.curve = this.makeDistortionCurve(100 * options.distortion)
    }
    if (options.reverb !== undefined) {
      let reverbAmmt = this.reverb.roomSize;
      reverbAmmt.value = options.reverb / 1.01;
    }
    if (options.mix !== undefined) {
      this.premixer.wet.gain.value = options.mix;
      this.premixer.dry.gain.value = 1 - options.mix;
    }
  }

  makeDistortionCurve(amount) {
    const k = amount
    const numSamples = 4410;
    let curve = new Float32Array(numSamples);
    const degree = Math.PI / 180;
    let x;
    for(let i = 0; i < numSamples; i++) {
      x = i * 2 / numSamples - 1;
      curve[i] = ( 3 + k ) * x * 20 * degree / (Math.PI + k * Math.abs(x) );
    }
    return curve;
  }

  connect(connection) {
    this.output.connect(connection);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Effects);

/***/ }),

/***/ "./synthesizer/envelopes.js":
/*!**********************************!*\
  !*** ./synthesizer/envelopes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Envelopes {
  constructor(ctx, synth, premixer, filters) {
    this.context = ctx;
    this.synth = synth;

    this.filters = [filters.filter1.frequency, filters.filter2.frequency];
    this.ampOut = premixer.ampOut.gain;

    this.amp = {attack: .1, release: .1}
    this.filter = {attack: .1, release: .1}

    this.attack = this.attack.bind(this);
    this.release = this.release.bind(this);

    this.interval = null;
  }

  setAmpEnvelope(options) {
    Object.keys(options).forEach( (param) => {
      this.amp[param] = options[param];
    });
  }

  setFilterEnvelope(options) {
    Object.keys(options).forEach( (param) => {
      this.filter[param] = options[param];
    });
  }

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

  release() {
    let ampStepSize;
    if(this.amp.release <= 0) {
      ampStepSize = 0 - (this.ampOut.value);
    } else { 
      ampStepSize = 0 - (this.ampOut.value / (this.amp.release * 1000 / 10))
    }

    let filterStepSize;
    if(this.filter.attack <= 0) {
      filterStepSize = this.synth.startFreq1 - this.filters[0].value;
    } else {
      filterStepSize = (this.synth.startFreq1 - this.filters[0].value) / (this.filter.attack * 1000 / 10)
    }

    if(this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    }

    this.interval = setInterval(function() {
      this.decayInterval(ampStepSize, filterStepSize)
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

    // debugger;
    //Clear the interval if the attack is complete
    if (Math.abs(this.filters[0].value - this.synth.endFreq1) < 5 &&
        Math.abs(this.filters[1].value - this.synth.endFreq2) < 5 &&
        Math.abs(this.ampOut.value - 1) < .01) {
          clearInterval(this.interval);
          this.interval = null;
    }
  }

  decayInterval(ampStep, filterStep) {
    //Increment param values if needed
    if (this.filters[0].value > this.synth.startFreq1) {
      this.filters[0].value += filterStep;
    }
    if (this.filters[1].value > this.synth.startFreq2) {
      this.filters[1].value += filterStep;
    }
    if (this.ampOut.value > 0) {
      this.ampOut.value += ampStep;
    }

    // debugger;
    //Clear the interval if the attack is complete
    if (Math.abs(this.filters[0].value - this.synth.startFreq1) < 5 &&
        Math.abs(this.filters[1].value - this.synth.startFreq2) < 5 &&
        this.ampOut.value < .01) {
          clearInterval(this.interval);
          this.interval = null;
    }

  }
}

/* harmony default export */ __webpack_exports__["default"] = (Envelopes);

/***/ }),

/***/ "./synthesizer/filters.js":
/*!********************************!*\
  !*** ./synthesizer/filters.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class FilterBank {

  constructor(ctx) {
    this.context = ctx;
    
    this.filter1 = new BiquadFilterNode(ctx, {frequency: 400});
    this.filter2 = new BiquadFilterNode(ctx, {frequency: 400});
    this.base1 = 400;
    this.base = 400;

    this.filterBank = [this.filter1, this.filter2]

    this.wetOut = new GainNode(ctx, {gain: 0.5});
    this.dryOut = new GainNode(ctx, {gain:0});
    this.series = new GainNode(ctx, {gain: 0});
    this.parallel = new GainNode(ctx, {gain: 0.5})

    this.filter1.connect(this.parallel);
    this.parallel.connect(this.wetOut)
    this.filter2.connect(this.wetOut);

    this.filter1.connect(this.series);
    this.series.connect(this.filter2);
  }

  setFrequency(num, freq) {
    this.filterBank[num].frequency.value = freq;
  }

  setQ(num, ammt) {
    this.filterBank[num].Q.value = ammt;
  }

  setType(num, type){
    this.filterBank[num].type = type;
  }

  setEnvelope(amt){
    if (amt > 1) {
      this.envAmt = 1;
    } else if (amt < 0) {
      this.envAmt = 0;
    } else {
      this.envAmt = amt;
    }
  }

  setLevels(options){
    if (options.series !== undefined) {
      if (options.series > .5) {
        this.series.gain.value = .5;
      } else {
        this.series.gain.value = options.series;
      }
      this.parallel.gain.value = 0.5 - this.series.gain.value;
    }
    if (options.wet !== undefined) {
      if(options.wet > .5) {
        this.wetOut.gain.value = .5;
      } else {
        this.wetOut.gain.value = options.wet;
      }
      this.dryOut.gain.value = 0.5 - this.wetOut.gain.value
    }
  }

  connect(connection) {
    this.wetOut.connect(connection);
    this.dryOut.connect(connection);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FilterBank);

/***/ }),

/***/ "./synthesizer/keyboard_scale.js":
/*!***************************************!*\
  !*** ./synthesizer/keyboard_scale.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scaleToSemitones = {
  C1: -45,
  Cs1: -44,
  D1: -43,
  Ds1: -42,
  E1: -41,
  F1: -40,
  Fs1: -39,
  G1: -38,
  Gs1: -37,
  A1: -36,
  As1: -35,
  B1: -34,
  C2: -33,
  Cs2: -32,
  D2: -31,
  Ds2: -30,
  E2: -29,
  F2: -28,
  Fs2: -27,
  G2: -26,
  Gs2: -25,
  A2: -24,
  As2: -23,
  B2: -22,
  C3: -21,
  Cs3: -20,
  D3: -19,
  Ds3: -18,
  E3: -17,
  F3: -16,
  Fs3: -15,
  G3: -14,
  Gs3: -13,
  A3: -12,
  As3: -11,
  B3: -10,
  C4: -9,
  Cs4: -8,
  D4: -7,
  Ds4: -6,
  E4: -5,
  F4: -4,
  Fs4: -3,
  G4: -2,
  Gs4: -1,
  A4: 0,
  As4: 1,
  B4: 2,
  C5: 3,
  Cs5: 4,
  D5: 5,
  Ds5: 6,
  E5: 7,
  F5: 8,
  Fs5: 9,
  G5: 10,
  Gs5: 11,
  A5: 12,
  As5: 13,
  B5: 14,
  C6: 15,
  Cs6: 16,
  D6: 17,
  Ds6: 18,
  E6: 19,
  F6: 20,
  Fs6: 21,
  G6: 22,
  Gs6: 23,
  A6: 24,
  As6: 25,
  B6: 26,
  C7: 27,
  Cs7: 28,
  D7: 29,
  Ds7: 30,
  E7: 31,
  F7: 32,
  Fs7: 33,
  G7: 34,
  Gs7: 35,
  A7: 36,
  As7: 37,
  B7: 38,
  C8: 39,
  Cs8: 40
}

/* harmony default export */ __webpack_exports__["default"] = (scaleToSemitones);

/***/ }),

/***/ "./synthesizer/master_mixer.js":
/*!*************************************!*\
  !*** ./synthesizer/master_mixer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class MasterMixer {
  constructor(ctx, effects) {
    this.context = ctx;
    this.volume = new GainNode(ctx, {gain: .7});
    effects.connect(this.volume);
  }

  connect(connector) {
    this.volume.connect(connector);
  }

  setVolume(vol) {
    this.volume.gain.value = vol;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MasterMixer);

/***/ }),

/***/ "./synthesizer/oscillators.js":
/*!************************************!*\
  !*** ./synthesizer/oscillators.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Oscillator {

  constructor(options) {
    this.type = options.type;
    this.state = "stop";
    this.context = options.context;
    this.interval = 0;
    this.frequency = 440;
    this.semitone = Math.pow(2, 1/12);
    this.node = new OscillatorNode(this.context, {type: this.type});
    this.volumeNode = this.context.createGain();
    this.node.connect(this.volumeNode);
    this.endpoint = this.volumeNode;
    this.node.start();
  }

  setInterval(semitones) {
    this.interval = semitones;
    this.setFrequency(this.frequency);
  }

  setFrequency(freq) {
    this.frequency = freq;
    let frequency = freq * Math.pow(this.semitone, this.interval);
    this.node.frequency.setValueAtTime(frequency, this.context.currentTime);
  }

  setWave(form) {
    this.node.type = form;
  }

  connect(connection) {
    this.endpoint.connect(connection);
    this.endpoint = connection; 
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Oscillator);

/***/ }),

/***/ "./synthesizer/pre_mixer.js":
/*!**********************************!*\
  !*** ./synthesizer/pre_mixer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class PreMixer {

  constructor(ctx, oscillators) {

    this.compressor = ctx.createDynamicsCompressor();
    this.level1 = ctx.createGain();
    this.level2 = ctx.createGain();
    this.level3 = ctx.createGain();

    this.ampOut = new GainNode(ctx, {gain: 0});

    oscillators[0].connect(this.level1);
    oscillators[1].connect(this.level2);
    oscillators[2].connect(this.level3);

    this.level1.connect(this.compressor);
    this.level2.connect(this.compressor);
    this.level3.connect(this.compressor);

    this.out1 = ctx.createGain({gain: 0.5});
    this.out2 = ctx.createGain({gain: 0.5});
    
    this.compressor.connect(this.ampOut);

    this.ampOut.connect(this.out1);
    this.ampOut.connect(this.out2);
  }

  setLevels(options) {

    if (options.level1 !== undefined) {
      this.level1.gain.value = options.level1
    }

    if (options.level2 !== undefined) {
      this.level2.gain.value = options.level2
    }

    if (options.level3 !== undefined) {
      this.level3.gain.value = options.level3
    }
  }

  setOutput(out1Level) {
    if(out1Level > 1) {
      this.out1.gain.value = 1;
    } else {
      this.out1.gain.value = out1Level;
    }
    this.out2Level = 1 - this.out1Level;
  }

  connect(filters) {
    this.out1.connect(filters.filter1);
    this.out1.connect(filters.filter2);
    this.out2.connect(filters.dryOut);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PreMixer);

/***/ }),

/***/ "./synthesizer/reverb.js":
/*!*******************************!*\
  !*** ./synthesizer/reverb.js ***!
  \*******************************/
/*! exports provided: mergeParams, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeParams", function() { return mergeParams; });
// Implementation of Manfred Schoeder's Freeverb algorithmic reverb
// inspired by this article https://itnext.io/algorithmic-reverb-and-web-audio-api-e1ccec94621a
// Uses lowpass "comb" filters to simulate delay lines and allpass filters
// to simulate diffusion through the air

// First, define a composite node class to allow for multiple nodes to 
// be bundled together as one
class CompositeAudioNode {
  constructor(ctx, options) {
    this.context = ctx;
    this.input = ctx.createGain();
    this.output = this.context.createGain();
  }

  connect(connection) {
    this.output.connect(connection);
  }

  disconnect() {
    this.output.disconnect.apply(this.output, arguments);
  }
}

// Utility function for controlling multiple audio params as if they were one
// credit to https://gist.github.com/miselaytes-anton/7d795d6efcc7774b136c2b73dc38ed32

function mergeParams(params){
  const singleParam = params[0]
  const parameter = {};
  const audioNodeMethods = Object.getOwnPropertyNames(AudioParam.prototype)
  .filter(prop => typeof singleParam[prop] === 'function')
  
  audioNodeMethods.forEach(method => {
      parameter[method] = (...argums) => {
          const args = Array.prototype.slice.call(argums);
          params.forEach((param) => {
              singleParam[method].apply(param, args);
          })
          
      }
  })

  Object.defineProperties(parameter, {
      value: {
        get: function () {
          return singleParam.value
        },
        set: function (value) {
          params.forEach(param => {
              param.value = value
          })
        }
      }
    })

  return parameter;
}

class LowPassComb extends CompositeAudioNode {
  constructor(ctx, options) {
    super(ctx, options);
    const {delayTime, resonance: gainValue, dampening: frequency} = options;
    this.lowPass = new BiquadFilterNode(ctx, {type: 'lowpass', frequency, Q: -3.0102999566398125});
    this.delay = new DelayNode(ctx, { delayTime });
    this.gain = ctx.createGain();
    this.gain.gain.value = gainValue;

    this.input.connect(this.delay)
      .connect(this.lowPass)
      .connect(this.gain)
      .connect(this.input)
      .connect(this.output);
  }

  get resonance() {
    return this.gain.gain
  }

  get dampening() {
    return this.delay.delayTime
  }

  get delayTime() {
    return this.delay.delayTime;
  }
}

class Reverb extends CompositeAudioNode {
  constructor(ctx, options) {
    super(ctx, options);
    const {roomSize: resonance, dampening, wetGain, dryGain } = options;
    const SAMPLE_RATE = 44100;
    const COMB_FILTER_TUNINGS = [1557, 1617, 1491, 1422, 1277, 1356, 1188, 1116]
      .map(delayPerSecond => delayPerSecond / SAMPLE_RATE);
    const ALLPASS_FREQUENCIES = [225, 556, 441, 341];

    this.wet = ctx.createGain()
    this.wet.gain.setValueAtTime(wetGain, ctx.currentTime)
    this.dry = ctx.createGain()
    this.dry.gain.setValueAtTime(dryGain, ctx.currentTime)
    this.merger = ctx.createChannelMerger(2)
    this.splitter = ctx.createChannelSplitter(2)

    this.combFilters = COMB_FILTER_TUNINGS
      .map(delayTime => new LowPassComb(ctx, {dampening, resonance, delayTime}));
    const combLeft = this.combFilters.slice(0, 4);
    const combRight = this.combFilters.slice(4);
    this.allPassFilters = ALLPASS_FREQUENCIES
      .map(frequency => new BiquadFilterNode(ctx, {type: 'allpass', frequency}));
    this.input.connect(this.wet).connect(this.splitter);
    this.input.connect(this.dry).connect(this.output);

    combLeft.forEach( comb => {
      this.splitter.connect(comb.input, 0).connect(this.merger, 0, 0)
    });
    combRight.forEach( comb => {
      this.splitter.connect(comb.input, 1).connect(this.merger, 0, 1)
    });

    this.merger.connect(this.allPassFilters[0])
      .connect(this.allPassFilters[1])
      .connect(this.allPassFilters[2])
      .connect(this.allPassFilters[3])
      .connect(this.output);

    this.output.gain.value = .3;
  }

  get wetGain() {
    return this.wet.gain;
  }
  get dryGain() {
    return this.dry.gain;
  }
  get roomSize() {
    return mergeParams(this.combFilters.map(comb => comb.resonance));
  }
  get dampening() {
    return mergeParams(this.combFilters.map(comb => comb.dampening));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Reverb);

/***/ }),

/***/ "./synthesizer/synth.js":
/*!******************************!*\
  !*** ./synthesizer/synth.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _keyboard_scale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard_scale */ "./synthesizer/keyboard_scale.js");
/* harmony import */ var _oscillators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oscillators */ "./synthesizer/oscillators.js");
/* harmony import */ var _pre_mixer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pre_mixer */ "./synthesizer/pre_mixer.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters */ "./synthesizer/filters.js");
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./effects */ "./synthesizer/effects.js");
/* harmony import */ var _envelopes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./envelopes */ "./synthesizer/envelopes.js");
/* harmony import */ var _master_mixer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./master_mixer */ "./synthesizer/master_mixer.js");
/* harmony import */ var _LFO__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LFO */ "./synthesizer/LFO.js");









class Synth {

  constructor(ctx) {
    this.state = "pause";
    this.currFreq = 440;
    this.oscilloscopeVals = {};

    this.context = ctx;
    this.semitone = Math.pow(2, 1/12);
    this.octave = 3;

    let osc1 = new _oscillators__WEBPACK_IMPORTED_MODULE_1__["default"]({type: "sine", context: ctx});
    let osc2 = new _oscillators__WEBPACK_IMPORTED_MODULE_1__["default"]({type: "square", context: ctx});
    let osc3 = new _oscillators__WEBPACK_IMPORTED_MODULE_1__["default"]({type: "sawtooth", context: ctx});
    this.oscBank = [osc1, osc2, osc3]
    
    this.preMixer = new _pre_mixer__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, this.oscBank);
    this.filters = new _filters__WEBPACK_IMPORTED_MODULE_3__["default"](ctx);

    // Store start and end filter frequencies for use by the envelopes
    this.envAmt = 1
    this.startFreq1 = 400;
    this.endFreq1 = this.startFreq1 + (1000 * this.envAmt);
    this.startFreq2 = 400;
    this.endFreq2 = this.startFreq2 + (1000 * this.envAmt);

    this.envelopes = new _envelopes__WEBPACK_IMPORTED_MODULE_5__["default"](ctx, this, this.preMixer, this.filters);
    this.preMixer.connect(this.filters);

    this.effects = new _effects__WEBPACK_IMPORTED_MODULE_4__["default"](ctx, this.filters);
    this.analyser = ctx.createAnalyser();
    this.analyser2 = ctx.createAnalyser();
    this.master = new _master_mixer__WEBPACK_IMPORTED_MODULE_6__["default"](ctx, this.effects);

    this.master.connect(this.analyser);
    this.master.connect(this.analyser2);
    this.analyser.connect(ctx.destination);

    this.stop = this.stop.bind(this);

    this.lfo = new _LFO__WEBPACK_IMPORTED_MODULE_7__["default"](ctx, this);

    this.LFO_PARAMS = {
      filter: [this.filters.filter1.frequency, this.filters.filter2.frequency], 
      amp: [this.master.volume.gain], 
      freq: this.oscBank.map( osc => osc.node.frequency),
      none: []
    }

    this.toggleEffect = this.toggleEffect.bind(this);
  }

  setLfo(options) {
    if (options.mode) {
      this.lfo.setParam(this.LFO_PARAMS[options.mode], options.mode);
    }
    if (options.params) {
      this.lfo.setOptions(options.params);
    }
  }

  preMix(options) {
    this.preMixer.setLevels(options);
  }

  setMasterVolume(vol) {
    this.master.setVolume(vol)
  }

  setFilterOptions(options) {
    if(options.envAmt !== undefined) {
      this.filters.setEnvelope(options.envAmt);
    }

    if (options.filter1 !== undefined) {
      let f1options = options.filter1;
      if(f1options.frequency !== undefined) {
        this.startFreq1 = parseInt(f1options.frequency);
        this.endFreq1 = this.startFreq1 + (1000 * this.envAmt);
        if (this.state === "play") {
          this.filters.setFrequency(1, this.endFreq1);
        } else {
          this.filters.setFrequency(1, this.startFreq1);
        }
      }
      if(f1options.Q !== undefined ) {
        this.filters.setQ(0, f1options.Q)
      }
      if (f1options.type !== undefined) {
        this.filters.setType(0, f1options.type);
      }
    }

    if (options.filter2 !== undefined) {
      let f2options = options.filter2;
      if(f2options.frequency !== undefined) {
        this.startFreq2 = parseInt(f2options.frequency);
        this.endFreq2 = this.startFreq2 + (1000 * this.envAmt);
        if (this.state === "play") {
          this.filters.setFrequency(1, this.endFreq2);
        } else {
          this.filters.setFrequency(1, this.startFreq2)
        }
      }
      if(f2options.Q !== undefined ) {
        this.filters.setQ(1, f2options.Q)
      }
      if (f2options.type !== undefined) {
        this.filters.setType(1, f2options.type);
      }
    }

  }

  setFilterLevels(options) {
    this.filters.setLevels(options);
  }

  setEnvelope(options) {
    if (options.type === "amp") {
      this.envelopes.setAmpEnvelope(options);
    } else if (options.type === "filter") {
      this.envelopes.setFilterEnvelope(options);
    } else if (options.type === "filterAmmt") {
      this.setEnvAmmt(options.ammt);
    }
  }

  setEnvAmmt(ammt) {
    this.envAmmt = ammt;
    this.endFreq1 = this.startFreq1 + (1000 * this.envAmt);
    this.endFreq2 = this.startFreq2 + (1000 * this.envAmt);
  }

  playFreq(freq) {
    this.state = "play";
    this.currFreq = freq;
    if (this.context.state === "suspended") {
      this.context.resume();
    }
    this.oscBank.forEach( function(oscillator) {
      oscillator.setFrequency(freq);
    })

    this.envelopes.attack();
  }

  playNote(note) {
    const freq = 440 * Math.pow(this.semitone, _keyboard_scale__WEBPACK_IMPORTED_MODULE_0__["default"][note]);
    this.playFreq(freq);
  }

  stop() {
    this.state = "pause"
    this.envelopes.release();
  }

  toggleEffect(name) {
    if (name === "distortion") {
      this.effects.toggleDistortion();
    } else {
      this.effects.toggleReverb();
    }
  }

  setEffectsOptions(options) {
    this.effects.setOptions(options);
  }

  setWaveform(options) {
    this.oscBank[options.index].setWave(options.type);
  }

  setOscInterval(options) {
    this.oscBank[options.index].setInterval(options.semitones);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Synth);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map