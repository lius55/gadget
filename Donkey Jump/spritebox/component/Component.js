/**
 * 所有BOX组件的基类
 */
(function() {
    var Component = function() {
        Component.superclass.constructor.call(this);
    }
    BOX.extend(Component, BOX.EventDispatcher);

    /**
     * 组件初始化
     */
    Component.prototype.init = function() {
        // this.dispatchEvent(new BOX.ComponentEvent(BOX.ComponentEvent.INIT));
    }
    /**
     * 组件销毁
     */
    Component.prototype.destory = function() {
        if(this.parent) {
            this.parent.removeChild(this);
            this.parent = null;
        }
        // this.dispatchEvent(new BOX.ComponentEvent(BOX.ComponentEvent.DESTORY));
        this.removeAllEventListeners();
    }

    BOX.Component = Component;
})();
