const Bodies=Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;


function preload(){
    polygonImg=loadImage("polygon.png");

}

function setup(){
createCanvas(900,400);
engine = Engine.create();
world = engine.world;
Engine.run(engine);
ball = Bodies.circle(50,200,20);
World.add(world,ball);

slingShot = new SlingShot(this.ball,{x:100,y:200});
ground = new Ground(450,390,900,20);
strand1 = new Strand(390,300,260,10);
// level one
block1 = new Block(290,235,30,40)
block2 = new Block(320,235,30,40)
block3 = new Block(350,235,30,40)
block4 = new Block(380,235,30,40)
block5 = new Block(410,235,30,40)
block6 = new Block(440,235,30,40)
block7 = new Block(470,235,30,40)
// level two
block8 = new Block(320,200,30,40)
block9 = new Block(350,200,30,40)
block10 = new Block(380,200,30,40)
block11 = new Block(410,200,30,40)
block12 = new Block(440,200,30,40)
// level three
block13 = new Block(360,180,30,40)
block14 = new Block(390,180,30,40)
block15 = new Block(420,180,30,40)
// level four 
block16 = new Block(390,160,30,40)



}

function draw(){
    background(0);
    ground.display();
    strand1.display();
    fill (" skyblue");
    block1.display();
    block2.display(); 
    block3.display();
    block4.display();  
    block5.display();  
    block6.display();  
    block7.display(); 
    fill ("pink") 
    block8.display();  
    block9.display();  
    block10.display();  
    block11.display();  
    block12.display(); 
    fill("lightgreen")
    block13.display(); 
    block14.display(); 
    block15.display(); 
    fill("gray")
    block16.display(); 

    imageMode(CENTER)
    image(polygonImg,ball.position.x,ball.position.y,40,40)

    slingShot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}