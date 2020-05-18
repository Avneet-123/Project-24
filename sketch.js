var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper  , box1 , box2, box3;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create a Ground
	ground = new Ground(500, 650, 1000, 10);

	paper = new Paper(300,600,10);

  box1 = new Dustbin(860,600,10,80);
  box2 = new Dustbin(815,640,100,10);
  box3 = new Dustbin(770,600,10,80);
  
}


function draw() {
  
  Engine.update(engine);
  
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();

  box1.display();
  box3.display();
  box2.display();
  
  drawSprites();
 
}

function keyPressed()
{
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});
  }
}





