const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boogy4,boogy1,boogy2,boogy3,boogy5,boogy6,ground,rock1;

var chain1,chain2,chain3,chain4,chain5;
var flag=0;

function preload(){
    bg=loadImage("images/bg.jpg")
    sound1=loadSound("sound/train_crossing.mp3")
    sound2=loadSound("sound/train.mp3")
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,380,1200,20);
   
    boogy1= new Boogy(50,170,50,50);
    boogy2= new Boogy(150,170,50,50)
    boogy3= new Boogy(250,170,50,50)
    boogy4= new Boogy(350,170,50,50)
    boogy5= new Boogy(450,170,50,50)
    boogy6= new Boogy(550,170,50,50)

    rock1=new Rock(1100,200,100,100)

    chain1=new Chain(boogy1.body,boogy2.body)
    chain2=new Chain(boogy2.body,boogy3.body)
    chain3=new Chain(boogy3.body,boogy4.body)
    chain4=new Chain(boogy4.body,boogy5.body)
    chain5=new Chain(boogy5.body,boogy6.body)

  

}

function draw(){
   
        background(bg);
    

     
        
    Engine.update(engine);
    //strokeWeight(4);
  ground.display();
  boogy1.display();
  boogy2.display();
  boogy3.display();
  boogy4.display();
  boogy5.display();
  boogy6.display();

  

    chain1.display();  
    chain2.display();  
    chain3.display();  
    chain4.display();  
    chain5.display();  

    rock1.display();

    var collision=Matter.SAT.collides(boogy6.body,rock1.body)
    if(collision.collided){
        flag=1
    }
    if(flag===1){
        textSize(30);
        stroke(3)
        fill("blue")
        text("crashed",500,200)
        sound1.play();
    }
    

}


function keyPressed(){
    if(keyCode === RIGHT_ARROW ){
        Matter.Body.applyForce(boogy6.body, {x:boogy6.body.position.x,y:boogy6.body.position.y}, {x:0.5,y:0})
        sound2.play();
    }
}