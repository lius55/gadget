/**
 * 驴子对象
 */
(function() {
    var Donkey = function(cfg) {
        Donkey.superclass.constructor.call(this, cfg);

        this.w = 128;
        this.h = 128;
        // 移动过的最小Y轴位置(初始位置为屏幕中心,相对初始化位置减去距离屏幕中心位置)
        this.minY = this.y - 204;
        // 失败坠落高度
        this.deadHeight = 1000;
        // 超人跳跃最小Y轴位置
        this.superJumpMinY = this.y - 1500;
        this.defaultAnim = 'stand';
        this.anims = [{
            name : 'stand',
            anim : {
                image : BOX.ImageLoader.get('stand'),
                frames : donkeyFrames.stand
            }
        }, {
            name : 'rightRun',
            anim : {
                image : BOX.ImageLoader.get('run'),
                frames : donkeyFrames.rightRun
            }
        }, {
            name : 'leftRun',
            anim : {
                image : BOX.ImageLoader.get('run'),
                frames : donkeyFrames.leftRun
            }
        }, {
            name : 'dead',
            anim : {
                image : BOX.ImageLoader.get('dead'),
                frames : donkeyFrames.dead
            }
        }, {
            name : 'superjump_right',
            anim : {
                image : BOX.ImageLoader.get('superjump_right'),
                frames : donkeyFrames.superjump_right
            }
        }, {
            name : 'superjump_left',
            anim : {
                image : BOX.ImageLoader.get('superjump_left'),
                frames : donkeyFrames.superjump_left
            }
        }, {
            name : 'UFO',
            anim : {
                image : BOX.ImageLoader.get('UFO'),
                frames : donkeyFrames.UFO
            }
        }, {
            name : 'plan',
            anim : {
                image : BOX.ImageLoader.get('plan'),
                frames : donkeyFrames.plan
            }
        }, {
            name : 'MJ',
            anim : {
                image : BOX.ImageLoader.get('MJ'),
                frames : donkeyFrames.MJ
            }
        }, {
            name : 'qiqiu',
            anim : {
                image : BOX.ImageLoader.get('qiqiu'),
                frames : donkeyFrames.qiqiu
            }
        }, {
            name : 'jump_left',
            anim : {
                loop : false,
                image : BOX.ImageLoader.get('jump_left'),
                frames : donkeyFrames.jump_left
            }
        }, {
            name : 'jump_right',
            anim : {
                loop : false,
                image : BOX.ImageLoader.get('jump_right'),
                frames : donkeyFrames.jump_right
            }
        }, {
            name : 'effect_qiqiu',
            anim : {
                image : BOX.ImageLoader.get('effect_qiqiu'),
                frames : spriteBackFrames.effect_qiqiu
            }
        }];

        // Game对象
        /**
         * Game.state状态
         * 0 - 预备
         * 1 - 初始化跳跃
         * 2 - 跳跃过程
         * 3 - 失败坠落过程
         */
        this.game = null;
        this.viewport = null;
        // 方向 format: left | right
        this.direction = 'right';
        /**
         * 驴子状态
         * 0 - 站立
         * 1 - 地面向左走
         * 2 - 地面向右走
         * 3 - 初始跳跃向左
         * 4 - 初始跳跃向右
         * 5 - 初始跳跃(无方向)
         * 6 - 向左跳跃
         * 7 - 向右跳跃
         * 8 - 跳跃无方向
         */
        this.state = 0;
        // 是否正在执行跳跃动作
        this._jumping = false;
        // 云层
        this.stairLayer = null;
    }
    BOX.extend(Donkey, BOX.Sprite);

    /**
     * 初始化
     */
    Donkey.prototype.init = function() {
        this.game = BOX.Game.instance;
        this.viewport = this.game.viewport;
        this.game.state = 0;
        Donkey.superclass.init.call(this);
    }
    /**
     * @private
     * 设置方向
     * @param {String} direction format left | right
     */
    Donkey.prototype._setDirection = function(direction) {
        this.direction = direction;
    }
    /**
     * @private
     * 边界检查
     */
    Donkey.prototype._boundsCheck = function() {
        if(this.x < -this.w) {
            this.x = 480;
        } else if(this.x > 480) {
            this.x = -this.w;
        }
    }
    /**
     * @private
     * 准备状态
     */
    Donkey.prototype._readyState = function() {
        if(BOX.Keyboard.check('W')) {
            this.game.state = 1;
            return;
        }

        if(BOX.Keyboard.check('A')) {
            if(this.state != 1) {
                this._setDirection('left');
                this.playAnim(this.direction + 'Run');
                this.state = 1;
                this.speedX = -1 / 5;
            }
            this._boundsCheck();
        } else if(BOX.Keyboard.check('D')) {
            if(this.state != 2) {
                this._setDirection('right');
                this.playAnim(this.direction + 'Run');
                this.state = 2;
                this.speedX = 1 / 5;
            }
            this._boundsCheck();
        } else {
            if(this.state != 0) {
                this.playAnim('stand');
                this.state = 0;
                this.speedX = 0;
            }
        }
    }
    /**
     * @private
     * 根据精灵位置向上移动视口
     */
    Donkey.prototype._moveViewportUp = function() {
        if(this.y < this.minY) {
            this.minY = this.y;
            var diffY = this.y - this.lastY;
            this.viewport.move(0, diffY, true);
        }
    }
    /**
     * @private
     * 超人跳跃
     */
    Donkey.prototype._superJump = function() {
        if(this.y < this.superJumpMinY) {
            this.game.state = 2;
            this.starlight.hide();
            this.starlight.stopAnim(1);
            return;
        }

        this.starlight.superJump(this);
        if(BOX.Keyboard.check('A')) {
            if(this.state != 3) {
                this._setDirection('left');
                this.playAnim('superjump_' + this.direction);
                this.state = 3;
                this.speedX = -1 / 3;
            }
            this._boundsCheck();
        } else if(BOX.Keyboard.check('D')) {
            if(this.state != 4) {
                this._setDirection('right');
                this.playAnim('superjump_' + this.direction);
                this.state = 4;
                this.speedX = 1 / 3;
            }
            this._boundsCheck();
        } else {
            if(this.state == 3 || this.state == 4) {
                this.state = 5;
                this.speedX = 0;
            } else if(this.state != 5) {
                BOX.AudioLoader.play('ogg_super');
                this.playAnim('superjump_' + this.direction);
                this.state = 5;
                this.speedY = -1 / 1.5;
            }
        }

        this._moveViewportUp();
    }
    /**
     * @private
     * 坠落检查
     */
    Donkey.prototype._checkFall = function() {
        // 864 = 800 + this.h / 2
        if(this.y > this.viewport.y + 864) {
            this.playAnim('dead');
            this.speedX = 0;
            this.game.state = 3;
            BOX.AudioLoader.replay('ogg_die');
        }
    }
    /**
     * @private
     * 失败坠落
     */
    Donkey.prototype._dead = function() {
        if(this.deadHeight > 0) {
            var diffY = this.y - this.lastY;
            if(this.y < this.viewport.y + 400) {
                this.viewport.move(0, diffY, true);
            } else {
                this.viewport.move(0, diffY * 2, true);
            }
            this.deadHeight -= diffY;
        } else {
            this.game.stop();
        }
    }
    /**
     * @private
     * 驴子与云的碰撞检查
     * @return Boolean | Stair Object
     */
    Donkey.prototype._checkIntersect = function() {
        var stairList = this.game.stair.childs, s;
        for(var i = 0, len = stairList.length; i < len; i++) {
            s = stairList[i];
            if(this.checkIntersect(s)) {
                return s;
            }
        }
        return false;
    }
    /**
     * @private
     * 跳跃
     */
    Donkey.prototype._jump = function() {
        this._checkFall();

        if(!this._jumping) {
            this.playAnim('jump_' + this.direction);
            this.speedY = -1 / 1.2;
            this.acceY = 1 / 800;
            this._jumping = true;
            BOX.AudioLoader.replay('ogg_jump');
        } else {
            if(BOX.Keyboard.check('A')) {
                if(this.state != 6) {
                    this._setDirection('left');
                    this.playAnim('jump_' + this.direction, this.getAnim()._currentFrameNumber);
                    this.state = 6;
                    this.speedX = -1 / 4;
                }
                this._boundsCheck();
            } else if(BOX.Keyboard.check('D')) {
                if(this.state != 7) {
                    this._setDirection('right');
                    this.playAnim('jump_' + this.direction, this.getAnim()._currentFrameNumber);
                    this.state = 7;
                    this.speedX = 1 / 4;
                }
                this._boundsCheck();
            } else {
                this.state = 8;
                this.speedX = 0;
            }

            // 碰撞检测
            if(this.lastY < this.y) {
                var intersect = this._checkIntersect();
                if(intersect) {
                    intersect.down();
                    this._jumping = false;
                    this.cloud.moveTo(this);
                    this._jump();
                }
            }
        }

        this._moveViewportUp();
    }
    /**
     * 更新状态
     */
    Donkey.prototype.update = function(deltaTime) {
        switch(this.game.state) {
            case 0:
                this._readyState();
                break;
            case 1:
                this._superJump();
                break;
            case 2:
                this._jump();
                break;
            case 3:
                this._dead();
                break;
        }
        Donkey.superclass.update.call(this, deltaTime);
    }

    window.Donkey = Donkey;
})();
