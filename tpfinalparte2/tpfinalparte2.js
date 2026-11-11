let fondo;
let linterna;
/*let guantes = new objeto(200,50,50,50);
let botas = new objeto(510,300,50,50);
let cuchillo = new objeto(700,90,50,50);
let trampa = new objeto(400,200,50,50);
let peluca = new objeto(5,250,50,50);
let fotos = new objeto(150,325,50,50);*/
let mostrarPista = false;
let elemento = new objeto();
let intro = new inicio();
let textoinstrucciones = [
  "Para descubrir quien es o donde esta el asesino, debera encontra 3 pistas CLAVES en 30 segundos"
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
  elemento.dibujar();
  elemento.dibujarLinterna();
  //intro.inicio();
}

function mousePressed(){
  elemento.mousePressed();
}
function mouseReleased(){
 elemento.mouseReleased();
 } 
