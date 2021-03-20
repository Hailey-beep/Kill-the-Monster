class Hero {

    constructor(x,y,r) {
        var options = {
            isStatic:false,
            restitution:0.6,
            density:1,
            frictionAir:1.1
        }
        this.body = Bodies.circle(x,y,r,options)
        this.r = r;
        //this.image = loadImage("");
        World.add(world,this.body)
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        /*imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)*/
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop()
    }
}