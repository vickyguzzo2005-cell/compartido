let fondo;
let linterna;
let textoinstrucciones = [
  "Para descubrir quien es o donde esta el asesino, debera encontra 3 pistas CLAVES en 30 segundos"
];

function preload(){
  fondo = loadImage('assets/interiorcabana.jpg');
  linterna = loadImage("assets/linterna.png");
   linterna = loadImage("assets/linterna.png");
  botas = loadImage("assets/botas.png");
  cuchillo = loadImage("assets/cuchillo.png");
  guantes = loadImage ("assets/guantes.png");
  trampa = loadImage("assets/trampa.png");
}

function setup() {
   createCanvas(800, 400);
}


function draw() {
  image(fondo, 0, 0, 800, 400);
   image(botas,300,200,50,50);
  image(cuchillo,600,100,50,50);
  image(trampa,200,30,50,50);
  image(guantes,400,160,50,50);
  
  
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
