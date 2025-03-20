export class Snake {
    constructor(Info, apple, Body) {
        this.isAlive = true;
        this.start = false;
        this.length = 0;
        this.gridSize = Info.blockSize;
        this.apple = apple;
        this.info = Info;
        this.body = Body;
        this.bodyArr = [];

        this.width = Info.width;
        this.height = Info.height;

        this.positionX = 0;
        this.positionY = 0;
        this.prevPositionX = 0;
        this.prevPositionY = 0;
        this.currentDirection = "down";
        this.nextDirection = "down";
    }

    move() {
        if (!this.isAlive) return;
        
        this.currentDirection = this.nextDirection;

        this.prevPositionX = this.positionX;
        this.prevPositionY = this.positionY;

        this.updatePosition();
        this.locateBody();
        this.checkCollisions();
        this.checkAppleCollision();

    }

    updatePosition() {
        switch (this.currentDirection) {
            case "up":
                if (this.positionY > 0) this.positionY -= this.gridSize;
                else if(this.positionY === 0) this.positionY--;
                break;

            case "down":
                if (this.positionY < (this.height - this.gridSize)) this.positionY += this.gridSize ;
                else if(this.positionY === (this.height - this.gridSize)) this.positionY++;
                break;

            case "left":
                if (this.positionX > 0) this.positionX -= this.gridSize;
                else if(this.positionX === 0) this.positionX--;
                break;

            case "right":
                if (this.positionX < this.width - this.gridSize) this.positionX += this.gridSize;
                else if(this.positionX === (this.width - this.gridSize)) this.positionX++;
                break;
        }
        
    }

    checkCollisions() {
        if (
            this.positionX === -1 || this.positionX === this.width - this.gridSize + 1 ||
            this.positionY === -1 || this.positionY === this.height - this.gridSize + 1
        ) {
            this.isAlive = false;
        }
        for(let i = 0; i < this.bodyArr.length; i++){
            if(this.bodyArr[i].positionX === this.positionX && this.bodyArr[i].positionY === this.positionY){
                this.isAlive = false;
            }
        }
    }

    checkAppleCollision() {
        if (this.positionX === this.apple.positionX && this.positionY === this.apple.positionY) {
            this.length++;
            this.apple.locate();
            this.grow();
        }
    }

    grow() {
        let lastX = this.bodyArr.length > 0 ? this.bodyArr[this.bodyArr.length - 1].positionX : this.prevPositionX;
        let lastY = this.bodyArr.length > 0 ? this.bodyArr[this.bodyArr.length - 1].positionY : this.prevPositionY;
        this.bodyArr.push(new this.body(lastX, lastY));
    }

    locateBody() {
        if (!this.isAlive) return;

        for (let i = this.bodyArr.length - 1; i >= 0; i--) {
            if (i === 0) {
                this.bodyArr[i].locate(this.prevPositionX, this.prevPositionY);
            } else {
                this.bodyArr[i].locate(this.bodyArr[i - 1].positionX, this.bodyArr[i - 1].positionY);
            }
        }
    } 

}

export class Apple {
    constructor(info) {
        this.info = info;
        this.width = this.info.width - info.blockSize;
        this.height = this.info.height - info.blockSize;
        this.positionX = 160;
        this.positionY = 180;
    }

    locate() {
        this.positionX = Math.floor(Math.random() * (this.width / this.info.blockSize)) * this.info.blockSize;
        this.positionY = Math.floor(Math.random() * (this.height / this.info.blockSize)) * this.info.blockSize;
    }
}

export class Info {
    constructor(blockSize, rows, columns) {
        this.blockSize = blockSize;
        this.rows = rows;
        this.columns = columns;
        this.width = blockSize * columns;
        this.height = blockSize * rows;
    }
}

export class Body {
    constructor(locationX, locationY) {
        this.positionX = locationX;
        this.positionY = locationY;
        this.prevPositionX = locationX;
        this.prevPositionY = locationY;
    }

    locate(positionX, positionY) {
        this.prevPositionX = this.positionX;
        this.prevPositionY = this.positionY;
        this.positionX = positionX;
        this.positionY = positionY;
    }
}
