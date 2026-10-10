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
  }else if (hablaSeñor) {
    push();
    fill(queColorDeStroke());
    text(textoSeñor[textoASeñor].substring(minTexto, maxTexto++), 50, 300, 300);
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
  if (frameHistoria > 9) {
    frameHistoria = 8;
    maxTexto = 0;
  }
  if (frameHistoria > 10) {
    frameHistoria = 9;
    maxTexto = 0;
  }
   if (frameHistoria > 11) {
    frameHistoria = 10;
    maxTexto = 0;
  }
  if (frameHistoria == 12 && sePuedeElegir) {
    if (mouseX > 50 && mouseX < 350 && mouseY > 125 && mouseY < 160) {
      frameHistoria = 13;
      dibujarCajasSelecciones();
      elegir = false;
    }
    if (mouseX > 50 && mouseX < 350 && mouseY > 175 && mouseY < 215) {
      frameHistoria = 14;
      maxTexto = 0;
      dibujarCajasSelecciones();
      elegir = false;
    }
     if (frameHistoria == 14 && sePuedeElegir) {
    if (mouseX > 50 && mouseX < 350 && mouseY > 125 && mouseY < 160) {
      frameHistoria = 15;
      elegir = false;
      dibujarCajasSelecciones();
    }
    if (mouseX > 50 && mouseX < 350 && mouseY > 175 && mouseY < 215) {
      frameHistoria = 16;
      maxTexto = 0;
      elegir = false;
      dibujarCajasSelecciones();
    }
  }
}
  //lo que esta en mi processing ( victoria)
  let velocidadAnimacion = 90;
let tiempo
let fondo;
let desplazamiento;
let imagenesdeshagy= [];
let indiceshagy=0
let posicionx =-100;
let velocidadcaminar=2.0;
let imagenesdevelma = [];
let indicevelma=0
let velocidadcaminarvelma=2.0;
let tiempovelma
let posicionxvelma=-180;
let velocidaddescoby=1.9;
let posicionxscoby=-260;
let tiemposcoby
let indicescoby=0
let imagenesscoby=[]
let imagenesfred=[]
let indicefred=0;
let posicionxfred=600;
let aparecefred=false;
let detenerse = false;
let frameHistoria;
let posXNombre;
let aullidoDeLobo;
let musicaCirco;
let hablaPandilla;
let hablaFred;
let hablaDaf;
let textoAFred;
let textoAPandilla;
let textoADaf;
let minTexto;
let maxTexto;
let sePuedeElegir = false;
let personaje = ["Pandilla", "Policía", "Señor"];
let textoPandilla = [
  "¿Qué ocurrió?",
  "¿Y el sabia algo?",
  "¿Insinúa que alguien se hizo pasar por él?",
];
let textoFred = [
  "Mataron al payaso del circo tirándole un cuchillo directo a su cabeza",
  "Ya interrogaron a todas las personas del público y a los trabajadores. Aunque no dijeron nada relevante",
  "A excepcion del señor que limpia",
];
let textoDaf = [
  "Lo único que dijo es que el payaso no estaba actuando como siempre, que no parecía él",
  "Dijo que estaba seguro",
  "ya que han estado pasando cosas raras estos días, como un tipo raro que se fue al bosque",
];
let selecciones = [
  "Ir por el camino a la derecha",
  "Ir por el camino a la izquierda",
  "Seguir (ignorar los aullidos)",
  "Desviarse del camino",
];
let final1 = [
"Final bueno: atraparon al asesino",
  ];
 let final2 = [
"Final malo: fueron comidos por los lobos",
   ];
 let final3 = [
"Final neutro: no lograron a trapar al asesino",
   ]

function preload(){fondo = loadImage('assets/fondoferia.png');

for(let i = 0; i < 9; i++) {
 imagenesdeshagy[i] = loadImage('assets/shagy' + (i+1) + '.png'); 
 console.log('Cargando imagen:',i+1); }

for(let i = 0; i < 8; i++){
  imagenesdevelma[i] = loadImage('assets/velma' + (i+1) + '.png');
}

for(let i = 0; i < 9; i++){ 
  imagenesscoby[i] = loadImage('assets/scoby' + (i+1) + '.png');
}
for(let i = 0; i < 1; i++){
  imagenesfred[0] = loadImage('assets/fredquieto.png');
}
aullidoDeLobo =loadSoun('assets/Aullidodelobo.mp3');
musicaCirco = loadSound('assets/circo.mp3');                 
}
function setup() {

createCanvas(800, 450);
textSize(20);
textoAPandilla = textoAFred = textoADaf = minTexto = maxTexto = 0;
hablaPandilla = true;
hablaFred = false;
hablaDaf = false;
frameHistoria = 0;

}
function draw() {
 background(0);
  let desplazamiento = (millis() / velocidadAnimacion) % 800;
  image(fondo,-desplazamiento,0,800,600);
image(fondo,-desplazamiento+800,0,800,600);
if (aparecefred){
image(imagenesfred[0],posicionxfred, 250,160,200);
}
     
       if(aparecefred && posicionx > 460){
         detenerse = true ;
       }
     if (posicionxscoby> 900 && !aparecefred){
       aparecefred=true;
       posicionx=-100;
       posicionxvelma=-180;
       posicionxscoby=-260;
     }
     
      
//shagy  
    tiempo = millis()/250;
    if (!detenerse){
  indiceshagy= floor(tiempo)%9;
 posicionx=posicionx + velocidadcaminar;
    }else{
      indiceshagy=0;
    }
 // console.log(indiceshagy,imagenesdeshagy[indiceshagy]);
 console.log("tiempo:",tiempo,indiceshagy);
  image(imagenesdeshagy[indiceshagy],posicionx,250,150,200);

 
//velma
  tiempovelma = millis()/260;
  if(!detenerse){
 indicevelma = floor (tiempovelma)%8;
 posicionxvelma = posicionxvelma+velocidadcaminarvelma;
  }else{
    indicevelma=0;
  }
 console.log("tiempovelma:",tiempovelma,indicevelma);
 
 
 image(imagenesdevelma[indicevelma],posicionxvelma,250,160,201);

//scoby
 tiemposcoby = millis()/250;
 if(!detenerse){
indicescoby = floor (tiemposcoby)%7;
posicionxscoby = posicionxscoby+velocidaddescoby;
 }else{
   indicescoby=0;
 }
 if (detenerse) {
  momentoEnLaHistoria();
  dibujarCajaDeTexto();
}
console.log("tiemposcoby:",tiemposcoby,indicescoby);
image(imagenesscoby[indicescoby],posicionxscoby,290,170,202);
}
function momentoEnLaHistoria() {
  if(frameHistoria == 0){
    hablaPandilla = true;
    textoAPandilla = 0;
  }
  if(frameHistoria == 1){
    textoAPandilla = 1;
  }
  if(frameHistoria == 2){
    hablaPandilla = false;
    hablaFred = true;
    textoAFred = 0;
  }
  if(frameHistoria == 3){
    textoAFred = 1;
  }
  if(frameHistoria == 4){
    textoAFred = 2;
  }
  if(frameHistoria == 5){
    hablaPandilla = true;
    hablaDaf = false;
    textoAPandilla = 2;
  }
  if(frameHistoria == 6){
    hablaPandilla = false;
    hablaDaf = true;
    textoADaf = 0;
  }
  if(frameHistoria == 7){
    textoADaf = 1;
  }
  if(frameHistoria == 8){
     textoADaf = 2;  
  }
}

function quePersonajeHabla() {
  if (hablaPandilla) return 0;
  if (hablaFred) return 1;
  if (hablaDaf) return 2;
}

function queColorDeFill() {
  if (hablaPandilla) return [60, 10, 90, 75];
  if (hablaFred) return [100, 75];
  if (hablaDaf) return [100, 75];
}

function queColorDeStroke() {
  if (hablaPandilla) return [60, 70, 50];
  if (hablaFred) return [90];
  if (hablaDaf) return [90];
}

function escribirConversacion() {
  if (hablaPandilla) {
    push();
    fill(queColorDeStroke());
    text(textoPandilla[textoAPandilla].substring(minTexto, maxTexto++), 50, 300, 300);
    pop();
  } else if (hablaFred) {
    push();
    fill(queColorDeStroke());
    text(textoFred[textoAFred].substring(minTexto, maxTexto++), 50, 300, 300);
    pop();
  } else if (hablaDaf) {
    push();
    fill(queColorDeStroke());
    text(textoDaf[textoADaf].substring(minTexto, maxTexto++), 50, 300, 300);
    pop();
  }
}

function dibujarCajaDeTexto() {
  push();
  fill(queColorDeFill());
  stroke(queColorDeStroke());
  rect(30, 280, 340, 100, 20);
  pop();
  
  push();
  fill(queColorDeStroke());
  text(personaje[quePersonajeHabla()], 50, 265);
  pop();
  
  escribirConversacion();
}

function escribirSelecciones(){
  push();
  textAlign(CENTER);
  fill(255);
  text(selecciones[0], 400, 150);
  text(selecciones[1], 400, 200);
  pop();
}
  function escribirSelecciones2(){
  push();
  textAlign(CENTER);
  fill(255);
  text(selecciones[2], 400, 150);
  text(selecciones[3], 400, 200);
  pop();
}

function cajasSelecciones(){
  push();
  rectMode(CENTER);
  stroke(90);
  fill(30);
  rect(400, 143, 325, 40, 20);
  rect(400, 194, 325, 40, 20);
  pop();
  escribirSelecciones();
}
  function cajasSelecciones2(){
  push();
  rectMode(CENTER);
  stroke(90);
  fill(30);
  rect(400, 143, 325, 40, 20);
  rect(400, 194, 325, 40, 20);
  pop();
  escribirSelecciones2();
}
function final1(){
  bacground(0);
  fill(255);
  textSize(50);
  final1 = 0
}
  function final2(){
  bacground(0);
  fill(255);
  textSize(50);
  final2 = 0
  }
  function final3(){
  bacground(0);
  fill(255);
  textSize(50);
  final3 = 0
  }
function mousePressed() {
  if (!sePuedeElegir) return; // no hace nada si no llegaron todavía
  
  if (frameHistoria == 0) {
    frameHistoria++;
    maxTexto = 0;
  } else if (frameHistoria < 8) {
    frameHistoria++;
    maxTexto = 0;
    minTexto = 0;
  } 
  /* if (frameHistoria == 9 && sePuedeElegir) {
    if (mouseX > 50 && mouseX < 350 && mouseY > 125 && mouseY < 160) {
      frameHistoria = 10;
      CajasSelecciones();
    
    }else if(frameHistoria < 10){
    frameHistoria++;
    final1();
    }if (mouseX > 50 && mouseX < 350 && mouseY > 175 && mouseY < 215) {
      frameHistoria = 12;
      maxTexto = 0;
      CajasSelecciones();
     !aullidoDeLobo.isPlaying();
     aullidoDeLobo.Play;
      }if (frameHistoria = 12 && sePuedeElegir){
      if (mouseX > 50 && mouseX < 350 && mouseY > 125 && mouseY < 160) {
      frameHistoria = 13;
      CajasSelecciones2();
      }else if(frameHistoria < 13){
      frameHistoria++;
      final2 = 0;
    
     }if (mouseX > 50 && mouseX < 350 && mouseY > 175 && mouseY < 215) {
      frameHistoria = 15;
      CajasSelecciones2();
      }else if(frameHistoria > 11){
      frameHistoria++;
      final3 = 0
      */
}
function keyPressed(){
  if( key == 'p' ){
    musicaCirco.loop();
    musicaCirco.setVolumen(10);
  }




//  codigo hasta victoria 
  let velocidadAnimacion = 90;
let tiempo;
let fondo;
let desplazamiento;
let imagenesdeshagy = [];
let indiceshagy = 0;
let posicionx = -100;
let velocidadcaminar = 2.0;
let imagenesdevelma = [];
let indicevelma = 0;
let velocidadcaminarvelma = 2.0;
let tiempovelma;
let posicionxvelma = -180;
let velocidaddescoby = 1.9;
let posicionxscoby = -260;
let tiemposcoby;
let indicescoby = 0;
let imagenesscoby = [];
let imagenesdaphne = [];
let posicionxdaphne = 650;
let aparecedaphne = false;
let detenidodaphne = false;
let imagenesfred = [];
let posicionxfred = 600;
let aparecefred = false;
let detenerse = false;
let frameHistoria;
let hablaPandilla;
let hablaFred;
let hablaDaf;
let textoAPandilla;
let textoAFred;
let textoADaf;
let minTexto;
let maxTexto;
let sePuedeElegir = false;
let musicaCirco;
let musicabosque;
let mostrarOpciones = false;
let seleccion;
let fondoBosque;
let fondoCabana;
let fondoActual;

let personaje = ["Pandilla", "Fred", "Daphne"];

let textoPandilla = [
  "¿Qué ocurrió?",
  "Disculpe señor, ¿Usted sabe algo de lo que ocurrió?",
  "Vimos algo raro, vamos a investigar juntos"
];

let textoFred = [
  "Yo vi algo extraño por el bosque",
  "Tengan cuidado, no se separen",
  "Yo me quedo acá vigilando"
];

let textoDaf = [
  "¡Chicos! Yo también vi algo raro",
  "Vamos todos juntos a investigar",
  "No se separen por favor"
];

function preload() {
  fondo = loadImage('assets/fondoferia.png');
  for (let i = 0; i < 9; i++) {
    imagenesdeshagy[i] = loadImage('assets/shagy' + (i + 1) + '.png');
  }
  for (let i = 0; i < 8; i++) {
    imagenesdevelma[i] = loadImage('assets/velma' + (i + 1) + '.png');
  }
  for (let i = 0; i < 9; i++) {
    imagenesscoby[i] = loadImage('assets/scoby' + (i + 1) + '.png');
  }
  imagenesfred[0] = loadImage('assets/fredquieto.png');
  imagenesdaphne[0] = loadImage('assets/daphnequieta.png');
  musicaCirco = loadSound('assets/musicaCirco.mp3');
  musicabosque =loadSound('assets/musicabosque.mp3');
  fondobosque=loadImage('assets/bosque.png');
  fondoCabaña =loadImage('assets/cabana.png');
  fondoActual=fondo;
}

function setup() {
  createCanvas(800, 450);
  textSize(20);
  frameHistoria = 0;
  hablaPandilla = true;
  hablaFred = false;
  hablaDaf = false;
  textoAPandilla = 0;
  textoAFred = 0;
  textoADaf = 0;
  minTexto = 0;
  maxTexto = 0;
  sePuedeElegir = false;
 
}

function draw() {
  background(0);
  let desplazamiento = (millis() / velocidadAnimacion) % 800;

  image(fondoActual, -desplazamiento, 0, 800, 600);
image(fondoActual, -desplazamiento + 800, 0, 800, 600);
  if (aparecefred) {
    image(imagenesfred[0], posicionxfred, 250, 160, 200);
  }
  if (aparecedaphne) {
    image(imagenesdaphne[0], posicionxdaphne, 250, 160, 200);
  }

  if (posicionxscoby > 900 && !aparecefred && !aparecedaphne) {
    aparecefred = true;
    posicionx = -100;
    posicionxvelma = -180;
    posicionxscoby = -260;
  }

  if (aparecefred && posicionx > 460 && !detenerse) {
    detenerse = true;
    sePuedeElegir = true;
    frameHistoria = 0;
    hablaPandilla = true;
    hablaFred = false;
    hablaDaf = false;
    textoAPandilla = 0;
    minTexto = 0;
    maxTexto = 0;
  }

  if (detenerse && frameHistoria >= 5) {
    detenerse = false;
    aparecefred = false;
    aparecedaphne = true;
    frameHistoria = 6;
    minTexto = 0;
    maxTexto = 0;
  }

  if (aparecedaphne && posicionx > 500 && !detenidodaphne) {
    detenidodaphne = true;
    sePuedeElegir = true;
    frameHistoria = 6;
    hablaPandilla = false;
    hablaFred = false;
    hablaDaf = true;
    textoADaf = 0;
    minTexto = 0;
    maxTexto = 0;
  }

  tiempo = millis() / 250;
  if (!detenerse && !detenidodaphne) {
    indiceshagy = floor(tiempo) % 9;
    posicionx = posicionx + velocidadcaminar;
  } else {
    indiceshagy = 0;
  }
  image(imagenesdeshagy[indiceshagy], posicionx, 250, 150, 200);

  tiempovelma = millis() / 260;
  if (!detenerse && !detenidodaphne) {
    indicevelma = floor(tiempovelma) % 8;
    posicionxvelma = posicionxvelma + velocidadcaminarvelma;
  } else {
    indicevelma = 0;
  }
  image(imagenesdevelma[indicevelma], posicionxvelma, 250, 160, 201);

  tiemposcoby = millis() / 250;
  if (!detenerse && !detenidodaphne) {
    indicescoby = floor(tiemposcoby) % 7;
    posicionxscoby = posicionxscoby + velocidaddescoby;
  } else {
    indicescoby = 0;
  }
  image(imagenesscoby[indicescoby], posicionxscoby, 290, 170, 202);

  if (detenerse || detenidodaphne) {
    momentoEnLaHistoria();
    dibujarCajaDeTexto();
  }
  if (detenidodaphne && frameHistoria >=9){
    detenidodaphne = false;
    sePuedeElegir = true;
  }
  if (sePuedeElegir && !detenerse && !detenidodaphne && frameHistoria >=9){
    stroke(255);
    strokeWeight(3);
    fill(40,20,60,230);
    rect (200,100,400,250,20);
    noStroke();
    fill(255);
    textSize(22);
    textAlign(CENTER);
    text("¿A dónde quiere ir ?",400,140);
    textSize(20);
    text("ir a la izquierda",400,200);
    text("ir a la derecha",400,260);
  }
}

function momentoEnLaHistoria() {
  if(frameHistoria == 0){
    hablaPandilla = true;
    hablaFred = false;
    hablaDaf = false;
    textoAPandilla = 0;
  }
  if(frameHistoria == 1){
    hablaPandilla = true;
    textoAPandilla = 1;
  }
  if(frameHistoria == 2){
    hablaPandilla = false;
    hablaFred = true;
    textoAFred = 0;
  }
  if(frameHistoria == 3){
    hablaFred = true;
    textoAFred = 1;
  }
  if(frameHistoria == 4){
    hablaFred = true;
    textoAFred = 2;
  }
  if(frameHistoria == 5){
    hablaPandilla = true;
    hablaFred = false;
    textoAPandilla = 2;
  }
  if(frameHistoria == 6){
    hablaPandilla = false;
    hablaDaf = true;
    textoADaf = 0;
  }
  if(frameHistoria == 7){
    hablaDaf = true;
    textoADaf = 1;
  }
  if(frameHistoria == 8){
    hablaDaf = true;
    textoADaf = 2;
  }
}

function quePersonajeHabla() {
  if (hablaPandilla) return 0;
  if (hablaFred) return 1;
  if (hablaDaf) return 2;
}


function queColorDeFill() {
  if (hablaPandilla) return [60, 10, 90, 200];
  if (hablaFred) return [40, 80, 30, 200];
  if (hablaDaf) return [80, 20, 60, 200];
}

function queColorDeStroke() {
  if (hablaPandilla) return [255];
  if (hablaFred) return [255];
  if (hablaDaf) return [255];
}

function escribirConversacion() {
  if (hablaPandilla) {
    fill(255);
    text(textoPandilla[textoAPandilla].substring(minTexto, maxTexto), 50, 300, 300);
  } else if (hablaFred) {
    fill(255);
    text(textoFred[textoAFred].substring(minTexto, maxTexto), 50, 300, 300);
  } else if (hablaDaf) {
    fill(255);
    text(textoDaf[textoADaf].substring(minTexto, maxTexto), 50, 300, 300);
  }
  if (maxTexto < 100) maxTexto++;
}

function dibujarCajaDeTexto() {
  fill(queColorDeFill());
  stroke(queColorDeStroke());
  strokeWeight(2);
  rect(30, 280, 340, 100, 20);
  noStroke();
  
  fill(255);
  text(personaje[quePersonajeHabla()], 50, 265);
  
  escribirConversacion();
}

function mousePressed() {
  if (!sePuedeElegir) return;
  if (detenerse || detenidodaphne){
  if (frameHistoria < 9) {
    frameHistoria++;
    maxTexto = 0;
    minTexto = 0;
  }
}
else {
  if(mouseX > 220 && mouseX<580 && mouseY > 170 && mouseY < 230 ){
    seleccion = "izquierda";
    fondoActual=fondobosque;
    musicaCirco.stop();
    musicabosque.loop();
    sePuedeElegir = false;
  }
  if (mouseX > 220 && mouseX < 580 && mouseY > 230 && mouseY < 290){
    seleccion = "derecha";
    fondoActual=fondoCabaña;
    musicaCirco.stop();
    musicabosque.loop();
    sePuedeElegir=false;
  }
}
}
function keyPressed(){
  if( key == 'p' ){
    musicaCirco.loop();
  }

}



  



  

  
