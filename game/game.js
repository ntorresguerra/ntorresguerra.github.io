var rectx = 375;
var recty = 300;
var rectSize = 100;
var score = 0;
var gameState= "Level 1";
let bg;

function preload() {
  bg = loadImage('https://ntorresguerra.github.io/images/kirby-ringmouth.png');
}

function setup() {
  createCanvas(1000, 900);
  textAlign(LEFT);
  textSize(25);
} // end of setup

function draw() {
  background(bg);
  if (gameState=="Level 1"){
  levelOne();
  }
  if (gameState=="Level 2"){
   levelTwo();
  }
  if (gameState=="Level 3"){
   levelThree();
  }
  
  textSize(25);
  text(("Score:"+ score), width/20, height-20);
  
} //end of draw  

function levelOne(){
  text("Level 1", width/20, height-40);
  var distToRect= dist(rectx, recty, mouseX, mouseY);
  if (distToRect <rectSize/2){
    rectx = random(width);
    recty = random(height);
    fill (random(255), random(255), random(255));
    score= score+1;
  }
  if(score>8){
// go into level 2
 // fill(random(255));
 gameState="Level 2";
  }
  
  rect(rectx, recty, rectSize, rectSize)
  
} // end of level uno

function levelTwo(){
  background(bg);
  text("Level 2", width/20, height-40);
  var distToRect= dist(rectx, recty, mouseX, mouseY);
  if (distToRect <rectSize/2){
    fill (random(255), random(255), random(255));
    rectx = random(width);
    recty= random(height);
    score= score +1;
  }
  if(score>17){
// go into level 3
   gameState = "Level 3";

  }
  
//  line(rectx, recty, mouseX, mouseY);

  rect(rectx, recty, rectSize, rectSize);
  
} // end of level dos

function levelThree(){
  background(bg);
  text("Level 3", width/20, height-40);
  var distToRect= dist(rectx, recty, mouseX, mouseY);
  if (distToRect <rectSize/2){
    fill (random(255), random(255), random(255));
    rectx = random(width);
    recty= random(height);
    rectSize=rectSize -1;
    score= score +1;
  }
  if(score>75){
// go into level 4
//   gameState = "Level 4";
  }
  //line(rectx, recty, mouseX, mouseY);
  rect(rectx, recty, rectSize, rectSize);
} // end of level tres
