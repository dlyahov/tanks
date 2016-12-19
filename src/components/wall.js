var Component = require('components/component'),
    util = require('util'),
    resources = require('config/config-resources');

Wall.prototype = Object.create(Component.prototype)
Wall.prototype.constructor = Wall;

function Wall(x, y) {
    Component.apply(this, [x, y, resources.wallPath]);
}

// util.inherits(Wall, Component);

module.exports = Wall;