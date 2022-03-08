//Variables
var ninjaObjects;
var result, runresult, attackresult, runresultleft;
var bush;
var tree;
const particles = [];
var health = 100;
//preload
function preload() {
  result = loadStrings('assets/idle.txt');
  runresult = loadStrings('assets/run.txt');
  runresultleft = loadStrings('assets/runleft.txt');
  attackresult = loadStrings('assets/attack.txt');
}

function setup() {
    createCanvas(1800,1600);

    ninjaObjects = createSprite(300, 250, 50, 100);
    console.log(result[0]);
    ninjaObjects.addAnimation('idle', result[0], result[result.length-1]);
    ninjaObjects.addAnimation('run', runresult[0], runresult[runresult.length-1]);
    ninjaObjects.addAnimation('left', runresultleft[0], runresultleft[runresultleft.length-1]);
    ninjaObjects.addAnimation('attack', attackresult[0], attackresult[attackresult.length-1]);

     tree = createSprite(800, 600, 10, 10);
    //compact way to add an image
    tree.addImage(loadImage('assets/tree.png'));
}

// display all the frames using the draw function as a loop
function draw()
{
    background(120);

    if(keyDown('d'))
      {
        ninjaObjects.changeAnimation('run');
        ninjaObjects.velocity.x += .5;
        if(tree != null)
        {
          if(ninjaObjects.collide(tree))
          {
            ninjaObjects.changeAnimation('idle');
          }
        }

      }
      else if(keyDown('a'))
      {
        ninjaObjects.changeAnimation('left');
        ninjaObjects.velocity.x -= .5;
        if(tree != null)
        {
          if(ninjaObjects.collide(tree))
          {
            ninjaObjects.changeAnimation('idle');
          }
        }

      }
      else if(keyDown('x'))
      {
        ninjaObjects.changeAnimation('attack');

        if(tree != null)
        {
          if(dist(ninjaObjects.position.x,ninjaObjects.position.y,tree.position.x,tree.position.y) < 250)
          {
            createParticles(tree.position.x, tree.position.y);
            health -= 1;
            if(health <= 0)
            {
              tree.remove();
              tree = null;
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