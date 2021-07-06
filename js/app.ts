function getRandomColor() : string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function setBackgroundColor(canvas: HTMLCanvasElement) : void {
  let ctx = getContext(canvas);
  ctx.fillStyle = getRandomColor();
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function getCanvas() : HTMLCanvasElement {
  let canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if(!canvas) {
    throw "cannot find the canvas in the page";
  }
  return canvas;
}

function getContext(canvas: HTMLCanvasElement) : CanvasRenderingContext2D {
  let context = canvas.getContext("2d");
  if(!context) {
    throw "cannot find the context in the page";
  }
  return context;
}

function createCross(context: CanvasRenderingContext2D, x: number, y: number) : void {
  const widthCross = 10;
  context.beginPath();
  context.moveTo(x,y + widthCross/2);
  context.lineTo(x + widthCross, y + widthCross/2);

  context.moveTo(x + widthCross/2 ,y);
  context.lineTo(x + widthCross/2, y + widthCross);

  context.stroke();
}

window.addEventListener("load", function(event) {
  let canvas = getCanvas();
  let context = getContext(canvas);
  setBackgroundColor(canvas);
  for(let i = 0; i < 50; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    createCross(context, x, y);
  }
});