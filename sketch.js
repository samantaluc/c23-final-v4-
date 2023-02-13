//Usamos “var” em todas as declarações, pois ela pode ser atualizada. Mas aqui, usaremos “const” em vez de “var”, 
//pois “const” não pode ser atualizado.

const Engine = Matter.Engine; //é usado para criar o mecanismo de física.
const World = Matter.World; //é usado para criar o mundo físico e adicionar objetos a ele. 
const Bodies = Matter.Bodies;//é usado para criar os objetos físicos que habitam o mundo, como um círculo, retângulo ou trapézio.
const Body = Matter.Body;
function setup() {
  createCanvas(400,400); //criar tela
  engine = Engine.create(); //criar mecanismo
  world = engine.world; //adicionar mecanismo ao mundo
   var ball_options = { //variavel local para opções da bola
    restitution: 0.95, //restituição = elasticidade
    frictionAir:0.01 // fricção do ar = a força da atmosfera aplicada
  }
   var ground_options ={ //variavel local para o chão
     isStatic: true //é estatico. Se true = não se mexe, se false= se mexe
   };
  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground);
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);
}
