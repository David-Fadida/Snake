// PARAMS
const scale = 20;
const canvas = document.getElementById('gameWindow');
const context = canvas.getContext('2d');
const rows = canvas.height / scale;
const columns = canvas.width / scale;

// FUNCTIONS
function setup() {
    let snake = new Snake();
    snake.draw();

    window.addEventListener('keydown', function(event) {
        let direction = event.key.replace('Arrow','');
        snake.changeDirection(direction);
    });

    // MAIN LOOP
    window.setInterval(() => {
        clearWindow();
        snake.update();
        snake.draw();
    }, 150);
}

function clearWindow() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// START
setup();
