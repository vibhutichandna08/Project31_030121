class Plinko {
    constructor(x, y, radius) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        ellipseMode(RADIUS);
        push();
        strokeWeight(1);
        stroke(140, 67, 230);
        fill(73, 35, 120);
        ellipse(pos.x, pos.y, this.radius, this.radius);
        pop();
    }
}