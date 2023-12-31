function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color="";
}

function draw()
{
    image(video, 240, 180, 160, 140);
    tint(tint_color);
    stroke(0,0,0);
    fill(177,177,80);
    // code for the design
    circle(240,180,20);
    rect(240,180,10,150);
    circle(240,330,20);
    rect(240,320,170,10);
    circle(410,330,20);
    rect(400,180,10,150);
    circle(410,180,20);
    rect(240,180,170,10);
}

function take_snapshot()
{
    save("student_name.png");
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}