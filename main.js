function preload() {}
function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();
}
function take_snapshot() {
  save("student_name.png");
}
function draw() {

  circle(20, 20, 20);
  circle(620, 20, 20);
  circle(20, 450, 20);
  circle(620, 450, 20);
}
