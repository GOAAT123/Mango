class Stone{
constructor(x, y, diameter) {
  var options={
    isStatic:false,
    restitution:0,
    friction:1,
    density:1.2
}    
    this.image = loadImage("stone.png");
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
        fill(255, 0, 255);
        image(this.image, 0, 0, 55, 55);
        pop();
      }
    };