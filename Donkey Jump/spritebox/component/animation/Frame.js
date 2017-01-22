/**
 * 帧对象
 */
(function() {
    var Frame = function(cfg) {
        Frame.superclass.constructor.call(this);

        // 位图图像
        this.image = null;
        // 图像位置尺寸
        this.sx = this.sy = this.sw = this.sh = 0;
        // 绘制尺寸
        this.dw = this.dh = 0;
        // 绘制偏移量
        this.offsetX = this.offsetY = 0,
        // 延迟时间(ms)
        this.duration = 1000;

        // 碰撞区域位置 format: {left, top, right, bottom}
        this.collRect = [];

        BOX.copy(this, cfg, true);

        this.dw = this.dw || this.sw;
        this.dh = this.dh || this.sh;

        var i, len, coll;
        for( i = 0, len = this.collRect.length; i < len; i++) {
            coll = this.collRect[i];

            coll.left = coll.left || 0;
            coll.top = coll.top || 0;
            coll.right = this.dw - (coll.right || 0);
            coll.bottom = this.dh - (coll.bottom || 0);
        }
        cfg = null;
    }
    BOX.extend(Frame, BOX.Component);

    /**
     * 销毁
     */
    Frame.prototype.destory = function() {
        // this.image = this.collRect = null;
        // Frame.superclass.destory.call(this);
    }

    BOX.Frame = Frame;
})();
