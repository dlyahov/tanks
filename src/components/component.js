let componentSize = require("./component-size"),
    Status = require('config/status');

function Component(x, y, path) {
    this.componentBody = {};

    this.componentBody.load = false;
    this.componentBody.image = new Image();
    this.componentBody.image.src = path;
    this.componentBody.status = Status.EXISTS;
    this.componentBody.coordinates = {
        x : x,
        y : y
    };

    this.componentBody.image.onload = this.loadComplete.bind(this);

    Component.prototype.componentBody = this.componentBody;
};

Component.prototype.loadComplete = function () {
    this.componentBody.load = true;
}

Component.prototype.getImage = function () {
    return this.componentBody.image;
};

Component.prototype.isImageLoaded = function () {
    return this.componentBody.load;
};

Component.prototype.getCoordinates = function () {
    return this.componentBody.coordinates;
};

Component.prototype.setCoordinates = function (x, y) {
    this.componentBody.coordinates.x = x;
    this.componentBody.coordinates.y = y;
};

Component.getSize = function () {
    return componentSize;
};

Component.prototype.getSize = function () {
    return componentSize;
};

Component.prototype.getStatus = function () {
    return this.componentBody.status;
};

Component.prototype.remove = function () {
    this.componentBody.status = Status.NON_EXISTS;
};

module.exports = Component;
