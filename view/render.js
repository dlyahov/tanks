var render = function () {
    var ctx, canvas, images;
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    function drawField(field) {
        var size;
        for (let i = 0; i < field.length; i++) {
            for (let j = 0; j < field[i].length; j++) {
                if (field[i][j] === Status.EXISTS) {
                    size = field[i][j].getSize();
                    ctx.drawImage(field[i][j].getImage(), size.width, size.height);
                }
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
        drawPanzer : drawPanzer,
        drawField : drawField
    };
};
