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


const Ctx = window.AudioContext || window.webkitAudioContext;
const currContext = new Ctx();
const synthesizer = new _synthesizer_synth__WEBPACK_IMPORTED_MODULE_0__["default"](currContext);
const waveforms = ["sine", "square", "triangle", "sawtooth"]
let currWaveform1 = 0;
let currWaveform2 = 0;
let currWaveform3 = 0;



document.addEventListener("DOMContentLoaded", () => {
  const play = document.getElementById("synthPlay");

  const toggleOsc1 = document.getElementById("toggleOsc1");
  const toggleOsc2 = document.getElementById("toggleOsc2");
  const toggleOsc3 = document.getElementById("toggleOsc3");

  const level1 = document.getElementById("level1");
  const level2 = document.getElementById("level2");
  const level3 = document.getElementById("level3");

  level1.addEventListener("change", (e) => {
    synthesizer.preMix({level1: e.target.value})
  })

  level2.addEventListener("change", (e) => {
    synthesizer.preMix({level2: e.target.value})
  })

  level3.addEventListener("change", (e) => {
    synthesizer.preMix({level3: e.target.value})
  })

  play.addEventListener("click", () => {
    if (synthesizer.state === "pause") {
      synthesizer.playNote("E3");
    } else {
      synthesizer.stop()
    }
  });

  toggleOsc1.addEventListener("click", () => {
    if (currWaveform1 > 2) {
      currWaveform1 = 0;
    } else {
      currWaveform1 = currWaveform1 + 1
    }
    synthesizer.setWaveform({index: 1, type: waveforms[currWaveform1]})
  })
  toggleOsc2.addEventListener("click", () => {
    if (currWaveform2 > 2) {
      currWaveform2 = 0;
    } else {
      currWaveform2 = currWaveform2 + 1
    }
    synthesizer.setWaveform({index: 2, type: waveforms[currWaveform2]})
  })
  toggleOsc3.addEventListener("click", () => {
    if (currWaveform3 > 2) {
      currWaveform3 = 0;
    } else {
      currWaveform3 = currWaveform3 + 1
    }
    synthesizer.setWaveform({index: 1, type: waveforms[currWaveform3]})
  })
});

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
    this.volumeNode.gain.value = 0;
    this.node.connect(this.volumeNode);
    this.endpoint = this.volumeNode;
    this.node.start();
  }

  play() {
    this.volumeNode.gain.value = 1;
    this.state = "play";
  }

  pause() {
    this.volumeNode.gain.value = 0;
    this.state = "stop";
  }

  destroy() {
    this.node.stop();
    this.node.disconnect();
    this.volumeNode.disconnect();
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

    oscillators[0].connect(this.level1);
    oscillators[1].connect(this.level2);
    oscillators[2].connect(this.level3);

    this.level1.connect(this.compressor);
    this.level2.connect(this.compressor);
    this.level3.connect(this.compressor);
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

  connect(connection) {
    this.compressor.connect(connection);
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




class Synth {

  constructor(ctx) {
    this.state = "pause";

    this.context = ctx;
    this.masterFreq = 440;
    this.semitone = Math.pow(2, 1/12);

    let osc1 = new _oscillators__WEBPACK_IMPORTED_MODULE_1__["default"]({type: "sine", context: ctx});
    let osc2 = new _oscillators__WEBPACK_IMPORTED_MODULE_1__["default"]({type: "square", context: ctx});
    let osc3 = new _oscillators__WEBPACK_IMPORTED_MODULE_1__["default"]({type: "sawtooth", context: ctx});
    this.oscBank = [osc1, osc2, osc3]
    
    this.preMixer = new _pre_mixer__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, this.oscBank)
    this.preMixer.connect(ctx.destination);

  }

  preMix(options) {
    this.preMixer.setLevels(options);
  }

  playFreq(freq) {
    this.state = "play";
    if (this.context.state === "suspended") {
      this.context.resume();
    }
    this.oscBank.forEach( function(oscillator) {
      oscillator.setFrequency(freq);
      oscillator.play();
    })
  }

  playNote(note) {
    const freq = 440 * Math.pow(this.semitone, _keyboard_scale__WEBPACK_IMPORTED_MODULE_0__["default"][note]);
    this.playFreq(freq);
  }

  stop() {
    this.state = "pause"
    this.oscBank.forEach( function(oscillator) {
      oscillator.pause()
    })
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