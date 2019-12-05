var CrocoTurtle = (function () {
    function CrocoTurtle (level) { 
        Unit.call(this, level);
    }

    CrocoTurtle.prototype = Object.create(Unit.prototype);
    CrocoTurtle.prototype.constructor = CrocoTurtle;

    return CrocoTurtle;
}());
