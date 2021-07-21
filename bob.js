class bob{
    constructor(x, y) {
        var options = {
            'restitution': 0.5,
            'density':1.0,
            'isStatic': true
        }
        
        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 50;

        World.add(world, this.body);
      }

      display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        circle(0, 0, this.radius);
        pop();
      }
}