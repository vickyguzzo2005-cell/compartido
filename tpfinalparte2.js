let fondo;
let linterna;
let textoinstrucciones = [
  "Para descubrir quien es o donde esta el asesino, debera encontra 3 pistas CLAVES en 30 segundos"
];

function preload(){
  fondo = loadImage('assets/interiorcabana.jpg');
  linterna = loadImage("assets/linterna.png");
}

function setup() {
   createCanvas(800, 400);
}


function draw() {
  image(fondo, 0, 0, 800, 400);
  
  dibujarLinterna();
}

function dibujarLinterna() {
  let x = constrain (mouseX, 0, width);
  let y = constrain (mouseY, 0, height);

  push();
  imageMode(CENTER);
  image(linterna, x, y);
  pop();
}

function mousePressed(){
  
}
