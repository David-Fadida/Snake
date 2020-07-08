function Snake() {
    // PARAMS
    this.x = 0;
    this.y = 0;
    this.xSpeed = 1 * scale;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    this.currentMove = 'Right';

    // METHODS
    this.draw = function() {
        context.fillStyle = '#125228';
        context.fillRect(this.x, this.y, scale, scale);
        this.tail.forEach(part => {
            context.fillStyle = '#266B3D';
            context.fillRect(part.x + 1, part.y + 1, scale - 2, scale - 2);
        });
    }

    this.update = function() {
        for (let i = 0; i < this.tail.length - 1; i++) 
            this.tail[i] = this.tail[i+1];
        this.tail[this.total - 1] = { x: this.x, y: this.y };

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x >= canvas.width) {
            this.x = 0;
        }
        if (this.y >= canvas.height) {
            this.y = 0;
        }
        if (this.x < 0) this.x = canvas.width;
        if (this.y < 0) this.y = canvas.height;
    }

    this.changeDirection = function(direction) {
        switch (direction) {
            case 'Up':
                if(this.currentMove != 'Down') {
                    this.xSpeed = 0;
                    this.ySpeed = -1 * scale;
                    this.currentMove = 'Up'
                }
                break;
            case 'Down':
                if(this.currentMove != 'Up') {
                    this.xSpeed = 0;
                    this.ySpeed = 1 * scale;
                    this.currentMove = 'Down'
                }
                break;
            case 'Left':
                if(this.currentMove != 'Right') {
                    this.xSpeed = -1 * scale;
                    this.ySpeed = 0;
                    this.currentMove = 'Left'
                }
                break;
            case 'Right':
                if(this.currentMove != 'Left') {
                    this.xSpeed = 1 * scale;
                    this.ySpeed = 0;
                    this.currentMove = 'Right'
                }
                break;
        }
    }

    this.eat = function(fruit) {
        if (this.x === fruit.x && this.y === fruit.y) return true;
        return false;
    }

    this.hit = function() {
        this.tail.forEach(part => {
            if (part.x === this.x && part.y === this.y) {
                this.total = 0;
                this.tail = [];
            }
        });
    }

    this.enterTunnel = function(tunnel) {
        if (this.x === tunnel.enter.x && this.y === tunnel.enter.y) {
            this.x = tunnel.exit.x;
            this.y = tunnel.exit.y;
        } 
        else if (this.x === tunnel.exit.x && this.y === tunnel.exit.y) {
            this.x = tunnel.enter.x;
            this.y = tunnel.enter.y;
        } 
    }
}