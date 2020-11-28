const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var Ground1;
var box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
   
    Ground1 = new ground(200,370,400,10)
    box1 = new box(200,100,50,50)
    box2 = new box(240,300,50,80)
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
  Ground1.display()
  box1.display()
  box2.display()
}