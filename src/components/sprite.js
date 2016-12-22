let Component = require('components/component'),
    util = require('util'),
    Rotation = require('config/rotation');

Sprite.prototype = Object.create(Component.prototype)
Sprite.prototype.constructor = Sprite;


function Sprite(x, y, path) {
    Component.apply(this, [x, y, path]);
    this.componentBody.rotation = Rotation.RIGHT;
    this.dx = Component.getSize().width;
    this.dy = Component.getSize().height;
}

function Sprite(x, y, path) {
    Component.apply(this, [x, y, path]);
    this.componentBody.rotation = Rotation.RIGHT;
}

Sprite.prototype.setDelta = function(dx, dy) {
    this.dx = dx;
    this.dy = dy;
}

Sprite.prototype.move = function (dx, dy) {
    this.componentBody.coordinates.x += dx;
    this.componentBody.coordinates.y += dy;
};

Sprite.prototype.getRotation = function () {
    return this.componentBody.rotation;
};

Sprite.prototype.moveLeft = function () {
    this.move(-this.dx, 0);
};

Sprite.prototype.moveRight = function () {
    this.move(this.dx, 0);
};

Sprite.prototype.moveDown = function () {
    this.move(0, this.dy);
};

Sprite.prototype.moveUp = function () {
    this.move(0, -this.dy);
};

module.exports = Sprite;
