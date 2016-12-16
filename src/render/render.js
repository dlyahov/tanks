var ctx, canvas, images;

function Render(idCanvas) {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
}

Render.prototype.drawMap = function (fieldOfComponents) {
    for (let i = 0; i < fieldOfComponents.length; i++) {
        for (let j = 0; j < fieldOfComponents[i].length; j++) {
            if (fieldOfComponents[i][j] !== null) {
                let component = fieldOfComponents[i][j];
                ctx.drawImage(component.getImage(), component.getCoordinates().x,
                                component.getCoordinates().y);
            }
        }
    }
}

Render.prototype.drawRect = function (x, y) {
    ctx.beginPath();
    ctx.rect(x, y, 2, 2);
    ctx.fillStyle = "#f00";
    ctx.fill();
    ctx.closePath();
}

Render.prototype.drawPanzer = function (userPanzer) {
    var size = userPanzer.getSize(),
        coordinates = userPanzer.getCoordinates();
    centerX = (coordinates.x + size.width),
    centerY = (coordinates.y + size.height);
    ctx.save();
    ctx.translate(centerX, centerY);

    ctx.rotate(userPanzer.getRotation() * Math.PI / 180);
    
    ctx.drawImage(userPanzer.getImage(), -size.width / 2, -size.height / 2);
    ctx.restore();

    this.drawRect(centerX, centerY);
}

Render.prototype.clearField = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

Render.prototype.getCanvasSize = function () {
    return {
        width : canvas.width,
        height : canvas.height
    }
}

module.exports = Render;
