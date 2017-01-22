/**
 * 事件调度及派发基类
 */
(function() {
    var EventDispatcher = function(type) {
        EventDispatcher.superclass.constructor.call(this);
    }
    BOX.extend(EventDispatcher, BOX);

    EventDispatcher.prototype.addEventListener = function(type, listener) {
        BOX.EventManager.addEventListener.call(this, type, listener);
        listener = null;
    }

    EventDispatcher.prototype.removeEventListener = function(type, listener) {
        BOX.EventManager.removeEventListener.call(this, type, listener);
        listener = null;
    }

    EventDispatcher.prototype.removeEventListenerByType = function(type) {
        BOX.EventManager.removeEventListenerByType.call(this, type);
    }

    EventDispatcher.prototype.removeAllEventListeners = function() {
        BOX.EventManager.removeAllEventListeners.call(this);
    }

    EventDispatcher.prototype.dispatchEvent = function(event) {
        BOX.EventManager.dispatchEvent.call(this, event);
        event = null;
    }

    EventDispatcher.prototype.hasEventListener = function(type) {
        return BOX.EventManager.hasEventListener.call(this, type);
    }

    BOX.EventDispatcher = EventDispatcher;
})();
