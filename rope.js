class rope {
	constructor(bodyA, bodyB, a, b) {
		
		var options = {
		   bodyA : bodyA,
		   bodyB : bodyB,
		   lenght : 60,
		   stiffness : 0.04,
           pointB : {x :a, y :b},
		}
		this.a = a;
		this.b = b;
		
		this.rope = Constraint.create(options);
		World.add(world, this.rope)
	}

	display() {
		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;

		strokeWeight(2);
		var Anchor1X = pointA.x;
		var Anchor1Y = pointA.y;
		var Anchor2X = pointB.x + this.a;
		var Anchor2Y = pointB.y + this.b;
        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
	}

}
