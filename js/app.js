function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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
    var widthCross = 10;
    context.beginPath();
    context.moveTo(x, y + widthCross / 2);
    context.lineTo(x + widthCross, y + widthCross / 2);
    context.moveTo(x + widthCross / 2, y);
    context.lineTo(x + widthCross / 2, y + widthCross);
    context.stroke();
}
window.addEventListener("load", function (event) {
    var canvas = getCanvas();
    var context = getContext(canvas);
    setBackgroundColor(canvas);
    for (var i = 0; i < 50; i++) {
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        createCross(context, x, y);
    }
});
//# sourceMappingURL=app.js.map