let x = 30;
let y = 30;
let r = 50;
let direction = 3;
let elt = document.getElementById('canvas');


function setup() {
  let cnv = createCanvas(900, 600);
  cnv.parent(elt)
}

function draw() {
  background(51);
  push()
  noStroke();
  fill('red');
  circle(x, y, r);
  pop();
  if(x<900-r/2 && x>r/2) {
    x += direction;
  }
  else if(x >= 900 - r/2 || x <= r/2) {
    direction = direction * -1;
    x += direction;
  }

}
