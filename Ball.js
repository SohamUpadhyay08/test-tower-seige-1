class Ball{
    constructor(x,y,sides,radius) {
      var options = {
          isStatic:false,
          'restitution':0.7,
          'friction':0.1,
          'density':1.2
      }
      this.body = Bodies.polygon(x,y,sides,radius,options);
      this.sides = sides
      this.radius = radius
      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
			fill("yellow")
      polygon(0,0,this.sides,this.radius)
			pop()
    }
  };
  