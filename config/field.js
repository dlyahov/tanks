var field = function () {
    var field;
    field = [[MapElements.WALL, MapElements.WALL, MapElements.USER_PANZER],
                [MapElements.WALL, MapElements.WALL, MapElements.WALL],
                [MapElements.WALL, MapElements.WALL, MapElements.WALL]];

    return {
        getField : function () {
            return field;
        }
    };
};
