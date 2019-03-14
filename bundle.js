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

var Ctx = window.AudioContext || window.webkitAudioContext;
var currContext = new Ctx();
var synthesizer = new _synthesizer_synth__WEBPACK_IMPORTED_MODULE_0__["default"](currContext);
document.addEventListener("DOMContentLoaded", function () {
  var play = document.getElementById("synthPlay");
  var toggle = document.getElementById("toggleOsc");
  play.addEventListener("click", function () {
    return synthesizer.playNote(200);
  });
  toggle.addEventListener("click", function () {
    for (var i = 0; i < 3; i++) {
      synthesizer.setWaveform({
        index: i,
        type: "sine"
      });
    }
  });
});

/***/ }),

/***/ "./synthesizer/oscillators.js":
/*!************************************!*\
  !*** ./synthesizer/oscillators.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Oscillator =
/*#__PURE__*/
function () {
  function Oscillator(options) {
    _classCallCheck(this, Oscillator);

    this.type = options.type;
    this.frequency = options.frequency || 440;
    this.state = "stop";
    this.context = options.context;
    this.node = new OscillatorNode(this.context, {
      type: this.type,
      frequency: this.frequency
    });
    this.volumeNode = this.context.createGain();
    this.volumeNode.gain.value = 0;
    this.node.connect(this.volumeNode);
    this.endpoint = this.volumeNode;
    this.node.start();
  }

  _createClass(Oscillator, [{
    key: "play",
    value: function play() {
      this.volumeNode.gain.value = 1;
      this.state = "play";
    }
  }, {
    key: "pause",
    value: function pause() {
      his.volumeNode.gain.value = 0;
      this.state = "stop";
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.node.stop();
      this.node.disconnect();
      this.volumeNode.disconnect();
    }
  }, {
    key: "setFrequency",
    value: function setFrequency(freq) {
      this.frequency = freq;

      if (this.node !== null) {
        this.node.frequency.setValueAtTime(freq, this.context.currentTime);
      }
    }
  }, {
    key: "setWave",
    value: function setWave(form) {
      this.node.type = form;
    }
  }, {
    key: "connect",
    value: function connect(connection) {
      this.endpoint.connect(connection);
      this.endpoint = connection;
    }
  }]);

  return Oscillator;
}();

/* harmony default export */ __webpack_exports__["default"] = (Oscillator);

/***/ }),

/***/ "./synthesizer/synth.js":
/*!******************************!*\
  !*** ./synthesizer/synth.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _oscillators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oscillators */ "./synthesizer/oscillators.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Synth =
/*#__PURE__*/
function () {
  function Synth(ctx) {
    _classCallCheck(this, Synth);

    this.context = ctx;
    var osc1 = new _oscillators__WEBPACK_IMPORTED_MODULE_0__["default"]({
      type: "sine",
      context: ctx,
      connections: []
    });
    var osc2 = new _oscillators__WEBPACK_IMPORTED_MODULE_0__["default"]({
      type: "square",
      context: ctx,
      connections: []
    });
    var osc3 = new _oscillators__WEBPACK_IMPORTED_MODULE_0__["default"]({
      type: "sawtooth",
      context: ctx,
      connections: []
    });
    this.oscBank = [osc1, osc2, osc3];
    this.oscBank.forEach(function (oscillator) {
      oscillator.connect(ctx.destination);
    });
  }

  _createClass(Synth, [{
    key: "playNote",
    value: function playNote(freq) {
      if (this.context.state === "suspended") {
        this.context.resume();
      }

      this.oscBank.forEach(function (oscillator) {
        oscillator.setFrequency(freq);
        oscillator.play();
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      this.oscBank.forEach(function (oscillator) {
        oscillator.pause();
      });
    }
  }, {
    key: "setWaveform",
    value: function setWaveform(options) {
      this.oscBank[options.index].setWave(options.type);
    }
  }]);

  return Synth;
}();

/* harmony default export */ __webpack_exports__["default"] = (Synth);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map