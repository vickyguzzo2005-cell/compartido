let fondo;
let linterna;
let guantes;
let botas;
let cuchillo;
let trampa;
let peluca;
let fotos;
let textoinstrucciones = [
  "Para descubrir quien es o donde esta el asesino, debera encontra 3 pistas CLAVES en 30 segundos"
];
let textobjeto = [
   "Cuchillo con sangre (de la victima)",
   "Botas de montaña",
   "Guantes",
   "Trampa para lobos",
   "Peluca de payaso",
   "Fotos de la victima"
];
let textoopciones = [
    "El asesino debe ser el payaso real del circo, y el que murio es la verdadera victima", //respuesta correcta 
    "El asesino debio huir hacia el bosque" //respuesta incorrecta
];
let textofinal = [
     "GANASTE: al descubrir quien fue el verdadero asesino, pudieron identificarlo y atraparlo",
     "Perdiste: al querer seguir al asesino al bosque, se encontraron con los lobos y su destino fue la muerte"
];

function preload(){
  fondo = loadImage('assets/interiorcabana.jpg');
  linterna = loadImage("assets/linterna.png");
   linterna = loadImage("assets/linterna.png");
  botas = loadImage("assets/botas.png");
  cuchillo = loadImage("assets/cuchillo.png");
  guantes = loadImage ("assets/guantes.png");
  trampa = loadImage("assets/trampa.png");
  peluca = loadImage("assets/peluca.png");
   fotos = loadImage("assets/fotos.png");
}

function setup() {
   createCanvas(800, 400);
}


function draw() {
  image(fondo, 0, 0, 800, 400);
   image(botas,510,300,50,50);
  image(cuchillo,700,90,50,50);
  image(trampa,400,200,50,50);
  image(guantes,200,50,50,50);
  image(peluca,5,250,50,50);
  image(fotos,150,325,50,50);
   if ( mostrarPista == true ){
    fill(255);
    rect (200,280,400,100);
    fill(0);
    text("el asesino transito por una zona lodosa ",220,330);
   }
  dibujarLinterna();


function dibujarLinterna() {
  let x = constrain (mouseX, 0, width);
  let y = constrain (mouseY, 0, height);

  push();
  imageMode(CENTER);
  image(linterna, x, y);
  pop();
}

function mousePressed(){
    if (mouseX > 510 && mouseX < 560 &&
      mouseY > 300 && mouseY < 350 )
      (mouseX>700 && mouseY < 750 && 
      mouseY > 90 && mouseY < 140)
      mostrarPista = true;
}
function mouseReleased(){
  mostrarPista = false ; 
}
  
  
}
