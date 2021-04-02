class Dustbin {
    constructor(x,y){
        this.x=x
        this.y=y
        this.w=200
        this.h=100
        this.t=20
        this.a=0
        this.bottom=Bodies.rectangle(this.x,this.y,this.w,this.t,{isStatic:true})
        this.left=Bodies.rectangle(this.x-this.w/2,this.y-this.h/2,this.t,this.h,{isStatic:true})
        this.right=Bodies.rectangle(this.x+this.w/2,this.y-this.h/2,this.t,this.h,{isStatic:true})
        Matter.Body.setAngle(this.left,this.a)
        Matter.Body.setAngle(this.right,-1*this.a)
        
        World.add(world,this.bottom)
        World.add(world,this.left)
        World.add(world,this.right)
        
    }
      display(){
          var posl=this.left.position
          var posr=this.right.position
          var posb=this.bottom.position
          push()
          translate(posl.x,posl.y)
          rectMode(CENTER)
          angleMode(RADIANS)
          fill(255)
          rotate(this.a)
          rect(0,0,this.t,this.h)
          pop()
          push()
          translate(posr.x,posr.y)
          rectMode(CENTER)
          angleMode(RADIANS)
          fill(255)
          rotate(-1*this.a)
          rect(0,0,this.t,this.h)
          pop()
          push()
          translate(posb.x,posb.y)
          rectMode(CENTER)
          angleMode(RADIANS)
          fill(255)
          rect(0,0,this.w,this.t)
          pop()
      }

}