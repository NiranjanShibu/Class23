const engine = Matter.Engine;
const world = Matter.World;
const bodies = Matter.Bodies;

var myEngine, myWorld, ball;
var ground;
var box1, box2;

function setup() {
  myEngine = engine.create();
  myWorld = myEngine.world;

  createCanvas(800,400);
/*
  var ball_options = {

    restitution: 1

  }
  ball = bodies.circle(200, 200, 10, ball_options);
  world.add(myWorld, ball);
*/
  ground = new Ground(400, 398, 800, 15);
  box1 = new Box(200, 200, 100, 100);
  box2 = new Box(250, 90, 150, 100);
}

function draw() {
  background(255,255,255); 
  engine.update(myEngine);
  /*ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 10, 10);*/
  ground.display();
  box1.display();
  box2.display();
}