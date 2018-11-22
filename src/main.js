let canvas = document.createElement("canvas");

canvas.width = 800;
canvas.height = 600;

document.body.appendChild(canvas);

let ctx = canvas.getContext("2d");

ctx.fillStyle = "#303030";
ctx.fillRect(0, 0, canvas.width, canvas.height);