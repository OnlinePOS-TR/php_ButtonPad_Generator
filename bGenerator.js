/**
 * 
 */
function get_XML()
{
	alert("dddd");
}

function update_Result()
{
	var resultTable = document.getElementById("editorTable");
	var X_max = document.getElementById("editorTable").getAttribute("x");
	var Y_max = document.getElementById("editorTable").getAttribute("y");
	var Table_X = document.getElementById("editorTable").clientWidth;
	var Table_Y = document.getElementById("editorTable").clientHeight;
	var result = "";
	var currentBtnWidth= 1;
	var currentBtnHeight= 1;
	var prevEmptyCount = 0;
	for (y = 0; y < Y_max; y++) 
	{ 
		var lastWidth = 1;
		result += "<tr>";
		for (x = 0; x < X_max; x++) 
		{
			var enabled = document.getElementById("enable;"+x+";"+y).value;
			var currentBtnWidth = document.getElementById("X;"+x+";"+y).value;
			var currentBtnHeight = document.getElementById("Y;"+x+";"+y).value;
			var currentBtnTxt = document.getElementById("txt;"+x+";"+y).value;

			var btnw = parseFloat(currentBtnWidth) * (Table_X / X_max);
			var btnh = parseFloat(currentBtnHeight) * (Table_Y / Y_max);
			
			if(enabled == "enable")
			{
				lastWidth = currentBtnWidth;
				
				var colspan = parseInt(currentBtnWidth) + prevEmptyCount;
				result += "<td width=\""+btnw+"\" height=\""+btnh+"\" max-width=\""+btnw+"\" colspan=\""+ currentBtnWidth + "\" rowspan=\""+currentBtnHeight+"\"><div class=\"btn_result\">"+currentBtnTxt+"</div></td>";
			}
			else
			{
				lastWidth--;
				if(lastWidth <= 0)
				{
					result += "<td width=\""+btnw+"\" height=\""+btnh+"\" max-width=\""+btnw+"\" colspan=\""+ currentBtnWidth + "\" rowspan=\""+currentBtnHeight+"\"><div class=\"btn_empty\">-</div></td>";
				}
			}
		}
		result += "</tr>";
	}
	document.getElementById("resultTable").innerHTML = result;
}

 $(.editorTable)
function update_childs(sender_X)
{
	console.log("------------------- Do Update");	
	X_Max = 5
	Y_Max = 5
	
	var sender_pos = sender_X.id.split(';');
	var ChangeBtn_width = sender_X.selectedIndex + 1;
	var ChangeBtn_height = document.getElementById("Y;" + sender_pos[1] + ";" + sender_pos[2]).selectedIndex + 1;
	
	var ChangeBtn_X = parseInt(sender_pos[1]);
	var ChangeBtn_Y = parseInt(sender_pos[2]);
	
	var Count_X = 0 // 1 fordi det er standart at en knap er 1,1
	var Count_Y = 0 // 1 fordi det er standart at en knap er 1,1
	
	for(cur_X = ChangeBtn_X ; cur_X < X_Max; cur_X++)
	{
		Count_X++;
		
//		console.log("cur_X: " + cur_X + " - cur_Y: " + ChangeBtn_Y);
//		console.log("Count_X: " + Count_X + " - Count_Y: " + Count_Y);

		console.log("---- Do X: " + cur_X + "," + ChangeBtn_Y);
		
		var cur_Btn = document.getElementById("enable;"+ cur_X + ";" + ChangeBtn_Y);
		console.log("---- cur_Btn id: " + cur_Btn.id);
		
		if(cur_X > 1 && cur_X <= ChangeBtn_width)
		{
			console.log("-------------------------------------------------- disable X");
			cur_Btn.value = "disable";
			cur_Btn.hidden = true;
		}
		else if(cur_X >= ChangeBtn_width && cur_Btn.value == "disable")
		{
			console.log("-------------------------------------------------- enable X");
			cur_Btn.value = "enable";
			cur_Btn.hidden = false;
		}
		else if(cur_X != ChangeBtn_X && cur_X >= ChangeBtn_width && cur_Btn.value == "enable")
		{
			console.log("----- Skip X");
		}
		else
			console.log("----- Else X");
		
		
		for(cur_Y = ChangeBtn_Y ; cur_Y < Y_Max; cur_Y++)
		{
			console.log("--------- Do Y: " + cur_X + "," + cur_Y);
			var cur_Btn = document.getElementById("enable;"+ cur_X + ";" + cur_Y);
			console.log("--------- cur_Btn id: " + cur_Btn.id);
			
			
			// if x = ChangeBtn_X
			if(cur_X = ChangeBtn_X && cur_Y == 0 && cur_Y <= ChangeBtn_height)
			{
				console.log("---------- skip Y - X=0");
			}
			else if(cur_Y >= 1 && cur_Y <= ChangeBtn_height)
			{
				console.log("-------------------------------------------------- disable Y");
				cur_Btn.value = "disable";
				cur_Btn.hidden = true;
			}
			else if(cur_Y > ChangeBtn_height && cur_Btn.value == "disable")
			{
				console.log("-------------------------------------------------- enable Y");
				cur_Btn.value = "enable";
				cur_Btn.hidden = false;
			}
			else if(cur_Y != ChangeBtn_Y && cur_Y >= ChangeBtn_height && cur_Btn.value == "enable")
			{
				console.log("---------- skip Y");
			}
			else
				console.log("---------- Else Y");
		}
		console.log("----------------- New X -------------------");
	}
}

function _update_childs(sender_X)
{
	var index_X = sender_X.selectedIndex;
	
	
	var sender_pos = sender_X.id.split(';');
	
	var index_Y = document.getElementById("Y;" + sender_pos[1] + ";" + sender_pos[2]).selectedIndex;
	
	var v = document.getElementById("editorTable").getAttribute("XY_Size");
	var xy_size = v.split(";");
	
	var y = 0;
	var noMore_X = false;
	
//	for (y = 0; y < xy_size[1]; y++)
	{
		for (x = 0; x < xy_size[0]; x++)
		{
			if(x > parseInt(sender_pos[1]) && x <= (parseInt(sender_pos[1]) + index_X) /*&& y > parseInt(sender_pos[2]) && y <= (parseInt(sender_pos[2]) + index_Y)*/ )
			{
//				for (y = x; y < x+index_Y; y++)
				{
					var currentEnable = document.getElementById("enable;"+ x + ";" + y);
				
					var currentX = document.getElementById("X;" + x + ";" + y);
					var currentY = document.getElementById("Y;" + x + ";" + y);
					var currentTXT = document.getElementById("txt;" + x + ";" + y);
					var currentFunc = document.getElementById("func;" + x + ";" + y);
		
					if(currentEnable.value == "enable")
					{
						currentEnable.value = "disable";
						currentEnable.hidden = true;
						currentX.hidden = true;
						currentY.hidden = true;
						currentTXT.hidden = true;
						currentFunc.hidden = true;
					}
				}
			}
			else
			{
				if(x > parseInt(sender_pos[1]) + index_X /* && y > parseInt(sender_pos[1]) + index_Y*/)
				{
					var currentEnable = document.getElementById("enable;"+ x + ";" + y);
					var currentX = document.getElementById("X;" + x + ";" + y);
					var currentY = document.getElementById("Y;" + x + ";" + y);
					var currentTXT = document.getElementById("txt;" + x + ";" + y);
					var currentFunc = document.getElementById("func;" + x + ";" + y);
					
					if(currentEnable.value == "disable" && !noMore_X)
					{
						currentEnable.value = "enable";
						currentEnable.hidden = false;
						currentX.hidden = false;
						currentY.hidden = false;
						currentTXT.hidden = false;
						currentFunc.hidden = false;
					}
					else
						noMore_X = true;
				}
				else
					continue;
			}
		}
	}
}