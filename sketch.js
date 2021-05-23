var Bg1, Bg2;
var BG1,BG2;
var form,code,secure



function setup() {
  createCanvas(900,500);
  Bg1= createSprite(300,200,900,500)
  Bg1.addImage(BG1)
  Bg1.scale=1.5
  
  
  //secure = new Security()


}

function preload()
{
 BG1 = loadImage("Background.jpg");
 BG2 = loadImage("Background-2.png")
}

function draw() {
 //  background('cyan'); 

   
   
   setBG()
   
  drawSprites();
}

function setBG()
{
  if(mousePressedOver(Bg1))
  {
    
    Bg1.addImage(BG2)
    Bg1.scale=2.5
    form = new Form()
    form.display()
   QAs()
  }
}