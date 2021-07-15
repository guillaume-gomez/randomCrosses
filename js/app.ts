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

function setBackgroundColor(canvas: HTMLCanvasElement, backgroundColor: string) : void {
  let ctx = getContext(canvas);
  ctx.fillStyle = backgroundColor; //getRandomColor();
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

function createCross(context: CanvasRenderingContext2D, widthCross: number, x: number, y: number, angle: number) : void {
  context.save();
  context.rotate(angle);

  context.beginPath();
  context.moveTo(x,y + widthCross/2);
  context.lineTo(x + widthCross, y + widthCross/2);

  context.moveTo(x + widthCross/2 ,y);
  context.lineTo(x + widthCross/2, y + widthCross);

  context.stroke();

  context.restore();
}

function draw(widthCross: number, lineWidth: number, areaSize: number, percentageAppears: number, angle: number, backgroundColor: string) {
  let canvas = getCanvas();
  let context = getContext(canvas);
  context.canvas.width  = window.innerWidth;
  context.canvas.height = window.innerHeight;
  context.lineWidth = lineWidth;

  context.clearRect(0, 0, canvas.width, canvas.height);
  setBackgroundColor(canvas, backgroundColor);
  for(let _x = 0; _x < canvas.width; _x += areaSize) {
    for(let _y = 0; _y < canvas.height; _y += areaSize) {
      if(Math.random() >= (percentageAppears / 100)) {
        const x = getRandomArbitrary(_x, _x + areaSize - widthCross);
        const y = getRandomArbitrary(_y, _y + areaSize - widthCross);
        const angleInDeg = getRandomArbitrary(-angle, angle);
        const angleInRand = angleInDeg * Math.PI / 180;
        createCross(context, widthCross, x, y, angleInRand);
      }
    }
  }
}

window.addEventListener("load", function(event) {
  const settingsDom = document.getElementById("settings");
  const closeButtonDom = document.getElementById("close-button");
  const openButtonDom = document.getElementById("open-button");

  const saveAsPngDom = document.getElementById("save-as-png");
  
  const widthCrossDom = document.getElementById("width-cross");
  const areaSizeDom = document.getElementById("area-size");
  const lineWidthDom = document.getElementById("line-width");
  const percentageAppearsDom = document.getElementById("percentage-appears");
  const angleDom = document.getElementById("angle");
  const backgroundColorDom = document.getElementById("background");

  let widthCross = 20;
  let areaSize = 50;
  let lineWidth = 5;
  let percentageAppears = 50; //%
  let angle = 0;
  let backgroundColor = "#ff0000";
  draw(widthCross, lineWidth, areaSize, percentageAppears, angle, backgroundColor);

  if(widthCrossDom) {
    widthCrossDom.addEventListener("change", (event : any) => {
      widthCross = parseInt(event.target.value, 10);
      (widthCrossDom as Element).nextElementSibling!.innerHTML = event.target.value;
      draw(widthCross, lineWidth, areaSize, percentageAppears, angle, backgroundColor);
    });
  }

  if(areaSizeDom) {
    areaSizeDom.addEventListener("change", (event : any) => {
      areaSize = parseInt(event.target.value, 10);
      (areaSizeDom as Element).nextElementSibling!.innerHTML = event.target.value;
      draw(widthCross, lineWidth, areaSize, percentageAppears, angle, backgroundColor);
    });
  }

  if(lineWidthDom) {
    lineWidthDom.addEventListener("change", (event : any) => {
      lineWidth = parseInt(event.target.value, 10);
      (lineWidthDom as Element).nextElementSibling!.innerHTML = event.target.value;
      draw(widthCross, lineWidth, areaSize, percentageAppears, angle, backgroundColor);
    });
  }

  if(percentageAppearsDom) {
    percentageAppearsDom.addEventListener("change", (event : any) => {
      percentageAppears = 100 - parseInt(event.target.value, 10);
      (percentageAppearsDom as Element).nextElementSibling!.innerHTML = event.target.value;
      draw(widthCross, lineWidth, areaSize, percentageAppears, angle, backgroundColor);
    });
  }
  
  if(angleDom) {
    angleDom.addEventListener("change", (event : any) => {
      angle = parseInt(event.target.value, 10);
      (angleDom as Element).nextElementSibling!.innerHTML = event.target.value;
      draw(widthCross, lineWidth, areaSize, percentageAppears, angle, backgroundColor);
    });
  }

  if(backgroundColorDom) {
    backgroundColorDom.addEventListener("change", (event : any) => {
      backgroundColor = event.target.value;
      draw(widthCross, lineWidth, areaSize, percentageAppears, angle, backgroundColor);
    });
  }

  // I assume everything is in the dom
  if(settingsDom && openButtonDom && closeButtonDom) {
    settingsDom.style.display = "none";

    openButtonDom.addEventListener("click", () => {
      settingsDom.style.display = "flex";
      openButtonDom.style.display = "none";
      closeButtonDom.style.display = "flex";
    });

    closeButtonDom.addEventListener("click", () => {
      settingsDom.style.display = "none";
      openButtonDom.style.display = "flex";
      closeButtonDom.style.display = "none";
    });
  }

  if(saveAsPngDom) {
    saveAsPngDom.addEventListener("click", (event: any) => {
      event.target.href = getCanvas().toDataURL("image/png");
    });
  }

});