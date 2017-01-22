/**
 * 游戏类
 */
(function() {
    var Game = function(cfg) {
        Game.superclass.constructor.call(this);

        // 视口对象
        this.viewport = null;
        // 场景列表
        this.scene = null;

        // @private
        // Canvas对象
        this.canvas = null;
        // 2D画布上下文
        this.context = null;
        // 画布宽度
        this.canvasWidth = 600;
        // 画布高度
        this.canvasHeight = 400;
        // 游戏宽度
        this.width = 600;
        // 游戏高度
        this.height = 400;
        // 游戏状态
        this.playing = false;
        // 帧频
        this.FPS = 30;
        // 休眠时间
        this.sleep = 0;
        // 定时器
        this.timeoutId = null;
        // 计时器
        this.timer = {
            now : 0,
            last : 0,
            duration : 0
        };

        BOX.copy(this, cfg, true);
        Game.instance = this;
        cfg = null;
    }
    BOX.extend(Game, BOX.Component);

    /**
     * 设置画布及上下文对象
     */
    Game.prototype.setCanvas = function(canvas) {
        if('string' == typeof canvas) {
            canvas = document.getElementById(canvas);
        }

        if(canvas && canvas.getContext) {
            this.canvasWidth = canvas.width;
            this.canvasHeight = canvas.height;
            this.context = canvas.getContext('2d');
            this.canvas = canvas;
        }
        canvas = null;
    }
    /**
     * 设置帧频
     * @param {Number} fps
     */
    Game.prototype.setFPS = function(fps) {
        this.FPS = fps;
        this.sleep = 1000 / fps;
    }
    /**
     * 开始游戏
     */
    Game.prototype.start = function() {
        if(this.scene) {
            this.playing = true;
            this.timer.last = Date.now();
            this.run();
            // this.dispatchEvent(new BOX.GameEvent(BOX.GameEvent.START));
        }
    }
    /**
     * 停止游戏
     */
    Game.prototype.stop = function() {
        this.playing = false;
        if(this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
        // this.dispatchEvent(new BOX.GameEvent(BOX.GameEvent.STOP));
    }
    /**
     * @private
     * 运行时方法
     */
    Game.prototype.run = function() {
        var game = BOX.Game.instance, timer = game.timer, deltaTime;
        if(game.playing) {
            game.timeoutId = setTimeout(game.run, game.sleep);

            game.timer.now = Date.now();
            deltaTime = game.timer.now - game.timer.last;
            // frame start
            game.scene.update(deltaTime);
            // game.context.clearRect(0, 0, game.canvasWidth, game.canvasHeight);
            game.scene.render(game.context, game.viewport);
            // frame end
            game.timer.duration += deltaTime;
            game.timer.last = game.timer.now;

            // 单帧性能调试
            if(undefined === window.debugtime || window.debugtime > 5000) {
                window.debugtime = 0;
                console.log((Date.now() - game.timer.last) + '/' + deltaTime);
            } else {
                window.debugtime += deltaTime;
            }
        }
        game = timer = null;
    }
    /**
     * 销毁
     */
    Game.prototype.destory = function() {
        Game.instance = null;
        this.stop();
        if(this.scene) {
            this.scene.destory();
        }
        if(this.viewport) {
            this.viewport.destory();
        }
        this.scene = this.viewport = this.canvas = this.context = this.timer = null;
        Game.superclass.destory.call(this);
    }

    BOX.Game = Game;
})();
