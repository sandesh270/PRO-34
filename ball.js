class Ball {
    constructor(x,y,width,height) {
      var options = {
          frictionAir: 0.001,
          density : 1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/images/Superhero-01.png")
      World.add(world, this.body);
    }
    display(){
      //var angle  = this.body.angle;
      var pos =this.body.position;
      push();
      //translate(pos.x,pos.y);
     // rotate(angle);
     //ectMode(CENTER);
     // fill("red");
      // ellipse(0, 0, this.width, this.height);
      imageMode(CENTER)
      image(this.image,pos.x,pos.y,this.width,this.height)
      pop();
    }
  }