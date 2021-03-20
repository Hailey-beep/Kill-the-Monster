class Blocks {

    constructor(x,y) {
        var options = {
            isStatic:false,
            restitution:0.6,
            density:1.2,
            frictionAir:0.04
        }
        this.body = Bodies.rectangle(x,y,80,80,options)
        this.width = 80;
        this.height = 80;
        World.add(world,this.body)
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push()
        fill("red")
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}