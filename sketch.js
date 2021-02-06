var movingRect, fixedRect;
var rect1, rect2

function setup() {
  createCanvas(1000,500);

fixedRect = createSprite(400, 200, 50, 50);
fixedRect.shapeColor = "pink";

fixedRect.debug = true;

movingRect = createSprite(400, 200, 50, 50);
movingRect.shapeColor = "lavender";

movingRect.debug = true;

rect1 = createSprite(150,200,50,50);
rect1.shapeColor = "blue"

 
rect2 = createSprite ( 200,150,50,50);
rect2.shapeColor ="indigo"

}
function draw() {
  background("black");
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  //console.log(movingRect.x-fixedRect.x);
 // console.log(movingRect.width/2+fixedRect.width/2);

if (isTouching(movingRect,rect1)) {
  
  rect1.shapeColor = "red";
  movingRect.shapeColor = "orange";
} else { 
rect1.shapeColor = "yellow";
  movingRect.shapeColor = "teal";

}

drawSprites();
}
