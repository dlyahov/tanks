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
    Empty = require('components/empty'),
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
}

function parseElement(element, i, j) {
    var resultElement, 
        x = i * ComponentSize.width,
        y = j * ComponentSize.height;

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
    }
    requestAnimationFrame(draw);
}

function cordinateOnField(component) {
    var field = map.getField();

        i = Math.ceil(component.getCoordinates().x / component.getSize().width),
        j = Math.ceil(component.getCoordinates().y / component.getSize().height);
    
    return {
        i: i,
        j: j
    };

}

function controlPanzer(userPanzer) {
    var coordinateField = cordinateOnField(userPanzer);
    if (rightPressed && canMoveRight(userPanzer, coordinateField)) {
        userPanzer.moveRight();
    } else if (leftPressed && canMoveLeft(userPanzer, coordinateField)) {
        userPanzer.moveLeft();
    } else if (upPressed && canMoveUp(userPanzer, coordinateField)) {
        userPanzer.moveUp();
    } else if (downPressed) {
        userPanzer.moveDown();
    }
}

function canMoveRight(panzer, coordinateField) {
    var panzerSize = panzer.getSize(),
        panzerCoordinates = panzer.getCoordinates(),
        boundBorder = panzerCoordinates.x + panzerSize.width <= render.getCanvasSize().width,
        field = map.getField(),
        isWall = false;

    if (coordinateField.j + 1 < field.length && field[coordinateField.i][coordinateField.j + 1] instanceof Wall) {
        wallCoordinates = field[coordinateField.i][coordinateField.j + 1].getCoordinates();
        
        isWall = panzerCoordinates.x + panzerSize.width <= wallCoordinates.x;
    }
    return boundBorder && !isWall;
}

function canMoveLeft(panzer, coordinateField) {
    var panzerSize = panzer.getSize(),
        panzerCoordinates = panzer.getCoordinates(),
        boundBorder = panzerCoordinates.x + panzerSize.width >= 0,
        field = map.getField(),
        isWall = false;

    if (coordinateField.i - 1 >= 0 && field[coordinateField.i - 1][coordinateField.j] instanceof Wall) {
        wallCoordinates = field[coordinateField.i - 1][coordinateField.j].getCoordinates();
        
        isWall = panzerCoordinates.x - panzerSize.width <= wallCoordinates.x;
    }
    return boundBorder && !isWall;
}

function canMoveUp(panzer, coordinateField) {
    var panzerSize = panzer.getSize(),
        panzerCoordinates = panzer.getCoordinates(),
        boundBorder = panzerCoordinates.y + panzerSize.height >= 0,
        field = map.getField(),
        isWall = false;

    if (coordinateField.j - 1 >= 0 && field[coordinateField.i][coordinateField.j - 1] instanceof Wall) {
        wallCoordinates = field[coordinateField.i][coordinateField.j - 1].getCoordinates();
        
        isWall = panzerCoordinates.y - panzerSize.height <= wallCoordinates.x;
    }
    return boundBorder && !isWall;
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
