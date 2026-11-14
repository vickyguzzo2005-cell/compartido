let fondo;
let linterna;
let musicaSuspenso;
let time = 30;
let tem = new tiempo();
let mostrarPista = false;
let mostrarpeluca = false;   
let mostrarfotos = false;
let mostrartrampa = false;
let mostrarguantes = false;
let mostrarcuchillo = false;
let elemento = new objeto();
let intro = new inicio();
let eleccion; //  Creamos el objeto de Eleccion

let textoinstrucciones = [
  "Para descubrir quien es o donde esta el asesino, debera encontra 3 pistas CLAVES en 30 segundos"
];
let textoopciones = [
  "El asesino debe ser el payaso real del circo, y el que murio es la verdadera victima",
  "El asesino debio huir hacia el bosque"
];
let textofinal = [
  "GANASTE: al descubrir quien fue el verdadero asesino, pudieron identificarlo y atraparlo",
  "PERDISTE: al seguir al asesino al bosque, se encontraron con los lobos y los mataron"
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
  eleccion = new Eleccion(); // ✅ Inicializamos el objeto
}

function draw() {
  image(fondo, 0, 0, 800, 400);

  if (time > 0) {
    elemento.dibujar();
    elemento.dibujarLinterna();
    tem.tempo();
    
    // ✅ Activar opciones cuando tengamos las 3 pistas
    if (elemento.hayTodasLasPistas() && !eleccion.mostrar) {
      eleccion.activar();
    }
  }
  else if (time === 0) {
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

  eleccion.dibujar(); // ✅ Dibujamos el cuadro de opciones
}

function mousePressed(){
  elemento.mousePressed();
  eleccion.mousePressed(); // ✅ Detectamos clic en las opciones
}

function mouseReleased(){
  elemento.mouseReleased();
}

function keyPressed(){
  if( key == ' ' ){
    musicaSuspenso.play();
  }
  
  if( key === 'r' || key === 'R' ){
    time = 30;
    mostrarPista = false;
    mostrarpeluca = false;
    mostrarfotos = false;
    mostrartrampa = false;
    mostrarcuchillo = false;
    mostrarguantes = false;
    elemento.reiniciar();   //  Reiniciamos el contador de pistas
    eleccion.reiniciar();   // Ocultamos el cuadro de opciones
  }
}

class Eleccion {
  constructor() {
    this.mostrar = false;
    this.respuesta = null;
  }

  activar() {
    this.mostrar = true;
    this.respuesta = null;
  }

  dibujar() {
    if (!this.mostrar) return;

    if (this.respuesta === null) {
      fill(20, 20, 20, 220);
      rect(0, 0, width, height);
      
      fill(255);
      rect(100, 100, 600, 240);
      
      fill(0);
      textAlign(CENTER, CENTER);
      textSize(20);
      text("¡Encontraste todas las pistas!", 400, 140);
      textSize(16);
      text("¿Cuál es tu conclusión?", 400, 170);
      
      fill(100, 200, 100);
      rect(130, 200, 540, 50);
      fill(0);
      textSize(13);
      text(textoopciones[0], 400, 225);
      
      fill(220, 100, 100);
      rect(130, 270, 540, 50);
      fill(0);
      textSize(13);
      text(textoopciones[1], 400, 295);
    } 
    else {
      if (this.respuesta) {
        fill(60, 160, 60, 230);
      } else {
        fill(160, 60, 60, 230);
      }
      rect(0, 0, width, height);
      
      fill(255);
      rect(100, 120, 600, 180);
      
      fill(0);
      textAlign(CENTER, CENTER);
      textSize(20);
      if (this.respuesta) {
        text(textofinal[0], 400, 190);
      } else {
        text(textofinal[1], 400, 190);
      }
      
      textSize(16);
      text("Presiona R para jugar de nuevo", 400, 260);
    }
  }

  mousePressed() {
    if (!this.mostrar || this.respuesta !== null) return;

    if (mouseX > 130 && mouseX < 670 && mouseY > 200 && mouseY < 250) {
      this.respuesta = true;
    }
    if (mouseX > 130 && mouseX < 670 && mouseY > 270 && mouseY < 320) {
      this.respuesta = false;
    }
  }

  reiniciar() {
    this.mostrar = false;
    this.respuesta = null;
  }
}
