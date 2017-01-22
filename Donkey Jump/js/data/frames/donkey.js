/**
 * 驴子动画帧
 */
var donkeyFrames = {
    // 站立
    stand : [{
        sx : 0,
        sy : 0,
        sw : 128,
        sh : 128
    }],
    // 向右奔跑
    rightRun : [{
        sx : 0,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 128,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 256,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 384,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 512,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 640,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 768,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 896,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1024,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1152,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1280,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1408,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1536,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }],
    // 向左奔跑
    leftRun : [{
        sx : 0,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 128,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 256,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 384,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 512,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 640,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 768,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 896,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1024,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1152,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1280,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1408,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1536,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }],
    // 失败坠落
    dead : [{
        sx : 0,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 128,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 256,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 384,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 512,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 640,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }],
    // 超人跳跃(右)
    superjump_right : [{
        sx : 0,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 128,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 256,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 384,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 512,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 640,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 768,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 896,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1024,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1152,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1280,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1408,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }],
    // 超人跳跃(左)
    superjump_left : [{
        sx : 51,
        sy : 0,
        sw : 77,
        sh : 128,
        duration : 30
    }, {
        sx : 179,
        sy : 0,
        sw : 77,
        sh : 128,
        duration : 30
    }, {
        sx : 307,
        sy : 0,
        sw : 77,
        sh : 128,
        duration : 30
    }, {
        sx : 435,
        sy : 0,
        sw : 77,
        sh : 128,
        duration : 30
    }, {
        sx : 563,
        sy : 0,
        sw : 77,
        sh : 128,
        duration : 30
    }, {
        sx : 691,
        sy : 0,
        sw : 77,
        sh : 128,
        duration : 30
    }, {
        sx : 819,
        sy : 0,
        sw : 77,
        sh : 128,
        duration : 30
    }, {
        sx : 947,
        sy : 0,
        sw : 77,
        sh : 128,
        duration : 30
    }, {
        sx : 1075,
        sy : 0,
        sw : 77,
        sh : 128,
        duration : 30
    }, {
        sx : 1203,
        sy : 0,
        sw : 77,
        sh : 128,
        duration : 30
    }, {
        sx : 1331,
        sy : 0,
        sw : 77,
        sh : 128,
        duration : 30
    }, {
        sx : 1459,
        sy : 0,
        sw : 77,
        sh : 128,
        duration : 30
    }],
    // UFO
    UFO : [{
        sx : 0,
        sy : 0,
        sw : 256,
        sh : 512,
        duration : 30
    }, {
        sx : 256,
        sy : 0,
        sw : 256,
        sh : 512,
        duration : 30
    }, {
        sx : 512,
        sy : 0,
        sw : 256,
        sh : 512,
        duration : 30
    }, {
        sx : 768,
        sy : 0,
        sw : 256,
        sh : 512,
        duration : 30
    }, {
        sx : 1024,
        sy : 0,
        sw : 256,
        sh : 512,
        duration : 30
    }, {
        sx : 1280,
        sy : 0,
        sw : 256,
        sh : 512,
        duration : 30
    }, {
        sx : 1536,
        sy : 0,
        sw : 256,
        sh : 512,
        duration : 30
    }, {
        sx : 1792,
        sy : 0,
        sw : 256,
        sh : 512,
        duration : 30
    }, {
        sx : 2048,
        sy : 0,
        sw : 256,
        sh : 512,
        duration : 30
    }, {
        sx : 2304,
        sy : 0,
        sw : 256,
        sh : 512,
        duration : 30
    }, {
        sx : 2560,
        sy : 0,
        sw : 256,
        sh : 512,
        duration : 30
    }, {
        sx : 2816,
        sy : 0,
        sw : 256,
        sh : 512,
        duration : 30
    }, {
        sx : 3072,
        sy : 0,
        sw : 256,
        sh : 512,
        duration : 30
    }],
    // 飞机
    plan : [{
        sx : 0,
        sy : 0,
        sw : 256,
        sh : 256,
        duration : 30
    }, {
        sx : 256,
        sy : 0,
        sw : 256,
        sh : 256,
        duration : 30
    }, {
        sx : 512,
        sy : 0,
        sw : 256,
        sh : 256,
        duration : 30
    }, {
        sx : 768,
        sy : 0,
        sw : 256,
        sh : 256,
        duration : 30
    }, {
        sx : 1024,
        sy : 0,
        sw : 256,
        sh : 256,
        duration : 30
    }, {
        sx : 1280,
        sy : 0,
        sw : 256,
        sh : 256,
        duration : 30
    }, {
        sx : 1536,
        sy : 0,
        sw : 256,
        sh : 256,
        duration : 30
    }, {
        sx : 1792,
        sy : 0,
        sw : 256,
        sh : 256,
        duration : 30
    }, {
        sx : 2048,
        sy : 0,
        sw : 256,
        sh : 256,
        duration : 30
    }, {
        sx : 2304,
        sy : 0,
        sw : 256,
        sh : 256,
        duration : 30
    }, {
        sx : 2560,
        sy : 0,
        sw : 256,
        sh : 256,
        duration : 30
    }, {
        sx : 2816,
        sy : 0,
        sw : 256,
        sh : 256,
        duration : 30
    }],
    // MJ
    MJ : [{
        sx : 0,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 60
    }, {
        sx : 128,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 60
    }, {
        sx : 256,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 60
    }, {
        sx : 384,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 60
    }, {
        sx : 512,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 60
    }, {
        sx : 640,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 60
    }, {
        sx : 768,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 60
    }, {
        sx : 896,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 60
    }, {
        sx : 1024,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 60
    }, {
        sx : 1152,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 60
    }, {
        sx : 1280,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 60
    }, {
        sx : 1408,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 60
    }, {
        sx : 1536,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 60
    }, {
        sx : 1664,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 60
    }],
    // 气球
    qiqiu : [{
        sx : 0,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 128,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 256,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 384,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 512,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 640,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 768,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 896,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1024,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1152,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1280,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1408,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1536,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1664,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1792,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1920,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 2048,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 2176,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 2304,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 2432,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 2560,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 2688,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 2816,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 2944,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 3072,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 0,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 128,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 256,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 384,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 512,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 640,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 768,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 896,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1024,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1152,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1280,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1408,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1536,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1664,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1792,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 1920,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 2048,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 2176,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 2304,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 2432,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 2560,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 2688,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 2816,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 2944,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }, {
        sx : 3072,
        sy : 128,
        sw : 128,
        sh : 128,
        duration : 30
    }],
    // 向右跳跃
    jump_right : [{
        sx : 0,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 128,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 256,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 384,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 512,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 640,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 768,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 896,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 1024,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 1152,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 1280,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 1408,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 1536,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 1664,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 1792,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 1920,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 2048,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 2176,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 2304,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 2432,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 2560,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 2688,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 2816,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 2944,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 3072,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 3200,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 3328,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 3456,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 3584,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 3712,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 3840,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 3968,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 4096,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }, {
        sx : 4224,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 42,
            top : 90,
            right : 62,
            bottom : 23
        }]
    }],
    // 向左跳跃
    jump_left : [{
        sx : 0,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 128,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 256,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 384,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 512,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 640,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 768,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 896,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 1024,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 1152,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 1280,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 1408,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 1536,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 1664,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 1792,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 1920,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 2048,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 2176,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 2304,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 2432,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 2560,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 2688,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 2816,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 2944,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 3072,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 3200,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 3328,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 3456,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 3584,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 3712,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 3840,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 3968,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 4096,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }, {
        sx : 4224,
        sy : 0,
        sw : 128,
        sh : 128,
        duration : 30,
        collRect : [{
            left : 62,
            top : 90,
            right : 42,
            bottom : 23
        }]
    }]
}