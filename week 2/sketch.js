// variables
var counter = 0;
var shape1X = 20, shape1Y = 140;
var shape2X = 540, shape2Y = 140;
var shape3X = 240, shape3Y = 340;
var shape4X = 840, shape4Y = 340;
//colors
var redColor1, greenColor1, blueColor1;
var redColor2, greenColor2, blueColor2;
var redColor3, greenColor3, blueColor3;
var redColor4, greenColor4, blueColor4;
//shape size
var shape1Size = 150;
var shape2Size = 90;
var shape3Sizew = 60;
var shape3Sizeh = 70;
var shape4Sizew = 120;
var shape4Sizeh = 70;

// random colors
function setup()
{
    createCanvas(800,600);
    redColor1 = random(255);
    greenColor1 = random(255);
    blueColor1 = random(255);
    redColor2 = random(255);
    greenColor2 = random(255);
    blueColor2 = random(255);
    redColor3 = random(255);
    greenColor3 = random(255);
    blueColor3 = random(255);
    redColor4 = random(255);
    greenColor4 = random(255);
    blueColor4 = random(255);
}

//draw border
function draw()
{
    background(120);
    // top border
    noStroke();
    fill(100,200,300);
    rect(0,0,800,25);
    // left border
    rect(0,25,25,600);
    // bottom border
    rect(25,575,800,25);
    // right border
    rect(775,25,25,600);

    //random shapes and colors @ 1000
    if(counter > 1000)
    {
        shape1X = random(100,600);
        shape1Y = random(100,500);
        shape2X = random(100,600);
        shape2Y = random(100,500);
        shape3X = random(100,600);
        shape3Y = random(100,500);
        shape4X = random(100,600);
        shape4Y = random(100,500);

        redColor1 = random(255);
        greenColor1 = random(255);
        blueColor1 = random(255);
        redColor2 = random(255);
        greenColor2 = random(255);
        blueColor2 = random(255);
        redColor3 = random(255);
        greenColor3 = random(255);
        blueColor3 = random(255);
        redColor4 = random(255);
        greenColor4 = random(255);
        blueColor4 = random(255);
        counter = 0;
    }
    //counter
    counter++;
        // shape 1
        fill(redColor1,greenColor1,blueColor1);
        square(shape1X,shape1Y,shape1Size);

        // shape 2
        fill(redColor2,greenColor2,blueColor2);
        circle(shape2X,shape2Y,shape2Size);

        // shape 3
        fill(redColor3,greenColor3,blueColor3);
        rect(shape3X,shape3Y,shape3Sizew,shape3Sizeh);

        // shape 4
        fill(redColor4,greenColor4,blueColor4);
        rect(shape4X,shape4Y,shape4Sizew,shape4Sizeh);
}