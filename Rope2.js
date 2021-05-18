class Rope2{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:150
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        
        
    }
}