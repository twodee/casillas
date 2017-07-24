var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var squares = [];
var pixelSize = 50;

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = '#666666';

  for (var y = 0; y < canvas.height; y += pixelSize) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(canvas.width, y);
    context.stroke();
  } 

  for (var x = 0; x < canvas.width; x += pixelSize) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, canvas.height);
    context.stroke();
  } 

  context.fillStyle = '#000000';
  for (var i = 0; i < squares.length; ++i) {
    var square = squares[i];
    context.fillRect(square[0] * pixelSize, square[1] * pixelSize, pixelSize, pixelSize);
  }
}

function remove(x, y) {
  for (var i = 0; i < squares.length; ++i) {
    if (squares[i][0] == x && squares[i][1] == y) {
      squares.splice(i, 1);
      return;
    }
  }
}

function onMouseDown(e) {
  var x = Math.floor(e.clientX / pixelSize);
  var y = Math.floor(e.clientY / pixelSize);

  if (e.button == 2) {
    remove(x, y);
  } else {
    remove(x, y);
    squares.push([x, y]);
  }

  draw();
}
canvas.addEventListener('mousedown', onMouseDown);

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  draw();
}

window.addEventListener('resize', resize, false);
resize();

canvas.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
