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
		result += "<tr>";
		for (x = 0; x < X_max; x++) 
		{
			var enabled = document.getElementById("enable;"+x+";"+y).value;
			var currentBtnWidth = document.getElementById("X;"+x+";"+y).value;
			var currentBtnHeight = document.getElementById("Y;"+x+";"+y).value;
			var currentBtnTxt = document.getElementById("txt;"+x+";"+y).value;
				
		//	.getElementById("editorTable")
			//.getElementById("editorTable").getAttribute("x");
			if(enabled == "enable")
			{
				var btnw = parseFloat(currentBtnWidth) * (Table_X / X_max);
				var btnh = parseFloat(currentBtnHeight) * (Table_Y / Y_max);
				var colspan = parseInt(currentBtnWidth) + prevEmptyCount;
				result += "<td width=\""+btnw+"\" height=\""+btnh+"\" max-width=\""+btnw+"\" colspan=\""+ currentBtnWidth + "\" rowspan=\""+currentBtnHeight+"\"><div class=\"btn_result\">"+currentBtnTxt+"</div></td>";
				//prevEmptyCount += 0;
			}
			else
			{
				//prevEmptyCount += 1;
			}
		}
		result += "</tr>";
	}
	document.getElementById("resultTable").innerHTML = result;
}
function disable_childs(sender)
{
	var index = sender.selectedIndex;
	
	var id = sender.id.split(';');
	var xy = document.getElementById("editorTable").name.spilt(";");
	var y = 0;
	for (x = 0; x < index; x++)
	{
	  var currentEnable = document.getElementById("enable;"+ (parseInt(id[1]) + x + 1) + ";" + (parseInt(id[2]) + y));
	  var currentX = document.getElementById("X;"+ (parseInt(id[1]) + x + 1) + ";" + (parseInt(id[2]) + y));
	  var t = document.getElementById("editorTable");
	  var wp = t.x;
	  if(currentEnable.value == "enable")
		  currentEnable.value = "disable";
	  
	  currentX.hidden = true;
	}
	//sender.event();
}