const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var player;
var ground1, ground2, ground3;

var block15, block16, block17, block18, block19, block20, block21;
var block22;
var sling;
var player;

var ball;
var img;
var backgroundImg;


var bg = "bg1.png";

function preload(){
  img = loadImage("hexagon (1).png");
  getBackgroundImg();

}

function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
    world = engine.world;


  block1 = new Block(600,260,30,30);
  block2 = new Block(570,260,30,30);
  block3 = new Block(540,260,30,30);
  block4 = new Block(630,260,30,30);
  block5 = new Block(660,260,30,30);



  block6 = new Block(585,220,30,30);
  block7 = new Block(555,220,30,30);
  block8 = new Block(615,220,30,30);
  block9 = new Block(645,220,30,30);



  bolck10 = new Block(600,170,30,30);
  block11 = new Block(570,180,30,30);
  block12 = new Block(630,180,30,30);


  block13 = new Block(600,140,30,30);

  ground1 = new Ground(600,285,200,20);
  ground2 = new Ground(900,195,200,20);
  ground3 = new Ground(750, 600, 1500,50)


  block14 = new Block(900,170,30,30);
  block15 = new Block(930,170,30,30);
  block16 = new Block(870,170,30,30);
  block17 = new Block(840,170,30,30);
  block18 = new Block(960,170,30,30);

  block19 = new Block(900,140,30,30);
  block20 = new Block(930,140,30,30);
  block21 = new Block(870,140,30,30);

  block22 = new Block(900,110,30,30);

  player = new Player(50,200,30,30);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  sling = new Chain(this.ball,{x:200, y:200});

}

function draw() {
  if (backgroundImg)
    background(backgroundImg);
    
    
  Engine.update(engine);

  fill(rgb(135, 205, 236));

  textSize(45);
  fill("turquoise")
  text("TOWER SIEGE GAME",500,50)

  textSize(30);
  fill("turquoise")
  text("By Priyam Pani",500,100)

  textSize(20);
  fill("limegreen")
  text("Press Space to Try again",100,500)

  textSize(20);
  fill("limegreen")
  text("Drag The Ball and target to the blocks",100,520)

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("lightBlue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill("lightPink");
  bolck10.display();
  block11.display();
  block12.display();

  fill("black");
  block13.display();

  fill(rgb(135, 205, 236));
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  fill("lightGreen");

  block19.display();
  block20.display();
  block21.display();

  
  fill("lime");
  block22.display();

  ground1.display();
  ground2.display();
  ground3.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();

  block15.score();


  imageMode(CENTER);
  image(img,ball.position.x,ball.position.y,40,40);

  sling.display();
}


function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
	if(keyCode === 32)
	{
    sling.attach(this.ball);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  if (hour>=06 && hour<=18){
      bg = "bg1.png";
  }
  else {
      bg = "bg2.jpg";
  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}