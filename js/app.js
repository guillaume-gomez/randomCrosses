var WidthCross = 10;
var AreaSize = 25;
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
function setBackgroundColor(canvas) {
    var ctx = getContext(canvas);
    ctx.fillStyle = getRandomColor();
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
function createCross(context, x, y) {
    context.beginPath();
    context.moveTo(x, y + WidthCross / 2);
    context.lineTo(x + WidthCross, y + WidthCross / 2);
    context.moveTo(x + WidthCross / 2, y);
    context.lineTo(x + WidthCross / 2, y + WidthCross);
    context.stroke();
}
window.addEventListener("load", function (event) {
    var canvas = getCanvas();
    var context = getContext(canvas);
    setBackgroundColor(canvas);
    for (var _x = 0; _x < canvas.width; _x += AreaSize) {
        for (var _y = 0; _y < canvas.height; _y += AreaSize) {
            if (Math.random() >= 0.9) {
                var x = getRandomArbitrary(_x, _x + AreaSize - WidthCross / 2);
                var y = getRandomArbitrary(_y, _y + AreaSize + WidthCross / 2);
                createCross(context, x, y);
            }
        }
    }
});
//# sourceMappingURL=app.js.map