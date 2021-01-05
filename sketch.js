var fixedRect, movingRect;
var a , b , c , d;



function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(500, 100, 50, 50);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;
  
  movingRect = createSprite(200, 800,50,50);
  movingRect.shapeColor = "yellow";
  movingRect.debug = true;
  
  a = createSprite(100,100,50,50);
  a.shapeColor = "red";
  a.debug = true;
  
  b = createSprite(200,100,50,50);
  b.shapeColor = "red";
  b.debug = true;
  
  c = createSprite(300,100,50,50);
  c.shapeColor = "red";
  c.debug = true;
  
  d = createSprite(400,100,50,50);
  d.shapeColor = "red";
  d.debug = true;
  

  movingRect.velocityY = -5;
  b.velocityY = +5;
}

function draw() {
  background(0,0,0);  
 
 bounceOff(movingRect,a);
 bounceOff(movingRect,b);
 


  /*movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(movingRect,b))
  {
    movingRect.shapeColor = "blue";
    b.shapeColor = "blue";
  }
  else
  {
    movingRect.shapeColor = "green";
  b.shapeColor = "green";
  }*/
  
  drawSprites();
}

function isTouching(k,v)
{
  if (k.x - v.x < k.width/2 + v.width/2
    && v.x - k.x < k.width/2 + v.width/2
    && k.y - v.y < k.height/2 + v.height/2
    && v.y - k.y < k.height/2 + v.height/2) 
    {
      return true;
  
}
else {
  return false;
}
}

function bounceOff(movingRect,fixedRect)
{
if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
movingRect.velocityX = movingRect.velocityX * (-1);
fixedRect.velocityX = fixedRect.velocityX * (-1);
}
if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
&& fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
movingRect.velocityY = movingRect.velocityY * (-1);
fixedRect.velocityY = fixedRect.velocityY * (-1);
}
}