let Sprite = require('components/sprite'),
    Rotation = require('config/rotation'),
    resources = require('config/config-resources');

Bullet.prototype = Object.create(Sprite.prototype)
Bullet.prototype.constructor = Sprite;

function Bullet(coordinates, rotation) {
    Sprite.apply(this, [coordinates.x, coordinates.y, resources.bulletPath]);
    this.componentBody.rotation = rotation;
    this.setDelta(10, 10);
}

Bullet.prototype.moveBullet = function() {
    if (this.componentBody.rotation === Rotation.LEFT) {
        this.moveLeft();
    } else if (this.componentBody.rotation === Rotation.RIGHT) {
        this.moveRight();
    } else if (this.componentBody.rotation === Rotation.UP) {
        this.moveUp();
    } else if (this.componentBody.rotation === Rotation.DOWN) {
        this.moveDown();
    }
}

module.exports = Bullet;

