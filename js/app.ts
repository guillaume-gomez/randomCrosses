function getRandomColor() : string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function setBackgroundColor() : void {
  let canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if(!canvas) {
    return;
  }

  let ctx = canvas.getContext("2d");
  if(!ctx) {
    return
  }
  ctx.fillStyle = getRandomColor();
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener("load", function(event) {
  setBackgroundColor();
});