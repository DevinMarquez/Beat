var beat1,beat2,beat3,beat4;
var rythm1,rythm2,rythm3,rythm4;
var score = 0;
var lose = false;
var time;

function setup() {
  createCanvas(500, 500);
  //rythms
  rythm1 = new Rythm1();
  rythm2 = new Rythm2();
  rythm3 = new Rythm3();
  rythm4 = new Rythm4();
  //beats
  beat1 = new Beat1();
  beat2 = new Beat2();
  beat3 = new Beat3();
  beat4 = new Beat4();
}

function draw() {
  background(51);
  time = frameCount/100;
  textSize(20);
  fill(255);
  text("Score: " + score,220,30);
  text("Time: " + time,330,30);
  textSize(7);
  fill(255);
  text("Press the beats in rythm, but don't miss a beat, ot you'll lose!",20,30);
  //rythms
  rythm1.show();
  rythm2.show();
  rythm3.show();
  rythm4.show();
  //beats
  beat1.show();
  beat1.update();
  beat2.show();
  beat2.update();
  beat3.show();
  beat3.update();
  beat4.show();
  beat4.update();
  if(score < 0) {
    lose = true;
    frameCount = 0;
  }
  play();
  if(lose == true) {
    textSize(20);
    text("You Lose, press R to restart.", 140,250);
    beat1.vel = createVector(0,0);
    beat2.vel = createVector(0,0);
    beat3.vel = createVector(0,0);
    beat4.vel = createVector(0,0);
  }
} 

function play() {
  var r1 = floor(random(1,5));
  var r2 = floor(random(1,4));
  if(frameCount % 100 == 0) {
    if(r2 == 1) {
      if(r1 == 1) {
        beat1.vel = createVector(-2.5,0);
      } else if(r1 == 2) {
        beat2.vel = createVector(-2.5,0);
      } else if(r1 == 3) {
        beat3.vel = createVector(-2.5,0);
      } else if(r1 == 4){
        beat4.vel = createVector(-2.5,0);
      }
     } else {
      if(r1 == 1) {
        beat1.vel = createVector(-2.5,0);
        beat2.vel = createVector(-2,0);
      } else if(r1 == 2) {
        beat1.vel = createVector(-2.5,0);
        beat3.vel = createVector(-2,0);
      } else if(r1 == 3) {
        beat2.vel = createVector(-2.5,0);
        beat4.vel = createVector(-2,0);
      } else {
        beat3.vel = createVector(-2.5,0);
        beat4.vel = createVector(-2,0);
      }
    }
 }
  if(beat1.pos.x < 0) {
    beat1.pos.x = 450; 
    beat1.vel = createVector(0,0);
    score -= 3;
  }
  if(beat2.pos.x < 0) {
    beat2.pos.x = 450; 
    beat2.vel = createVector(0,0);
    score -= 3;
  }
  if(beat3.pos.x < 0) {
    beat3.pos.x = 450; 
    beat3.vel = createVector(0,0);
    score -= 3;
  }
  if(beat4.pos.x < 0) {
    beat4.pos.x = 450; 
    beat4.vel = createVector(0,0);
    score -= 3;
  }
}

function mousePressed() {
  var d1 = dist(rythm1.pos.x,rythm1.pos.y,mouseX,mouseY);
  var d2 = dist(rythm2.pos.x,rythm2.pos.y,mouseX,mouseY);
  var d3 = dist(rythm3.pos.x,rythm3.pos.y,mouseX,mouseY);
  var d4 = dist(rythm4.pos.x,rythm4.pos.y,mouseX,mouseY);
  var d5 = dist(beat1.pos.x,beat1.pos.y,mouseX,mouseY);
  var d6 = dist(beat2.pos.x,beat2.pos.y,mouseX,mouseY);
  var d7 = dist(beat3.pos.x,beat3.pos.y,mouseX,mouseY);
  var d8 = dist(beat4.pos.x,beat4.pos.y,mouseX,mouseY);
  
  //rythms
  //beats
  if(lose == false) {
    if(d5 < beat1.r/2 && d1 < rythm1.r/2) {
      score += 1;
      beat1.pos.x = 450;
    }
    if(d6 < beat2.r/2 && d2 < rythm2.r/2) {
       score += 1;
      beat2.pos.x = 450;
    }
    if(d7 < beat3.r/2 && d3 < rythm3.r/2) {
      score += 1;
      beat3.pos.x = 450;
    }
    if(d8 < beat4.r/2 && d4 < rythm4.r/2) {
      score += 1;
      beat4.pos.x = 450;
    }
  }
}

function keyPressed() {
  if(keyCode == 82 && lose == true) {
    score = 0;
    frameCount = 0;
    lose = false;
    beat1.pos.x = 450;
    beat2.pos.x = 450;
    beat3.pos.x = 450;
    beat4.pos.x = 450;
  }
}
