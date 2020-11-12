//Create variables here
var dog
//, happyDog, database, foodS, foodStock,dog1
var dog1
function preload()
{
  dog=loadImage("images/dogImg.png")
  happydDog=loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
  createCanvas(500, 500);
  dog1=createsprite()
  dog1.addImage("dogImg1",dog)
}


function draw() {  

  drawSprites();
  //add styles here

}



