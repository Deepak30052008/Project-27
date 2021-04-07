class Handle {
    constructor(x,y,width,lenght){
      var option={
          isStatic:true
      }
      this.body=Bodies.rectangle(x,y,400,20,option)
      this.width=300
      this.lenght=20
      World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        rectMode(CENTER)
        fill("skyblue")
        rect(pos.x,pos.y,this.width,this.lenght)
    }
}