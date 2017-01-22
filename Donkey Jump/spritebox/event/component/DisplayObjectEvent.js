/**
 * 可显示组件事件
 */
(function() {
    var DisplayObjectEvent = function(type) {
        DisplayObjectEvent.superclass.constructor.call(this, type);
    }
    BOX.extend(DisplayObjectEvent, BOX.Event);

    // 显示
    DisplayObjectEvent.SHOW = 'show';
    // 隐藏
    DisplayObjectEvent.HIDE = 'hide';
    // 更新状态
    DisplayObjectEvent.UPDATE = 'update';
    // 渲染
    DisplayObjectEvent.RENDER = 'render';

    BOX.DisplayObjectEvent = DisplayObjectEvent;
})();
