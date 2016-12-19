var Component = require('components/component'),
    resources = require('config/config-resources');

Empty.prototype = Object.create(Component.prototype)
Empty.prototype.constructor = Empty;

function Empty(x, y) {
    Component.apply(this, [x, y, resources.emptyPath]);
    
}

module.exports = Empty;