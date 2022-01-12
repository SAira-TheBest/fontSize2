noseX =""
noseY =""
rightwristX =""
leftwristX =""
difference =""
function setup(){
video = createCapture(VIDEO)
video.size(550,500)

canvas = createCanvas(550,550)
canvas.position(560,150)
poseNet = ml5.poseNet( video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
console.log("HI");
}

function draw(){
background('#969A97')
stroke("black")
document.getElementById("font_sizes").innerHTML = "width and height of the font will be: " +difference+ "px"
square(noseX,noseY,difference)
} 

function gotPoses(results)
{     
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x
        console.log(noseX)
        noseY= results[0].pose.nose.y
        console.log(noseY)

        rightwristX= results[0].pose.rightWrist.x
        console.log(rightwristX)
        leftwristX= results[0].pose.leftWrist.x
        console.log(leftwristX)

        difference = floor (leftwristX - rightwristX)
        console.log(difference)
    }

}