//requestAnimationFrame
(function (w, r) {
	w['r'+r] = w['r'+r] || w['webkitR'+r] || w['mozR'+r] || w['msR'+r] || w['oR'+r] || function(c){ w.setTimeout(c, 1000 / 60); };
})(window, 'equestAnimationFrame');

//初始点坐标 
var x = 0;  
var y = 70;
//初始速度为5，与X轴正方向逆时针呈60度
var speed = 5;
var angle = Math.PI * (5/3);
//x轴 y轴的位移增量
var incre_x = Math.cos(angle) * speed;
var incre_y = Math.sin(angle) * speed;
//模拟重力，因为每秒要绘制60帧，所以这个值的由来是 9.8/60
var gravity = 0.16;

var cxt;

function beginAnimate(type){
	var canvas;
	if(type == 1){
	  //获取canvas
	  var canvasDiv = document.getElementById("canvas1");
	  canvasDiv.innerHTML = "<canvas id='canvasFir' width='200' height='200'></canvas>";
	  canvas = document.getElementById("canvasFir");
	}else{
	  var canvasDiv = document.getElementById("canvas2");
	  canvasDiv.innerHTML = "<canvas id='canvasSec' width='200' height='200'></canvas>";		  
	  canvas = document.getElementById("canvasSec");
	}
	cxt = canvas.getContext("2d");
	//设置填充背景色为黑色
	cxt.fillStyle="#000000";
	//绘制canvas黑色背景
	cxt.beginPath();
	cxt.fillRect(0, 0, 200, 200);
	cxt.fill(); 
	//初始化各参数
	x = 0;  
	y = 70;
	speed = 5;
	angle = Math.PI * (5/3);
	incre_x = Math.cos(angle) * speed;
	incre_y = Math.sin(angle) * speed;
	gravity = 0.16;
	
	if(type == 1){
	  animate();
	}else{
	  animateOpc();
	}
}
 
function animate(){
	//计算移动后的坐标，y轴方向需要考虑重力，x轴方向没有加速度
	incre_y = incre_y +  gravity;		
	x += incre_x;
	y += incre_y;
	//超出画布范围就结束动画
	if(x > 200 || y > 200){
		try { window.parent.endAnimation(location.href); } catch (e) {};
		return;
	}
	//开始绘制
	cxt.fillStyle="#ffffff";
	cxt.beginPath();
	cxt.arc(x, y, 2, 0, Math.PI*2, true);
	cxt.fill();
	requestAnimationFrame(animate);
}

var counter = 0;
function animateOpc(){
	//计算移动后的坐标，y轴方向需要考虑重力，x轴方向没有加速度
	incre_y = incre_y +  gravity;		
	x += incre_x;
	y += incre_y;
	//超出画布范围就结束动画
	if(x > 200 || y > 200){
		try { window.parent.endAnimation(location.href); } catch (e) {};
		return;
	}
	//开始绘制
	var color = (counter++ % 2 == 0) ? "#ffff00" : "rgba(256, 255, 256, 0.8)";
	cxt.fillStyle= color;
	cxt.beginPath();
	cxt.arc(x, y, 2, 0, Math.PI*2, true);
	cxt.fill();
	cxt.fillStyle = 'rgba(0, 0, 0, 0.3)';
	cxt.fillRect(0, 0, 200, 200);
	requestAnimationFrame(animateOpc);
}


function fwAnimate() {
  var fireworks = {
	  //烟花数量
	  'quality' : 400,
	  //烟花颗粒大小
	  'size' : 3,
	  //衰减程度
	  'circle' : 0.97,
	  //重力
	  'gravity' : 1.5,
	  //初始速度
	  'speed' : 5,
	  //爆炸纵轴位置
	  'top' : 3,
	  //爆炸横轴位置
	  'left' : 2,
	  //烟花颜色
	  'color' : '#ffff00'
  };
  var pieces = [];
  var cvs = {
	  // canvas element
	  'elem' : undefined,
	  // canvas width(window max)
	  'width' : 0,
	  // canvas width(window height)
	  'height' : 0,
	  // 2d context
	  'ctx' : undefined,
	  // element offset(left)
	  'left' : 0,
	  // element offset(top)
	  'top' : 0,
	  // explode point(x)
	  'pos_x' : 0,
	  // explode point(y)
	  'pos_y' : 0
  };

  setTimeout(function () {
	  cvs.pos_y = 100;
	  cvs.pos_x = 250;
	  for (var i = 0; i < fireworks.quality; ++i) {
		  var angle = Math.random() * Math.PI * 2;
		  var speed = Math.random() * fireworks.speed;
		  pieces.push({
			  'pos_x' : cvs.pos_x,
			  'pos_y' : cvs.pos_y,
			  'vel_x' : Math.cos(angle) * speed,
			  'vel_y' : Math.sin(angle) * speed
		  });
	  };
	  requestAnimationFrame(render);
  }, 0);

  var frame = 0;
  function render () {
	  if (!pieces.length) {
		  return;
	  }
	  var clear = 0;
	  frame++;
	  cvs.ctx.fillStyle = (frame % 2) ? "rgba(256, 256, 256, 0.8)" : fireworks.color;
	  for (var i = 0, len = pieces.length; i < len; i++) {
		  var s = pieces[i];
		  s.pos_x += s.vel_x;
		  s.pos_y += s.vel_y;
		  s.vel_x *= fireworks.circle;
		  s.vel_y *= fireworks.circle;
		  s.pos_y += fireworks.gravity;
		  if (fireworks.size < 0.1 || !s.pos_x || !s.pos_y || s.pos_x > cvs.width || s.pos_y > cvs.height) {
			  pieces[i] = undefined;
			  if (len < ++clear) {
				  try { window.parent.endAnimation(location.href); } catch (e) {};
			  };
			  return;
		  };
		  cvs.ctx.beginPath();
		  cvs.ctx.arc(s.pos_x, s.pos_y, fireworks.size, 0, Math.PI * 2 , true);
		  cvs.ctx.fill();
	  }
	  fireworks.size *= fireworks.circle;
	  cvs.ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
	  cvs.ctx.fillRect(0, 0, cvs.width, cvs.height);
	  requestAnimationFrame(render);
  }
  
  //获取烟花canvas
  var canvasDiv = document.getElementById('fireworks');
  canvasDiv.innerHTML = "<canvas id='canvasFireworks' width='600' height='450'></canvas>";
  cvs.elem = document.getElementById('canvasFireworks');
  cvs.width = 500;
  cvs.height = 500;
  cvs.ctx = cvs.elem.getContext('2d');
  cvs.ctx.fillStyle = '#000000';
  cvs.ctx.fillRect(0, 0, cvs.width, cvs.height);
}