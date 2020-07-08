function Fruit(){
    // PARAMS
    this.x ;
    this.y ;

    // METHODS
    this.pickLocation = function() {
        this.x = (Math.floor(Math.random() * rows -1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns -1) + 1) * scale;
    }

    this.draw = function() {
        context.fillStyle = '#656C7C';
        context.fillRect(this.x + 1, this.y + 1, scale-2, scale-2);
    }
}