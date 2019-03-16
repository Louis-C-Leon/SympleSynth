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

export default visualize;