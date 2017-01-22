/**
 * 定义事件对象基类
 */
(function() {
    var Event = function(type) {
        Event.superclass.constructor.call(this);

        this.type = type;
    }
    BOX.extend(Event, BOX);

    Event.prototype.toString = function() {
        return '[Event type=' + this.type + ']';
    }

    BOX.Event = Event;
})();
