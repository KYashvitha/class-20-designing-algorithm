var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 500,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect.velocityY = 3 ;
  movingRect.velocityY = -3 ; 
}

function draw() {
  background(0);  
 // movingRect.x=mouseX;
  //movingRect.y=mouseY;
  //if((movingRect.width/2+fixedRect.width/2)>(movingRect.x-fixedRect.x)&&
  //(movingRect.width/2+fixedRect.width/2)>(fixedRect.x-movingRect.x)&&
  //(movingRect.height/2+fixedRect.height/2)>(fixedRect.y-movingRect.y)&&
  //(movingRect.height/2+fixedRect.height/2)>(movingRect.y-fixedRect.y))
  //{
   // fixedRect.shapeColor = "red";
    //movingRect.shapeColor = "red";
  //}
  //else{
   // fixedRect.shapeColor = "green";
   // movingRect.shapeColor = "green";
  //}
  if((movingRect.width/2+fixedRect.width/2)>(movingRect.x-fixedRect.x)&&
   (movingRect.width/2+fixedRect.width/2)>(fixedRect.x-movingRect.x)){
       movingRect.velocityX = movingRect.velocityX*(-1);
       fixedRect.velocityX = fixedRect.velocityX*(-1);
   }
   if((movingRect.height/2+fixedRect.height/2)>(movingRect.y-fixedRect.y)&&
   (movingRect.height/2+fixedRect.height/2)>(fixedRect.y-movingRect.y)){
       movingRect.velocityY = movingRect.velocityY*(-1);
       fixedRect.velocityY = fixedRect.velocityY*(-1);
   }
  drawSprites();
}