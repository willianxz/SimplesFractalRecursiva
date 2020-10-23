function setup() {  
  createCanvas(windowWidth, windowHeight);  
}

function draw() {
  background(51);
  stroke(255);
  noFill();
  noLoop(); //O noLoop é pra fazer o draw executar apenas uma vez.
  
  drawCircle(width / 2, height / 2, 300); //Desenhe a ellipse  
}

//Ele ficara executando essa mesma função até obter a saida dela.
function drawCircle(x, y, d){
 ellipse(x, y, d, d); //Imprima a ellipse com o d recebido pela propria função.
 
 if(d > 10){ //Esse if é o que produz a saida final desse loop.
  drawCircle(x, y, d/ 2); //Note que o que envio para a mesma função é sempre
  print(d); //O d / 2, que terá sempre valores diferentes até o if ser falso.
 }
 
}
