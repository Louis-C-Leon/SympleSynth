// All visualization code inspired by 
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
export function visualize(synth) {

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
    ctx.strokeStyle = 'rgb(50, 255, 50)';
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

export function visualize2() {
  const canvas = document.getElementById("visualizer2");
  const ctx = canvas.getContext("2d");

  synth.analyser2.fftSize = 256;

  let length = synth.analyser.frequencyBinCount;
  let data = new Uint8Array(length);

  let backgroundColor = 'rgb(0, 0, 0)';

  return function draw() {
    let visual = requestAnimationFrame(draw);
    synth.analyser2.getByteFrequencyData(data)

    canvas.setAttribute("width", window.outerWidth);
    canvas.setAttribute("height", window.outerHeight);

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let barWidth = (canvas.width / length) * 15;
    let barHeight;
    let x = 0;
    let totalAmp = 0;
    for (let i = 0; i < length; i ++) {
      barHeight = data[i] * (canvas.height / 150);
      totalAmp += data[i];

      ctx.fillStyle = 'rgb(0,0,0)';
      ctx.fillRect(x,canvas.height-barHeight/2,barWidth,barHeight);

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