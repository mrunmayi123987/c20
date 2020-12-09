var fixrect , movingrect;




function setup() {


  createCanvas(800,400);
 fixrect= createSprite(400, 200, 70, 50);
 fixrect.shapeColor="red";
 movingrect = createSprite(600,300,50,70);
 movingrect.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  movingrect.y=mouseY;
movingrect.x=mouseX;

console.log(movingrect.x-fixrect.x);

if(movingrect.x-fixrect.x< fixrect.width/2+movingrect.width/2
   &&  fixrect.x-movingrect.x <fixrect.width/2+movingrect.width/2 
  &&  fixrect.y-movingrect.y <fixrect.height/2+movingrect.height/2
  && movingrect.y-fixrect.y <fixrect.height/2+movingrect.height/2
   ){
fixrect.shapeColor="green";
movingrect.shapeColor="green";
}
else{
  fixrect.shapeColor="red";
  movingrect.shapeColor="red";
}
  drawSprites();
}