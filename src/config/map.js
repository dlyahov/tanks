var mapObject = {};

function Map(field) {
    mapObject.field = field;
}

Map.prototype.getField = function() {
    return mapObject.field;
}

Map.prototype.isLoad = function() {
    var field = mapObject.field;
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if (field[i][j] && !field[i][j].isImageLoaded()) {
                return false;
            }
        }
    }

    return true;
}

module.exports = Map;