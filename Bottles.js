object=[];
check="";
function Start()
{
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
}
function setup()
{
    canvas=createCanvas(640,420);
    canvas.position(450,250);
}
function preload()
{
    img=loadImage("Bottles.jpg");
}
function draw()
{
    image(img,0,0,640,420);
    if(check=="true")
    {
        r=Math.random(255);
        g=Math.random(255);
        b=Math.random(255);

        for(i=0;i<object.length;i++)
        {
                fill(r,g,b);
                persentage=Math.floor(object[i].confidence*100);
                text(object[i].label+" "+persentage+"%",object[i].x,object[i].y);
                noFill();
                stroke(r,g,b);
                rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }

}
function modelLoaded()
{
    console.log("Model Loaded!");
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results) 
{
    if (error) 
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        object=results;
        check="true";
    }
}
