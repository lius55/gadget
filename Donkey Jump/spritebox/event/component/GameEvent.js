/**
 * 游戏事件
 */
(function() {
    var GameEvent = function(type) {
        GameEvent.superclass.constructor.call(this, type);
    }
    BOX.extend(GameEvent, BOX.Event);

    // 开始游戏
    GameEvent.START = 'start';
    // 停止游戏
    GameEvent.STOP = 'stop';

    BOX.GameEvent = GameEvent;
})();
