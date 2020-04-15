class ConstraintMake{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length : 1,
            stiffness:0.05
        }
        this.body = Constraint.create(options)
        World.add(world,this.body);
    }
    display(){
        strokeWeight(4);
        line(this.bodyA.body.position.x, this.bodyA.body.position.y, this.bodyB.body.position.x, this.bodyB.body.position.y);
    }
}