var climberim,doorim,ghostim,towerim,doorg,climberg,gamestate="play";
var climber,door,ghost,tower;
function preload(){
  towerim=loadImage("tower.png");
  ghostim=loadImage("ghost-standing.png");
  doorim=loadImage("door.png");
  climberim=loadImage("climber.png");
}
function setup(){
  createCanvas(600,600);
  tower= createSprite(300,300);
  tower.addImage(towerim);
tower.velocityY=9;
ghost=createSprite(200,200);
  ghost.addImage(ghostim);
  ghost.scale=0.5;
doorg=new Group();
  climberg=new Group();
}
function draw(){
 background("black");
  drawSprites();
if (gamestate=="play"){
  if(tower.y>600){
  tower.y=tower.width/2;
}
if (keyDown("space")){
  ghost.velocityY=-6;
}
ghost.velocityY=ghost.velocityY+0.8 ;
if(keyDown("right")){
  ghost.velocityX=ghost.velocityX+2;
}
if(keyDown ("left")){
  ghost.velocityX=ghost.velocityX-2;
}
windows();
if(ghost.isTouching(doorg)|| ghost.y>600){

  gamestate="end";  
}
}
if(gamestate=="end"){
textSize(35);
  fill("red");
  text("GAME OVER", 200,200);
  ghost.velocityX=0;
  ghost.velocityY=0;
  tower.velocityY=0;
  doorg.setVelocityYEach(0);
  climberg.setVelocityYEach(0);  
}
}
function windows(){
  if(frameCount%80==0){
    door=createSprite(100,100)
    door.addImage(doorim);
door.x=random(120,320); 
 door.velocityY=9;
climber=createSprite(door.x,door.y+50);
  climber.addImage(climberim); 
    climber.velocityY=9;
  doorg.add(door);
    climberg.add(climber);
  ghost.depth=door.depth;
    ghost.depth=ghost.depth+1;
  }
}