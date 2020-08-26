var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage,cloudImage;
var obsatcleImage2;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  
  
  cloudImage = loadImage("cloud.png")
  
  obsatcleImage2 = loadImage("obstacle2.png")
  
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(0,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,600,20);
  ground.addImage("ground",groundImage);
  ground.velocityX = 0;
  
  invisibleGround = createSprite(200,190,600,10);
  invisibleGround.visible = false;
}

function draw() {
  background(400);
  console.log(World.frameCount)
  if(keyDown("space") && trex.y>=160) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  trex.velocityX = 5;
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(trex.x>500&&World.frameCount % 200 === 0){
   
    ground.x=trex.x;
     
    }
 
  
  if(trex.x>500){
invisibleGround.x=trex.x;

}
 

  
 camera.position.x = trex.x;
 
  spawnobstacles()
  spawnclouds()
  trex.collide(invisibleGround);
  drawSprites();
  

}
function spawnclouds(){
if(World.frameCount % 60 === 0) {
var cloud;
cloud = createSprite(trex.x+400,60,20,20)  ;
cloud.addImage(cloudImage);
cloud.velocityX=0;
cloud.scale= 0.7;
  }

}

function spawnobstacles(){
  if(World.frameCount % 100 === 0) {
    var obstacle;
    obstacle = createSprite(trex.x+400,160,20,20);
    obstacle.addImage(obsatcleImage2);
    obstacle.velocityX =0;
    obstacle.scale = 0.7; 
  }
}






