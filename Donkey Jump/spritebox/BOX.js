/**
 * OpenSprite定义
 */
(function() {
    var BOX = function() {
        this.id = 'box' + ++BOX.index;
    }
    BOX.index = 0;

    /**
     * 继承
     * @param {Function} childClass
     * @param {Function} parentClass
     */
    BOX.extend = function(childClass, parentClass) {
        var F = new Function();
        F.prototype = parentClass.prototype;
        childClass.prototype = new F();

        childClass.prototype.constructor = childClass;
        // 在子类中保持对父类构造函数的引用
        childClass.superclass = parentClass.prototype;

        if(childClass.prototype.constructor == Object.prototype.constructor) {
            childClass.prototype.constructor = parentClass;
        }
        F = childClass = parentClass = null;
    }
    /**
     * 对象复制
     * @param {Object} source
     * @param {Object} obj
     * @param {Boolean} cover
     */
    BOX.copy = function(source, obj, cover) {
        var key;

        if(arguments.length == 1) {
            obj = source;
            source = {};
        }

        for(key in obj) {
            if(obj.hasOwnProperty(key)) {
                if(undefined === source[key]) {
                    source[key] = obj[key];
                } else if(cover) {
                    source[key] = obj[key];
                }
            }
        }

        return source;
    }
    /**
     * 事件代理
     * @param {Function} func
     * @param {Object} scope
     */
    BOX.delegate = function(func, scope) {
        scope = scope || window;

        if(arguments.length > 2) {
            var args = Array.prototype.slice.call(arguments, 2);

            return function() {
                return func.apply(scope, args);
                scope = args = null;
            }
        } else {
            return function() {
                return func.call(scope);
                scope = null;
            }
        }
    }
    /**
     * 日志跟踪
     */
    BOX.trace = function() {
        var logs = [];
        for(var i = 0; i < arguments.length; i++) {
            logs.push(arguments[i]);
        }
        if('undefined' != typeof console && 'function' == typeof console.log) {
            console.log(logs.join(' '));
        }
    }

    window.spritebox = window.BOX = BOX;
})();
