/**
 * 逐帧动画
 */
(function() {
    var Animation = function(cfg) {
        Animation.superclass.constructor.call(this);

        // 当前帧对象
        this._currentFrame = null;
        // 当前帧索引
        this._currentFrameNumber = -1;
        // 帧总数
        this._frameCount = 0;
        // 帧延迟
        this._framePlayedDuration = 0;
        // 暂停播放
        this._stop = true;
        // 循环播放次数
        this._loopCount = 0;
        // 播放倍速
        this._speed = 0;

        // 帧列表
        this.frames = [];
        // 动画图像
        this.image = null;
        // 循环播放
        this.loop = true;

        BOX.copy(this, cfg, true);
        cfg = null;
    }
    BOX.extend(Animation, BOX.DisplayObject);

    /**
     * @private
     * 跳转到指定帧
     * @param {Number} number
     */
    Animation.prototype._gotoFrame = function(number) {
        this._currentFrameNumber = number;
        this._currentFrame = this.frames[number - 1];
        this._framePlayedDuration = 0;
    }
    /**
     * @private
     * 跳转到下一帧
     */
    Animation.prototype._nextFrame = function() {
        var frame = 1;

        if(this._currentFrameNumber < this._frameCount) {
            frame = this._currentFrameNumber + 1;
        } else {
            // this.dispatchEvent(new BOX.AnimationEvent(BOX.AnimationEvent.LOOP));

            if(true === this.loop) {
                frame = 1;
            } else if( typeof this.loop === 'number' && this._loopCount + 1 < this.loop) {
                frame = 1;
                this._loopCount++;
            } else {
                this.stop(this._frameCount);
                return;
            }
        }

        this._gotoFrame(frame);
    }
    /**
     * 初始化
     */
    Animation.prototype.init = function() {
        if(this.frames && this.frames.length) {
            var f, i = 0, len = this.frames.length;

            this._frameCount = len;

            for(; i < len; i++) {
                f = this.frames[i];
                f = f instanceof BOX.Frame ? f : new BOX.Frame(f);
                if(!f.image && this.image) {
                    f.image = this.image;
                }
                this.frames[i] = f;
            }
            f = null;
        }

        Animation.superclass.init.call(this);
        this.play(1);
    }
    /**
     * 返回当前帧状态的碰撞检查区域
     */
    Animation.prototype.getCollRect = function() {
        return this._currentFrame.collRect;
    }
    /**
     * 检查动画是否暂停
     */
    Animation.prototype.isPlay = function() {
        return !this._stop;
    }
    /**
     * 设置播放倍速
     * @param {Number} 播放倍速 format: 0-1
     */
    Animation.prototype.setSpeed = function(speed) {
        this._speed = speed;
    }
    /**
     * 返回当前播放倍速
     */
    Animation.prototype.getSpeed = function(speed) {
        return this._speed;
    }
    /**
     * 播放动画
     */
    Animation.prototype.play = function(number) {
        // this.dispatchEvent(new BOX.AnimationEvent(BOX.AnimationEvent.PLAY_BEFORE));
        if(number) {
            this._gotoFrame(number);
        }
        this._stop = false;
        this._loopCount = 0;
        // this.dispatchEvent(new BOX.AnimationEvent(BOX.AnimationEvent.PLAY));
    }
    /**
     * 停止播放
     */
    Animation.prototype.stop = function(number) {
        if(number) {
            this._gotoFrame(number);
        }
        this._stop = true;
        // this.dispatchEvent(new BOX.AnimationEvent(BOX.AnimationEvent.STOP));
    }
    /**
     * 更新帧状态
     * @param {Number} deltaTime
     */
    Animation.prototype.update = function(deltaTime) {
        if(this._stop) {
        } else if(this._framePlayedDuration >= this._currentFrame.duration) {
            this._nextFrame();
        } else {
            if(0 == this._speed) {
            } else if(this._speed > 0) {
                deltaTime = deltaTime + deltaTime * this._speed
            } else {
                deltaTime = deltaTime * (1 / (Math.abs(this._speed) + 1));
            }
            this._framePlayedDuration += deltaTime;
        }

        BOX.DisplayObject.prototype.update.call(this);
    }
    /**
     * 渲染动画
     * @param {Context Object} context
     * @param {Number} x
     * @param {Number} y
     */
    Animation.prototype.render = function(context, x, y) {
        if(!this.visible) {
            return;
        }

        var frame = this._currentFrame;
        context.drawImage(frame.image, frame.sx, frame.sy, frame.sw, frame.sh, x + frame.offsetX, y + frame.offsetY, frame.dw, frame.dh);
        context = null;
        Animation.superclass.render.call(this);
    }
    /**
     * 销毁对象
     */
    Animation.prototype.destory = function() {
        /*
         for(var i = 0, len = this.frames.length; i < len; i++) {
         this.frames[i].destory();
         this.frames[i] = null;
         }
         */

        this._currentFrame = this.frames = this.image = null;
        this._currentFrame = this.frames = null;
        Animation.superclass.destory.call(this);
    }

    BOX.Animation = Animation;
})();
