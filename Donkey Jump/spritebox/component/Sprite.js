/**
 * 精灵基类
 */
(function() {

    var Sprite = function(cfg) {
        Sprite.superclass.constructor.call(this);

        this.x = // X坐标
        this.y = // Y坐标
        this.w = // 宽度
        this.h = // 高度
        this.speedX = // X移动速度
        this.speedY = // Y移动速度
        this.acceX = // X加速度
        this.acceY = // Y加速度
        0;

        this.lastSpeedX = // 最后一次X移动速度
        this.lastSpeedY = // 最后一次Y移动速度
        this.lastX = // X最后坐标
        this.lastY = // Y最后坐标
        0;

        // 样式设定
        // 透明度(0 - 1)
        this.alpha = 1;
        // 旋转
        // this.rotate = 0;

        // 初始化默认播放动画
        this.defaultAnim = '';
        // 动画列表 format: {name: '', anim: [Animation Object]}
        this.anims = [];

        // 当前正在播放的动画名称
        this._currentAnimName = '';
        // 当前正在播放的动画
        this._currentAnim = null;

        BOX.copy(this, cfg, true);
        cfg = null;
    }
    BOX.extend(Sprite, BOX.DisplayObject);
    /**
     * 初始化精灵
     */
    Sprite.prototype.init = function() {
        if(this.anims && this.anims.length) {
            var a, anims = {}, i = 0, len = this.anims.length;

            for(; i < len; i++) {
                a = this.anims[i];
                // 将动画配置转化为Animation对象
                a.anim = a.anim instanceof BOX.Animation ? a.anim : new BOX.Animation(a.anim);
                a.anim.init();
                anims[a.name] = a.anim;
            }

            this.anims = anims;
            anims = a = null;
        }

        Sprite.superclass.init.call(this);

        if(this.defaultAnim) {// 播放默认动画
            this.playAnim(this.defaultAnim);
        }
    }
    /**
     * 获取当前正在播放的动画名称
     */
    Sprite.prototype.getAnimName = function() {
        return this._currentAnimName;
    }
    /**
     * 获取当前正在播放的动画
     */
    Sprite.prototype.getAnim = function() {
        return this._currentAnim;
    }
    /**
     * 查询当前动画是否正在播放
     */
    Sprite.prototype.isPlay = function() {
        if(this._currentAnim) {
            return this._currentAnim.isPlay();
        }

        return false;
    }
    /**
     * 设置精灵的当前播放动画
     * @param {String} anim
     * @param {Number} number
     */
    Sprite.prototype.playAnim = function(anim, number) {
        this._currentAnimName = anim;
        this._currentAnim = this.anims[anim];
        this._currentAnim.play(number || 1);
    }
    /**
     * 停止播放当前播放动画
     * @param {Number} number
     */
    Sprite.prototype.stopAnim = function(number) {
        this._currentAnim.stop(number);
    }
    /**
     * 更新精灵状态
     * @param {Number} deltaTime
     */
    Sprite.prototype.update = function(deltaTime) {
        this.lastSpeedX = this.speedX;
        this.lastSpeedY = this.speedY;
        this.lastX = this.x;
        this.lastY = this.y;

        // 根据当前速度和重力计算新速度
        this.speedX = this.lastSpeedX + this.acceX * deltaTime;
        this.speedY = this.lastSpeedY + this.acceY * deltaTime;

        // 计算X,Y轴偏移量
        var dX = Math.round((this.lastSpeedX + this.speedX) * deltaTime / 2);
        var dY = Math.round((this.lastSpeedY + this.speedY) * deltaTime / 2);

        // 计算X,Y轴新坐标
        this.x = this.lastX + dX;
        this.y = this.lastY + dY;

        // 更新当前动画帧状态
        if(this._currentAnim) {
            this._currentAnim.update(deltaTime);
        }
        Sprite.superclass.update.call(this);
    }
    /**
     * 返回精灵当前状态的碰撞检查区域
     */
    Sprite.prototype.getCollRect = function() {
        return this._currentAnim ? this._currentAnim.getCollRect() : null;
    }
    /**
     * 当前精灵相关的碰撞检查
     * @param {Sprite Object} sprite2
     */
    Sprite.prototype.checkIntersect = function(sprite2) {
        var collRect1 = this.getCollRect(), collRect2 = sprite2.getCollRect();
        var i1, len1 = collRect1.length, i2, len2 = collRect2.length, coll1, coll2, result = false;

        for( i1 = 0; i1 < len1; i1++) {
            coll1 = collRect1[i1];
            for( i2 = 0; i2 < len2; i2++) {
                coll2 = collRect2[i2];
                if(coll1 && coll2 && !(coll1.left + this.x > coll2.right + sprite2.x || coll2.left + sprite2.x > coll1.right + this.x || coll1.top + this.y > coll2.bottom + sprite2.y || coll2.top + sprite2.y > coll1.bottom + this.y )) {
                    result = true;
                    break;
                }
            }
        }
        sprite2 = collRect1 = collRect2 = coll1 = coll2 = null;
        return result;
    }
    /**
     * 绘制精灵状态
     * @param {Context Object} context
     * @param {Viewport Object} viewport
     */
    Sprite.prototype.render = function(context, viewport) {
        if(this.visible && this._currentAnim) {
            context.save();
            if(this.alpha > 0 && this.alpha < 1) {
                context.globalAlpha = this.alpha;
            }

            this._currentAnim.render(context, this.x - viewport.x, this.y - viewport.y);
            context.restore();
            Sprite.superclass.render.call(this);
        }
        context = viewport = null;
    }
    /**
     * 销毁精灵
     */
    Sprite.prototype.destory = function() {
        // 循环销毁动画对象
        for(name in this.anims) {
            if(this.anims.hasOwnProperty(name)) {
                this.anims[name].destory();
                this.anims[name] = null;
                delete this.anims[name];
            }
        }

        this._currentAnim = this.anims = null;
        Sprite.superclass.destory.call(this);
    }

    BOX.Sprite = Sprite;
})();
