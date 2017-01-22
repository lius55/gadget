/**
 * A*自动寻路算法实现
 *
 * @example
 *
 * var astar = new AStar(),
 *     maps = [
 *         [1, 1, 1, 1, 1],
 *         [1, 0, 0, 0, 1],
 *         [1, 0, 0, 0, 1],
 *         [1, 0, 0, 0, 1],
 *         [1, 1, 1, 1, 1]
 *     ],
 *     start = {X:1, Y:1},
 *     end = {X:3, Y:3},
 *     path;
 *
 * astar.loadMap(maps);
 * path = astar.search(start, end);
 *
 */
(function() {

    var AStar = function() {
        this._tmin = this._rmax = this._bmax = this._lmin = -1;
        this._initialize();
    }

    AStar.prototype._euclidean = function(a, b) {
        with(Math) {
            return round(10 * sqrt(pow(a.X - b.X, 2) + pow(a.Y - b.Y, 2)));
        }
    }

    AStar.prototype._initialize = function() {
        this._open = [];
        this._close = [];
        this._maps = {};
    }

    AStar.prototype._makeID = function(x, y, limit) {
        return x + y * limit;
    }

    AStar.prototype._getMinNode = function() {
        var i = 1, o = this._open, l = o.length, min = i - 1, max = o[0].F, t = null;

        for(; i < l; i++) {
            t = o[i];
            if(t.F < max) { max = t.F, min = i;
            }
        } t = o[min], o[min] = o[l - 1], o.pop();

        return t;
    }

    AStar.prototype._getNodes = function(node) {
        var map = this._Map, tmin = this._tmin, rmax = this._rmax, bmax = this._bmax, lmin = this._lmin, nodes = [], x = node.X, y = node.Y, t = y - 1, r = x + 1, b = y + 1, l = x - 1, _t = t > tmin && (map[t][x] === 0), _r = r < rmax && (map[y][r] === 0), _b = b < bmax && (map[b][x] === 0), _l = l > lmin && (map[y][l] === 0), i = 0;

        if(_t) {
            nodes[i++] = [x, t];
            if(_l && (map[t][l] === 0)) {
                nodes[i++] = [l, t];
            }
            if(_r && (map[t][r] === 0)) {
                nodes[i++] = [r, t];
            }
        }

        if(_l) {
            nodes[i++] = [l, y];
        }

        if(_b) {
            nodes[i++] = [x, b];
            if(_l && (map[b][l] === 0)) {
                nodes[i++] = [l, b];
            }
            if(_r && (map[b][r] === 0)) {
                nodes[i++] = [r, b];
            }
        }

        if(_r) {
            nodes[i++] = [r, y];
        }

        return nodes;
    }

    AStar.prototype._getAllPath = function(node) {
        var path = [];
        do {
            path[path.length] = [node.X, node.Y];
        } while (node = node.P);path.reverse(), this._initialize();

        return path;
    }

    AStar.prototype.loadMap = function(map) {
        this._Map = map;
        this._limit = (this._bmax = map.length) * (this._rmax = map[0].length);
    }

    AStar.prototype.search = function(start, end) {
        var Point = AStar.Point, open = this._open, close = this._close, makeID = this._makeID, maps = this._maps, limit = this._limit, euclidean = this._euclidean, GID = makeID(end.X, end.Y, limit), nodes = [], length = 0, node = null, tempnode = null, tempg = 0, id = 0, i = 0, j = 0, _i = 0, _j = 0;

        open.push(new Point(null, start.X, start.Y));

        while( length = open.length) {
            node = this._getMinNode();

            if(node.I != GID) {
                nodes = this._getNodes(node);

                for( i = 0, j = nodes.length; i < j; i++) {
                    id = makeID(nodes[i][0], nodes[i][1], limit);

                    if(!( tempnode = maps[id])) {
                        tempnode = open[open.length] = maps[id] = new Point(node, nodes[i][0], nodes[i][1]);
                        tempnode.F = (tempnode.G = node.G + euclidean(tempnode, node)) + (tempnode.H = euclidean(tempnode, end));
                        tempnode.I = id;
                    } else {
                        tempg = node.G + euclidean(tempnode, node);
                        if(tempg < tempnode.G) {tempnode.P = node, tempnode.G = tempg, tempnode.F = tempg + tempnode.H
                        }
                    }
                }
                close[close.length] = node;
            } else {
                return this._getAllPath(node);
            }
        }
        return (this._initialize(), []);
    }

    AStar.Point = function(p, x, y) {
        this.P = p;
        this.X = x;
        this.Y = y;
        this.G = this.H = this.F = this.I = 0;
    }

    BOX.AStar = AStar;
})()