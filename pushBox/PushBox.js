//0=ヒーロー,1=壁,2=床,3=ターゲット,4=ボックス
//レベル1 追加可能
var map_level1 = [];
map_level1[0] = [1,1,1,1,1,1,1,1,1,1];
map_level1[1] = [1,2,2,1,2,2,2,2,2,1];
map_level1[2] = [1,3,2,1,2,4,2,2,2,1];
map_level1[3] = [1,3,3,1,4,2,4,2,2,1];
map_level1[4] = [1,2,2,2,2,2,2,2,2,1];
map_level1[5] = [1,2,2,2,2,0,2,2,2,1];
map_level1[6] = [1,1,1,1,1,1,1,1,1,1];
//ヒーロー最初のポジション
//顔が下向け
var hero_x = 5;
var hero_y = 5;
var hero_direction = 0;

//クリア状態
var map_clear = [];
map_clear[0] = [1,1,1,1,1,1,1,1,1,1];
map_clear[1] = [1,2,2,2,2,2,2,2,2,1];
map_clear[2] = [1,3,2,2,2,2,2,2,2,1];
map_clear[3] = [1,3,3,2,2,2,2,2,2,1];
map_clear[4] = [1,2,2,2,2,2,2,2,2,1];
map_clear[5] = [1,2,2,2,2,2,2,2,2,1];
map_clear[6] = [1,1,1,1,1,1,1,1,1,1];

var map = map_level1; //レベル1に設定する
var map_target = map_clear;
var gameArea = "#gameArea"; //描画エリア

var target_x;
var target_y;
var filePath = "http://tony56.googlecode.com/svn/trunk/store/widget/pushBox/images/";
var div_left;
var div_top;

function drawMap(){
	div_left = $(gameArea).position().left;
	div_top = $(gameArea).position().top;
	for(var x=0;x < map.length; x++){
		for(var y = 0;y < map[x].length; y++){
			drawUnit(x,y,map[x][y],0);
		}	
	}
}

/**
 * @param x軸
 * @param y軸
 * @param 描画対象
 * @param 向く方向(0=下,1=左,2=右,3=上),ヒーローのみ下以外使っています
 */
function drawUnit(x,y,code,direction){
	
	var img_fileName;
	//backgroud id like img_xy_bg
	//image id like img_xy
	var img_id;
	var z_index;
	
	//壁以外床を書く必要があります
	if((code == 0) || (code == 2) || (code == 3) || (code >=4) ){
		img_id = "img_" + x + y + "_bg"; //床は_bgのidを使っています
		img_fileName = "back2.gif"; //床画像
		z_index = 0;
		draw(x,y,z_index,img_id,img_fileName,direction);
	}
	
	img_id = "img_" + x + y;
	switch(code){
		case 0:
			z_index = 1;
			img_fileName = "role1.gif";
			break;
		case 1:
			z_index = 1;
			img_fileName = "back1.gif";
			break;
		case 2:
			return;
		case 3:
			z_index = 2;
			img_fileName = "back3.gif";
			img_id += "_tg"; 
			break;
		default:
			z_index = 1;
			img_fileName = "back4.gif";
	}
	
	draw(x,y,z_index,img_id,img_fileName,direction);
}

/**
 * ポジションと内容によって、描画する
 * @param x軸
 * @param y軸
 * @param z_index 
 * @param 画像id、UNIQUE
 * @param 画像ファイル名
 * @param 向く方向
 */
function draw(x,y,z_index,id,fileName,direction){
	var str = "<div id='"+ id +"' style='width:32px; height:32px; z-index:" + z_index
						+ "; background-image:url(" + filePath + fileName +"); background-position:left -"+ (direction*32) +"px;'></div>";
	$(gameArea).append(str);					
	var img_top = (div_top + (x*32)) + "px";
	var img_left = (div_left + (y*32)) + "px";
	id = "#"+id;
	$(id).css("position","absolute");
	$(id).css("top",img_top);
	$(id).css("left",img_left);
}

/**
 * ものを移動する際、元状態のクリア
 * @param x軸
 * @param y軸
 * @param z軸(0=床 1=それ以外)
 */
function clear(x,y,target){
	var img_id;
	if(target == 0){ //床を消します
		img_id = "#img_" + x + y +"_bg";
	}else{
		img_id = "#img_" + x + y;
	}
	$(img_id).remove();
}

/**
 * ものの移動処理
 * @param x軸
 * @param y軸
 * @param 移動方向
 */
function moveUnit(x,y,direction){
	clear(x,y,1);
	temp_x = x;
	temp_y = y;
	temp_value = map[x][y];
	switch(direction){
		case 3:
			x--;
			break;
		case 0:
			x++;
			break;
		case 1:
			y--;
			break;
		case 2:
			y++;
			break;
	}
	clear(x,y,0);	//新しく追加するので、一回床を消します
	drawUnit(x,y,temp_value,direction);
	map[temp_x][temp_y] = 2;
	map[x][y] = temp_value;

	if((hero_x == temp_x)&&(hero_y == temp_y)){
		hero_x = x;
		hero_y = y;	
	}
}

/**
 * 移動先探知
 * 移動する前に実行、移動先の返す
 * @param x軸ポジション
 * @param y軸ポジション
 * @param 移動方向
 * @param 移動対象(0=ヒーロー,1=ボックス)
 * @return 移動先(0=壁,1=床,2=ボックス)
 */
function getMoveTarget(x,y,direction,code){
	switch(direction){
		case 3:
			x--;
			break;
		case 0:
			x++;
			break;
		case 1:
			y--;
			break;
		case 2:
			y++;
			break;
	}
	if(code == 0){
		target_x = x;
		target_y = y;
	}
	if((x > map.length)||(y > map[x].length)){return;}
	if(map[x][y] == 1){
		return 0;
	}else if(map[x][y] == 2 || map[x][y] == 3){
		return 1;	
	}else if(map[x][y] >=4){
		return 2;
	} 
}

/**
 * 移動後の状態チェック
 */
function checkResult(){
	//搬送先を数える
	var match_num = 0; //搬送先カウンタ
	for(var x = 0;x < map_target.length;x++){
		for(var y = 0;y < map_target[x].length;y++){
			if(map_target[x][y] == 3){
				match_num++;
			}
		}
	}
	//カウンタから搬送済みのものを引きます
	for(x = 0;x < map.length;x++){
		for(y = 0;y < map[x].length;y++){
			if((map_target[x][y] == 3)&&(map[x][y] >= 4)){
				match_num--;
			}
		}
	}
	//クリア
	if(match_num <= 0){
		alert("マンザイ!");
	}
}

/**
 * 入り口、初期化関数
 */
$(document).ready(function(){
	drawMap();
});

/**
 * 移動処理実行
 * @param 方向(0=下,1=左,2=右,3=上)
 */
function moveHero(direction){
	var target = getMoveTarget(hero_x,hero_y,direction,0);
	if(target == 0){ //衝突
		return;
	}else if(target == 1){ 
		moveUnit(hero_x,hero_y,direction); //ヒーローのみの移動
	}else if(target == 2){
		target = getMoveTarget(target_x,target_y,direction,1); //ヒーローとボックスの移動
		if(target == 1){
			//ボックスの移動
			moveUnit(target_x,target_y,direction);
			//ヒーローの移動
			moveUnit(hero_x,hero_y,direction);
		}else{ //衝突、移動しない
			return;
		}
	}
	checkResult(); //移動後の状態チェック
}
