rightWristX = 0;
leftwristY = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,470);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialised ');
}

function gotPoses(results)
{
    if(results.length>0){
        console.log(results);
        leftwristX = results[0].pose.leftwrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        difference = floor( leftwristX - rightWristY );
        console.log("leftWrist = " + leftwristX + "rightWrist = " + rightwristY + "difference = " + difference);
    }
}

function draw()
{
    background('#8a8787');
    textSize("Navya" , leftwristX, rightWristY);
    fill('#000000');
}