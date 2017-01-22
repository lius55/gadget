/**
 * 星光效果
 */
(function() {
    var Starlight = function(cfg) {
        Starlight.superclass.constructor.call(this, cfg);

        this.anims = [
        // 超人跳跃星光动画
        {
            name : 'super_jump_starlight',
            anim : {
                image : BOX.ImageLoader.get('super_jump_starlight'),
                frames : starlightFrames.super_jump_starlight
            }
        }];
    }
    BOX.extend(Starlight, BOX.Sprite);

    /**
     * 显示超人跳跃星光动画
     * @param {Donkey Object} donkey
     */
    Starlight.prototype.superJump = function(donkey) {
        if(donkey.direction == 'left') {
            this.x = donkey.x + 2;
            this.y = donkey.y + 63;
        } else {
            this.x = donkey.x + 30;
            this.y = donkey.y + 63;
        }

        if(!this.isPlay()) {
            this.playAnim('super_jump_starlight');
        }
    }

    window.Starlight = Starlight;
})();
