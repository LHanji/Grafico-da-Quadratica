
function equac() {
	let a = parseFloat(document.getElementById("a1").value);
	let b = parseFloat(document.getElementById("b1").value);
	let c = parseFloat(document.getElementById("c1").value);
	var delta = (b * b) - (4 * a * c);
	var x1 = (-b + Math.sqrt(delta)) / (2 * a);
	var x2 = (-b - Math.sqrt(delta)) / (2 * a);
	main();
}

function f(x) {
	let a = parseFloat(document.getElementById("a1").value);
	let b = parseFloat(document.getElementById("b1").value);
	let c = parseFloat(document.getElementById("c1").value);
	var y = ((a * (x ** 2)) + (b * x) + c);
	return yt(y);
}

function yt(y) {
	return -25 * y;
}

function xt(x) {
	return 25 * x;
}

function main() {
	var canvas, ctx, w, h;
	w = 500;
	h = 500;
	canvas = document.getElementById("canvas1");
	ctx = canvas.getContext("2d");
	var x0 = -10;
	var xf = 10;
	var x = x0;
	var dx = 0.1;
	ctx.save();
	ctx.translate(250, 250);
	ctx.beginPath();
	ctx.moveTo(xt(-10), yt(0));
	ctx.lineWidth = 3;
	ctx.lineTo(xt(10), yt(0));
	ctx.moveTo(xt(0), yt(-100));
	ctx.lineTo(xt(0), yt(100));
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(xt(x0), f(x0));
	x += dx;
	while (x < xf) {
		ctx.lineTo(xt(x), f(x))
		x += dx;
	}
	ctx.stroke();
	ctx.restore();
}
function clearPainel() {
	canvas = document.getElementById("canvas1");
    ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	console.log(ctx);
	
}
