/**
 * 云朵类
 */
(function() {

    var Stair = function(cfg) {
        Stair.superclass.constructor.call(this, cfg);

        // 云朵最小X位置
        this.minX = 10;
        // 云朵最大X位置
        this.maxX = 313;
        this.x = BOX.Math.getRandom(this.minX, this.maxX);
        this.w = 256;
        this.h = 128;

        this.anims = [
        // 脆弱的云
        {
            name : 'stair_friable',
            anim : {
                loop : false,
                image : BOX.ImageLoader.get('stair_friable'),
                frames : stairFrames.stair_friable
            }
        },
        // 脆弱的云(消失)
        {
            name : 'stair_friable_destory',
            anim : {
                loop : false,
                image : BOX.ImageLoader.get('stair_friable'),
                frames : stairFrames.stair_friable_destory
            }
        },
        // 移动的云(未踩上)
        {
            name : 'stair_moveable_01',
            anim : {
                loop : false,
                image : BOX.ImageLoader.get('stair_moveable_01'),
                frames : stairFrames.stair_moveable_01
            }
        },
        // 移动的云(已踩上)
        {
            name : 'stair_moveable_02',
            anim : {
                loop : false,
                image : BOX.ImageLoader.get('stair_moveable_02'),
                frames : stairFrames.stair_moveable_02
            }
        },
        // 白云1
        {
            name : 'stair_stable_01',
            anim : {
                image : BOX.ImageLoader.get('stair_stable_01'),
                frames : stairFrames.stair_stable_01
            }
        },
        // 白云2
        {
            name : 'stair_stable_02',
            anim : {
                image : BOX.ImageLoader.get('stair_stable_02'),
                frames : stairFrames.stair_stable_02
            }
        },
        // 白云3
        {
            name : 'stair_stable_03',
            anim : {
                image : BOX.ImageLoader.get('stair_stable_03'),
                frames : stairFrames.stair_stable_03
            }
        },
        // 白云4
        {
            name : 'stair_stable_04',
            anim : {
                image : BOX.ImageLoader.get('stair_stable_04'),
                frames : stairFrames.stair_stable_04
            }
        },
        // 白云5
        {
            name : 'stair_stable_05',
            anim : {
                image : BOX.ImageLoader.get('stair_stable_05'),
                frames : stairFrames.stair_stable_05
            }
        }];

        // 构造时随机指定云的动画
        var stairList = ['stair_friable', 'stair_moveable_01', 'stair_stable_01', 'stair_stable_02', 'stair_stable_03', 'stair_stable_04', 'stair_stable_05'];
        // 云的类型
        this.name = stairList[BOX.Math.getRandom(0, 6)];
        this.defaultAnim = this.name;
        this.isDown = false;

        // 会移动的云
        if(this.name == 'stair_moveable_01') {
            // 随机配置移动速度
            this.speedX = BOX.Math.getRandom(0.1, 0.2);
            this.acceX = 0;
            // 配置移动方向
            if(this.speedX > 0.15) {
                this.speedX = -this.speedX;
            }
            this.speedX = 0.2;
        }
    }
    BOX.extend(Stair, BOX.Sprite);

    /**
     * @static
     * 最后生成云的Y轴坐标
     */
    Stair.lastStairY = 0;
    /**
     * @static
     * 本次生成云的Y轴坐标
     */
    Stair.nextStairY = 0;

    /**
     * @static
     * 生成下一朵云的Y轴坐标
     */
    Stair.createStairY = function() {
        Stair.nextStairY = Stair.lastStairY - BOX.Math.getRandom(130, 200);
        Stair.lastStairY = Stair.nextStairY;
    }
    /**
     * 云被踩上
     */
    Stair.prototype.down = function() {
        if(this.isDown) {
            return false;
        }

        this.isDown = true;
        if(this.name == 'stair_friable') {
            // 脆弱的云,被踩上后被销毁
            this.playAnim('stair_friable_destory');
            BOX.AudioLoader.replay('ogg_step_broken');
        } else if(this.name == 'stair_moveable_01') {
            // 移动的云,被踩上后更改状态
            this.playAnim('stair_moveable_02');
        }
    }
    /**
     * 重写更新方法
     */
    Stair.prototype.update = function(deltaTime) {
        if(this.isDown) {
            if(this.name == 'stair_friable') {
                if(!this.getAnim().isPlay()) {
                    this.destory();
                }
            } else if(this.name == 'stair_moveable_01') {
                if(!this.getAnim().isPlay()) {
                    this.isDown = false;
                    this.playAnim('stair_moveable_01');
                }
            }
        }

        // 会移动的云
        if(this.name == 'stair_moveable_01') {
            if(this.x < this.minX || this.x > this.maxX) {
                this.speedX = -this.speedX;
            }
        }

        var vy = BOX.Game.instance.viewport.y;
        if(this.y > vy + 800) {
            this.destory();
        } else {
            Stair.superclass.update.call(this, deltaTime);
        }
    }

    window.Stair = Stair;
})();
