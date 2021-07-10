/*const WidthCross = 20;
const AreaSize = 50;
const LineWidth = 5;*/
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function setBackgroundColor(canvas, backgroundColor) {
    var ctx = getContext(canvas);
    ctx.fillStyle = backgroundColor; //getRandomColor();
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function getCanvas() {
    var canvas = document.getElementById("canvas");
    if (!canvas) {
        throw "cannot find the canvas in the page";
    }
    return canvas;
}
function getContext(canvas) {
    var context = canvas.getContext("2d");
    if (!context) {
        throw "cannot find the context in the page";
    }
    return context;
}
function createCross(context, widthCross, x, y, angle) {
    context.save();
    context.rotate(angle);
    context.beginPath();
    context.moveTo(x, y + widthCross / 2);
    context.lineTo(x + widthCross, y + widthCross / 2);
    context.moveTo(x + widthCross / 2, y);
    context.lineTo(x + widthCross / 2, y + widthCross);
    context.stroke();
    context.restore();
}
function draw(widthCross, lineWidth, areaSize, percentageAppears, angle, backgroundColor) {
    var canvas = getCanvas();
    var context = getContext(canvas);
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    context.lineWidth = lineWidth;
    context.clearRect(0, 0, canvas.width, canvas.height);
    setBackgroundColor(canvas, backgroundColor);
    for (var _x = 0; _x < canvas.width; _x += areaSize) {
        for (var _y = 0; _y < canvas.height; _y += areaSize) {
            if (Math.random() >= (percentageAppears / 100)) {
                var x = getRandomArbitrary(_x, _x + areaSize - widthCross);
                var y = getRandomArbitrary(_y, _y + areaSize - widthCross);
                var angleInDeg = getRandomArbitrary(-angle, angle);
                var angleInRand = angleInDeg * Math.PI / 180;
                createCross(context, widthCross, x, y, angleInRand);
            }
        }
    }
}
window.addEventListener("load", function (event) {
    var widthCrossDom = document.getElementById("width-cross");
    var areaSizeDom = document.getElementById("area-size");
    var lineWidthDom = document.getElementById("line-width");
    var percentageAppearsDom = document.getElementById("percentage-appears");
    var angleDom = document.getElementById("angle");
    var backgroundColorDom = document.getElementById("background");
    var widthCross = 20;
    var areaSize = 50;
    var lineWidth = 5;
    var percentageAppears = 50; //%
    var angle = 0;
    var backgroundColor = "#ff0000";
    draw(widthCross, lineWidth, areaSize, percentageAppears, angle, backgroundColor);
    if (widthCrossDom) {
        widthCrossDom.addEventListener("change", function (event) {
            widthCross = parseInt(event.target.value, 10);
            draw(widthCross, lineWidth, areaSize, percentageAppears, angle, backgroundColor);
        });
    }
    if (areaSizeDom) {
        areaSizeDom.addEventListener("change", function (event) {
            areaSize = parseInt(event.target.value, 10);
            draw(widthCross, lineWidth, areaSize, percentageAppears, angle, backgroundColor);
        });
    }
    if (lineWidthDom) {
        lineWidthDom.addEventListener("change", function (event) {
            lineWidth = parseInt(event.target.value, 10);
            draw(widthCross, lineWidth, areaSize, percentageAppears, angle, backgroundColor);
        });
    }
    if (percentageAppearsDom) {
        percentageAppearsDom.addEventListener("change", function (event) {
            percentageAppears = parseInt(event.target.value, 10);
            draw(widthCross, lineWidth, areaSize, percentageAppears, angle, backgroundColor);
        });
    }
    if (angleDom) {
        angleDom.addEventListener("change", function (event) {
            angle = parseInt(event.target.value, 10);
            draw(widthCross, lineWidth, areaSize, percentageAppears, angle, backgroundColor);
        });
    }
    if (backgroundColorDom) {
        backgroundColorDom.addEventListener("change", function (event) {
            backgroundColor = event.target.value;
            draw(widthCross, lineWidth, areaSize, percentageAppears, angle, backgroundColor);
        });
    }
});
//# sourceMappingURL=app.js.map