/**
 * 精灵分层类
 */
(function() {
    var SpriteLayer = function(cfg) {
        SpriteLayer.superclass.constructor.call(this);

        BOX.copy(this, cfg, true);
        cfg = null;
    }
    BOX.extend(SpriteLayer, BOX.Layer);

    /**
     * 分层初始化
     */
    SpriteLayer.prototype.init = function() {
        var s, i = 0, len = this.childs.length
        for(; i < len; i++) {
            s = this.childs[i];
            s = s instanceof BOX.Sprite ? s : new BOX.Sprite(s);
            this.childs[i] = s;
        }
        s = null;
        SpriteLayer.superclass.init.call(this);
    }
    /**
     * 获取分层内精灵数量
     */
    SpriteLayer.prototype.getCount = function() {
        return this.childs.length;
    }
    /**
     * 向分层中的指定位置添加精灵
     * @param {Sprite Object} sprite
     * @param {Number} index
     */
    SpriteLayer.prototype.addChildAt = function(sprite, index) {
        if(!( sprite instanceof BOX.Sprite)) {
            sprite = new BOX.Sprite(sprite);
        }
        sprite.init();
        SpriteLayer.superclass.addChildAt.call(this, sprite, index);
        sprite = null;
    }
    /**
     * 渲染分层内的精灵
     * @param {Context Object} context
     * @param {Viewport Object} viewport
     */
    SpriteLayer.prototype.render = function(context, viewport) {
        if(!this.visible) {
            return;
        }

        var s, sx = 0, sy = 0, sw = 0, sh = 0, //
        vx = viewport.x, vy = viewport.y, vw = viewport.w, vh = viewport.h;

        for(var i = 0, len = this.childs.length; i < len; i++) {
            s = this.childs[i];
            sx = s.x;
            sy = s.y;
            sw = s.w;
            sh = s.h;

            // 检查精灵是否在视窗内
            if(Math.abs((sx + sw / 2) - (vx + vw / 2)) < (sw + vw) / 2 && Math.abs((sy + sh / 2) - (vy + vh / 2)) < (sh + vh) / 2) {
                s.render(context, viewport);
            }
        }
        context = viewport = s = null;
        BOX.DisplayObject.prototype.render.call(this);
    }

    BOX.SpriteLayer = SpriteLayer;
})();
