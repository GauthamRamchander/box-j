var canvas;
var music;
var box
var surface1,surface2,surface3,surface4
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
 
canvas = createCanvas(800,600);
box=createSprite(Math.round(random(20,750)),100,50,50)
box.velocityX=4
box.velocityY=9
surface1=createSprite(0,590,360,20)
surface1.shapeColor=("black")
surface2=createSprite(295,590,200,20)
surface2.shapeColor=("red")
surface3=createSprite(515,590,200,20)
surface3.shapeColor=("yellow")
surface4=createSprite(740,590,220,20)
surface4.shapeColor=("brown")
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    
    background(rgb(169,169,169));
    if(surface1.isTouching(box)&&box.bounceOff(surface1)){
        surface1.shapeColor=("orange")
        music.play()
    }
    if(surface2.isTouching(box)&&box.bounceOff(surface2)){
       surface2.shapeColor=("green")
       
    }
    if(surface4.isTouching(box)&&box.bounceOff(surface4)){
      
    }
    if(surface3.isTouching(box)){
        box.velocityX=0
        box.velocityY=0
        surface3.shapeColor=("blue")
       
    }
   
    edges=createEdgeSprites()
    box.bounceOff(edges)
    drawSprites();
    //create edgeSprite
    
       
     //add condition to check if box touching surface and make it box
     
}
