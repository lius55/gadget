/**
 * 音频加载器
 */
(function() {
    var AudioLoader = function() {
    }
    /**
     * 已经加载的音频列表
     */
    AudioLoader._audioList = {};

    /**
     * 加载音频文件
     * @param {Array} list URL列表{id, src}
     * @param {Function} loadstatechange 加载状态发生变化时的事件函数
     */
    AudioLoader.load = function(list, loadstatechange) {
        if('[object Array]' != Object.prototype.toString.call(list)) {
            list = [list];
        }

        var len = list.length, total = arguments[2] || len, index = total - len + 1;
        var audio = document.createElement('audio'), item = list.shift();
        audio.autoplay = false;
        audio.loop = !!item.loop;
        audio.preload = 'auto';

        audio.addEventListener('canplaythrough', function() {
            if(!item) {
                return false;
            }
            AudioLoader._audioList[item.id] = this;

            loadstatechange.call(this, {
                total : total,
                index : index,
                completed : index == total
            });

            if(index < total) {
                AudioLoader.load(list, loadstatechange, total);
            }

            // audio.removeEventListener('canplaythrough');
            audio = list = item = loadstatechange = null;
        });
        audio.src = item.src;

    }
    /**
     * 播放音频
     */
    AudioLoader.play = function(id) {
        AudioLoader._audioList[id].play();
    }
    /**
     * 重新开始播放音频
     */
    AudioLoader.replay = function(id) {
        var audio = AudioLoader._audioList[id];
        audio.currentTime = 0;
        audio.play();
    }
    /**
     * 暂停播放
     */
    AudioLoader.pause = function(id) {
        AudioLoader._audioList[id].pause();
    }
    /**
     * 移除音频对象
     */
    AudioLoader.remove = function(id) {
        AudioLoader._audioList[id] = null;
        delete AudioLoader._audioList[id];
    }
    /**
     * 移除所有已加载的音频对象
     */
    AudioLoader.removeAll = function() {
        for(name in AudioLoader._audioList) {
            AudioLoader.remove(name);
        }
    }

    BOX.AudioLoader = AudioLoader;
})();
