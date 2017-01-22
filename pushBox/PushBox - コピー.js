//0=�q�[���[,1=��,2=��,3=�^�[�Q�b�g,4=�{�b�N�X
//���x��1 �ǉ��\
var map_level1 = [];
map_level1[0] = [1,1,1,1,1,1,1,1,1,1];
map_level1[1] = [1,2,2,1,2,2,2,2,2,1];
map_level1[2] = [1,3,2,1,2,4,2,2,2,1];
map_level1[3] = [1,3,3,1,4,2,4,2,2,1];
map_level1[4] = [1,2,2,2,2,2,2,2,2,1];
map_level1[5] = [1,2,2,2,2,0,2,2,2,1];
map_level1[6] = [1,1,1,1,1,1,1,1,1,1];
//�q�[���[�ŏ��̃|�W�V����
//�炪������
var hero_x = 5;
var hero_y = 5;
var hero_direction = 0;

//�N���A���
var map_clear = [];
map_clear[0] = [1,1,1,1,1,1,1,1,1,1];
map_clear[1] = [1,2,2,2,2,2,2,2,2,1];
map_clear[2] = [1,3,2,2,2,2,2,2,2,1];
map_clear[3] = [1,3,3,2,2,2,2,2,2,1];
map_clear[4] = [1,2,2,2,2,2,2,2,2,1];
map_clear[5] = [1,2,2,2,2,2,2,2,2,1];
map_clear[6] = [1,1,1,1,1,1,1,1,1,1];

var map = map_level1; //���x��1�ɐݒ肷��
var map_target = map_clear;
var gameArea = "#gameArea"; //�`��G���A

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
 * @param x��
 * @param y��
 * @param �`��Ώ�
 * @param ��������(0=��,1=��,2=�E,3=��),�q�[���[�̂݉��ȊO�g���Ă��܂�
 */
function drawUnit(x,y,code,direction){
	
	var img_fileName;
	//backgroud id like img_xy_bg
	//image id like img_xy
	var img_id;
	var z_index;
	
	//�ǈȊO���������K�v������܂�
	if((code == 0) || (code == 2) || (code == 3) || (code >=4) ){
		img_id = "img_" + x + y + "_bg"; //����_bg��id���g���Ă��܂�
		img_fileName = "back2.gif"; //���摜
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
 * �|�W�V�����Ɠ��e�ɂ���āA�`�悷��
 * @param x��
 * @param y��
 * @param z_index 
 * @param �摜id�AUNIQUE
 * @param �摜�t�@�C����
 * @param ��������
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
 * ���̂��ړ�����ہA����Ԃ̃N���A
 * @param x��
 * @param y��
 * @param z��(0=�� 1=����ȊO)
 */
function clear(x,y,target){
	var img_id;
	if(target == 0){ //���������܂�
		img_id = "#img_" + x + y +"_bg";
	}else{
		img_id = "#img_" + x + y;
	}
	$(img_id).remove();
}

/**
 * ���̂̈ړ�����
 * @param x��
 * @param y��
 * @param �ړ�����
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
	clear(x,y,0);	//�V�����ǉ�����̂ŁA��񏰂������܂�
	drawUnit(x,y,temp_value,direction);
	map[temp_x][temp_y] = 2;
	map[x][y] = temp_value;

	if((hero_x == temp_x)&&(hero_y == temp_y)){
		hero_x = x;
		hero_y = y;	
	}
}

/**
 * �ړ���T�m
 * �ړ�����O�Ɏ��s�A�ړ���̕Ԃ�
 * @param x���|�W�V����
 * @param y���|�W�V����
 * @param �ړ�����
 * @param �ړ��Ώ�(0=�q�[���[,1=�{�b�N�X)
 * @return �ړ���(0=��,1=��,2=�{�b�N�X)
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
 * �ړ���̏�ԃ`�F�b�N
 */
function checkResult(){
	//������𐔂���
	var match_num = 0; //������J�E���^
	for(var x = 0;x < map_target.length;x++){
		for(var y = 0;y < map_target[x].length;y++){
			if(map_target[x][y] == 3){
				match_num++;
			}
		}
	}
	//�J�E���^��������ς݂̂��̂������܂�
	for(x = 0;x < map.length;x++){
		for(y = 0;y < map[x].length;y++){
			if((map_target[x][y] == 3)&&(map[x][y] >= 4)){
				match_num--;
			}
		}
	}
	//�N���A
	if(match_num <= 0){
		alert("�}���U�C!");
	}
}

/**
 * ������A�������֐�
 */
$(document).ready(function(){
	drawMap();
});

/**
 * �ړ��������s
 * @param ����(0=��,1=��,2=�E,3=��)
 */
function moveHero(direction){
	var target = getMoveTarget(hero_x,hero_y,direction,0);
	if(target == 0){ //�Փ�
		return;
	}else if(target == 1){ 
		moveUnit(hero_x,hero_y,direction); //�q�[���[�݂̂̈ړ�
	}else if(target == 2){
		target = getMoveTarget(target_x,target_y,direction,1); //�q�[���[�ƃ{�b�N�X�̈ړ�
		if(target == 1){
			//�{�b�N�X�̈ړ�
			moveUnit(target_x,target_y,direction);
			//�q�[���[�̈ړ�
			moveUnit(hero_x,hero_y,direction);
		}else{ //�ՓˁA�ړ����Ȃ�
			return;
		}
	}
	checkResult(); //�ړ���̏�ԃ`�F�b�N
}
