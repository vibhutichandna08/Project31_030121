class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    display(){
      var pos = this.body.position;
      push();
      strokeWeight(2);
      stroke(73, 35, 120);
      fill(156, 74, 255);
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  }
