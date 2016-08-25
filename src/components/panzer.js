var dx = 2, dy = 2,
    Component = require('components/component'),
    util = require('util'),
    resources = require('config/config-resources'),
    Rotation = require('config/rotation');

function Panzer(x, y) {
    Component.call(this, x, y, resources.panzerPath);
    Component.prototype.componentBody.rotation = Rotation.RIGHT;
}
util.inherits(Panzer, Component);

function move(dx, dy) {
    Component.prototype.componentBody.coordinates.x += dx;
    Component.prototype.componentBody.coordinates.y += dy;
}

Panzer.prototype.getRotation = function () {
    return Component.prototype.componentBody.rotation;
};

Panzer.prototype.moveLeft = function () {
    Component.prototype.componentBody.rotation = Rotation.LEFT;
    move(-dx, 0);
};

Panzer.prototype.moveRight = function () {
    Component.prototype.componentBody.rotation = Rotation.RIGHT;
    move(dx, 0);
};

Panzer.prototype.moveDown = function () {
    Component.prototype.componentBody.rotation = Rotation.DOWN;
    move(0, dy);
};

Panzer.prototype.moveUp = function () {
    Component.prototype.componentBody.rotation = Rotation.UP;
    move(0, -dy);
};

module.exports = Panzer;
