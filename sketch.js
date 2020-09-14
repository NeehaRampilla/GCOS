var car, wall;
var speed, weight;
function setup() {
  createCanvas(1000,600);
  wall= createSprite(900, 300, 50, 500);
  car= createSprite(50,300,50,50);
  wall.shapeColor="white";
  car.shapeColor="blue";
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
}

function draw() {
  background(0);  
if (wall.x-car.x<car.width/2+wall.width/2){
  car.velocityX=0;
  var deform =0.5* weight*speed*speed/22500;
  if(deform>=180){
    car.shapeColor="red";

  }
 if(deform<180 && deform>100){
    car.shapeColor="yellow";
    
  }
  if(deform<=100){
    car.shapeColor="green";
    
  }
}

  drawSprites();
}

