// All visualization code inspired by 
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API

function visualize(synth) {

  const canvas = document.getElementById("visualizer");
  const ctx = canvas.getContext("2d");

  synth.analyzer.fftSize = 2048;

  let length = synth.analyzer.frequencyBinCount;
  let data = new Uint8Array(length);

  return function draw() { 
    length = synth.analyzer.frequencyBinCount;
    data = new Uint8Array(length);
    
    let visual = requestAnimationFrame(draw);

    synth.analyzer.getByteTimeDomainData(data);

    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(0,0, canvas.width, canvas.height);

    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgb(50, 255, 50)';
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

export default visualize;