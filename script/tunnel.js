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
        this.drawTunnel(this.enter);
        this.drawTunnel(this.exit);
    }

    this.drawTunnel = function(element) {
        context.fillStyle = '#FFE07E';
        context.fillRect(element.x, element.y, scale, scale);
        context.fillStyle = '#0B0D10';
        context.fillRect(element.x + 2, element.y + 2, scale - 4, scale - 4);
        context.fillStyle = '#FFE07E';
        context.fillRect(element.x + 4, element.y + 4, scale - 8, scale - 8);
        context.fillStyle = '#0B0D10';
        context.fillRect(element.x + 6, element.y + 6, scale - 12, scale - 12);
        context.fillStyle = '#FFE07E';
        context.fillRect(element.x + 8, element.y + 8, scale - 16, scale - 16);
    }
}