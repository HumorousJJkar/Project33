const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var divisions = []
var plinkos = []
var particle;
var score = 0;
var turn = 0;
var gameState = "play";
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,790,800,20);
  for(var x=0;x<=800;x=x+80){
    division = new Division(x,650,10,300);
    divisions.push(division);
  }
  for(var x=45;x<=800;x=x+50){
    plinko = new Plinko(x,75,5);
    plinkos.push(plinko);
  }
  for(var x=20;x<=790;x=x+50){
    plinko = new Plinko(x,175,5);
    plinkos.push(plinko);
  }
  for(var x=45;x<=800;x=x+50){
    plinko = new Plinko(x,275,5);
    plinkos.push(plinko);
  }
  for(var x=20;x<=790;x=x+50){
    plinko = new Plinko(x,375,5);
    plinkos.push(plinko);
  }
  Engine.run(engine);
}

function draw() {

  background(0);  
  textSize(35);
  fill("white");
  text("score = " +score, 20,40);
  text("500",10,550)
  text("500",90,550)
  text("500",170,550)
  text("500",250,550)
  text("100",330,550)
  text("100",410,550)
  text("100",490,550)
  text("200",570,550)
  text("200",650,550)
  text("200",730,550)
  ground.display();
  if(gameState==="end"){
    textSize(100);
    text("Game Over!",150,250)
  }

  for(var i in divisions){
    divisions[i].display();
  }
  for(var i in plinkos){
    plinkos[i].display();
  }
  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
        score = score+500;
        particle=null;
        if(turn>=5){
          gameState="end"
        }
      }
      if(particle.body.position.x>301&&particle.body.position.x<600){
        score = score+100;
        particle=null;
        if(turn>=5){
          gameState="end"
        }
      }
      if(particle.body.position.x>601&&particle.body.position.x<800){
        score = score+200;
        particle=null;
        if(turn>=5){
          gameState="end"
        }
      }
    }
  }
  
}

function keyPressed(){
  if(keyCode===DOWN_ARROW&&gameState==="play"){
    particle= new Particle(random(100,700),0,10);
    turn=turn+1;
  }
    
  }