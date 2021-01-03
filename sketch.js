const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var engine, world;
var ground;
var spacePressed = false;
var button;


function setup(){
    createCanvas(400, 800);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(width / 2, 790, width + 10, 25);

    for (var k = 0; k <= width; k += 80) {
        divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
    }

    wallR = new Divisions(406, height / 2, 10, height + 10);
    wallL = new Divisions(-6, height / 2, 10, height + 10);

    for (var j = 50; j <= width; j += 60) {
        plinkos.push(new Plinko(j, 75, 10));
    }

    for (var j = 25; j <= width - 10; j += 50) {
        plinkos.push(new Plinko(j, 175, 7));
    }

    for (var j = 50; j <= width; j += 60) {
        plinkos.push(new Plinko(j, 275, 10));
    }

    for (var j = 25; j <= width - 10; j += 50) {
        plinkos.push(new Plinko(j, 375, 7));
    }

    push();
    strokeWeight(2);
    stroke(3, 103, 166);
    fill(95, 170, 217);
    button = createSprite(200, 325, 50, 50);
    pop();

}

function draw(){

    background(0);

    drawSprites();

    Engine.update(engine);

    ground.display();

    for (var k = 0; k < divisions.length; k++) {
     
        divisions[k].display();
    }

    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();
    }

    wallR.display();
    wallL.display();

    for (var j = 0; j < particles.length; j++) {
        particles[j].display();
    }

    if (spacePressed === true) {
        if (keyWentDown("space")) {
            spacePressed = false;
            button.visible = true;
        } 
        if(frameCount % 60 === 0) {
            particles.push(new Particle(random(10, 390), 10, 10));
        }

    }

    if (spacePressed === false) {
        if (mousePressedOver(button)){
            spacePressed = true;
            button.visible = false;
        }
    
        push();
        fill("white");
        textSize(20);
        text("Press [Play] to Run", 105, 125);
        text("Press [Space] to Pause", 105, 225);
        pop();

        push();
        fill("white");
        textSize(15);
        text("Play", 185, 330);
        pop();
    }

}