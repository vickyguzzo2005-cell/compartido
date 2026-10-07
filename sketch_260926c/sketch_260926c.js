let velocidadAnimacion = 90;
let fondo;
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
let aullidoDeLobo;
let musicaCirco;
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
  "No lo insinuo, lo se. Han estado pasando cosas raras estos días, cómo el tipo raro que se fue por haya"
];
let selecciones1 = [
  "Ir por el camino a la derecha",
  "Ir por el camino a la Izquierda",
];
let selecciones2 = [
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

function setup() {

createCanvas(800, 450);
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
function mousePressed() {

}
  
