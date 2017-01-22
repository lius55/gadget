/**
 * 容器组件事件
 */
(function() {
    var DisplayObjectContainerEvent = function(type) {
        DisplayObjectContainerEvent.superclass.constructor.call(this, type);
    }
    BOX.extend(DisplayObjectContainerEvent, BOX.Event);

    // 添加组件
    DisplayObjectContainerEvent.ADD_CHILD = 'addchild';
    // 移除组件
    DisplayObjectContainerEvent.REMOVE_CHILD = 'removechild';

    BOX.DisplayObjectContainerEvent = DisplayObjectContainerEvent;
})();
