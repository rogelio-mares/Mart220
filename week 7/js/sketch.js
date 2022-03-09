//Variables
var ninjaObjects;
var result, walkresult, attackresult, walkresultleft;
var bush;
var grave;
const particles = [];
var health = 100;
//preload
function preload() {
  result = loadStrings('assets/idle.txt');
  walkresult = loadStrings('assets/walk.txt');
  walkresultleft = loadStrings('assets/walkleft.txt');
  attackresult = loadStrings('assets/attack.txt');
}

function setup() {
    createCanvas(1800,1600);

    ninjaObjects = createSprite(300, 250, 50, 100);
    console.log(result[0]);
    ninjaObjects.addAnimation('idle', result[0], result[result.length-1]);
    ninjaObjects.addAnimation('walk', walkresult[0], walkresult[walkresult.length-1]);
    ninjaObjects.addAnimation('left', walkresultleft[0], walkresultleft[walkresultleft.length-1]);
    ninjaObjects.addAnimation('attack', attackresult[0], attackresult[attackresult.length-1]);

     grave = createSprite(800, 600, 10, 10);
    //compact way to add an image
    grave.addImage(loadImage('assets/grave.png'));
}

// display all the frames using the draw function as a loop
function draw()
{
    background(120);

    if(keyDown('d'))
      {
        ninjaObjects.changeAnimation('walk');
        ninjaObjects.velocity.x += .5;
        if(grave != null)
        {
          if(ninjaObjects.collide(grave))
          {
            ninjaObjects.changeAnimation('idle');
          }
        }

      }
      else if(keyDown('a'))
      {
        ninjaObjects.changeAnimation('left');
        ninjaObjects.velocity.x -= .5;
        if(grave != null)
        {
          if(ninjaObjects.collide(grave))
          {
            ninjaObjects.changeAnimation('idle');
          }
        }

      }
      else if(keyDown('x'))
      {
        ninjaObjects.changeAnimation('attack');

        if(grave != null)
        {
          if(dist(ninjaObjects.position.x,ninjaObjects.position.y,grave.position.x,grave.position.y) < 250)
          {
            createParticles(grave.position.x, grave.position.y);
            health -= 1;
            if(health <= 0)
            {
              grave.remove();
              grave = null;
            }

          }
        }


      }
      else
      {
        ninjaObjects.changeAnimation('idle');
        ninjaObjects.velocity.x = 0;
      }

      ninjaObjects.debug = mouseIsPressed;

      drawSprites();
  }

  function createParticles(x,y)
{
for (let i = 0; i < 5; i++) {
    let p = new Particle(x,y);
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}