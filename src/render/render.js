var topContext, topContext, images, canvas,
    Panzer = require('components/panzer'),
    Empty = require('components/empty')
    ComponentSize = require("components/component-size");

function Render(idCanvas) {
    canvas = document.getElementById('canvas-bottom');
    bottomContext = document.getElementById('canvas-bottom').getContext('2d');
    topContext = document.getElementById('canvas-bottom').getContext('2d');
}

Render.prototype.drawBottomLayer = function(map) {
    var field = map.getField(),
        empty = new Empty(0, 0);
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            let x = j * ComponentSize.height;
            let y = i * ComponentSize.width;
            bottomContext.drawImage(empty.getImage(), x, y);
        }
    }
}

/**
 * Return objects on map!
 */
Render.prototype.drawMap = function (map) {
    var field = map.getField();
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if (field[i][j] !== null && !(field[i][j] instanceof Empty)) {
                drawComponent(field[i][j]);
            }
        }
    }
}

Render.prototype.drawAll = function(map) {
    this.drawBottomLayer(map);
    this.drawMap(map);
}

function drawComponent(component) {
    if (component instanceof Panzer) {
        drawPanzer(component);
    } else {
        topContext.drawImage(component.getImage(), component.getCoordinates().x,
                    component.getCoordinates().y);
    }
}

function drawPanzer(userPanzer) {
    var size = userPanzer.getSize(),
        coordinates = userPanzer.getCoordinates();
    centerX = (coordinates.x + size.width / 2),
    centerY = (coordinates.y + size.height / 2);
    topContext.save();
    topContext.translate(centerX, centerY);

    topContext.rotate(userPanzer.getRotation() * Math.PI / 180);
    
    topContext.drawImage(userPanzer.getImage(), -size.width / 1.5, -size.height / 2);
    topContext.restore();

    drawRect(centerX, centerY);
}

function drawRect(x, y) {
    topContext.beginPath();
    topContext.rect(x, y, 1, 1);
    topContext.fillStyle = "#f00";
    topContext.fill();
    topContext.closePath();
}

Render.prototype.clearField = function () {
    topContext.clearRect(0, 0, canvas.width, canvas.height);
}

Render.prototype.getCanvasSize = function () {
    return {
        width : canvas.width,
        height : canvas.height
    }
}

module.exports = Render;
