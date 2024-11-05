/*
 * @name Input and Button
 * @arialabel “What is your name?” is written in the top left of the window with a text input box and a submit button under. After inputting text and submitting, the text submitted is generated multiple times to cover the background in a random formation in various shades of cyan.
 * @description Input text and click the button to see it affect the the canvas.
 */
let input, button, greeting;

function setup() {
  // create canvas
  createCanvas(710, 400);

  input = createInput();
  input.position(50, 100);

  button = createButton('submit');
  button.position(input.x + input.width, 100);
  button.mousePressed(greet);

  greeting = createElement('h1', 'Whats your name?');
  greeting.position(50,5);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name = input.value();
  greeting.html('Great work today, '+ name +'.'+ ' Tomorrow will be another beautiful day! ' );
  input.value('');

  for (let i = 0; i < 200; i++) {
    push();
    fill(random(500), 10, 150);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 10, 0);
    pop();
  }
}
