
export function setupBox(snakeObj, appleObj, infObj) {

    const grid = document.getElementById('snakeGrid');
    grid.style.height = infObj.height + 'px';
    grid.style.width = infObj.width + 'px';

    const snake = document.getElementById('snake');
    snake.style.height = infObj.blockSize + 'px';
    snake.style.width = infObj.blockSize + 'px';
    snake.style.top = snakeObj.positionY + 'px';
    snake.style.left = snakeObj.positionX + 'px';


    const apple = document.getElementById('apple');
    apple.style.height = infObj.blockSize + 'px';
    apple.style.width = infObj.blockSize + 'px';

    const head = document.getElementById('head');

    const pointsDisplay = document.getElementById('points');
    


    
    return {
        updateAll: function() {

            this.updateSnake();
            this.updateHead();
            this.updateApple();
            this.updateSnakeBody();
            this.updatePoints();
        },

        updateSnake: function(){
            snake.style.top = snakeObj.positionY + 'px';
            snake.style.left = snakeObj.positionX + 'px';
        },

        updateApple: function(){
            apple.style.top = appleObj.positionY + 'px';
            apple.style.left = appleObj.positionX + 'px';
        },

        updateSnakeBody: function(){
            document.querySelectorAll('.snakeBody').forEach(body => body.remove());

            for(let i = 0; i < snakeObj.bodyArr.length; i++){
                let a = document.createElement('div');
                a.classList.add("snakeBody");
                a.style.top = snakeObj.bodyArr[i].positionY + 'px';
                a.style.left = snakeObj.bodyArr[i].positionX + 'px';
                a.style.width = infObj.blockSize + 'px';
                a.style.height = infObj.blockSize + 'px';
                grid.appendChild(a);
            }
        },

        updatePoints: function(){
            pointsDisplay.textContent = snakeObj.length;
        },

        updateHead: function(){
            
            switch(snakeObj.currentDirection){
                case "down":
                    head.style.transform = "rotate(0deg)";
                    break;
                
                case "up":
                    head.style.transform = "rotate(180deg)";
                    break;
                
                case "left":
                    head.style.transform = "rotate(90deg)";
                    break;

                case "right":
                    head.style.transform = "rotate(-90deg)";
                    break;
            
            }
        },

        
    };
}
