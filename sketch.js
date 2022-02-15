let particles = [];
let animals = [];
// let cat;


function setup() {
  createCanvas(800, 800);
  animals[0] = loadImage('assets/dog.png');
  animals[1] = loadImage('assets/cat.png');
  for (var i = 0; i < 400; i++) {
    particles.push(new Particle);
  }

}

function draw() {
  background(0);
for (var i = 0; i < particles.length; i++) {
  particles[i].move();
  particles[i].display();
  }

  // myParticle.move();
  // myParticle.display();

}


class Particle { //what data our functions have
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.size = random(25, 40);
    this.xSpeed = random(-1, 1);
    this.ySpeed = random(0.5, 2.5);
    this.image = int(random(2));
  }

  display(){
    // rect(this.x, this.y, this.size, this.size);
    image(animals[this.image], this.x, this.y, this.size, this.size);
  }

  move(){
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
    if (this.x > width || this.x <0){
      this.x = random(width);
    }
    if (this.y > height){
      this.y = -100;
    }
  }


}


//each particle is something like:
//let thing = {x: 430, y: 200, size: 100, xSpeed: -0.6, ySpeed: 0.35};
//print(thing.x);