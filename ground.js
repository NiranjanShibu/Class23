class Ground{

constructor(x,y,width,height)
{

    var ground_option = {

        isStatic: true
    
      }
      this.width = width;
      this.height = height;
    
      this.body = bodies.rectangle(x, y, this.width, this.height, ground_option);
      world.add(myWorld, this.body);

}

display()
{

    rectMode(CENTER);
    fill("green");
    rect(this.body.position.x, this.body.position.y, this.width, this.height);

}

}