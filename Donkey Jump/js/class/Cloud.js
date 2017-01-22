/**
 * 踩踏效果
 */
(function() {

    var Cloud = function(cfg) {
        Cloud.superclass.constructor.call(this, cfg);

        this.visible = false;

        this.w = 64;
        this.h = 16;

        this.defaultAnim = 'cloud';
        this.anims = [{
            name : 'cloud',
            anim : {
                loop : false,
                image : BOX.ImageLoader.get('cloud'),
                frames : cloudFrames.cloud
            }
        }];
    }
    BOX.extend(Cloud, BOX.Sprite);

    /**
     * 移动到驴子的脚下并显示
     * @param {Donkey Object} donkey
     */
    Cloud.prototype.moveTo = function(donkey) {
        if(donkey.direction == 'left') {
            this.x = donkey.x + 72;
            this.y = donkey.y + 87;
        } else {
            this.x = donkey.x + 36;
            this.y = donkey.y + 87;
        }
        this.playAnim('cloud', 1);
        this.visible = true;
        donkey = null;
    }

    Cloud.prototype.update = function(deltaTime) {
        if(this.visible) {
            if(!this.getAnim().isPlay()) {
                this.visible = false;
            } else {
                Cloud.superclass.update.call(this, deltaTime);
            }
        }
    }

    window.Cloud = Cloud;
})();
