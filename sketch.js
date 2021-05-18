var roof1
var bob1,bob2,bob3,bob4,bob5
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var engine,world
var rope1,rope2,rope3,rope4,rope5
var roof2,roof3,roof4,roof5
function setup(){
	createCanvas(500,500)
	engine=Engine.create()
	world=engine.world

	roof1=new roof(100,200,50,10);
	roof2=new roof(140,200,50,10);
	roof3=new roof(180,200,50,10);
	roof4=new roof(220,200,50,10);
	roof5=new roof(260,200,50,10);

	bob1=new Bob(200,220,25)
	bob2=new Bob2(240,220,25)
	bob3=new Bob3(280,220,25)
	bob4=new Bob4(320,220,25)
	bob5=new Bob5(360,220,25)

	rope1=new Rope(bob1.body,roof1.body);
	rope2=new Rope(bob2.body,roof2.body);
	rope3=new Rope(bob3.body,roof3.body);
	rope4=new Rope(bob4.body,roof4.body);
	rope5=new Rope(bob5.body,roof5.body);
	
}

function draw(){
 Engine.update(engine)
	background("blue")
	roof1.display()
	bob1.display()
	bob2.display()
	bob3.display()
	bob4.display()
	bob5.display()

	rope1.display()
	roof2.display()
	roof3.display()
	roof4.display()
	roof5.display()
	
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()

}