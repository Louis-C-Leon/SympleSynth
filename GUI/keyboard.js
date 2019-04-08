import setupOscControls from './osc_controls';
import setupFilterControls from './filter_controls';
import EnvelopeControls from './envelope_controls';
import { setupEffectsControls } from './effect_controls';
import setupMouseoverText from './mouseover_text';
import LfoControls from './lfo_controls';
class Keyboard {
  constructor(synth) {
    this.synth = synth;
    this.playNote = this.playNote.bind(this);
    this.setupEventListeners();
    this.envelopeControls = new EnvelopeControls(synth);
    this.lfoControls = new LfoControls(synth);
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

    setupOscControls(this.synth);
    setupFilterControls(this.synth);
    setupEffectsControls(this.synth);
    setupMouseoverText();
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

export default Keyboard;