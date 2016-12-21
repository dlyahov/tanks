let ctx, canvas, RESOURCE_PATH = "resources",
    tankWidth, tankHeight,
    leftPressed, rightPressed, upPressed, downPressed,
    Render = require("render/render"), render,
    Key = require('config/keys.json'),
    ComponentSize = require("components/component-size"),
    Component = require('components/component'),
    Panzer = require('components/panzer'), userPanzer,
    MapElements = require('config/map-elements'),
    Wall = require('components/wall'),
    Empty = require('components/empty'),
    Map = require('config/map'), map,

    myField = require('config/field').field();

render = new Render('canvas');

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

initField();
draw();

function initField() {
    let resultField = [];
    for (let i = 0; i < myField.length; i++) {
        resultField[i] = [];
        for (let j = 0; j < myField[i].length; j++) {
            resultField[i][j] = parseElement(myField[i][j], i, j);
        }
    }
    map = new Map(resultField);
}

function parseElement(element, i, j) {
    let resultElement, 
        x = i * ComponentSize.height,
        y = j * ComponentSize.width;
    
    if (element === MapElements.USER_PANZER) {
        resultElement = new Panzer(x, y);
        userPanzer = resultElement;
    } else if (element === MapElements.WALL) {
        resultElement = new Wall(x, y);
    } else if (element === MapElements.EMPTY) {
        resultElement = new Empty(x, y);
    } else {
        resultElement = null;
    }
    return resultElement;
}


function draw() {
    render.clearField();
    if (map.isLoad()) {
        render.drawAll(map);
        controlPanzer(userPanzer);

        console.log('userPanzer x ' + userPanzer.getCoordinates().x);
        console.log('userPanzer y ' + userPanzer.getCoordinates().y);
    }
    requestAnimationFrame(draw);
}

function cordinateOnField(component) {
    let field = map.getField();

        i = Math.ceil(component.getCoordinates().x / Component.getSize().width),
        j = Math.ceil(component.getCoordinates().y / Component.getSize().height);
    
    return {
        i: i,
        j: j
    };

}

function controlPanzer(userPanzer) {
    let coordinateField = cordinateOnField(userPanzer);
    if (rightPressed && canMoveRight(userPanzer, coordinateField)) {
        userPanzer.moveRight();
        rightPressed = false;
    } else if (leftPressed && canMoveLeft(userPanzer, coordinateField)) {
        userPanzer.moveLeft();
        leftPressed = false;
    } else if (upPressed && canMoveUp(userPanzer, coordinateField)) {
        userPanzer.moveUp();
        upPressed = false;
    } else if (downPressed && canMoveDown(userPanzer, coordinateField)) {
        userPanzer.moveDown();
        downPressed = false;
    }
}

function canMoveRight(panzer, coordinate) {
    let field = map.getField(),
        panzerCoordinates = panzer.getCoordinates(),
        panzerSize = panzer.getSize(),
        boundBorder = panzerCoordinates.x + panzerSize.width < render.getCanvasSize().width;
    
    return coordinate.i + 1 < field.length 
            && canMove(boundBorder, field[coordinate.i + 1][coordinate.j]);
}

function canMoveLeft(panzer, coordinateField) {
    let field = map.getField();
        panzerCoordinates = panzer.getCoordinates(),
        panzerSize = panzer.getSize(),
        boundBorder = panzerCoordinates.x - panzerSize.width >= 0;

    return coordinateField.i - 1 >= 0 
            && canMove(boundBorder, field[coordinateField.i - 1][coordinateField.j]);
}

function canMoveUp(panzer, coordinateField) {
    let field = map.getField();
        panzerCoordinates = panzer.getCoordinates(),
        panzerSize = panzer.getSize(),
        boundBorder = panzerCoordinates.y - panzerSize.height >= 0;

    return coordinateField.j - 1 >= 0 
            && canMove(boundBorder, field[coordinateField.i][coordinateField.j - 1]);
}

function canMoveDown(panzer, coordinateField) {
    let field = map.getField();
        panzerCoordinates = panzer.getCoordinates(),
        panzerSize = panzer.getSize(),
        boundBorder = panzerCoordinates.y + panzerSize.height < render.getCanvasSize().height;

    return coordinateField.j + 1 < field[0].length
            && canMove(boundBorder, field[coordinateField.i][coordinateField.j + 1]);
}

function canMove(boundBorder, nextElement) {
    return boundBorder && !(nextElement instanceof Wall);
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
