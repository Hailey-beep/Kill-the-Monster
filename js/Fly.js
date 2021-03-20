class Fly {

    constructor(BodyA, PointB) {
        var options = {
            bodyA:BodyA,
            pointB:PointB,
            length:500,
            stiffness:0.016
        }
        this.BodyA = BodyA;
        this.PointB = PointB;
        this.fly = Constraint.create(options);
        World.add(world,this.fly)
    }
    display() {
        var posA = this.BodyA.position;
        var posB = this.PointB;

        push()
        //makes the constraint invisible
        strokeWeight(0)
        stroke("black")
        line(posA.x,posA.y,posB.x,posB.y)
        pop()
    }
}