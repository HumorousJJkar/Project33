class Particle {
    constructor(x, y, r) {
      var options = {
        isStatic:false,
        restitution:0.3,
        friction: 1.0,
        density:0.8
      
      }
      this.color = color(random(0,255), random(0,255), random(0,255))
      this.body = Bodies.circle(x,y,r,options);
      this.r= r;
      World.add(world, this.body);
  
    }
    display(){
      var paperpos = this.body.position;
      push();
      fill(this.color)
      translate(paperpos.x, paperpos.y);
      ellipseMode(RADIUS);
      ellipse(0,0,this.r,this.r);
      pop();
    }
  }
  