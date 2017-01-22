/**
 * 驴子跳跳游戏
 */
(function() {
    var DonkeyJump = function(cfg) {
        DonkeyJump.superclass.constructor.call(this, cfg);

        // 游戏起始Y轴坐标
        this.startY = (3072 - 800) * 20;
        // 驴子
        this.donkey = null;
    }
    BOX.extend(DonkeyJump, BOX.Game);

    /**
     * 添加效果层
     */
    DonkeyJump.prototype._addEffectLayer = function() {
        var effectLayer = new BOX.SpriteLayer();

        // 添加驴子踩到云彩效果
        var cloud = new Cloud();
        effectLayer.add(cloud);

        // 创建星光效果
        var starlight = new Starlight();
        effectLayer.add(starlight);

        this.donkey.cloud = cloud;
        this.donkey.starlight = starlight;

        this.effectLayer = effectLayer;
        this.scene.add(effectLayer);
    }
    /**
     * 添加云层
     */
    DonkeyJump.prototype._addStairLayer = function() {
        var y = this.startY + 100;
        Stair.lastStairY = y;
        Stair.createStairY();

        var defaultStair = new Stair({
            y : y
        });
        var stairLayer = new BOX.SpriteLayer({
            childs : [defaultStair]
        });

        this.stair = stairLayer;
        this.scene.add(stairLayer);
    }
    /**
     * 添加驴子
     */
    DonkeyJump.prototype._addDonkey = function() {

        // 创建驴子
        var donkey = new Donkey({
            x : (480 - 128) / 2,
            y : this.startY + 540
        });
        var DonkeyLayer = new BOX.SpriteLayer({
            childs : [donkey]
        });
        this.donkey = donkey;
        this.scene.add(DonkeyLayer);
    }
    /**
     * 添加背景层
     */
    DonkeyJump.prototype._addBackLayer = function() {
        // 蓝天黑夜
        var backgroundLayer = new BOX.PicLayer({
            distance : 20,
            childs : [{
                image : BOX.ImageLoader.get('background_night'),
                x : 0,
                y : 0,
                w : 480,
                h : 1024
            }, {
                image : BOX.ImageLoader.get('background'),
                x : 0,
                y : 1024 * 20,
                w : 480,
                h : 2048
            }]
        });

        // 太阳
        var sunLayer = new BOX.PicLayer({
            distance : 20,
            childs : [{
                image : BOX.ImageLoader.get('sun'),
                x : 115 * 20,
                y : this.startY - 6000,
                w : 256,
                h : 256
            }]
        });

        // 山丘(远景)
        var hillLayer = new BOX.PicLayer({
            distance : 20,
            childs : [{
                image : BOX.ImageLoader.get('hill'),
                x : 0,
                y : this.startY + (800 - 603) * 20,
                w : 480,
                h : 603
            }]
        });

        // 山丘(近景)
        var hillNearLayer = new BOX.PicLayer({
            distance : 15,
            childs : [{
                image : BOX.ImageLoader.get('hill_near'),
                x : 0,
                y : this.startY + (800 - 613) * 15,
                w : 480,
                h : 613
            }]
        });

        // 房子
        var floorLayer = new BOX.PicLayer({
            distance : 1,
            childs : [{
                image : BOX.ImageLoader.get('floor'),
                x : 0,
                y : this.startY + (800 - 584),
                w : 480,
                h : 584
            }]
        });

        this.scene.add(backgroundLayer);
        this.scene.add(sunLayer);
        this.scene.add(hillLayer);
        this.scene.add(hillNearLayer);
        this.scene.add(floorLayer);
    }
    /**
     * @private
     * 检查并销毁已超出范围的云
     */
    DonkeyJump.prototype._stairDestory = function() {
        var s, stairs = this.stair.childs, vy = this.viewport.y;
        for(var i = stairs.length - 1; i >= 0; i--) {
            s = stairs[i];
            if(s.y > vy + 800) {
                //s.destory();
            }
        }
        s = stairs = null;
    }
    /**
     * 重写开始游戏方法
     */
    DonkeyJump.prototype.start = function() {
        BOX.AudioLoader.play('ogg_background');
        DonkeyJump.superclass.start.call(this);
    }
    /**
     * 重写暂停游戏方法
     */
    DonkeyJump.prototype.stop = function() {
        BOX.AudioLoader.pause('ogg_background');
        DonkeyJump.superclass.stop.call(this);
    }
    // temp
    DonkeyJump.prototype.run = function() {
        /*
        if(BOX.Keyboard.check('W')) {
        BOX.Game.instance.viewport.move(0, -10, true);
        } else if(BOX.Keyboard.check('S')) {
        BOX.Game.instance.viewport.move(0, 10, true);
        }
        */
        //BOX.Game.instance._stairDestory();
        DonkeyJump.superclass.run.call(this);
    }
    /**
     * 初始化游戏
     */
    DonkeyJump.prototype.init = function() {
        // 创建场景
        this.scene = new BOX.Scene();
        // 创建视口
        this.viewport = new BOX.Viewport({
            x : 0,
            y : 0,
            w : 480,
            h : 800
        });
        // 监听视口移动,动态创建云朵
        this.viewport.addEventListener(BOX.ViewportEvent.MOVE, function(evt) {
            if(evt.y < Stair.lastStairY) {
                var stair = new Stair({
                    y : Stair.nextStairY
                });
                BOX.Game.instance.stair.add(stair);
                Stair.createStairY();
            }
            evt = null;
        });
        // 添加背景
        this._addBackLayer();
        // 添加云层
        this._addStairLayer();
        // 添加驴子
        this._addDonkey();
        // 添加效果
        this._addEffectLayer();
        // 初始化
        this.scene.init();
        // 初始化视图位置
        BOX.Game.instance.viewport.move(0, this.startY);

        DonkeyJump.superclass.init.call(this);
    }

    window.DonkeyJump = DonkeyJump;
})();
