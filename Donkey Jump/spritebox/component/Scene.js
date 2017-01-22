/**
 * 场景类
 */
(function() {
    var Scene = function(cfg) {
        Scene.superclass.constructor.call(this);

        BOX.copy(this, cfg, true);
        cfg = null;
    }
    BOX.extend(Scene, BOX.DisplayObjectContainer);

    BOX.Scene = Scene;
})();
