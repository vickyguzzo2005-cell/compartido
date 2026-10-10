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
let hayTexto;
let texto = [
  "Entramos al bosque y hay dos caminos",
  "No debimos ignorar los aullidos de lobo",
  "Encontramos una cabaña, debe estar el asesino",
  "Mejor prevenir que lamentar", //cuando deciden desviarse
  "Entramos",
];
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
let elegir;
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
let hayTexto;
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
elegir = false;
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
}
function keyPressed(){
  if( key == 'p' ){
    musicaCirco.loop();
    musicaCirco.setVolumen(10);
  }

}



  

  
