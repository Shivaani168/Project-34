const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Box1
var Box2 
var Box3 
var Box4 
var Box5 
var Box6 
var Box7 
var Box8 
var Box9 
var Box10 
var Box11
var Box12 
var Box13
var Box14
var Box15
var Box16
var Box17
var Box18 
var Box19
var Box20
var Box21
var Box22
var Box23
var Box24
var Box25
var Box26;
var hero,monster,rope,ground;

function preload() {
Background = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(1800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  Box1 = new Box(600, 100, 70, 70);
  Box2 = new Box(900, 100, 70, 70);
  Box3 = new Box(900, 100, 70, 70);
  Box4 = new Box(900, 100, 70, 70);
  Box5 = new Box(900, 100, 70, 70);
  Box6 = new Box(900, 100, 70, 70);
  Box7 = new Box(800, 100, 70, 70);
  Box8 = new Box(800, 100, 70, 70);
  Box9 = new Box(800, 100, 70, 70);
  Box10 = new Box(800, 100, 70, 70);
  Box11 = new Box(800, 100, 70, 70);
  Box12 = new Box(800, 100, 70, 70);
  Box13 = new Box(800, 100, 70, 70);
  Box14 = new Box(800, 100, 70, 70);
  Box15 = new Box(700, 100, 70, 70);
  Box16 = new Box(700, 100, 70, 70);
  Box17 = new Box(700, 100, 70, 70);
  Box18 = new Box(700, 100, 70, 70);
  Box19 = new Box(700, 100, 70, 70);
  Box20 = new Box(700, 100, 70, 70);
  Box21 = new Box(600, 100, 70, 70);
  Box22 = new Box(600, 100, 70, 70);
  Box23 = new Box(600, 100, 70, 70);
  Box24 = new Box(600, 100, 70, 70);
  Box25 = new Box(600, 100, 70, 70);
  Box26 = new Box(600, 100, 70, 70);

}

function draw() {
  background(Background);
  background
  Engine.update(engine);
  ground.display();
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display()
  Box5.display()
  Box6.display()
  Box7.display()
  Box8.display()
  Box9.display()
  Box10.display()
  Box11.display()
  Box12.display()
  Box13.display()
  Box14.display()
  Box15.display()
  Box16.display()
  Box17.display()
  Box18.display()
  Box19.display()
  Box20.display()
  Box21.display()
  Box22.display()
  Box23.display()
  Box24.display()
  Box25.display()
  Box26.display()

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}


