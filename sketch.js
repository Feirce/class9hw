
// Create a variable for button object
var color_button;
var red_button;
var blue_button;
var green_button;

// Create a function to change the background-color
function change_background() {

  // Pick a random number for r value
  r = random(255);

  // Pick a random number for g value
  g = random(255);

  // Pick a random number for b value
  b = random(255);

  // Set a random background-color
  background(r, g, b);
}
function red_bg() {
  r = 255;
  g = 0;
  b = 0;
  background(r, g, b);
}
function blue_bg() {
  r = 0;
  g = 0;
  b = 255;
  background(r, g, b);
}
function setup() {

  // Create a canvas
  createCanvas(400, 400);

  red_button = createButton("red");
  red_button.position(80, 200);
  red_button.mousePressed(red_bg);

  blue_button = createButton("blue");
  blue_button.position(280, 200);
  blue_button.mousePressed(blue_bg);
  // Set an initial background-color
  background(50);

  // Create the button
  color_button = createButton("Change Color");

  // Position the button
  color_button.position(150, 200);

  // When the button is clicked change_background()
  // function is called
  color_button.mouseClicked(change_background);
}