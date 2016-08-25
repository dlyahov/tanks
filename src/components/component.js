var componentBody = {}, Status;

Status = require('config/status');

function Component(x, y, path) {
    componentBody.load = false;
    componentBody.image = new Image();
    componentBody.image.src = path;
    componentBody.status = Status.EXISTS;
    componentBody.coordinates = {
        x : x,
        y : y
    };
    componentBody.size = {
        height : 32,
        width : 32
    };
    componentBody.image.onload = function () {
        componentBody.load = true;
    };
};


Component.prototype.getImage = function () {
    return componentBody.image;
};

Component.prototype.isImageLoaded = function () {
    return componentBody.load;
};

Component.prototype.getCoordinates = function () {
    return componentBody.coordinates;
};

Component.prototype.setCoordinates = function (x, y) {
    componentBody.coordinates.x = x;
    componentBody.coordinates.y = y;
};

Component.prototype.getSize = function () {
    return componentBody.size;
};

Component.prototype.getStatus = function () {
    return componentBody.status;
};

Component.prototype.remove = function () {
    componentBody.status = Status.NON_EXISTS;
};

Component.prototype.componentBody = componentBody;

module.exports = Component;
