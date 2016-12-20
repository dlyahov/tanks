var me = require('config/map-elements'),
    field = [[me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL],
             [me.WALL, me.EMPTY, me.USER_PANZER, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL],
             [me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL],
             [me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL],
             [me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL],
             [me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL],
             [me.WALL, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.EMPTY, me.WALL],
             [me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL, me.WALL]];
    

(function transformField() {
    let transformField = [];
    for (let i = 0; i < field[0].length; i++) {
        transformField[i] = [];
        for (let j = 0; j < field.length; j++) {
            transformField[i][j] = field[j][i];
        }
    }
    field = transformField;
})();

module.exports = {
    field : function () {
        return field;
    }
};
