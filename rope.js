class Rope{
    constructor(bodyA, pointB){
var option = {
    bodyA: bodyA,
    pointB: pointB,
    length:10,
    stiffness:0.04
}
this.pointB=pointB
this.constraint=Constraint.create(option)
World.add(world,this.constraint)
    }
    display(){
        if (this.constraint.bodyA){
var pointA = this.constraint.bodyA.position
var pointB = this.pointB 
line (pointA.x, pointA.y, pointB.x, pointB.y)
    }}
    launch(){
        this.constraint.bodyA=null;
    }
}