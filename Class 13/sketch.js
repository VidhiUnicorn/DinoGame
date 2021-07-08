var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cactus_group, cloud_group;

var cloud, cloudsGroup, cloudImage;
var o1,o2,o3,o4,o5,o6;

var PLAY, END;
var gamestate;

var newImage;

var score; 

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
  o1 = loadImage("obstacle1.png")
  o2 = loadImage("obstacle2.png")
  o3 = loadImage("obstacle3.png")
  o4 = loadImage("obstacle4.png")
  o5 = loadImage("obstacle5.png")
  o6 = loadImage("obstacle6.png")

}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -3 
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cactus_group = new Group();
  cloud_group = createGroup();

  PLAY = 0;
  END = 1;

  gamestate = PLAY; 
  score = 0; 
}

function draw() {
  background(180);
  
  text("Score : " + score, width-100,50);
 
  
  
  
  trex.collide(invisibleGround);
  


  drawSprites();

  if (gamestate === PLAY){
    score = score + Math.round(frameCount/60);
  
    if(keyDown("space") && trex.y>=100) {
      trex.velocityY = -10;

      
    }
    
    trex.velocityY = trex.velocityY + 0.8
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    spawnClouds();
  
    spawnObstacles();
  
    if (trex.isTouching(cactus_group )){
      gamestate = END; 
    }
  }
  else if (gamestate === END){
    ground.velocityX = 0;

  }
  
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    cloud.lifetime = 200;
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    cloud_group.add (cloud);

   
  
  
    }

    
}

function spawnObstacles(){

  if(frameCount % 100 === 0 ){
    obstacle = createSprite(600,170);
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    obstacle.scale = 0.6;
    var frames = Math.round(random(1,6));
    switch (frames){
      case 1 :
        obstacle.addImage(o1);
        break;

        case 2 :
          obstacle.addImage(o2);
          break;

        case 3 :
        obstacle.addImage(o3);
        break;

        case 4 :
        obstacle.addImage(o4);
        break;
        case 1 :
          obstacle.addImage(o1);
          break;
  
        case 5 :
        obstacle.addImage(o5);
        break;

        case 6 :
        obstacle.addImage(o6);
        break;

        default:
          break; 

        
    }
    cactus_group.add(obstacle); 


  }


}
