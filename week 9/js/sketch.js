var x = 100;
var y = -100;
var w = 100;
var h = 100;

function setup() {
  createCanvas(1500, 700, WEBGL);
}

// display all the frames using the draw function as a loop
function draw() {
  background(10);
  normalMaterial();
//objects
  createBox(w, h, 150, x, y, true);
  createTorus();
  createBox(40, 85, 80, -250, 150, false);
  createSphere();
  createBox(150, 250, 50, -200, -80, false);
  //scale
  if (keyIsPressed) {
    if (key == 'd') {
      x += 5;

    } else if (key == 'a') {

      x -= 5;

    }
    if (keyIsPressed) {
      if (key == 's') {
        y += 5;

      } else if (key == 'w') {

        y -= 5;

      }
}
}
if (keyIsPressed) {
  if (key == 'q') {
    w += 5;
    h += 5;

  } else if (key == 'r') {
    w -= 5;
    h -= 5;

  }
}

//object functions
function createBox(w, h, d, transX, transY, move,) {
  push();
  if (move) {
    translate(transX + x, transY);
  } else {
    translate(transX, transY);
  }

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(w, h, d);
  pop();


}
function createTorus() {
  push();
  translate(100, 100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(50, 15, 24, 16);
  pop();
}
function createSphere() {
  push();
  translate(100, 100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(10, 15, 15);
  pop();
}
}