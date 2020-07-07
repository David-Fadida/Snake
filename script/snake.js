function Snake() {
    // PARAMS
    this.x = 0;
    this.y = 0;
    this.xSpeed = 1 * scale;
    this.ySpeed = 0;

    // METHODS
    this.draw = function() {
        context.fillStyle = '#FFFFFF';
        context.fillRect(this.x, this.y, scale, scale);
    }
    
    this.update = function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > canvas.width) this.x = 0;
        if (this.y > canvas.height) this.y = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y < 0) this.y = canvas.height;
    }

    this.changeDirection = function(direction) {
        switch (direction) {
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -1 * scale;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = 1 * scale;
                break;
            case 'Left':
                this.xSpeed = -1 * scale;
                this.ySpeed = 0;
                break;
            case 'Right':
                this.xSpeed = 1 * scale;
                this.ySpeed = 0;
                break;
        }
    }
}