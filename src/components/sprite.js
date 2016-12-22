let Component = require('components/component'),
    dx = Component.getSize().width, dy = Component.getSize().height,
    util = require('util'),
    resources = require('config/config-resources'),
    Rotation = require('config/rotation');

Sprite.prototype = Object.create(Component.prototype)
Sprite.prototype.constructor = Sprite;


function Sprite(x, y) {
    Component.apply(this, [x, y, resources.panzerPath]);
    this.componentBody.rotation = Rotation.RIGHT;
}

Sprite.prototype.move = function (dx, dy) {
    this.componentBody.coordinates.x += dx;
    this.componentBody.coordinates.y += dy;
};

Sprite.prototype.getRotation = function () {
    return this.componentBody.rotation;
};

Sprite.prototype.moveLeft = function () {
    this.move(-dx, 0);
};

Sprite.prototype.moveRight = function () {
    this.move(dx, 0);
};

Sprite.prototype.moveDown = function () {
    this.move(0, dy);
};

Sprite.prototype.moveUp = function () {
    this.move(0, -dy);
};

module.exports = Sprite;
