class Bob{
    constructor(x,y,r){
        var options={
            'restitution':1,
            'density':0.4,
            'friction':0.8
        }
        this.body=Bodies.circle(x,y,r,options);
        this.r=20
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y);
        fill('yellow')
        ellipse(0,0,this.r,this.r);
        pop()

        if(keyDown("UP_ARROW")){
       pos.x=pos.x+10
        }

    }
}