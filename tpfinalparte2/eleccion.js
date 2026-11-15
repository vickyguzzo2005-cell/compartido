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
      fill(174, 54, 255);
      rect(130, 200, 540, 50);
      fill(0);
      textSize(13);
      text(textoopciones[0], 400, 225);
      fill(174, 54, 255);
      rect(130, 270, 540, 50);
      fill(0);
      textSize(13);
      text(textoopciones[1], 400, 295);
    } else {
      if (this.respuesta) {
        fill(60, 160, 60, 230);
      } else {
        fill(160, 60, 60, 230);
      }
      rect(0, 0, width, height);
      fill(255);
      rect(100, 120, 600, 220);
      fill(0);
      textAlign(CENTER, CENTER);
      textSize(15);
      if (this.respuesta) {
        text(textofinal[0], 400, 180);
      } else {
        text(textofinal[1], 400, 180);
      }
      textSize(16);
      text("Presiona R para jugar de nuevo", 400, 240);
      fill(100, 130, 200);
      rect(280, 280, 240, 45, 8);
      fill(255);
      textSize(16);
      text("Ver créditos", 400, 303);
    }
  }

  mousePressed() {
    if (!this.mostrar) return;
    if (this.respuesta === null) {
      if (mouseX > 130 && mouseX < 670 && mouseY > 200 && mouseY < 250) {
        this.respuesta = true;
      }
      if (mouseX > 130 && mouseX < 670 && mouseY > 270 && mouseY < 320) {
        this.respuesta = false;
      }
    } else {
      if (mouseX > 280 && mouseX < 520 && mouseY > 280 && mouseY < 325) {
        estado = "creditos";
      }
    }
  }

  reiniciar() {
    this.mostrar = false;
    this.respuesta = null;
  }
}
