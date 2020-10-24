
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyImg;
var mango1;
var tree1;
var stone1;
var chain;

function preload()
{
	boyImg=loadAnimation("boy.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	boy=createSprite(250, 550, 10, 10);
	boy.addAnimation("boy",boyImg);
	boy.scale=0.15;
	engine = Engine.create();
  world = engine.world;
  
	//Create the Bodies Here.
    tree1=new Tree(950, 325, 10, 10);
    mango1=new Mango(1200, 200, 10, 10);
    mango2=new Mango(1100, 120, 10, 10);
    mango3=new Mango(940, 180, 10, 10);
    mango4=new Mango(960, 220, 10, 10);
    mango5=new Mango(980, 120, 10, 10);
    mango6=new Mango(1100, 240, 10, 10);
    mango7=new Mango(800 , 190, 10, 10);
    mango8=new Mango(880, 240, 10, 10);
    mango9=new Mango(860, 220, 10, 10);
    mango10=new Mango(840, 300, 10, 10);
    stone1=new Stone(175, 200, 10, 10);
    chain = new Chain(stone1.body,{x:185, y:470});

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255,255,255);

  tree1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  chain.display();    

  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);
  detectCollision(stone1, mango6);
  detectCollision(stone1, mango7);
  detectCollision(stone1, mango8);
  detectCollision(stone1, mango9);
  detectCollision(stone1, mango10);

  drawSprites();
}
function keyPressed(){
	if(keyCode === 32){
	  Matter.Body.setPosition(stone1.body, {x:235, y:420});
	  launcherObject.attach(stone1.body);
	}
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  chain.fly();
}

function detectCollision(stone, mango){
  mangoPos=mango.body.position;
  stonePos=stone.body.position;

  var distance=dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y)
  if(distance <= mango.diameter + stone.diameter)
  {
    Matter.Body.setStatic(mango.body, false);
  }
}