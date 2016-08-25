var wall = function (x, y) {
    var path = configResources(),
        component = component(path.wallPath, x, y);

    return component;
};
