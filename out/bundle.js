/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

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

	// userPanzer = panzer(RESOURCE_PATH + "/" + "panzer-transperency-new.png", userPanzerX, userPanzerY);

	// render = render();
	render = __webpack_require__(1);
	render.myAlert("round");

	// function draw() {
	//     clearField();
	//     render.drawRect(20, 40);
	//     if (userPanzer.isLoaded()) {
	//         render.drawField(currentFieldComponent);
	//         render.drawPanzer(userPanzer);
	//         controlPanzer(userPanzer);
	//     }
	//     requestAnimationFrame(draw);
	// }
	//
	// document.addEventListener("keydown", keyDownHandler, false);
	// document.addEventListener("keyup", keyUpHandler, false);
	//
	// initField();
	// draw();
	//
	// function clearField() {
	//     ctx.clearRect(0, 0, canvas.width, canvas.height);
	// }
	//
	// function canMoveRight(panzer) {
	//     var size = panzer.getSize();
	//     return panzer.getX() + size.width <= canvas.width;
	// }
	//
	// function initField() {
	//     var currField = field().getField(),
	//         resultField = [];
	//     for (let i = 0; i < currField.length; i++) {
	//         resultField[i] = [];
	//         for (let j = 0; j < currField.length; j++) {
	//             if (currField[i][j] === MapElements.WALL) {
	//                 resultField[i][j] = wall(i, j);
	//             } else {
	//                 resultField[i][j] = null;
	//             }
	//         }
	//     }
	//
	//     currentFieldComponent = resultField;
	// }

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


/***/ },
/* 1 */
/***/ function(module, exports) {

	var ctx, canvas, images;
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');

	function drawMap(fieldOfComponents) {
	    for (let i = 0; i < fieldOfComponents.length; i++) {
	        for (let j = 0; j < fieldOfComponents[i].length; j++) {
	            ctx.drawImage(fieldOfComponents[i][j], fieldOfComponents[i][j].width * i,
	                            fieldOfComponents[i][j].height * j);
	        }
	    }
	}

	function myAlert(str) {
	    alert(str);
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

	module.exports = {
	    drawRect : drawRect,
	    drawPanzer : drawPanzer,
	    myAlert : myAlert
	}


/***/ }
/******/ ]);