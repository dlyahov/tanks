var panzer = function (path, x, y) {
    var panzerBody = {},
        dx = 2, dy = 2,
        panzerPictureHeight = 32, panzerPictureWidth = 32;

    panzerBody.image = new Image();
    panzerBody.image.src = path;

    panzerBody.imageIsLoaded = false;
    panzerBody.image.onload = function () {
        panzerBody.imageIsLoaded = true;
    };

    panzerBody.x = x;
    panzerBody.y = y;
    panzerBody.rotation = Rotation.RIGHT;

    panzerBody.size = {
        width : panzerPictureHeight,
        height : panzerPictureWidth
    };

    function move(dx, dy) {
        panzerBody.x += dx;
        panzerBody.y += dy;
    }

    return {
        getImage : function () {
            return panzerBody.image;
        },
        getX : function () {
            return panzerBody.x;
        },
        getY : function () {
            return panzerBody.y;
        },
        setX : function (x) {
            panzerBody.x = x;
        },
        setY : function (y) {
            panzerBody.y = y;
        },
        getRotation : function () {
            return panzerBody.rotation;
        },
        isLoaded : function () {
            return panzerBody.imageIsLoaded;
        },
        moveLeft : function () {
            panzerBody.rotation = Rotation.LEFT;
            move(-dx, 0);
        },
        moveRight : function () {
            panzerBody.rotation = Rotation.RIGHT;
            move(dx, 0);
        },
        moveDown : function () {
            panzerBody.rotation = Rotation.DOWN;
            move(0, dy);
        },
        moveUp : function () {
            panzerBody.rotation = Rotation.UP;
            move(0, -dy);
        },
        getSize : function () {
            return panzerBody.size;
        }
    };
};
