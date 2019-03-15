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

export default Keyboard;