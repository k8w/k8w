(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.Test = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 3
        });
        var instance1 = new Graphics()
            .drawCommands(shapes.test123[0]);
        var instance2 = new Graphics()
            .drawCommands(shapes.test123[1]);
        var instance3 = new Graphics()
            .drawCommands(shapes.test123[2]);
        this.addTimedChild(instance1, 0, 1)
            .addTimedChild(instance2, 1, 1)
            .addTimedChild(instance3, 2, 1)
            .addAction(function () {
                console.log(1);


            }, 0)
            .addAction(function () {
                console.log(2)
            }, 1)
            .addAction(function () {
                console.log(3)
            }, 2);
    });

    lib.test123 = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 4
        });
        var instance1 = new lib.Test()
            .setTransform(268.05, 162.9);
        this.addChild(instance1);
    });

    lib.test123.assets = {
        "test123": "images/test123.shapes.txt"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.test123,
        background: 0xffffff,
        width: 550,
        height: 400,
        framerate: 4,
        totalFrames: 1,
        library: lib
    };
}