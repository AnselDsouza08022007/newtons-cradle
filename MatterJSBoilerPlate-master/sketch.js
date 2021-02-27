
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint= Matter.Constraint;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	roofObject = new roof (width/2, height/4, width/2, 20)

	bobObject = new bob (width/2, height/4+400, 40)

	bobObject2 = new bob (width/3, height/4+400, 40)

	bobObject3 = new bob (width/2.4, height/4+400, 40)
	
	bobObject4 = new bob (width/1.7, height/4+400, 40)

	bobObject5 = new bob (width/1.5, height/4+400, 40)
	
	rope1 = new rope (bobObject.body,roofObject.body, 100, 0)
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  roofObject.display();
  bobObject.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
}



