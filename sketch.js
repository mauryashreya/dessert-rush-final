var bgimages,food1,food2,food3,food4,food5,counter;
var chef,chefimg,shelfimg,sign1,food6,food7,customer1,customer2,customer3,plate;
var bubble,score=0;
var sprite1,sprite2,sprite3,sprite4,sprite5,sprite6,sprite7,plate1,food ,backgroundimg, quote1,quote2, served,shelf4 ;
var randOrder,customer,bubble1,order;
var floor;

function preload(){
     food1=loadImage("images/icecream1.png")
     food2=loadImage("images/food2.png")
     food3=loadImage("images/food3.png")
     food4=loadImage("images/food4.png")
     food5=loadImage("images/drink.png")
     food6=loadImage("images/icecream2.png")
     food7=loadImage("images/drink2.png")
     counter=loadImage("images/c12.png")
     chefimg=loadImage("images/c2.png")
     shelfimg=loadImage("images/bg2.jpg")
     sign1=loadImage("images/sign.png")
     customer1=loadImage("images/customer1.png")
     customer2=loadImage("images/customer2.png")
     customer3=loadImage("images/customer3.png")
     bubble=loadImage("images/bubble.png ")
     plate=loadImage("images/plate.png")
     backgroundimg=loadImage("images/pink.jpeg")
     //shelf4=loadImage("images/shelf2.PNG")
     quote1=loadImage("images/q1.jpg")
     quote2=loadImage("images/q2.jpg")
     floor=loadImage("images/floor.jpg")
}


function setup(){
    createCanvas(1536,722);
    
    chef=createSprite(550,350)
    chef.scale=0.5
    chef.addImage(chefimg)

    sprite1=createSprite(1950,380,20,20)

    sprite2=createSprite(620,195,20,20)
    
    sprite2.visible=false;

    sprite3=createSprite( 750,200,30,20)
   sprite3.visible=false;

    sprite4=createSprite(830,185,20,20)
   sprite4.visible=false;
    
    sprite5=createSprite(910,185,20,30)
   sprite5.visible=false;

    sprite6=createSprite(1070,380,20,20)
    
    sprite7=createSprite(990,180,20,30)
   sprite7.visible=false;
    plate1=createSprite(chef.x-30,chef.y+20,20,30)
    plate1.scale=0.2;
  plate1.visible=false;
    plate1.addImage(plate);
    food =createSprite(plate1.x,plate1.y,20,10)
   food.visible=false;
}
function draw(){
    background(backgroundimg)
    Customer();
    image(shelfimg,400,70,950,300)
    fill("lightblue");
    rect(500,220,600,20)
   //image(shelf4,500,220,600,20)
    image(food3, 710,170 ,60,60)
    image(food4,800,165,60,60)
    image(food5,880,155,60,70)
    image(food7,960,145,60,80)
    image(food2,580,175,70,50)
   plate1.x=chef.x-30;
   plate1.y=chef.y+20;
   food.x=plate1.x
   fill("purple")
   rect(445,95,110,110)
   image(quote1,450,100,100,100)
   fill("purple")
   rect(1145,95,160,210)
   image(quote2,1150,100,150,200)
   image(floor,1335,height-180,200,180)

    drawSprites()
    textSize(25)
    fill(190,0,254)
    strokeWeight(5)
    stroke("#3cB9FC")
    textStyle(BOLD)
    text("Score: "+score,220,70)
    image(floor,0,height-180,1335,180)
    image(counter,400,400,950,300)
    image(food1,1150,360,60,80)
    image(food6,1050,360,60,80)
    image(sign1,50,20,120,80)
 
    if (keyDown("LEFT_ARROW")){
        chef.x=chef.x-5
    }
    if (keyDown("RIGHT_ARROW")){
        chef.x=chef.x+5
    }
    if (keyDown("UP_ARROW")){
        chef.y=chef.y-5
    }
    if (keyDown("DOWN_ARROW")){
        chef.y=chef.y+5
    }
    if (mousePressedOver(sprite1)){
        plate1.visible=true;
        food.visible=true;
        food.addImage(food1);
        food.scale=0.07;
        food.y=plate1.y-20
        served=1
        
    }
    if (mousePressedOver(sprite2)){
        plate1.visible=true;
        food.visible=true;
        food.addImage(food2);
        food.scale=0.1;
        food.y=plate1.y-10
        served=2
    }
    if (mousePressedOver(sprite3)){
        plate1.visible=true;
        food.visible=true;
        food.addImage(food3);
        food.scale=0.1;
        food.y=plate1.y-10
        served=3
    }
    if (mousePressedOver(sprite4)){
        plate1.visible=true;
        food.visible=true;
        food.addImage(food4);
        food.scale=0.15;
        food.y=plate1.y-20
        served=4
    }
    if (mousePressedOver(sprite5)){
        plate1.visible=true;
        food.visible=true;
        food.addImage(food5);
        food.scale=0.06;
        food.y=plate1.y-30
        served=5
    }
    if (mousePressedOver(sprite6)){
        plate1.visible=true;
        food.visible=true;
        food.addImage(food6);
        food.scale=0.1;
        food.y=plate1.y-30
        served=6
    }
    if (mousePressedOver(sprite7)){
        plate1.visible=true;
        food.visible=true;
        food.addImage(food7);
        food.scale=0.04;
        food.y=plate1.y-30
        served=7
    }
    Score();
    

}




function Customer(){
    if (frameCount%300===0&& score<100){
        spawnCustomer()
    }
    else {
        if(frameCount%200===0 && score >100){
            spawnCustomer()
        }
    }
    
}

function Score(){
    if(customer!==undefined){
        if(customer.x===200){
            if (chef.x-customer.x<abs(50)) {
                if (served===randOrder){
                    food.visible=false;
                    customer.remove();
                    bubble1.remove();
                    order.remove();
                    score=score+0.5;
                }
            }
        }
        else{
            if (customer.x-chef.x<abs(50)) {
                if (served===randOrder){
                    food.visible=false;
                    customer.remove();
                    bubble1.remove();
                    order.remove();
                    score=score+0.5;
                }
            }
        } 
    }
}

function spawnCustomer(){
    customer=createSprite(200,400,100,200)

        bubble1=createSprite(customer.x+30,customer.y-220)
        bubble1.addImage(bubble)
        bubble1.scale=0.2;
        
        order=createSprite(120,300)
        order.x=customer.x+30
        order.y=customer.y-230
        
           
        randOrder=Math.round(random(1,7))
        
        switch(randOrder){
            case 1 :
            order.addImage(food1)
            order.scale=0.07
            break;
            
            case 2 :
            order.addImage(food2)
            order.scale=0.1
            break;

            case 3 :
            order.addImage(food3)
            order.scale=0.1
            break;

            case 4 :
            order.addImage(food4)
            order.scale=0.1
            break;

            case 5 :
            order.addImage(food5)
            order.scale=0.06
            break;

            case 6 :
            order.addImage(food6)
            order.scale=0.07
            break;

            case 7 :
            order.addImage(food7)
            order.scale=0.03
            break;
        }

        var rand=Math.round(random(1,3))
        switch(rand){
            case 1 :customer.addImage(customer1)
            customer.x=1400;
            order.x=1430;
            order.y=customer.y-280;
            bubble1.x=1430;
            bubble1.y=customer.y-270;
            customer.scale=0.4
            break;
            case 2 :customer.addImage(customer2)
            customer.scale=0.7
            break;
            case 3 :customer.addImage(customer3)
            customer.scale=0.6
            break;
        }
      customer.lifetime=300;
      order.lifetime=300;
      bubble1.lifetime=300;
}
