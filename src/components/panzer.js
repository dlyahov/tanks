let Component = require('components/component'),
    Sprite = require('components/sprite'),
    Bullet = require('components/bullet'),
    dx = Component.getSize().width, 
    dy = Component.getSize().height,
    util = require('util'),
    resources = require('config/config-resources'),
    isMove = false,
    Rotation = require('config/rotation');
const TIMEOUT_ANIMATION = 7;

Panzer.prototype = Object.create(Sprite.prototype)
Panzer.prototype.constructor = Panzer;

function Panzer(x, y) {
    Sprite.apply(this, [x, y, resources.panzerPath]);
    this.componentBody.rotation = Rotation.RIGHT;
    this.bullets = [];
}

Panzer.prototype.move = function (dx, dy) {
    if (!isMove) {
        animationMove.call(this, dx, dy);
    }
};

function animationMove(dx, dy) {
    isMove = true;
    let deltaX = dx / 24;
    let deltaY = dy / 24;
    let endX = this.componentBody.coordinates.x + dx;
    let endY = this.componentBody.coordinates.y + dy;
    let timerAnimation = setInterval(function () {
        this.componentBody.coordinates.x += deltaX;
        this.componentBody.coordinates.y += deltaY;
        if (this.componentBody.coordinates.x === endX && this.componentBody.coordinates.y === endY) {
            isMove = false;
            clearInterval(timerAnimation);
        }
    }.bind(this), TIMEOUT_ANIMATION);
}

Panzer.prototype.moveLeft = function () {
    if (this.componentBody.rotation !== Rotation.LEFT) {
        this.componentBody.rotation = Rotation.LEFT;
    } else {
        this.move(-dx, 0);
    }
};

Panzer.prototype.moveRight = function () {
    if (this.componentBody.rotation !== Rotation.RIGHT) {
        this.componentBody.rotation = Rotation.RIGHT;
    } else {
        this.move(dx, 0);
    }
};

Panzer.prototype.moveDown = function () {
    if (this.componentBody.rotation !== Rotation.DOWN) {
        this.componentBody.rotation = Rotation.DOWN;
    } else {
        this.move(0, dy);
    }
};

Panzer.prototype.moveUp = function () {
    if (this.componentBody.rotation !== Rotation.UP) {
        this.componentBody.rotation = Rotation.UP;
    } else {
        this.move(0, -dy);
    }
};

Panzer.prototype.fire = function() {
    console.log('Fire!');
    let bullet = new Bullet(this.componentBody.coordinates, this.getRotation());
    this.bullets.push(bullet);
}

Panzer.prototype.getBullets = function() {
    return this.bullets;
}

module.exports = Panzer;
