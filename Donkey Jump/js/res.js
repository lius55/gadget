/**
 * 定义资源文件
 */
(function() {
    var imgpath = 'res/imgs';
    var audiopath = 'res/audio';

    window.imgres = [
    // 背景
    {
        id : 'background',
        src : imgpath + '/bg/background.png'
    },
    // 背景(夜晚)
    {
        id : 'background_night',
        src : imgpath + '/bg/background_night.png'
    },
    // 房子
    {
        id : 'floor',
        src : imgpath + '/bg/floor.png'
    },
    // 山丘(近景)
    {
        id : 'hill_near',
        src : imgpath + '/bg/hill_near.png'
    },
    // 山丘(远景)
    {
        id : 'hill',
        src : imgpath + '/bg/hill.png'
    },
    // 太阳
    {
        id : 'sun',
        src : imgpath + '/bg/sun.png'
    },
    // 站立
    {
        id : 'stand',
        src : imgpath + '/anims/stand.png'
    },
    // 奔跑动画
    {
        id : 'run',
        src : imgpath + '/anims/run.png'
    },
    // 失败坠落
    {
        id : 'dead',
        src : imgpath + '/anims/dead.png'
    },
    // 超人跳跃(右)
    {
        id : 'superjump_right',
        src : imgpath + '/anims/superjump_right.png'
    },
    // 超人跳跃(左)
    {
        id : 'superjump_left',
        src : imgpath + '/anims/superjump_left.png'
    },
    // UFO
    {
        id : 'UFO',
        src : imgpath + '/anims/UFO.png'
    },
    // 飞机
    {
        id : 'plan',
        src : imgpath + '/anims/plan.png'
    },
    // MJ
    {
        id : 'MJ',
        src : imgpath + '/anims/MJ.png'
    },
    // 向左跳跃
    {
        id : 'jump_left',
        src : imgpath + '/anims/jump_left.png'
    },
    // 向右跳跃
    {
        id : 'jump_right',
        src : imgpath + '/anims/jump_right.png'
    },
    // 气球
    {
        id : 'qiqiu',
        src : imgpath + '/anims/qiqiu.png'
    },
    // 气球背景
    {
        id : 'effect_qiqiu',
        src : imgpath + '/anims/effect_qiqiu.png'
    },
    // 脆弱的云
    {
        id : 'stair_friable',
        src : imgpath + '/anims/stair/stair_friable.png'
    },
    // 移动的云(未踩上)
    {
        id : 'stair_moveable_01',
        src : imgpath + '/anims/stair/stair_moveable_01.png'
    },
    // 移动的云(踩上)
    {
        id : 'stair_moveable_02',
        src : imgpath + '/anims/stair/stair_moveable_02.png'
    },
    // 白云1
    {
        id : 'stair_stable_01',
        src : imgpath + '/anims/stair/stair_stable_01.png'
    },
    // 白云2
    {
        id : 'stair_stable_02',
        src : imgpath + '/anims/stair/stair_stable_02.png'
    },
    // 白云3
    {
        id : 'stair_stable_03',
        src : imgpath + '/anims/stair/stair_stable_03.png'
    },
    // 白云4
    {
        id : 'stair_stable_04',
        src : imgpath + '/anims/stair/stair_stable_04.png'
    },
    // 白云5
    {
        id : 'stair_stable_05',
        src : imgpath + '/anims/stair/stair_stable_05.png'
    },
    // 云朵踩踏效果
    {
        id : 'cloud',
        src : imgpath + '/anims/cloud.png'
    },
    // 超人跳跃星光
    {
        id : 'super_jump_starlight',
        src : imgpath + '/anims/super_jump_starlight.png'
    }];

    window.audiores = [{
        id : 'ogg_background',
        loop : true,
        src : audiopath + '/ogg_background.ogg'
    }, {
        id : 'ogg_gameover',
        loop : false,
        src : audiopath + '/ogg_gameover.ogg'
    }, {
        id : 'ogg_321',
        loop : false,
        src : audiopath + '/raw/ogg_321.ogg'
    }, {
        id : 'ogg_balloon',
        loop : false,
        src : audiopath + '/raw/ogg_balloon.ogg'
    }, {
        id : 'ogg_balloon_pick',
        loop : false,
        src : audiopath + '/raw/ogg_balloon_pick.ogg'
    }, {
        id : 'ogg_btn_click',
        loop : false,
        src : audiopath + '/raw/ogg_btn_click.ogg'
    }, {
        id : 'ogg_die',
        loop : false,
        src : audiopath + '/raw/ogg_die.ogg'
    }, {
        id : 'ogg_firecrackers',
        loop : false,
        src : audiopath + '/raw/ogg_firecrackers.ogg'
    }, {
        id : 'ogg_gliding',
        loop : false,
        src : audiopath + '/raw/ogg_gliding.ogg'
    }, {
        id : 'ogg_gliding_pick',
        loop : false,
        src : audiopath + '/raw/ogg_gliding_pick.ogg'
    }, {
        id : 'ogg_go',
        loop : false,
        src : audiopath + '/raw/ogg_go.ogg'
    }, {
        id : 'ogg_jump',
        loop : false,
        src : audiopath + '/raw/ogg_jump.ogg'
    }, {
        id : 'ogg_mj',
        loop : false,
        src : audiopath + '/raw/ogg_mj.ogg'
    }, {
        id : 'ogg_mj_pick',
        loop : false,
        src : audiopath + '/raw/ogg_mj_pick.ogg'
    }, {
        id : 'ogg_spring',
        loop : false,
        src : audiopath + '/raw/ogg_spring.ogg'
    }, {
        id : 'ogg_step_broken',
        loop : false,
        src : audiopath + '/raw/ogg_step_broken.ogg'
    }, {
        id : 'ogg_super',
        loop : false,
        src : audiopath + '/raw/ogg_super.ogg'
    }, {
        id : 'ogg_super_pick',
        loop : false,
        src : audiopath + '/raw/ogg_super_pick.ogg'
    }, {
        id : 'ogg_ufo',
        loop : false,
        src : audiopath + '/raw/ogg_ufo.ogg'
    }, {
        id : 'ogg_ufo_pick',
        loop : false,
        src : audiopath + '/raw/ogg_ufo_pick.ogg'
    }];
})();
