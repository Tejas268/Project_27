class rope{
	constructor(bodyA, bodyB) {
		
		var options = {
		   bodyA : bodyA,
		   bodyB : bodyB,
		   lenght : 60,
		   stiffness : 0.04
		}
		
		this.rope = Constraint.create(options);
		World.add(world, this.rope)
	}

	display()
	{
		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;

		strokeWeight(2);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
	}

}
