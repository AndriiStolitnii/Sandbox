var MonsterBear = (function () {
    function MonsterBear (health, level) { 
        Unit.call(this, health, level);
    }

    MonsterBear.prototype = Object.create(Unit.prototype);
    MonsterBear.prototype.constructor = MonsterBear;

    return MonsterBear;
}());