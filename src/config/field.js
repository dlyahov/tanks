var MapElements = require('config/map-elements'),
    field = [[MapElements.WALL, MapElements.WALL, MapElements.USER_PANZER],
                [MapElements.WALL, MapElements.WALL, MapElements.WALL],
                [MapElements.WALL, MapElements.WALL, MapElements.WALL]];

module.exports = {
    field : function () {
        return field;
    }
};
