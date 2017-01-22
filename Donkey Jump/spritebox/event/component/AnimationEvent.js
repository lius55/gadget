/**
 * 帧动画事件
 */
(function() {
    var AnimationEvent = function(type) {
        AnimationEvent.superclass.constructor.call(this, type);
    }
    BOX.extend(AnimationEvent, BOX.Event);

    // 开始播放之前触发
    AnimationEvent.PLAY_BEFORE = 'playbefore';
    // 开始播放后触发
    AnimationEvent.PLAY = 'play';
    // 单次循环播放完毕后触发
    AnimationEvent.LOOP = 'loop';
    // 播放停止后触发
    AnimationEvent.STOP = 'stop';

    BOX.AnimationEvent = AnimationEvent;
})();
