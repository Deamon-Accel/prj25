class Paper
{
	constructor(x,y,r)
	{
        var options={
			isStatic:true	,
            restitution:0.3 ,
            density:1.2     ,
            friction:0      		
			}
		this.x=x;
		this.y=y;
        this.r=r;
		this.body=Bodies.circle(x, y,r,options);
		
		this.image=loadImage("paper.png")
		

		
		
		
	}
	display()
	{
			

		var pos=this.body.position;		

			push()
			translate(pos.x,pos.y);
          //  angleMode(this.body.angle)
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,40,40)
			pop()

    }

}