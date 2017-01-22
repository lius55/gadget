/**
 * 所有可显示组件基类
 */
(function() {
    var DisplayObject = function() {
        DisplayObject.superclass.constructor.call(this);

        this.visible = true;
    }
    BOX.extend(DisplayObject, BOX.Component);

    /**
     * 显示组件
     */
    DisplayObject.prototype.show = function() {
        this.visible = true;
        // this.dispatchEvent(new BOX.DisplayObjectEvent(BOX.DisplayObjectEvent.SHOW));
    }
    /**
     * 隐藏组件
     */
    DisplayObject.prototype.hide = function() {
        this.visible = false;
        // this.dispatchEvent(new BOX.DisplayObjectEvent(BOX.DisplayObjectEvent.HIDE));
    }
    /**
     * 更新状态
     */
    DisplayObject.prototype.update = function() {
        // this.dispatchEvent(new BOX.DisplayObjectEvent(BOX.DisplayObjectEvent.UPDATE));
    }
    /**
     * 渲染组件
     */
    DisplayObject.prototype.render = function() {
        // this.dispatchEvent(new BOX.DisplayObjectEvent(BOX.DisplayObjectEvent.RENDER));
    }

    BOX.DisplayObject = DisplayObject;
})();
