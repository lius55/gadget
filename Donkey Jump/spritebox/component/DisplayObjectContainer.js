/**
 * 容器组件基类
 */
(function() {
    var DisplayObjectContainer = function() {
        DisplayObjectContainer.superclass.constructor.call(this);

        this.childs = [];
    }
    BOX.extend(DisplayObjectContainer, BOX.DisplayObject);

    /**
     * 初始化
     */
    DisplayObjectContainer.prototype.init = function() {
        var childs = this.childs;
        for(var i = 0, len = childs.length; i < len; i++) {
            childs[i].parent = this;
            childs[i].init();
        }
        childs = null;
        DisplayObjectContainer.superclass.init.call(this);
    }
    /**
     * 在组件列表后面插入组件
     * @param {DisplayObject} child
     */
    DisplayObjectContainer.prototype.appendChild = function(child) {
        this.addChildAt(child, this.childs.length);
        child = null;
    }
    DisplayObjectContainer.prototype.add = DisplayObjectContainer.prototype.appendChild;
    /**
     * 在组件列表前面插入组件
     * @param {DisplayObject} child
     */
    DisplayObjectContainer.prototype.prependChild = function(child) {
        this.addChildAt(child, 0);
        child = null;
    }
    /**
     * 在组件列表指定位置插入组件
     * @param {DisplayObject} child
     * @param {Number} index
     */
    DisplayObjectContainer.prototype.addChildAt = function(child, index) {
        child.parent = this;
        this.childs.splice(index, 0, child);
        child = null;
        // this.dispatchEvent(new BOX.DisplayObjectContainerEvent(BOX.DisplayObjectContainerEvent.ADD_CHILD));
    }
    /**
     * 移除组件
     * @param {DisplayObject} child
     */
    DisplayObjectContainer.prototype.removeChild = function(child) {
        var childs = this.childs;
        for(var i = 0, len = childs.length; i < len; i++) {
            if(childs[i] == child) {
                this.removeChildAt(i);
                break;
            }
        }
        child = childs = null;
    }
    /**
     * 移除列表中指定位置的组件
     * @param {Number} index
     */
    DisplayObjectContainer.prototype.removeChildAt = function(index) {
        this.childs.splice(index, 1);
        // this.dispatchEvent(new BOX.DisplayObjectContainerEvent(BOX.DisplayObjectContainerEvent.REMOVE_CHILD));
    }
    /**
     * 移除列表中所有组件
     * @param {Number} index
     */
    DisplayObjectContainer.prototype.removeAll = function() {
        this.childs.length = 0;
    }
    /**
     * 获取列表中指定位置的组件
     * @param {Number} index
     */
    DisplayObjectContainer.prototype.getChildAt = function(index) {
        return this.childs[index] || null;
    }
    /**
     * 更新列表组件状态
     * @param {Number} deltaTime
     */
    DisplayObjectContainer.prototype.update = function(deltaTime) {
        var childs = this.childs;
        for(var i = 0, len = childs.length; i < len; i++) {
            if(childs[i]) {
                childs[i].update(deltaTime);
            }
        }
        childs = null;
        DisplayObjectContainer.superclass.update.call(this);
    }
    /**
     * 渲染列表组件
     * @param {Context Object} context
     * @param {Viewport Object} viewport
     */
    DisplayObjectContainer.prototype.render = function(context, viewport) {
        var childs = this.childs;
        for(var i = 0, len = childs.length; i < len; i++) {
            childs[i].render(context, viewport);
        }
        context = viewport = childs = null;
        DisplayObjectContainer.superclass.render.call(this);
    }
    /**
     * 销毁
     */
    DisplayObjectContainer.prototype.destory = function() {
        var childs = this.childs;
        for(var i = 0, len = childs.length; i < len; i++) {
            childs[0].destory();
        }
        childs.length = 0;
        childs = null;
        DisplayObjectContainer.superclass.destory.call(this);
    }

    BOX.DisplayObjectContainer = DisplayObjectContainer;
})();
