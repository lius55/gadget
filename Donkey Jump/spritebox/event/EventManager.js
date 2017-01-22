/**
 * 事件管理类
 */
(function() {
    var EventManager = function() {
        EventManager.superclass.constructor.call(this);
    }
    BOX.extend(EventManager, BOX);

    EventManager._map = {}

    EventManager.addEventListener = function(type, listener) {
        var id = this.id, map = EventManager._map;

        if(undefined === map[id]) {
            map[id] = {
                length : 1
            }
            map[id][type] = [listener];
        } else if(undefined === map[id][type]) {
            map[id].length++;
            map[id][type] = [listener];
        } else {
            map[id][type].push(listener);
        }
        map = listener = null;
    }

    EventManager.removeEventListener = function(type, listener) {
        var id = this.id, map = EventManager._map;

        if(map[id] && map[id][type]) {
            var listeners = map[id][type];

            for(var i = 0, len = listeners.length; i < len; i++) {
                if(listeners[i] === listener) {
                    listeners.splice(i, 1);

                    if(0 === listeners.length) {
                        delete map[id][type];
                        map[id].length--;

                        if(0 === map[id].length) {
                            delete map[id];
                        }
                    }

                    break;
                }
            }
            listeners = null;
        }
        map = listener = null;
    }

    EventManager.removeEventListenerByType = function(type) {
        var id = this.id, map = EventManager._map;

        if(map[id] && map[id][type]) {
            delete map[id][type];
            map[id].length--;
        }

        if(0 === map[id].length) {
            delete map[id];
        }
        map = null;
    }

    EventManager.removeAllEventListeners = function() {
        var id = this.id, map = EventManager._map;
        if(map[id]) {
            delete map[id];
        }
        map = null;
    }

    EventManager.dispatchEvent = function(event) {
        var id = this.id, map = EventManager._map, type = event.type;

        if(map[id] && map[id][type]) {
            var listeners = map[id][type];

            for(var i = 0, len = listeners.length; i < len; i++) {
                listeners[i].call(this, event);
            }
            listeners = null;
        }
        map = event = null;
    }

    EventManager.hasEventListener = function(type) {
        var id = this.id, map = EventManager._map;
        var has = (map[id] && map[id][type]) ? true : false;
        map = null;
        return has;
    }

    BOX.EventManager = EventManager;
})();
