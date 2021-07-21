class rope{
    constructor(body1,body2,offsetX,offsetY){

        var options = {
        bodyA: body1,
        bodyB: body2,
        pointB:{x:this.offsetX, y:this.offsetY}
        }

        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.body1.position;
        var pointB = this.chain.body2.position;
        stroke('white');
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}