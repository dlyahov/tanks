var ctx, canvas, userPanzer, RESOURCE_PATH = "resources",
    tankWidth, tankHeight,
    leftPressed, rightPressed, upPressed, downPressed,
    userPanzerX, userPanzerY,
    currentFieldComponent,
    render;

canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
userPanzerX = canvas.width / 2;
userPanzerY = canvas.height - 100;

userPanzer = panzer(RESOURCE_PATH + "/" + "panzer-transperency-new.png", userPanzerX, userPanzerY);

render = render();

function draw() {
    clearField();
    render.drawRect(20, 40);
    if (userPanzer.isLoaded()) {
        render.drawField(currentFieldComponent);
        render.drawPanzer(userPanzer);
        controlPanzer(userPanzer);
    }
    requestAnimationFrame(draw);
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

initField();
draw();

function clearField() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function canMoveRight(panzer) {
    var size = panzer.getSize();
    return panzer.getX() + size.width <= canvas.width;
}

function initField() {
    var currField = field().getField(),
        resultField = [];
    for (let i = 0; i < currField.length; i++) {
        resultField[i] = [];
        for (let j = 0; j < currField.length; j++) {
            if (currField[i][j] === MapElements.WALL) {
                resultField[i][j] = wall(i, j);
            } else {
                resultField[i][j] = null;
            }
        }
    }

    currentFieldComponent = resultField;
}

function controlPanzer(userPanzer) {
    if (rightPressed && canMoveRight(userPanzer)) {
        userPanzer.moveRight();
    } else if (leftPressed) {
        userPanzer.moveLeft();
    } else if (upPressed) {
        userPanzer.moveUp();
    } else if (downPressed) {
        userPanzer.moveDown();
    }
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
