class Plinko {
    constructor(x, y, r) {
      var options = {
        isStatic:true
      
      
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r= r;
      World.add(world, this.body);
  
    }
    display(){
      var paperpos = this.body.position;
      push();
      fill("white")
      translate(paperpos.x, paperpos.y);
      ellipseMode(RADIUS);
      ellipse(0,0,this.r,this.r);
      pop();
    }
  }
  