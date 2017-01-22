/**
 * 场景分层基类
 */
(function() {
    var Layer = function() {
        Layer.superclass.constructor.call(this);

        // 分层与视口视差距离
        this.distance = 1;
    }
    BOX.extend(Layer, BOX.DisplayObjectContainer);

    /**
     * 设置距离
     * @param {Number} distance
     */
    Layer.prototype.setDistance = function(distance) {
        this.distance = Math.max(distance || 1);
    }
    /**
     * 返回当前分层距离
     */
    Layer.prototype.getDistance = function(distance) {
        return this.distance;
    }

    BOX.Layer = Layer;
})();
