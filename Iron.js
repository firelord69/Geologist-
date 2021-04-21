class Iron {
    constructor(x,y)
    {
    // assign options to the rubber ball
        this.x=x;
        this.y=y;
        var options={
            restitution:0.5,
            friction:1.0,
            density:3
        }
        this.body=Bodies.rectangle(this.x, this.y,150,50, options)
        World.add(world, this.body);
        this.width = 150;
        this.height = 50;

    }
    display()
    {
            var rubberpos=this.body.position;   
        
    
            push()
            translate(rubberpos.x, rubberpos.y);
            rotate(this.body.angle)
            rectMode(CENTER)
            strokeWeight(4);
            stroke("black");
            fill("darkblue");
            //draw the ellipse here to display the rubber ball
            rect(0,0,this.width,this.height);
            pop()
    }

}
