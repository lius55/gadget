var hint  =  new Array(1,1,1,1,2,1,1,1,1,2,1,
						2,3,3,4,5,4,3,3,2,4,2,
						3,5,5,7,8,7,5,5,3,6,3,
						3,5,5,8,9,8,5,5,3,6,3,
						3,4,3,6,7,6,3,4,4,7,4,
						2,2,1,3,4,3,1,2,3,5,3,
						1,1,0,1,1,1,0,1,2,3,2);

var answer = new Array(0,0,0,0,0,0,0,0,0,0,0,
						1,0,0,1,0,1,0,0,1,0,1,
						1,0,1,1,1,1,1,0,1,0,1,
						1,0,1,1,1,1,1,0,1,0,1,
						1,0,0,1,1,1,0,0,1,0,1,
						1,0,0,0,1,0,0,0,1,1,1,
						0,0,0,0,0,0,0,0,0,0,0);

function getTd(id)
{
	return document.getElementById("td" + id.toString());
}

function init()
{
	var newTable = document.createElement("table");
	newTable.style.borderCollapse = "collapse";
	document.getElementById("board").appendChild(newTable);	
	for (i=0; i<7; i++)
	{
		var newTr = document.createElement("tr");
		for (j=0; j<11; j++)
		{
			var newTd = document.createElement("td");
			newTd.id = "td" + (i*11+j).toString();
			newTd.style.border = "1px solid black";
			newTd.style.height = "20px";
			newTd.style.width = "20px";
			newTd.style.cursor = "default";
			newTd.style.textAlign = "center";
			newTd.style.color = "#676767";
			newTd.style.fontWeight = "normal";
			newTd.onclick = function(){flip(this)};
			newTd.bgColor = "#e5e5e5";
			newTd.innerHTML = hint[i*11+j].toString();
			newTr.appendChild(newTd);
		}
		newTable.appendChild(newTr);
	}
	check();
}

function flip(el)
{
	var index = el.id.substring(2);
	var indexNum = parseInt(index);
	if(answer[indexNum] == 1){
		if (el.bgColor == "#e5e5e5")
			el.bgColor = "#ff628c";
		else
			el.bgColor = "#e5e5e5";	
	}	
	check();
}
function check()
{
	var winFlag = true;
	for (i=0; i<7; i++)
	{
		for (j=0; j<11; j++)
		{
			if (matchHint(i*11+j))
			{
				getTd(i*11+j).style.color = "black";
				getTd(i*11+j).style.fontWeight = "bold";
			}
			else
			{
				getTd(i*11+j).style.color = "#676767";
				getTd(i*11+j).style.fontWeight = "normal";
				winFlag = false;
			}
		}
	}
	if (winFlag)
		document.getElementById("iloveyou").innerHTML = "Happy Valentine's Day";
	else
		document.getElementById("iloveyou").innerHTML = "&nbsp;";
}

function matchHint(id)
{
	var toCheck = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1);
	var colorCount = 0;
	if (id < 11) {toCheck[0] = 0; toCheck[1] = 0; toCheck[2] = 0; }
	if (id > 65) {toCheck[6] = 0; toCheck[7] = 0; toCheck[8] = 0; }
	if (id % 11 == 0) {toCheck[0] = 0; toCheck[3] = 0; toCheck[6] = 0; }
	if (id % 11 == 10) {toCheck[2] = 0; toCheck[5] = 0; toCheck[8] = 0; }
	if ((toCheck[0] == 1) && (getTd(id-12).bgColor == "#ff628c")) colorCount++;
	if ((toCheck[1] == 1) && (getTd(id-11).bgColor == "#ff628c")) colorCount++;
	if ((toCheck[2] == 1) && (getTd(id-10).bgColor == "#ff628c")) colorCount++;
	if ((toCheck[3] == 1) && (getTd(id-1).bgColor == "#ff628c")) colorCount++;
	if ((toCheck[4] == 1) && (getTd(id).bgColor == "#ff628c")) colorCount++;
	if ((toCheck[5] == 1) && (getTd(id+1).bgColor == "#ff628c")) colorCount++;
	if ((toCheck[6] == 1) && (getTd(id+10).bgColor == "#ff628c")) colorCount++;
	if ((toCheck[7] == 1) && (getTd(id+11).bgColor == "#ff628c")) colorCount++;
	if ((toCheck[8] == 1) && (getTd(id+12).bgColor == "#ff628c")) colorCount++;
	if (colorCount == hint[id])
		return true;
	else
		return false;
}

init();