// All visualization code inspired by 
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
export function visualize(synth) {

  const canvas = document.getElementById("visualizer");
  const ctx = canvas.getContext("2d");

  synth.analyzer.fftSize = 2048;

  let length = synth.analyzer.frequencyBinCount;
  let data = new Uint8Array(length);

  return function draw() {
    requestAnimationFrame(draw);

    length = synth.analyzer.frequencyBinCount;
    data = new Uint8Array(length);
    synth.analyzer.getByteTimeDomainData(data);
    const freq = synth.currFreq;

    

    let trough = false;
    let peak = false;
    let start = 0;
    let end = 0;
    for (let i = 0; i < length; i++) {
      if (data[i] < 128 && trough === false) {
        trough = true;
      } else if (trough === true && data[i] > 128 && start === 0) {
        start = i;
        data = data.slice(i);
        break;
      }
      // } else if (i > 1000 && data[i] > 128 ) {
      //   peak = true;
      // } else if (peak === true && data[i] < 128) {
      //   end = i;
      //   data = data.slice(0, end);
      //   break;
      // }
    }

    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(0,0, canvas.width, canvas.height);

    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgb(50, 255, 50)';
    ctx.beginPath();

    let sliceWidth = canvas.width / 800;
    let x = 0;

    for (let i = 0; i < 800; i++) {
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

export function visualize2() {
  const canvas = document.getElementById("visualizer2");
  const ctx = canvas.getContext("2d");

  return function draw() {
    canvas.setAttribute("width", window.outerWidth);
    canvas.setAttribute("height", window.innerHeight);


    let visual = requestAnimationFrame(draw);

  }
}