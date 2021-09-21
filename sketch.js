var back_img;
var flake;
var flake_img;


function preload() {
  back_img = loadImage("snow2.jpg");
  flake_img = loadImage("snow5.webp")
}
function setup() {
  createCanvas(1000,800);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(back_img);  
  drawSprites();
}