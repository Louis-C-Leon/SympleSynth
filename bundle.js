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
window.context = currContext;
const synthesizer = new _synthesizer_synth__WEBPACK_IMPORTED_MODULE_0__["default"](currContext);
window.synth = synthesizer;

document.addEventListener("DOMContentLoaded", () => {
  const keyboard = new _GUI_keyboard__WEBPACK_IMPORTED_MODULE_1__["default"](synthesizer);
  window.keyboard = keyboard;
  const draw = Object(_GUI_visualizer__WEBPACK_IMPORTED_MODULE_2__["default"])(synthesizer);


  draw();
});

/***/ }),

/***/ "./GUI/keyboard.js":
/*!*************************!*\
  !*** ./GUI/keyboard.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Keyboard {
  constructor(synth) {
    this.synth = synth;
    this.playNote = this.playNote.bind(this);
    this.setupEventListeners();
  }

  setupEventListeners() {
    const C = document.getElementById("C")
    C.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      let func = this.playNote("C");
      func();
    })
    C.addEventListener("mouseup", this.synth.stop)

    const Cs = document.getElementById("Cs")
    Cs.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      let func = this.playNote("Cs");
      func();
    })
    Cs.addEventListener("mouseup", this.synth.stop)

    const D = document.getElementById("D")
    D.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      let func = this.playNote("D");
      func();
    })
    D.addEventListener("mouseup", this.synth.stop)

    const Ds = document.getElementById("Ds")
    Ds.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      let func = this.playNote("Ds");
      func();
    })
    Ds.addEventListener("mouseup", this.synth.stop)

    const E = document.getElementById("E")
    E.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      let func = this.playNote("E");
      func();
    })
    E.addEventListener("mouseup", this.synth.stop)

    const F = document.getElementById("F")
    F.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      let func = this.playNote("F");
      func();
    })
    F.addEventListener("mouseup", this.synth.stop)

    const Fs = document.getElementById("Fs")
    Fs.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      let func = this.playNote("Fs");
      func();
    })
    Fs.addEventListener("mouseup", this.synth.stop)

    const G = document.getElementById("G")
    G.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      let func = this.playNote("G");
      func();
    })
    G.addEventListener("mouseup", this.synth.stop)

    const Gs = document.getElementById("Gs")
    Gs.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      let func = this.playNote("Gs");
      func();
    })
    Gs.addEventListener("mouseup", this.synth.stop);

    const A = document.getElementById("A")
    A.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      let func = this.playNote("A");
      func();
    })
    A.addEventListener("mouseup", this.synth.stop)

    const As = document.getElementById("As")
    As.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      let func = this.playNote("As");
      func();
    })
    As.addEventListener("mouseup", this.synth.stop)

    const B = document.getElementById("B")
    B.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      let func = this.playNote("B");
      func();
    })
    B.addEventListener("mouseup", this.synth.stop)

    document.addEventListener("keydown", (e) => {
      const key = e.key.toLowerCase();
      if (key === "a") {
        let func = this.playNote("C")
        func();
      } else if (key === "w") {
        let func = this.playNote("Cs")
        func();
      } else if (key === "s") {
        let func = this.playNote("D")
        func();
      } else if (key === "e") {
        let func = this.playNote("Ds")
        func();
      } else if (key === "d") {
        let func = this.playNote("E")
        func();
      } else if (key === "f") {
        let func = this.playNote("F")
        func();
      } else if (key === "t") {
        let func = this.playNote("Fs")
        func();
      } else if (key === "g") {
        let func = this.playNote("G")
        func();
      } else if (key === "y") {
        let func = this.playNote("Gs")
        func();
      } else if (key === "h") {
        let func = this.playNote("A")
        func();
      } else if (key === "u") {
        let func = this.playNote("As")
        func();
      } else if (key === "j") {
        let func = this.playNote("B")
        func();
      }
    }); 

    document.addEventListener("keyup", this.synth.stop)
  }

  playNote(note) {
    let notePlay = note + this.synth.octave;
    return(() => {
      this.synth.playNote(notePlay);
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Keyboard);

/***/ }),

/***/ "./GUI/visualizer.js":
/*!***************************!*\
  !*** ./GUI/visualizer.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function visualize(synth) {

  const canvas = document.getElementById("visualizer");
  const ctx = canvas.getContext("2d");

  synth.analyzer.fftSize = 2048;

  const length = synth.analyzer.frequencyBinCount;
  const data = new Uint8Array(length);

  return function draw() { 
    let visual = requestAnimationFrame(draw);

    synth.analyzer.getByteTimeDomainData(data);

    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0,0, canvas.width, canvas.height);

    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgb(100, 255, 100)';
    ctx.beginPath();

    let sliceWidth = canvas.width / length;
    let x = 0;

    for (let i = 0; i < length; i++) {
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

/* harmony default export */ __webpack_exports__["default"] = (visualize);

/***/ }),

/***/ "./synthesizer/effects.js":
/*!********************************!*\
  !*** ./synthesizer/effects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Effects {

  constructor(ctx, filterBank) {
    this.context = ctx;
    this.premixer = { dry: new GainNode(ctx, {gain: .5}), wet: new GainNode(ctx, {gain: .5})};

    //connect filters to master dry/wet mix
    filterBank.connect(this.premixer.dry);
    filterBank.connect(this.premixer.wet);

    this.distortion = new WaveShaperNode(ctx, {curve: this.makeDistortionCurve(0), oversample: "4x"});
    this.reverb = new ConvolverNode(ctx);

    this.premixer.wet.connect(this.distortion);
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
    this.distortion.connect(connection);
    this.premixer.dry.connect(connection);
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
    this.filterAmt = 1.6;
    this.ampOut = premixer.ampOut.gain;

    this.amp = {attack: .2, release: .2}
    this.filter = {attack: .6, release: .2}

    this.attack = this.attack.bind(this);
    this.release = this.release.bind(this);

    this.filterSustain = null;
    this.filterOrigin = this.synth.filterFreqs[0];

    this.stepInterval = null;
    this.checkInterval = null;
  }

  setAmpEnvelope(options) {
    Object.keys(options).forEach( (param) => {
      this.amp[param] = options.param;
    });
  }

  setFilterEnvelope(options) {
    Object.keys(options).forEach( (param) => {
      this.amp[param] = options.param;
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
      filterStepSize = 1000 * this.filterAmt
    } else {
      filterStepSize = (1000 * this.filterAmt) / (this.filter.attack * 1000 / 10)
    }

    let filterTarget;
    if (this.filterSustain === null) {
      this.filterOrigin = this.synth.filterFreqs[0]
      filterTarget = this.filterOrigin + (800 * this.filterAmt);
      this.filterSustain = filterTarget;
    } else {
      filterTarget = this.filterSustain;
    }

    if (this.stepInterval !== null) {
      clearInterval(this.stepInterval);
      this.stepInterval = null;
    }
    if (this.checkInterval !== null) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }

    console.log(this.filterSustain);

    this.stepInterval = setInterval(function(){
      this.step(ampStepSize, filterStepSize, filterTarget, 1)}.bind(this), 10);
    
    this.checkInterval = setInterval(function(){
      this.check(1, filterTarget, "play")}.bind(this), 10);
  }

  release() {
      let ampStepSize;
      if(this.amp.release <= 0) {
        ampStepSize = 0 - (this.ampOut.value);
      } else { 
        ampStepSize = 0 - (this.ampOut.value / (this.amp.release * 1000 / 5))
      }

      let filterStepSize;
      if(this.filter.attack <= 0) {
        filterStepSize = this.filterOrigin - this.filters[0].value
      } else {
        filterStepSize = (this.filterOrigin - this.filters[0].value) / (this.filter.attack * 1000 / 5)
      }

      const filterTarget = this.filterOrigin;

      if (this.stepInterval !== null) {
        clearInterval(this.stepInterval);
        this.stepInterval = null;
      }
      if (this.checkInterval !== null) {
        clearInterval(this.checkInterval);
        this.checkInterval = null;
      }

      console.log(this.filterOrigin);
      this.stepInterval = setInterval(function(){
        this.step(ampStepSize, filterStepSize, filterTarget, 0)}.bind(this), 10);

      this.checkInterval = setInterval(function(){
        this.check(0, filterTarget, "pause")}.bind(this), 10);
  }

  step(ampStep, filterStep, filter1Target, ampTarget) {
    if (Math.abs(this.ampOut.value - ampTarget) > .001) {
      this.ampOut.value = this.ampOut.value + ampStep;
    }
    if (Math.abs(this.filters[0].value - filter1Target) > 5) {
      this.filters[0].value = this.filters[0].value + filterStep;
      this.filters[1].value = this.filters[1].value + filterStep;
    }
  }

  check(ampTarget, filter1Target, state) {
    if((Math.abs(this.ampOut.value - ampTarget) <= .001 &&
      Math.abs(this.filters[0].value - filter1Target) <= 5) ) {
        console.log("clearing!")
        clearInterval(this.stepInterval);
        clearInterval(this.checkInterval);
        this.stepInterval = null;
        this.clearInterval = null;

        this.filterOrigin = null;
        this.filterSustain = null;
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

    this.out1 = new GainNode(ctx, {gain: 0.5});
    this.out2 = new GainNode(ctx, {gain:0.5});
    this.series = new GainNode(ctx, {gain: 0});

    this.filter1.connect(this.out1);
    this.filter2.connect(this.out2);

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
    if (options.out1 !== undefined) {
      options.out1 > .5 ? this.out1.gain.value = .5 : this.out1.gain.value = options.out1;
    }
    if (options.series !== undefined) {
      if (options.series > .5) {
        this.series.gain.value = .5;
      } else {
        this.series.gain.value = options.series;
      }
      if (this.out1.gain.value + this.series.gain.value > .5) {
        this.out1.gain.value = .5 - this.series.gain.value;
      }
    }
    if (options.out2 !== undefined) {
      options.out2 > .5 ? this.out2.gain.value = .5 + this.series.gain.value : this.out2.gain.value = options.out2 + this.series.gain.value;
    }
  }

  connect(connection) {
    this.out2.connect(connection);
    this.out1.connect(connection);
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
}

/* harmony default export */ __webpack_exports__["default"] = (scaleToSemitones);

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
    this.out2.connect(filters.filter2);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PreMixer);

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







class Synth {

  constructor(ctx) {
    this.state = "pause";

    this.context = ctx;
    this.masterFreq = 440;
    this.semitone = Math.pow(2, 1/12);
    this.octave = 3;

    let osc1 = new _oscillators__WEBPACK_IMPORTED_MODULE_1__["default"]({type: "sine", context: ctx});
    let osc2 = new _oscillators__WEBPACK_IMPORTED_MODULE_1__["default"]({type: "square", context: ctx});
    let osc3 = new _oscillators__WEBPACK_IMPORTED_MODULE_1__["default"]({type: "sawtooth", context: ctx});
    this.oscBank = [osc1, osc2, osc3]
    
    this.preMixer = new _pre_mixer__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, this.oscBank);
    this.filters = new _filters__WEBPACK_IMPORTED_MODULE_3__["default"](ctx);
    this.filterFreqs = [this.filters.filter1.frequency.value, this.filters.filter2.frequency.value];
    
    this.envelopes = new _envelopes__WEBPACK_IMPORTED_MODULE_5__["default"](ctx, this, this.preMixer, this.filters);
    this.preMixer.connect(this.filters);

    this.effects = new _effects__WEBPACK_IMPORTED_MODULE_4__["default"](ctx, this.filters);
    this.analyzer = ctx.createAnalyser();

    this.effects.connect(this.analyzer);
    this.analyzer.connect(ctx.destination);

    this.stop = this.stop.bind(this);
  }

  preMix(options) {
    this.preMixer.setLevels(options);
  }

  setFilterOptions(options) {
    if(options.envAmt !== undefined) {
      this.filters.setEnvelope(options.envAmt);
    }

    if (options.filter1 !== undefined) {
      let f1options = options.filter1;
      if(f1options.frequency !== undefined) {
        this.filterFreqs[0] = f1options.frequency
        this.filters.setFrequency(0, f1options.frequency);
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
        this.filterFreqs[1] = f2options.frequency
        this.filters.setFrequency(1, f2options.frequency);
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

  playFreq(freq) {
    this.state = "play";
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