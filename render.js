var render = function () {
    var ctx, canvas, images;
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    images = images();

    function drawMap(fieldOfComponents) {
        for (let i = 0; i < fieldOfComponents.length; i++) {
            for (let j = 0; j < fieldOfComponents[i].length; j++) {
                ctx.drawImage(fieldOfComponents[i][j], fieldOfComponents[i][j].width * i,
                                fieldOfComponents[i][j].height * j);
            }
        }
    }

    function drawRect(x, y) {
        ctx.beginPath();
        ctx.rect(x, y, 50, 80);
        ctx.fillStyle = "#f00";
        ctx.fill();
        ctx.closePath();
    }

    function drawPanzer(userPanzer) {
        var size = userPanzer.getSize(),
            centerX = userPanzer.getX() - size.width / 2,
            centerY = userPanzer.getY() - size.height / 2;
        ctx.save();

        ctx.translate(centerX, centerY);

        ctx.rotate(userPanzer.getRotation() * Math.PI / 180);
        ctx.drawImage(userPanzer.getImage(), -(size.width / 2), -(size.height / 2));
        ctx.restore();
    }


    return {
        drawRect : drawRect,
        drawPanzer : drawPanzer
    };
};
