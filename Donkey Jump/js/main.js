var $ = function(id) {
    return document.getElementById(id);
}
// 创建游戏
var createGame = function() {
    var game = new DonkeyJump({
        width : 480,
        height : 3072 * 20
    });
    game.setCanvas('canvas');
    game.setFPS(60);
    game.init();
    game.start();
}
// 加载图片
var loadstate = $('loadstate'), gamecontainer = $('gamecontainer');
BOX.ImageLoader.load(imgres, function(state) {
    loadstate.innerHTML = '正在加载图像...' + ~~(state.index / state.total * 100) + '%';
    if(state.completed) {
        // 加载声音
        BOX.AudioLoader.load(audiores, function(state) {
            loadstate.innerHTML = '正在加载声音...' + ~~(state.index / state.total * 100) + '%';
            if(state.completed) {
                // 加载完毕
                loadstate.parentNode.removeChild(loadstate);
                gamecontainer.style.display = 'block';
                loadstate = gamecontainer = null;
                // 创建游戏
                createGame();
                // 监听键盘事件
                BOX.Keyboard.addListener();
            }
        });
    }
});
