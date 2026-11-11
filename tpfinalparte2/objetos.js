class objeto{
  constructor(x, y){
  /*if ( mostrarPista == true ){
    fill(255);
    rect (200,280,400,100);
    fill(0);
    text("El asesino transito por una zona lodosa ",220,330);
   }*/
 this.x = x;
 this.y = y;
 
}
  
  dibujar(){
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
    text("El asesino transito por una zona lodosa ",220,330);
  }
}

dibujarLinterna() {
   this.x = constrain (mouseX, 0, width);
  this.y = constrain (mouseY, 0, height);

  push();
  imageMode(CENTER);
  image(linterna, this.x, this.y);
  pop();
}

mousePressed(){
   if (mouseX > 510 && mouseX < 560 &&  //botas
      mouseY > 300 && mouseY < 350 )
      (mouseX>700 && mouseX < 720 &&   //cuchillo
      mouseY > 90 && mouseY < 110)
      (mouseX>400 && mouseX < 420 &&   //trampa
      mouseY > 200 && mouseY < 220)
      (mouseX>200 && mouseX < 220 &&   // guantes
      mouseY > 50 && mouseY < 80)
      (mouseX>5 && mouseX < 25 &&       // peluca
      mouseY > 250 && mouseY < 280)
      (mouseX>150 && mouseX < 180 &&     // fotos
      mouseY > 325 && mouseY < 355)
       mostrarPista = true;
      
}

 mouseReleased(){
  mostrarPista = false ; 
 } 
}
