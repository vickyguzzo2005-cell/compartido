class finales{
  constructor(){
    this.textofinal = []
  }
}

dibujarFinalB(){
  textAlign(CENTER, CENTER);
  textSize(17);
  fill(193, 14, 14);
  rect(20, 30, 760, 340);
  fill(0);
  text(this.textofinal[0], 400, 150);
}

dibujarFinalM(){
  textAlign(CENTER, CENTER);
  textSize(17);
  fill(193, 14, 14);
  rect(20, 30, 760, 340);
  fill(0);
  text(this.textofinal[1], 400, 150);
}

}
