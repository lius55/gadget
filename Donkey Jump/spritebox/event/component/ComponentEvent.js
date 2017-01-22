/**
 * 组件公共事件
 */
(function() {
    var ComponentEvent = function(type) {
        ComponentEvent.superclass.constructor.call(this, type);
    }
    BOX.extend(ComponentEvent, BOX.Event);

    // 初始化
    ComponentEvent.INIT = 'init';
    // 销毁
    ComponentEvent.DESTORY = 'destory';

    BOX.ComponentEvent = ComponentEvent;
})();
