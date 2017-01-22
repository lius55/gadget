/**
 * 帧动画事件
 */
(function() {
    var ViewportEvent = function(type) {
        ViewportEvent.superclass.constructor.call(this, type);

        this.x = 0;
        this.y = 0;
    }
    BOX.extend(ViewportEvent, BOX.Event);

    // 视口移动时触发
    ViewportEvent.MOVE = 'move';

    BOX.ViewportEvent = ViewportEvent;
})();
