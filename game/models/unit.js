var Unit = (function () {
    function Unit (health, baseDamage, level) {
        var modifier = (level - 1) * 100;
        this.maxHealth = this.health = health + modifier;
        this.baseDamage = baseDamage + modifier;
        this.level = level;
        }
    
    Unit.prototype.attack = function () {
        console.log('Attack', this);
    }    
    return Unit;
}());