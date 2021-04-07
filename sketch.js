
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,handle,bob1,bob2,bob3,bob4,bob5,wire1,wire2,wire3,wire4,wire5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
    var options={
		isStatic:true
	}
    ground=Bodies.rectangle(400,580,800,20,options)
    handle=new Handle(400,10)
	World.add(world,ground)
  bob1 = new Bob(50,10)
  wire1 = new Chain(bob1.body,handle.body,-150,0)
  bob2= new Bob(250,198)
  wire2= new Chain(bob2.body,handle.body,-75,-75)
  bob3= new Bob(350,210)
  wire3= new Chain(bob3.body,handle.body,0,-150)
  bob4= new Bob(400,150)
  wire4= new Chain(bob4.body,handle.body,575,-225)
  bob5= new Bob(400,210)
  wire5= new Chain(bob5.body,handle.body,70,-515)
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background("10");
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  drawSprites();
  bob1.display();
  wire1.display();
  bob2.display();
  wire2.display();
  bob3.display();
  wire3.display();
  //bob4.display();
  //wire4.display();
  bob5.display();
  wire5.display();
 handle.display();
}



