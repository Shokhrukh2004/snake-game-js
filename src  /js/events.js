export function handleKeyEvents(snake, control) {
    const startB = document.getElementById('startB');
    const stopB = document.getElementById('stopB');
    const restartB = document.getElementById('restartB');

    document.addEventListener("keydown", (event) => {
        if (event.code === "KeyW" && snake.currentDirection !== "down") {
            snake.nextDirection = "up";
        } else if (event.code === "KeyS" && snake.currentDirection !== "up") {
            snake.nextDirection = "down";
        } else if (event.code === "KeyA" && snake.currentDirection !== "right") {
            snake.nextDirection = "left";
        } else if (event.code === "KeyD" && snake.currentDirection !== "left") {
            snake.nextDirection = "right";
        }
    });

    startB.addEventListener("click", (event) => {
        control.startGame();
    });

    stopB.addEventListener("click", (event) => {
        control.stop();
    });

    restartB.addEventListener("click", (event) => {
        control.restart();
    });




}