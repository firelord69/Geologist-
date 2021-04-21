
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane = new Plane(400,480,800,50)
	hammer = new Hammer(20,20);	
	stone = new Stone(200,200,-200/2);
	rubber = new Rubber(500,200,299/2);
	Iron = new Iron(680,200,50,60);

	//Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  
  
 plane.display();
 hammer.display();
 stone.display();
 rubber.display();
 Iron.display();
}



