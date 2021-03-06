function move(el) {
    return {
        el: el,
        x: 0,
        y: 0,
        move: function (direction, distance) {
            var transform;
            switch (direction) {
                case 'right':
                    transform = 'translate(' + (this.x += distance) + 'px, ' + this.y + 'px)';
                    break;
                case 'left':
                    transform = 'translate(' + (this.x -= distance) + 'px, ' + this.y + 'px)';
                    break;
                case 'up':
                    transform = 'translate(' + this.x + 'px, ' + (this.y -= distance) + 'px)';
                    break;
                case 'down':
                    transform = 'translate(' + this.x + 'px, ' + (this.y += distance) + 'px)';
                    break;
        
            }
            this.el.style.transform = transform;
        },
        left: function(distance) {
            this.move('left', distance);
        },
        right: function(distance) {
            this.move('right', distance);
        },
        up: function(distance) {
            this.move('up', distance);
        },
        down: function(distance) {
            this.move('down', distance);
        },
    }
}
   