var speed;
var sunSpeed;
var moonSpeed;
var asteroidSpeed;

function setup() {
    createCanvas(900, 750);
}

function draw() {
    background(0);
    speed = frameCount;

    push();

    // Create the Sun
    rectMode(CENTER); // The sun will rotate to its own axis
    translate(width/2, height/2);
    sunSpeed = speed / 3; // The sun speeds at its own axis at a slow speed
    rotate(radians(sunSpeed));
    celestialObj(color(255,150,0), 200); // Sun

    // Create the Earth
    rotate(radians(speed)); // The Earth rotates at a velocity "speed"
    translate(300, 0); // The Earth moves to orbit 300 pixels
    celestialObj(color(0, 0, 255), 80); // Earth of color blue and size 80

    // Create the Moon
    moonSpeed = -speed*2; // Velocity of the Moon
    rotate(radians(moonSpeed));
    translate(100, 0); // The Moon moves to orbit 100 pixels
    celestialObj(color(255, 255, 255), 30); // Moon of color white and size 30

    // Create small celestial body
    asteroidSpeed = -speed*3; // Velocity of the asteroid
    rotate(radians(asteroidSpeed));
    translate(30, 0); // The asteroid moves to orbit 30 pixels
    celestialObj(color(255,0,0), 15); // Asteroid of color red and size 15

    pop();
}

function celestialObj(c, size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
}
