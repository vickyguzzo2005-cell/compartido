let fondo;
let linterna;
let musicaSuspenso;
let time = 30;
let tem = new tiempo();
let mostrarPista = false;
let mostrarpeluca = false;   //  Aseguramos que estén todas
let mostrarfotos = false;
let mostrartrampa = false;
let mostrarguantes = false;
let mostrarcuchillo = false;
let elemento = new objeto();
let intro = new inicio();
let fini = new finales();

let textoinstrucciones = [
  "Para descubrir quien es o donde esta el asesino, debera encontra 3 pistas CLAVES en 30 segundos"
];
let textoopciones = [
    "El asesino debe ser el payaso real del circo, y el que murio es la verdadera victima",
    "El asesino debio huir hacia el bosque"
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

  if (time > 0) {
   
    elemento.dibujar();
    elemento.dibujarLinterna();
    tem.tempo();

  } else if (time === 0) {
    // ⏰ TIEMPO TERMINADO — PANTALLA DE REINICIO
    fill(193, 14, 14);
    rect(20, 30, 760, 340);

    fill(0);
    textAlign(CENTER, CENTER);
    textSize(25);
    text("¡SE ACABÓ EL TIEMPO!", 400, 130);

    textSize(18);
    text("Debes ser más rápido para encontrar las pistas", 400, 180);

    textSize(20);
    text("Presiona R para volver a intentarlo", 400, 250);
  }
}

function mousePressed(){
  elemento.mousePressed();
}

function mouseReleased(){
  elemento.mouseReleased();
}

function keyPressed(){
  if( key == ' ' ){
    musicaSuspenso.play();
  }
  
  
  if( key === 'r' || key === 'R' ){
    time = 30;                  // Reinicia el tiempo
    mostrarPista = false;       // Oculta todas las pistas
    mostrarpeluca = false;
    mostrarfotos = false;
  }
}
