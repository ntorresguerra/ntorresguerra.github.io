function setup() {
createCanvas(600, 600);
background(161, 42, 42)
}
function draw() {

fill(10);//hair  
ellipse(300, 300, 275, 350);

fill(245, 217, 186);//head  
ellipse(300, 300, 225, 300);
   
fill(255); //eyes (white)
ellipse(230, 275, 65, 50);
ellipse(360, 275, 65, 50);

fill(110, 58, 29); //eyes
ellipse(230, 275, 50, 35);
ellipse(360, 275, 50, 35);

fill(10, 10, 10); //eyes (pupils)
ellipse(230, 275, 25, 15);
ellipse(360, 275, 25, 15);

fill(212, 155, 155); //mouth
ellipse(300, 400, 75, 20);

fill(10);//hiar right
bezier(300, 153, 70, 100, 200, 400, 165, 350);
   
fill(10)//left hair
bezier(300, 153, 530, 100, 400, 400, 435, 350);

fill(245, 217, 186); //nose
triangle(300, 300, 250, 350, 350, 350);

line(315, 365, 365, 385);//right moustache

line(285, 365, 245, 385);//left moustache

}
