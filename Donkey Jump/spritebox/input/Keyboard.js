/**
 * 键盘输入事件
 */
(function() {
    var Keyboard = function() {
        Keyboard.superclass.constructor.call(this);
    }

    Keyboard._keyMap = {
        W : 87,
        S : 83,
        A : 65,
        D : 68,
        LEFT : 37,
        RIGHT : 39
    }

    Keyboard._stateMap = {};

    /**
     * 添加按键事件监听
     */
    Keyboard.addListener = function() {
        document.onkeydown = function(e) {
            var e = e || event, code = e.keyCode || e.which;
            Keyboard._stateMap[code] = true;
            e = null;
        }

        document.onkeyup = function(e) {
            var e = e || event, code = e.keyCode || e.which;
            Keyboard._stateMap[code] = false;
            e = null;
        }
    }
    /**
     * 移除按键事件监听
     */
    Keyboard.removeListener = function() {
        document.onkeydown = null;
        document.onkeyup = null;
    }
    /**
     * 检查某个按键是否被按下
     * @param {String} key
     */
    Keyboard.check = function(key) {
        key = Keyboard._keyMap[key];
        return !!Keyboard._stateMap[key];
    }

    BOX.Keyboard = Keyboard;
})();
