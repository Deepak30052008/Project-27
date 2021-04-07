class Bob {
    constructor(x,y,radius){
      var option={
          isStatic:false
      }
      this.body=Bodies.circle(x,y,37,option)
      this.radius=37
      World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        ellipseMode(RADIUS)
        fill("red")
        ellipse(pos.x,pos.y,this.radius)
    }
}