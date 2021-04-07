
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




function preload(){
  
}



function setup() {
  createCanvas(800,400);
  

  engine = Engine.create();
	world = engine.world;

//level 1 1st
  block1 = new Box(300,200,30,40);
  block2 = new Box(330,200,30,40);
  block3 = new Box(360,200,30,40);
  block4 = new Box(390,200,30,40);
  block5 = new Box(420,200,30,40);
  block6 = new Box(450,200,30,40);
  block7 = new Box(480,200,30,40);
  //level 2 1st
  block8 = new Box(330,160,30,40);
  block9 = new Box(360,160,30,40);
  block10 = new Box(390,160,30,40);
  block11 = new Box(420,160,30,40);
  block12 = new Box(450,160,30,40);
  //level 3 1st
  block13 = new Box(360,120,30,40);
  block14 = new Box(390,120,30,40);
  block15 = new Box(420,120,30,40);
  //level 4 1st
  block16 = new Box(390,80,30,40)


  //level 1 2nd
  block17 = new Box(500,120,30,40);
  block18 = new Box(530,120,30,40);
  block19 = new Box(560,120,30,40);
  block20 = new Box(590,120,30,40);
  block21 = new Box(620,120,30,40);
  //level 2 2nd
  block22 = new Box(530,80,30,40);
  block23 = new Box(560,80,30,40);
  block24 = new Box(590,80,30,40);
  //level 3 2nd
  block25 = new Box(560,49,30,40);


  slate1 = new Ground(390,210,100,10);
  slate2 = new Ground(560,130,100,10);

  polygon = Bodies.circle(50,200,10)
  World.add(world,polygon)

  slingshot = new SlingShot(this.polygon,{x:100,y:200});

  
  ground = new Ground(400,370,500,25)

  Engine.run(engine);
}

function draw() {
  background("black");  
  Engine.update(engine);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  slate1.display();
  slate2.display();
  ground.display();
  slingshot.display();
  polygon.display();
  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
	}
	
  function mouseReleased(){
    slingshot.fly();
    }
	
