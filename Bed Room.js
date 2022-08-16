function setup()
{
    canvas=createCanvas(640,420);
    canvas.position(450,200);
}
function preload()
{
    img=loadImage("Bed Room.jpg");
}
function draw()
{
    image(img,0,0,640,420);
}