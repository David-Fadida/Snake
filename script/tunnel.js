function Tunnel() {
    // Params
    this.enter ;
    this.exit ;

    // METHODS
    this.pickLocation = function() {
        let location = { x: 0, y: 0};
        location.x = (Math.floor(Math.random() * rows -1) + 1) * scale;
        location.y = (Math.floor(Math.random() * columns -1) + 1) * scale;
        return location;
    }

    this.build = function() {
        this.enter = this.pickLocation();
        this.exit = this.pickLocation();
        while (this.enter.x === this.exit.x && this.enter.y === this.exit.y) {
            this.exit = this.pickLocation();
        }
    }

    this.draw = function() {
        context.fillStyle = '#737579';
        context.fillRect(this.enter.x, this.enter.y, scale, scale);
        context.fillStyle = '#0B0D10';
        context.fillRect(this.enter.x + 2, this.enter.y + 2, scale - 4, scale - 4);
        context.fillStyle = '#737579';
        context.fillRect(this.enter.x + 4, this.enter.y + 4, scale - 8, scale - 8);
        context.fillStyle = '#737579';
        context.fillRect(this.exit.x, this.exit.y, scale, scale);
        context.fillStyle = '#0B0D10';
        context.fillRect(this.exit.x + 2, this.exit.y + 2, scale - 4, scale - 4);
        context.fillStyle = '#737579';
        context.fillRect(this.exit.x + 4, this.exit.y + 4, scale - 8, scale - 8);
    }
}