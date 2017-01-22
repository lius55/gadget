/**
 * 图像分层类
 */
(function() {
    var PicLayer = function(cfg) {
        PicLayer.superclass.constructor.call(this);

        // 图像集合 format: {image, x, y, w, h, repeat}
        // repeat: true | false
        // this.childs = [];

        BOX.copy(this, cfg, true);
        cfg = null;
    }
    BOX.extend(PicLayer, BOX.Layer);

    /**
     * 初始化分层,处理CanvasPattern对象
     */
    PicLayer.prototype.init = function() {
        for(var i = 0, len = this.childs.length; i < len; i++) {
            this.childs[i].x /= this.distance;
            this.childs[i].y /= this.distance;
        }

        BOX.Component.prototype.init.call(this);
    }
    /**
     * 更新分层组件状态
     */
    PicLayer.prototype.update = function() {
        BOX.DisplayObject.prototype.update.call(this);
    }
    /**
     * 渲染分层内的图像
     * @param {Context Object} context
     * @param {Viewport Object} viewport
     */
    PicLayer.prototype.render = function(context, viewport) {
        if(!this.visible) {
            return;
        }

        var p, px = 0, py = 0, pw = 0, ph = 0, //
        vx = viewport.x / this.distance, vy = viewport.y / this.distance, vw = viewport.w, vh = viewport.h;

        for(var i = 0, len = this.childs.length; i < len; i++) {
            p = this.childs[i];
            px = p.x;
            py = p.y;
            pw = p.w;
            ph = p.h;

            if(Math.abs((px + pw / 2) - (vx + vw / 2)) < (pw + vw) / 2 && Math.abs((py + ph / 2) - (vy + vh / 2)) < (ph + vh) / 2) {// 视口范围内
                if(!p.repeat) {
                    var sx = sy = sw = sh = fx = fy = 0;

                    if(px < vx) {
                        sx = vx - px;
                        sw = Math.min(pw - sx, vw);
                    } else {
                        fx = px - vx;
                        sw = Math.min(pw, vw - fx);
                    }

                    if(py < vy) {
                        sy = vy - py;
                        sh = Math.min(ph - sy, vh);
                    } else {
                        fy = py - vy;
                        sh = Math.min(ph, vh - fy);
                    }
                    context.drawImage(p.image, sx, sy, sw, sh, fx, fy, sw, sh);
                } else {
                    context.save();
                    context.translate(px - vx, py - vy);
                    if(!p._pattern) {
                        p._pattern = context.createPattern(p.image, 'repeat');
                    }
                    context.fillStyle = p._pattern;
                    context.fillRect(0, 0, pw, ph);
                    context.restore();
                }
            }
        }
        context = viewport = p = null;
        BOX.DisplayObject.prototype.render.call(this);
    }
    // 销毁分层
    PicLayer.prototype.destory = function() {
        for(var i = 0, len = this.childs.length; i < len; i++) {
            this.childs[i]._pattern = this.childs[i].image = null;
            this.childs[i] = null;
        }
        this.childs.length = 0;
        BOX.Component.prototype.destory.call(this);
    }

    BOX.PicLayer = PicLayer;
})();
