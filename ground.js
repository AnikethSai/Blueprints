class ground{

constructor(x,y,width,height){


    var options = {
        isStatic : true
    }


this.Ground = Bodies.rectangle(x,y,width,height,options)
this.width = width;
this.height = height;
World.add(world,this.Ground);

}   

display(){
var pos = this.Ground.position
rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height);
}



}



