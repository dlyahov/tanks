var dx = 2, dy = 2,
    Component = require('components/component'),
    util = require('util'),
    resources = require('config/config-resources'),
    Rotation = require('config/rotation');

Panzer.prototype = Object.create(Component.prototype)
Panzer.prototype.constructor = Panzer;

function Panzer(x, y) {
    Component.apply(this, [x, y, resources.panzerPath]);
    this.componentBody.image.style.zIndex = -1;
    this.componentBody.rotation = Rotation.RIGHT;
}

Panzer.prototype.move = function(dx, dy) {
    this.componentBody.coordinates.x += dx;
    this.componentBody.coordinates.y += dy;
}

Panzer.prototype.getRotation = function () {
    return this.componentBody.rotation;
};

Panzer.prototype.moveLeft = function () {
    this.componentBody.rotation = Rotation.LEFT;
    this.move(-dx, 0);
};

Panzer.prototype.moveRight = function () {
    this.componentBody.rotation = Rotation.RIGHT;
    this.move(dx, 0);
};

Panzer.prototype.moveDown = function () {
    this.componentBody.rotation = Rotation.DOWN;
    this.move(0, dy);
};

Panzer.prototype.moveUp = function () {
    this.componentBody.rotation = Rotation.UP;
    this.move(0, -dy);
};

module.exports = Panzer;
