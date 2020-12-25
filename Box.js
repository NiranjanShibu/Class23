class Box{

constructor(x,y,width,height)
{

    var box_option = {

        density: 1,
        friction: 1
    
      }
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.body = bodies.rectangle(this.x, this.y, this.width, this.height, box_option);
      world.add(myWorld, this.body);

}

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        rotate(angle);
        fill("brown");
        rect(0, 0, this.width, this.height);
        pop();
    }
}