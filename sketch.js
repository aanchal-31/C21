var fixedRect, movingRect,fixedRect1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect1 = createSprite(200, 400, 50, 80);
  fixedRect1.shapeColor = "green";
  fixedRect1.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 
  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  else if(isTouching(movingRect,fixedRect1))
  {
    fixedRect1.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  else
  {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
    fixedRect1.shapeColor="green";
  }
  drawSprites();
}

