/**
 * 图像文件加载类
 */
(function() {
    var ImageLoader = function() {
    }
    /**
     * 已经加载的图像文件列表
     */
    ImageLoader._imageList = {};

    /**
     * 加载图像文件
     * @param {Array} list URL列表{id, src}
     * @param {Function} loadstatechange 加载状态发生变化时的事件函数
     */
    ImageLoader.load = function(list, loadstatechange) {
        if('[object Array]' != Object.prototype.toString.call(list)) {
            list = [list];
        }

        var len = list.length, total = arguments[2] || len, index = total - len + 1;
        var image = new Image(), item = list.shift();

        image.onload = function() {
            ImageLoader._imageList[item.id] = this;

            loadstatechange.call(this, {
                total : total,
                index : index,
                completed : index == total
            });

            if(index < total) {
                ImageLoader.load(list, loadstatechange, total);
            }

            image.onload = image = list = item = loadstatechange = null;
        }
        image.src = item.src;

    }
    /**
     * 根据ID获取图像文件
     */
    ImageLoader.get = function(id) {
        return ImageLoader._imageList[id];
    }
    /**
     * 根据ID移除图像文件
     */
    ImageLoader.remove = function(id) {
        ImageLoader._imageList[id] = null;
        delete ImageLoader._imageList[id];
    }
    /**
     * 移除所有已加载的图像文件
     */
    ImageLoader.removeAll = function() {
        for(name in ImageLoader._imageList) {
            ImageLoader.remove(name);
        }
    }

    BOX.ImageLoader = ImageLoader;
})();
