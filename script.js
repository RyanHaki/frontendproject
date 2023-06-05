// Get the canvas element and its 2D context
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

// Set the dimensions of the canvas
canvas.width = 800;
canvas.height = 500;

// Store the pressed keys
const keys = [];

// Define the player object
const player = {
    x: 200,
    y: 300,
    width: 40,
    height: 72,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false
};

// Load the player sprite image
const playerSprite = new Image();
playerSprite.src = "assets/chewie.png";

// Load the background image
const background = new Image();
background.src = "assets/background.png";

// Function to draw a sprite on the canvas
function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

// Event listeners for keydown and keyup events
window.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
    player.moving = true;
});
window.addEventListener("keyup", function(e) {
    delete keys[e.keyCode];
    player.moving = false;
});

// Function to move the player based on the pressed keys
function movePlayer() {
    if (keys[38] && player.y > 100) {
        player.y -= player.speed;
        player.frameY = 3;
        player.moving = true;
    }
    if (keys[37] && player.x > 0) {
        player.x -= player.speed;
        player.frameY = 1;
        player.moving = true;
    }
    if (keys[40] && player.y < canvas.height - player.height) {
        player.y += player.speed;
        player.frameY = 0;
        player.moving = true;
    }
    if (keys[39] && player.x < canvas.width - player.width) {
        player.x += player.speed;
        player.frameY = 2;
        player.moving = true;
    }
}

// Function to handle the player's animation frames
function handlePlayerFrame() {
    if (player.frameX < 3 && player.moving)
        player.frameX++;
    else
        player.frameX = 0;
}

// Variables for managing the animation loop
let fps, fpsInterval, startTime, now, then, elapsed;

// Function to start the animation loop
function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
}

// The main animation loop
function animate() {
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        drawSprite(
            playerSprite,
            player.width * player.frameX,
            player.height * player.frameY,
            player.width,
            player.height,
            player.x,
            player.y,
            player.width,
            player.height
        );
        movePlayer();
        handlePlayerFrame();
    }
}

// Start the animation loop with 15 frames per second
startAnimating(15);
