import { setupBox } from "./dom.js";
import { handleKeyEvents } from "./events.js";
import { Snake, Apple, Info, Body } from "./objects.js";


export function main(){
    let interval;

    let info;
    let apple;
    let snake;
    let box;
    
    
        // Attach event listeners

    return {


        initialiseObjects: function(){
            info = new Info(20, 35, 35);
            apple = new Apple(info);
            snake = new Snake(info, apple, Body);
            box = setupBox(snake, apple, info);
        },

        initialiseInterval: function(){
            interval = setInterval(() => {
                 
                box.updateAll();
                snake.move();
                 
                

                if(!snake.isAlive) {
                    clearInterval(interval);
                }
                
            }, 300)
        },

        startGame: function() {
            if(snake.isAlive && !snake.start){
                clearInterval(interval);

                this.initialiseInterval();

                handleKeyEvents(snake, this);
                snake.start = true;
            }
        },

        stop: function() {
            clearInterval(interval);
            snake.start = false;
        },

        restart: function(){
            this.initialiseObjects();
            box.updateAll();
            clearInterval(interval);

        },


    }
}