let fondo;
let linterna;
let musicaSuspenso;
let time = 30;
let tem = new tiempo();
let mostrarPista = false;
let mostrarpeluca = false;   
let mostrarfotos = false;
let mostrartrampa = false;
let mostrarcuchillo = false;
let mostrarguantes = false;
let elemento = new objeto();
let eleccion;

let estado = "inicio";
let fondoInicio;

let textoinstrucciones = [
  "Para descubrir quien es o donde esta el asesino, debera encontra 3 pistas CLAVES en 30 segundos"
];
let textoopciones = [
  "El asesino debe ser el payaso real del circo, y el que murio es la verdadera victima",
  "El asesino debio huir hacia el bosque"
];
let textofinal = [
  "GANASTE: al descubrir quien fue el verdadero asesino, pudieron identificarlo y atraparlo",
  "PERDISTE: al seguir al asesino al bosque, se encontraron con los lobos y te comieron"
];

function preload(){
  fondo = loadImage('assets/interiorcabana.jpg');
  fondoInicio = loadImage('assets/interiorcabana.jpg');
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
  eleccion = new Eleccion();
}

function draw() {
  if (estado === "inicio") {
    image(fondoInicio, 0, 0, 800, 400);
    fill(0, 0, 0, 150);
    rect(0, 0, 800, 400);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(17);
    text(textoinstrucciones[0], 400, 100);
    fill(80, 160, 80);
    rect(300, 270, 200, 60, 8);
    fill(255);
    textSize(22);
    text("EMPEZAR", 400, 300);
  } else if (estado === "creditos") {
    background(20, 20, 30);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("¡Gracias por jugar!", 400, 100);
    textSize(20);
    text("Hecho por:", 400, 170);
    textSize(24);
    text("Guzzo Victoria y Julieta Martinez", 400, 230);
    textSize(16);
    fill(180);
    text("Presiona R para volver al inicio", 400, 350);
  } else {
    image(fondo, 0, 0, 800, 400);
    if (time > 0) {
      elemento.dibujar();
      elemento.dibujarLinterna();
      tem.tempo();
      if (elemento.hayTodasLasPistas() && !eleccion.mostrar) {
        eleccion.activar();
      }
    } else if (time === 0) {
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
    eleccion.dibujar();
  }
}

function mousePressed(){
  if (estado === "inicio") {
    if (mouseX > 300 && mouseX < 500 && mouseY > 270 && mouseY < 330) {
      estado = "jugando";
      time = 30;
    }
  } else {
    elemento.mousePressed();
    eleccion.mousePressed();
  }
}

function mouseReleased(){
  if (estado === "jugando") {
    elemento.mouseReleased();
  }
}

function keyPressed(){
  if( key == ' ' ){
    musicaSuspenso.play();
  }
  if( key === 'r' || key === 'R' ){
    if (estado === "creditos") {
      estado = "inicio";
    } else {
      time = 30;
      mostrarPista = false;
      mostrarpeluca = false;
      mostrarfotos = false;
      mostrartrampa = false;
      mostrarcuchillo = false;
      mostrarguantes = false;
      elemento.reiniciar();
      eleccion.reiniciar();
      estado = "inicio";
    }
  }
}
