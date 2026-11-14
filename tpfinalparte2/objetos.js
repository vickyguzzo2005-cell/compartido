class objeto{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  
  dibujar(){
    image(botas, 510, 300, 50, 50);
    image(cuchillo, 700, 90, 50, 50);
    image(trampa, 400, 200, 50, 50);
    image(guantes, 200, 50, 50, 50);
    image(peluca, 5, 250, 50, 50);
    image(fotos, 150, 325, 50, 50);
    
    //  Pista Botas
    if (mostrarPista === true){
      fill(255);
      rect(200, 280, 400, 100);
      fill(0);
      text("El asesino transitó por una zona lodosa", 220, 330);
    }
    
    // Pista Fotos
    if (mostrarfotos === true){
      fill(255);
      rect(200, 280, 400, 100);
      fill(0);
      text("Fotos de la víctima muerta", 220, 330);
    }
    
    //  Pista Peluca
    if (mostrarpeluca === true){
      fill(255);
      rect(200, 280, 400, 100);
      fill(0);
      text("Una peluca de payaso, pero el payaso real no la usaba", 220, 330);
    }
  }

  dibujarLinterna() {
    this.x = constrain(mouseX, 0, width);
    this.y = constrain(mouseY, 0, height);
    push();
    imageMode(CENTER);
    image(linterna, this.x, this.y);
    pop();
  }

  mousePressed(){
    // Botas
    if (mouseX > 510 && mouseX < 560 && mouseY > 300 && mouseY < 350){
      mostrarPista = true;
      mostrarfotos = false;
      mostrarpeluca = false;
    }

    // Fotos
    if (mouseX > 150 && mouseX < 200 && mouseY > 325 && mouseY < 375){
      mostrarfotos = true;
      mostrarPista = false;
      mostrarpeluca = false;
    }

    //  Peluca
    if (mouseX > 5 && mouseX < 55 && mouseY > 250 && mouseY < 300){
      console.log("¡Hiciste clic en la peluca!");
      mostrarpeluca = true;
      mostrarPista = false;
      mostrarfotos = false;
      
    }

    //  Cuchillo
    if (mouseX > 700 && mouseX < 750 && mouseY > 90 && mouseY < 140){
      mostrarPista = false;
      mostrarfotos = false;
      mostrarpeluca = false;
    }

    // Trampa
    if (mouseX > 400 && mouseX < 450 && mouseY > 200 && mouseY < 250){
      mostrarPista = false;
      mostrarfotos = false;
      mostrarpeluca = false;
    }

    //  Guantes
    if (mouseX > 200 && mouseX < 250 && mouseY > 50 && mouseY < 100){
      mostrarPista = false;
      mostrarfotos = false;
      mostrarpeluca = false;
    }
  }

  mouseReleased(){
    // Al soltar el mouse, TODOS los carteles desaparecen
    mostrarPista = false;
    mostrarfotos = false;
    mostrarpeluca = false;
  }
}
