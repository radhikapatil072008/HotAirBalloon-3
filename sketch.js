var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var bird, birdImg
var obsGroup, birdGroup

function preload(){
bgImg = loadImage("assets/bg.png")
//Obs
birdImg = loadImage("assets/obsTop2.png")

street = loadImage("assets/obsBottom2.png")
blueBuild = loadImage("assets/obsBottom3.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){
createCanvas(600,400)
//background image
/*bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3
*/
//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(200,350,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

obsGroup = new Group()
birdGroup = new Group()
}

function draw() {
  
  background(bgImg);
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
          }

          if(keyDown("up")) {
            balloon.y=balloon.y -6 ;
          }

          if(keyDown("down")) {
            balloon.y=balloon.y +6 ;
          }

          if(keyDown("right")){
            balloon.x = balloon.x + 6;
          }

          if(keyDown("left")){
            balloon.x = balloon.x - 6;
          }
          //adding gravity
          // balloon.velocityY = balloon.velocityY + 0.1; 
            
          if(birdGroup.isTouching(balloon))
          { 
                balloon.destroy()
          }
      
         
        drawSprites();
        Bird()
        Obstacle()
        
}
function Bird()
{ 
if(frameCount % 90 === 0)
{
  //creating bird(obs)
bird = createSprite(600,random(10,350),20,20)
bird.addImage(birdImg)
bird.scale = 0.1
bird.velocityX = -3

bird.lifetime=200
birdGroup.add(bird)
}

}

function Obstacle()
{
  if(frameCount % 60 === 0)
  {
     obs = createSprite(600,400,50,50)
     obs.velocityX = -4
     obs.lifetime = 200
     var number=round(random(1,2))
     console.log(number)
     if(number === 1)
     {
      obs.addImage(blueBuild)
      obs.scale = 0.1
     }else
     {
       obs.addImage(street)
       obs.scale = 0.1
       
     }
     obsGroup.add(obs)
  }
}