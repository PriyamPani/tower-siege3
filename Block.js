class Block{
    constructor(x, y, width, height, angle) {
        var options = {
          restitution : 0.7,
          friction : 0.6,
          isStatic : false,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility = 255;
        World.add(world, this.body);
        
      }
      display(){
        var angle = this.body.angle;
        //console.log(this.body.speed);
      if (this.body.speed<5){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      
     }
     else {
       World.remove(world,this.body);
       push();
       this.Visibility = this.Visibility-5;
       tint(255,this.Visibility);
       rect(this.body,this.body.position.x,this.body.position.y,50,50);
       pop();
     }
      }
      score(){
        if(this.visibility<0 && this.visibility >-105){
           score++
          }
        }
      }
      
