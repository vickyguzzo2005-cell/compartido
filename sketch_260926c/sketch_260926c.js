let velocidadAnimacion = 90;
let fondo; //primer fondo
let fondoB; //fondo bosque
let fondoB2;
let fondoC; //fondo cabaña
let desplazamiento;
let imagenesdeshagy= [];
let indiceshagy=0
let posicionx =100;
let velocidadcaminar=2;
let imagenesdevelma = [];
let indicevelma=0
let velocidadcaminarvelma=1.9
let tiempovelma
let posicionxvelma=200;
let frameHistoria; //para dividir cada momento
let elegir;
let posXNombre;
let aullidoDeLobo;
let musicaCirco;
let hablaPandilla;
let hablaPolicia;
let hablaSeñor;
let textoAPandilla;
let textoAPolicia;
let textoASeñor;
let textoPandilla = [
  "¿Que ocurrio?",
  "Disculpe señor,¿Usted sabe algo de lo que ocurrio?",
  "¿Insinua que alguién se hizo pasar por él?",
];
let textoPolicia = [
  "Mataron al payaso del circo tirandole un cuchillo directo a su cabeza",
  "Ya interrogamos a todas las personas del publico y a los trabahjadores. Aunque no dijeron nada relevante",
  "Solo falto el señor que limpia",
];
let textoSeñor = [
  "Lo unico que se es que el payaso plinplin no estaba actuando como siempre, no parecia él",
  "No lo insinuo, lo se. Han estado pasando cosas raras estos días, cómo el tipo raro que se fue al bosque"
];
let selecciones = [
  "Ir por el camino a la derecha",
  "Ir por el camino a la Izquierda",
  "Seguir (ignorar los aullidos)",
  "Desviarse del camino",
];

function preload(){fondo = loadImage('assets/fondoferia.png');

for(let i = 0; i < 9; i++) {
 imagenesdeshagy[i] = loadImage('assets/shagy' + (i+1) + '.png'); 
 console.log('Cargando imagen:',i+1); }

for(let i = 0; i < 8; i++){
  imagenesdevelma[i] = loadImage('assets/velma' + (i+1) + '.png');
}
}
aullidoDeLobo =loadSoun('assets/Aullidodelobo.mp3');

function setup() {
createCanvas(800, 450);
  textSize(20);
textoAPandilla = textoAPolicia = textoASeñor = minTexto = maxTexto = 0;
  hablaPandilla = true;
  hablaPolicia = false;
  hablaSeñor = false;

  frameHistoria = 0;
  elegir = false;
}
function draw() {
 background(0);
  let desplazamiento = (millis() / velocidadAnimacion) % 800;
  image(fondo,-desplazamiento,0,800,600);
image(fondo,-desplazamiento+800,0,800,600);
  
    let tiempo = millis()/250;
  indiceshagy= floor(tiempo)%9;
  image(imagenesdeshagy[indiceshagy],posicionx,250,150,200);
 // console.log(indiceshagy,imagenesdeshagy[indiceshagy]);
 console.log("tiempo:",tiempo,indiceshagy);
 posicionx = posicionx+velocidadcaminar;
 if (posicionx > 900){
   posicionx = -100;
 }
 let tiempovelma = millis()/260;
 indicevelma = floor (tiempovelma)%8;
 image(imagenesdevelma[indicevelma],posicionxvelma,250,160,201);
 console.log("tiempovelma:",tiempovelma,indicevelma);
 posicionxvelma = posicionxvelma+velocidadcaminarvelma;
 if (posicionxvelma > 800){
   posicionxvelma = -200;
}
}
function momentoEnLaHistoria() {
if(frameHistoria == 0){
  hablaPandilla = true;
  textoAPandilla = 0;
}
  if(frameHistoria == 1){
    textoAPandilla = 1
} 
  if(frameHistoria == 2){
    hablaPandilla = false;
    hablaPolicia = true;
    textoAPolicia = 0;
  }
  if(frameHistoria == 3){
    textoAPolicia = 1
} 
if(frameHistoria == 4){
    textoAPolicia = 2
} 
  if(frameHistoria == 5){
    textoAPolicia = 3
  }
  if(frameHistoria == 6){
    hablaPandilla = true;
    hablaSeñor = false;
    textoAPandilla = 2;
  }
  if(frameHistoria == 7){
    hablaPandilla = false;
    hablaSeñor = true;
    textoASeñor = 0
  }
  if(frameHistoria == 8){
    textoASeñor = 1
  } 
 if(frameHistoria == 9){
    hablaPandilla = true;
    hablaSeñor = false;
    textoAPandilla = 3;
 }
    if(frameHistoria == 10){
    hablaPandilla = false;
    hablaSeñor = true;
    textoASeñor = 2
    }
    }
function quePersonajeHabla() {
  if (hablaPandilla) {
    return 0;
  }
  if (hablaPolicia) {
    return 1;
  }
  if (hablaSeñor){
    return 2;
  }
}
function escribirSelecciones(){
  push();
  textAlign(CENTER);
  fill(90);
  text(selecciones[0], 200, 150);
  text(selecciones[1], 200, 200);
  text(selecciones[2], 200, 150);
  text(selecciones[3], 200, 200);
  pop();
}
function cajasSelecciones(){
  push();
  rectMode(CENTER);
  stroke(90);
  fill(10);
  rect(200, 143, 325, 40, 20);
  rect(200, 194, 325, 40, 20);
  pop();
  elegir = true;
  escribirSelecciones()
}
function dibujarCajaDeTexto(i, posX) {
  push();
  fill (queColorDeFill());
  text(personaje[i], posX, 270);
  pop();
  push();
  stroke(queColorDeStroke());
  fill(queColorDeFill(),75);
  rect(30, 280, 340, 100, 20);
  pop();

  escribirConversacion();
}
function escribirConversacion() {
  if (hablaPandilla) {
    push();
    fill (queColorDeStroke());
    text(textoPandilla[textoAPandilla].substring(minTexto, maxTexto++), 50, 300, 300);
    pop();
  } else if (hablaPolicia) {
    push();
    fill(queColorDeStroke());
    text(textoPolicia[textoAPolicia].substring(minTexto, maxTexto++), 50, 300, 300);
    pop();
  }
}
function queColorDeFill() {
  if (hablaPandilla) {
    return [60, 10, 90, 75];
  } else if (hablaPolicia) {
    return [10, 75];
  }else if (hablaSeñor) {
    return [10, 75];
  }
}

function queColorDeStroke()
{
  if (hablaPandilla) {
    return [60, 70, 50];
  } else if (hablaPolicia) {
    return [90];
  }else if (hablaSeñor) {
    return [90];
  }
}

function mousePressed() {
if (frameHistoria = 0) {//verificar
    frameHistoria ++;
    maxTexto = 0;
  }
  if (frameHistoria > 1) {
    frameHistoria = 0;
    maxTexto = 0;
  }
  if (frameHistoria > 2) {
    frameHistoria = 1;
    maxTexto = 0;
  }
  if (frameHistoria > 3) {
    frameHistoria = 2;
    maxTexto = 0;
  }
  if (frameHistoria > 4) {
    frameHistoria = 3;
    maxTexto = 0;
  }
  if (frameHistoria > 5) {
    frameHistoria = 4;
    maxTexto = 0;
  }
  if (frameHistoria > 6) {
    frameHistoria = 5;
    maxTexto = 0;
  }
  if (frameHistoria > 7) {
    frameHistoria = 6;
    maxTexto = 0;
  }
  if (frameHistoria > 8) {
    frameHistoria = 7;
    maxTexto = 0;
  }
  if (frameHistoria > 9 {
    frameHistoria = 8;
    maxTexto = 0;
  }
  if (frameHistoria > 10) {
    frameHistoria = 9;
    maxTexto = 0;
  }
  if (frameHistoria == 12 && sePuedeElegir) {
    if (mouseX > 50 && mouseX < 350 && mouseY > 125 && mouseY < 160) {
      frameHistoria = 13;
      elegir = false;
    }
    if (mouseX > 50 && mouseX < 350 && mouseY > 175 && mouseY < 215) {
      frameHistoria = 14;
      maxTexto = 0;
      elegir = false;
    }
     if (frameHistoria == 14 && sePuedeElegir) {
    if (mouseX > 50 && mouseX < 350 && mouseY > 125 && mouseY < 160) {
      frameHistoria = 15;
      elegir = false;
    }
    if (mouseX > 50 && mouseX < 350 && mouseY > 175 && mouseY < 215) {
      frameHistoria = 16;
      maxTexto = 0;
      elegir = false;
    }
  }
}

  
