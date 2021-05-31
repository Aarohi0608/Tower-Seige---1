const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg, platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    polyImg = loadImage("polygon.png");
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(1015, 205, 220, 10);
    platform1 = new Ground(500, 330, 220, 10);

    box1 = new Box(940, 100, 30, 40);
    box2 = new Box(970, 100, 30, 40);
    box3 = new Box(1000, 100, 30, 40);
    box4 = new Box(1030, 100, 30, 40);
    box5 = new Box(1060, 100, 30, 40);
    box6 = new Box(1090, 100, 30, 40);

    box7 = new Box(970, 60, 30, 40);
    box8 = new Box(1000, 60, 30, 40);
    box9 = new Box(1030, 60, 30, 40);
    box10 = new Box(1060, 60, 30, 40);

    box11 = new Box(1000, 20, 30, 40);
    box12 = new Box(1030, 20, 30, 40);

    nbox1 = new Box(425, 300, 30, 40);
    nbox2 = new Box(455, 300, 30, 40);
    nbox3 = new Box(485, 300, 30, 40);
    nbox4 = new Box(515, 300, 30, 40);
    nbox5 = new Box(545, 300, 30, 40);
    nbox6 = new Box(575, 300, 30, 40);

    nbox7 = new Box(455, 290, 30, 40);
    nbox8 = new Box(485, 290, 30, 40);
    nbox9 = new Box(515, 290, 30, 40);
    nbox10 = new Box(545, 290, 30, 40);

    nbox11 = new Box(485, 250, 30, 40);
    nbox12 = new Box(515, 250, 30, 40);

    bird = new Bird(100,100);

    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);
    // imageMode(CENTER);
    // image(polyImg, polygon.position.x, polygon.position.y, 40, 40);
    slingShot = new SlingShot(bird.body, { x: 150, y: 200 });

    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);
    //pig3 = new Pig(810, 220);
    //log3 =  new Log(810,180,300, PI/2);
   
    // pig1 = new Pig(810, 350);
    //log1 = new Log(810,260,300, PI/2);
    //log6 = new Log(230,180,80, PI/2);
   
}

function draw() {
    background("black");
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    platform.display();
    platform1.display();
    slingShot.display(); 

    bird.display();

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

    nbox1.display();
    nbox2.display();
    nbox3.display();
    nbox4.display();
    nbox5.display();
    nbox6.display();
    nbox7.display();
    nbox8.display();
    nbox9.display();
    nbox10.display();
    nbox11.display();
    nbox12.display();


    //pig1.display();
    //log1.display();
    //polygon.display();
    //pig3.display();
    //log3.display();
    // log4.display();
    // log5.display();
    
    //log6.display();

}
function mouseDragged() {

    Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY });



}
function mouseReleased() {

    slingShot.fly();
}
