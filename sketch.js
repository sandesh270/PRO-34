
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var back ;
var j;
function preload(){
 back = loadImage("sprites/images/GamingBackground.png");
 building = loadImage("sprites/images/building.png")
}

function setup() {
	createCanvas(2300,900);
	rectMode(CENTER);

	
	engine = Engine.create();
	world = engine.world;
	
   ground = new Ground(600,600,width-200,20);
	
   box1 = new Box(800,100,70,70);
   box2 = new Box(800,100,70,70);
   box3 = new Box(800,100,70,70);
   box4 = new Box(800,100,70,70);
   box5 = new Box(800,100,70,70);
   box6 = new Box(800,100,70,70);
   box7 = new Box(800,100,70,70);
   box8 = new Box(800,100,70,70);
   box9 = new Box(900,100,70,70);
   box10 = new Box(900,100,70,70);
   box11 = new Box(900,100,70,70);
   box12 = new Box(900,100,70,70);
   box13 = new Box(900,100,70,70);
   box14 = new Box(900,100,70,70);
   box15 = new Box(900,100,70,70);
   box16 = new Box(900,100,70,70);
   box17 = new Box(1000,100,70,70);
   box18 = new Box(1000,100,70,70);
   box19 = new Box(1000,100,70,70);
   box20 = new Box(1000,100,70,70);
   box21 = new Box(1000,100,70,70);
   box22 = new Box(1000,100,70,70);
   box23 = new Box(1000,100,70,70);
   box24 = new Box(1000,100,70,70);
   enemy = new Enemy(1250,200,500,500)
   ball = new Ball(200,200,440,240);
   shooter = new Box(200,200);
   //World.remove(world,shooter)
   rope = new Rope(ball.body,{x:300,y:50})
	Engine.run(engine);
  
}


function draw() {
  background(back);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  ball.display();
  enemy.display();
if(frameCount>18&&enemy.body.speed<3){
   imageMode(CENTER)
   image(building,900,300,300,600)
   fill("red")
textSize(50)
text("Monster's",800,100+70)
text("House",800,150+140)
text("Hey Super Hero in my city there is a monster kill him by   ",50,700)
text("dragging the mouse to him and make him fall off.",50,800)
text("🤞🤞🤞🤞 HOPE YOU DO IT AS SOON AS POSSIBLE",50,900)
}
if(frameCount>18&&enemy.body.speed>3){
   Matter.Body.setPosition(ball.body,{x:200,y:200})
   Matter.Body.setStatic(ball.body,true)
   fill(random(255),random(255),random(255))
   strokeWeight(30);
   textSize(70)
   text("YOU DID IT SUPERHERO!!!",800,290)
   for(j=0;j<2;j++){
      var y = 10;
      fill(random(255),random(255),random(255))
      var win = createSprite(random(100,2000),10,15,15)
      win.velocityY = 50;
      win.shapeColor = color(random(255),random(255),random(255))
   }
   drawSprites();
}


}
function mouseDragged(){
   if(enemy.body.speed<3){
   Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
   }
}




