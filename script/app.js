// PARAMS
const scale = 20;
const canvas = document.getElementById('gameWindow');
const context = canvas.getContext('2d');
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake ;
let fruit ;
let tunnel ;

// FUNCTIONS
function setup() {
    snake = new Snake();
    fruit = new Fruit();
    tunnel = new Tunnel();

    fruit.pickLocation();
    tunnel.build();

    // MAIN LOOP
    window.setInterval(() => {
        clearWindow();
        fruit.draw();
        snake.update();
        snake.draw();
        tunnel.draw();
        snake.hit();
        specialEvents();
    }, 150);
}

// KEYS LISTENER
window.addEventListener('keydown', function(event) {
    let direction = event.key.replace('Arrow','');
    snake.changeDirection(direction);
});

function clearWindow() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function specialEvents() {
    if (snake.eat(fruit)) {
        fruit.pickLocation();
        snake.total = snake.total + 1;
    }
    snake.enterTunnel(tunnel);
}

// START
setup();
