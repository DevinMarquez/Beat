function Rythm1() {
  this.pos = createVector(50,100);
  this.r = 75;

  
  this.show = function() {
    fill(204,0,0);
    ellipse(this.pos.x,this.pos.y,this.r,this.r);
  }
}

function Rythm2() {
  this.pos = createVector(50,200);
  this.r = 75;

  
  this.show = function() {
    fill(61,145,64);
    ellipse(this.pos.x,this.pos.y,this.r,this.r);
  }
}

function Rythm3() {
  this.pos = createVector(50,300);
  this.r = 75;

  
  this.show = function() {
    fill(0,72,186);
    ellipse(this.pos.x,this.pos.y,this.r,this.r);
  }
}

function Rythm4() {
  this.pos = createVector(50,400);
  this.r = 75;

  
  this.show = function() {
    fill(191,0,255);
    ellipse(this.pos.x,this.pos.y,this.r,this.r);
  }
}
