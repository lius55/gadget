/**
 * 场景视口类
 */
(function() {
    var Viewport = function(cfg) {
        Viewport.superclass.constructor.call(this);

        this.x = // 视口相对场景的X坐标
        this.y = // 视口相对场景的Y坐标
        this.w = // 视口宽度
        this.h = // 视口高度
        0;

        BOX.copy(this, cfg, true);
        cfg = null;
    }
    BOX.extend(Viewport, BOX.Component);

    /**
     * 移动视口位置
     * @param {Number} x
     * @param {Number} y
     * @param {Boolean} relative 相对移动
     */
    Viewport.prototype.move = function(x, y, relative) {
        if(relative) {
            this.x += x;
            this.y += y;
        } else {
            this.x = x;
            this.y = y;
        }

        var evt = new BOX.ViewportEvent(BOX.ViewportEvent.MOVE);
        evt.x = this.x;
        evt.y = this.y;
        this.dispatchEvent(evt);
    }

    BOX.Viewport = Viewport;
})();
