var ctx, canvas, RESOURCE_PATH = "resources",
    tankWidth, tankHeight,
    leftPressed, rightPressed, upPressed, downPressed,
    Render = require("render/render"), render,
    Key = require('config/keys.json'),
    ComponentSize = require("components/component-size"),
    Component = require('components/component'),
    Panzer = require('components/panzer'), userPanzer,
    MapElements = require('config/map-elements'),
    Wall = require('components/wall'),
    Map = require('config/map'), map,

    myField = require('config/field').field();

render = new Render('canvas');

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

initField();
draw();

function initField() {
    var resultField = [];
    for (let i = 0; i < myField.length; i++) {
        resultField[i] = [];
        for (let j = 0; j < myField[i].length; j++) {
            resultField[i][j] = parseElement(myField[i][j], i, j);
        }
    }
    map = new Map(resultField);
    console.log(resultField);
}

function parseElement(element, i, j) {
    var resultElement;
    if (element === MapElements.USER_PANZER) {
        resultElement = new Panzer(j * ComponentSize.height, i * ComponentSize.width);
    } else if (element === MapElements.WALL) {
        resultElement = new Wall(j * ComponentSize.height, i * ComponentSize.width);
    } else {
        resultElement = null;
    }
    return resultElement;
}


function draw() {
    render.clearField();
    if (map.isLoad()) {
        let mapObjects = render.drawMap(map);
        // render.drawPanzer(userPanzer);
        // controlPanzer(userPanzer);
    }
    requestAnimationFrame(draw);
}

function controlPanzer(userPanzer) {
    if (rightPressed && canMoveRight(userPanzer)) {
        userPanzer.moveRight();
    } else if (leftPressed && canMoveLeft(userPanzer)) {
        userPanzer.moveLeft();
    } else if (upPressed) {
        userPanzer.moveUp();
    } else if (downPressed) {
        userPanzer.moveDown();
    }
}

function canMoveRight(panzer) {
    var panzerSize = panzer.getSize(),
        panzerCoordinates = panzer.getCoordinates();
    return panzerCoordinates.x + panzerSize.width <= render.getCanvasSize().width;
}

function canMoveLeft(panzer) {
    var panzerSize = panzer.getSize(),
        panzerCoordinates = panzer.getCoordinates();
    console.log(panzerCoordinates.x + panzerSize.width);

    return panzerCoordinates.x + panzerSize.width >= 0;
}

function keyDownHandler(e) {
    if (e.keyCode === Key.LEFT) {
        leftPressed = true;
    } else if (e.keyCode === Key.RIGHT) {
        rightPressed = true;
    } else if (e.keyCode === Key.UP) {
        upPressed = true;
    } else if (e.keyCode === Key.DOWN) {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode === Key.LEFT) {
        leftPressed = false;
    } else if (e.keyCode === Key.RIGHT) {
        rightPressed = false;
    } else if (e.keyCode === Key.UP) {
        upPressed = false;
    } else if (e.keyCode === Key.DOWN) {
        downPressed = false;
    }
}
