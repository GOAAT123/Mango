class Mango{
    constructor(x, y, diameter) {
      var options={
        isStatic:true,
        restitution:0,
        friction:1,
    }    
        this.image = loadImage("mango.png");
        this.body = Bodies.circle(x, y, diameter, options);
        this.diameter = diameter;
        World.add(world, this.body);
    }
    
        display() {
            var pos =this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER);
            // fill(255, 0, 255);
            image(this.image, 0, 0, 60, 60);
            pop();
          }
        };