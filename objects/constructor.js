// function Task(title, description) {
//     this.title = title;
//     this.description = description;
// }
// var task = new Task('Title', 'Description');

// console.dir(Task);

function MilitaryResource(type, maxHealth, maxDistance) {
    this.type = type;
    this.maxHealth = this.health = maxHealth;
    this.maxDistance = this.distance = maxDistance;
}

MilitaryResource.prototype.isReadyToMove = function () {
    return this.distance > 0;
}

var resource = new MilitaryResource('warrior', 200, 400);
var resource2 = new MilitaryResource('archer', 300, 500);

console.log(resource, resource2, resource.isReadyToMove());
