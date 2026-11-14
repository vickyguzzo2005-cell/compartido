class objeto{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.pistasEncontradas = 0;
    this.pistasYaApretadas = [];
  }

  hayTodasLasPistas() {
    return this.pistasEncontradas >= 3;
  }

  reiniciar() {
    this.pistasEncontradas = 0;
    this.pistasYaApretadas = [];
  }

  dibujar(){
    image(botas, 510, 300, 50, 50);
    image(cuchillo, 700, 90, 50, 50);
    image(trampa, 400, 200, 50, 50);
    image(guantes, 200, 50, 50, 50);
    image(peluca, 5, 250, 50, 50);
    image(fotos, 150, 325, 50, 50);
    
    if (mostrarPista === true){
      fill(255);
      rect(200, 270, 400, 80);
      fill(0);
      textAlign(CENTER, CENTER);
      textSize(16);
      text("El asesino transitó por una zona lodosa", 400, 310);
    }
    
    if (mostrarfotos === true){
      fill(255);
      rect(200, 270, 400, 80);
      fill(0);
      textAlign(CENTER, CENTER);
      textSize(16);
      text("Fotos de la víctima muerta", 400, 310);
    }
    
    if (mostrarpeluca === true){
      fill(255);
      rect(200, 270, 400, 80);
      fill(0);
      textAlign(CENTER, CENTER);
      textSize(16);
      text("Una peluca de payaso, pero el payaso real no la usaba", 400, 310);
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
    let idPista = "";

    if (mouseX > 510 && mouseX < 560 && mouseY > 300 && mouseY < 350){
      mostrarPista = true;
      mostrarfotos = false;
      mostrarpeluca = false;
      idPista = "botas";
    }
    else if (mouseX > 150 && mouseX < 200 && mouseY > 325 && mouseY < 375){
      mostrarfotos = true;
      mostrarPista = false;
      mostrarpeluca = false;
      idPista = "fotos";
    }
    else if (mouseX > 5 && mouseX < 55 && mouseY > 250 && mouseY < 300){
      mostrarpeluca = true;
      mostrarPista = false;
      mostrarfotos = false;
      idPista = "peluca";
    }
    else {
      mostrarPista = false;
      mostrarfotos = false;
      mostrarpeluca = false;
    }

    if (idPista !== "" && !this.pistasYaApretadas.includes(idPista)) {
      this.pistasYaApretadas.push(idPista);
      this.pistasEncontradas++;
    }
  }

  mouseReleased(){
    mostrarPista = false;
    mostrarfotos = false;
    mostrarpeluca = false;
  }
}
