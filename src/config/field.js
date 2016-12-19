var me = require('config/map-elements'),
    field = [[me.WALL, me.WALL, me.USER_PANZER, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL],
             [me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL],
             [me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL],
             [me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL],
             [me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL],
             [me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL],
             [me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL],
             [me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL]];

module.exports = {
    field : function () {
        return field;
    }
};
