class Rope{
    constructor(body,point){
        var options = {
            stiffness: 0.2,
            length:250,
            bodyA: body,
            pointB: point
        } 
        this.pointB = point;
        this.rope = Matter.Constraint.create(options)
        World.add(world,this.rope)
    }
     display(){
         var pointA = this.rope.bodyA.position;
         var pointB = this.pointB;
         stroke(48,22,8)
         strokeWeight(3)
         line(pointB.x,pointB.y,pointA.x,pointA.y)
     }
}