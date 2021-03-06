function Beat1() {
  this.pos = createVector(450,100);
  this.vel = createVector(0,0);
  this.r = 50;
  
  this.show = function() {
    fill(204,0,0);
    ellipse(this.pos.x,this.pos.y,this.r,this.r);
  }
  
  this.update = function() {
    this.pos.add(this.vel);
  }
}

function Beat2() {
  this.pos = createVector(450,200);
  this.vel = createVector(0,0);
  this.r = 50;
  
  this.show = function() {
    fill(61,145,64);
    ellipse(this.pos.x,this.pos.y,this.r,this.r);
  }
  
  this.update = function() {
    this.pos.add(this.vel);
  }
}

function Beat3() {
  this.pos = createVector(450,300);
  this.vel = createVector(0,0);
  this.r = 50;
  
  this.show = function() {
    fill(0,72,186);
    ellipse(this.pos.x,this.pos.y,this.r,this.r);
  }
  
  this.update = function() {
    this.pos.add(this.vel);
  }
}

function Beat4() {
  this.pos = createVector(450,400);
  this.vel = createVector(0,0);
  this.r = 50;
  
  this.show = function() {
    fill(191,0,255);
    ellipse(this.pos.x,this.pos.y,this.r,this.r);
  }
  
  this.update = function() {
    this.pos.add(this.vel);
  }
}
