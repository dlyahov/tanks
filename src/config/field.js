let me = require('config/map-elements'),
    field = [[me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL],
             [me.WALL, me.EMPTY, me.USER_PANZER, me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL],
             [me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL],
             [me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL],
             [me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL],
             [me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL],
             [me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL],
             [me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL],
             [me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL],
             [me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL],
             [me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL],
             [me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL],
             [me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL],
             [me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL]];

module.exports = {
    field : function () {
        return field;
    }
};
