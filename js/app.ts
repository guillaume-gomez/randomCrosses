const WidthCross = 10;
const AreaSize = 25;

function getRandomColor() : string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomArbitrary(min : number, max : number) :number {
  return Math.random() * (max - min) + min;
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
  context.beginPath();
  context.moveTo(x,y + WidthCross/2);
  context.lineTo(x + WidthCross, y + WidthCross/2);

  context.moveTo(x + WidthCross/2 ,y);
  context.lineTo(x + WidthCross/2, y + WidthCross);

  context.stroke();
}

window.addEventListener("load", function(event) {
  let canvas = getCanvas();
  let context = getContext(canvas);
  setBackgroundColor(canvas);
  for(let _x = 0; _x < canvas.width; _x += AreaSize) {
    for(let _y = 0; _y < canvas.height; _y += AreaSize) {
      if(Math.random() >= 0.9) {
        const x = getRandomArbitrary(_x, _x + AreaSize - WidthCross/2);
        const y = getRandomArbitrary(_y, _y + AreaSize + WidthCross/2);
        createCross(context, x, y);
      }
    }
  }
});