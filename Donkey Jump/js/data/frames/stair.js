/**
 * 云朵动画
 */
var stairFrames = {
    // 脆弱的云
    stair_friable : [{
        sx : 0,
        sy : 0,
        sw : 256,
        sh : 128,
        collRect : [{
            left : 0,
            top : 0,
            right : 112,
            bottom : 100
        }]
    }],
    // 脆弱的云(消失)
    stair_friable_destory : [{
        sx : 0,
        sy : 0,
        sw : 256,
        sh : 128,
        duration : 50
    }, {
        sx : 256,
        sy : 0,
        sw : 256,
        sh : 128,
        duration : 50
    }, {
        sx : 512,
        sy : 0,
        sw : 256,
        sh : 128,
        duration : 50
    }, {
        sx : 768,
        sy : 0,
        sw : 256,
        sh : 128,
        duration : 50
    }, {
        sx : 1024,
        sy : 0,
        sw : 256,
        sh : 128,
        duration : 50
    }],
    // 移动的云(未踩上)
    stair_moveable_01 : [{
        sx : 0,
        sy : 0,
        sw : 256,
        sh : 128,
        collRect : [{
            left : 0,
            top : 0,
            right : 99,
            bottom : 78
        }]
    }],
    // 移动的云(已踩上)
    stair_moveable_02 : [{
        sx : 0,
        sy : 0,
        sw : 256,
        sh : 128,
        duration : 100,
        collRect : [{
            left : 0,
            top : 0,
            right : 99,
            bottom : 78
        }]
    }],
    // 白云1
    stair_stable_01 : [{
        sx : 0,
        sy : 0,
        sw : 256,
        sh : 128,
        collRect : [{
            left : 0,
            top : 0,
            right : 104,
            bottom : 78
        }]
    }],
    // 白云2
    stair_stable_02 : [{
        sx : 0,
        sy : 0,
        sw : 256,
        sh : 128,
        collRect : [{
            left : 0,
            top : 0,
            right : 103,
            bottom : 78
        }]
    }],
    // 白云3
    stair_stable_03 : [{
        sx : 0,
        sy : 0,
        sw : 256,
        sh : 128,
        collRect : [{
            left : 0,
            top : 0,
            right : 103,
            bottom : 78
        }]
    }],
    // 白云4
    stair_stable_04 : [{
        sx : 0,
        sy : 0,
        sw : 256,
        sh : 128,
        collRect : [{
            left : 0,
            top : 0,
            right : 103,
            bottom : 78
        }]
    }],
    // 白云5
    stair_stable_05 : [{
        sx : 0,
        sy : 0,
        sw : 256,
        sh : 128,
        collRect : [{
            left : 0,
            top : 0,
            right : 104,
            bottom : 78
        }]
    }]
}