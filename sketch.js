const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Background;
var ground, hero, monster, fly;
var blocks = [];

function preload() {
  //preload the images here
  //Background = loadImage("");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here

  ground = new Ground(800,700,1600,40);
  hero = new Hero(50,450,100);
  fly = new Fly(hero.body,{x:800,y:0});
  monster = new Monster(1300,600,80)

  //Makes the blocks
  for(var i=0;i<6;i++) {
    blocks.push(new Blocks(850,640-80*i))
  }
  for(var i=0;i<4;i++) {
    blocks.push(new Blocks(950,640-80*i))
  }
  for(var i=0;i<5;i++) {
    blocks.push(new Blocks(1050,640-80*i))
  }
  for(var i=0;i<7;i++) {
    blocks.push(new Blocks(1150,640-80*i))
  }

  console.log(blocks);
}

function draw() {
  background("lightblue");
  Engine.update(engine);

  ground.display();
  hero.display();
  fly.display();
  monster.display();

  for(var i=0;i<blocks.length;i++) {
    blocks[i].display();
  }
}

function mouseDragged() {
  //allows the player to drag the hero
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}