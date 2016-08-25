var componentBody = {}, Status;
Status = require('config/status.json');

componentBody.load = false;
componentBody.image = new Image();
componentBody.image.src = path;

componentBody.size = {
    height : 32,
    width : 32
};

componentBody.status = Status.EXISTS;
componentBody.coordinates = {
    x : x,
    y : y
};

componentBody.image.onload = function () {
    load = true;
};

module.exports = {
    getImage : function () {
        return componentBody.image;
    },
    isImageLoaded : function () {
        return componentBody.load;
    },
    getCoordinates : function () {
        return componentBody.coordinates;
    },
    getSize : function () {
        return componentBody.size;
    },
    getStatus : function () {
        return componentBody.status;
    },
    remove : function () {
        componentBody.status = Status.NON_EXISTS;
    }
};
