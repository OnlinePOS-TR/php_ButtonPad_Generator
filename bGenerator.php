<body>
<head>
<link rel="stylesheet" type="text/css" href="bGenerator.css">
<script src="bGenerator.js"></script>
<script>
<?php include 'js_gen.php';?>
</script>
</head>
<?php
//7x6

class bGenerator {

	var $edible;
	var $color;
	var $colspan = "1";
	var $X_max = 7;
	var $Y_max = 6;
	var $X_width = 1000;
	var $Y_height = 1000;
	var $single_width = 10;
	var $single_height = 10;
	
	
	function bGenerator($X="7", $Y="6")
	{
		$this->color = $color;
		$this->X_max = $X;
		$this->Y_max = $Y;
		$this->X_width = 1000;
		$this->Y_height = 1000;
		
		$single_width = $this->X_width / $this->X_max;
		$single_height = $this->Y_height / $this->Y_max;
	}
	
	function pd_enable($X_pos, $Y_pos)
	{
		echo '<select onchange="update_Result();" class="enable_selector" id="enable;'.$X_pos.';'.$Y_pos.'">';
		echo '<option class="enable_selector" value="enable">Enabled</option>';
		echo '<option value="disable">Disabled</option>';
		echo '</select>';
	}
	
	function pd_X($X_pos, $Y_pos)
	{
// 		echo '<span class="width_selector">Width: <select onchange="if (this.selectedIndex) {disable_childs(this);update_Result();}" _X="'. $X_pos .'" _Y="'. $Y_pos .'" id="X;'. $X_pos .';'.$Y_pos.'" value="1">';
		echo '<span class="width_selector">Width: <select onchange="update_childs(this);update_Result();" _X="'. $X_pos .'" _Y="'. $Y_pos .'" id="X;'. $X_pos .';'.$Y_pos.'" value="1">';
		for($x = 1; $x <= $this->X_max - $X_pos; $x++)
		{
			echo '<option value="'.$x.'">'.$x.' bred</option>';
		}
		echo '</select></span>';
	}
	function pd_Y($X_pos, $Y_pos)
	{
		echo '<span class="height_selector">Height: <select onchange="update_childs(this);update_Result();" class="height_selector" id="Y;'.$X_pos.';'.$Y_pos.'" value="1">';
		for($y = 1; $y <= $this->Y_max - $Y_pos; $y++)
		{
			echo '<option value="'.$y.'">'.$y.' h&oslash;j</option>';
		}
		echo '</select></span>';
	}
	
	function pd_Text($X_pos, $Y_pos, $txt)
	{
		echo '<span class="name_box">Text: <input class="name_box" maxlength="30" size="10" id="txt;'.$X_pos.';'.$Y_pos.'" value="'.$txt.'" ></input></span>';
	}
	
	function pd_Function($X_pos, $Y_pos)
	{
		echo 'Funktion: <select class="func_selector" id="func;'.$X_pos.';'.$Y_pos.'" value="1">';
		for($y = 1; $y <= $this->Y_max; $y++)
		{
			echo '<option value="'.$y.'">'.$y.' h&oslash;j</option>';
		}
		echo '</select>';
	}
	
	function draw_Editor_Table()
	{
		echo '<table id="editorTable" XY_Size="'.$this->X_max.';'.$this->Y_max.'" class="editor" x="'. $this->X_max .'" y="'. $this->Y_max .'">';

		echo '<button name="gen" onclick="update_Result();">Generer</button>';
		
		for($y = 0; $y < $this->Y_max; $y++)
		{
			echo '<tr>';
			
			for($x = 0; $x < $this->X_max; $x++)
			{
				echo '<td x="'.$x.'" y="'.$y.'" colspan="'.$colspan.'">';
				echo '<div width="'.$this->single_width.'px" class="btn_editor" btn="'.$x.','.$y.'">';
				//echo $x.','.$y;
				$this->pd_enable($x, $y);
				echo '<br/>';
				$this->pd_X($x, $y);
				echo '<br/>';
				$this->pd_Y($x, $y);
				echo '<br/>';
				$this->pd_Text($x, $y, $x.','.$y);
				echo '<br/>';
				$this->pd_Function($x, $y);
				echo '</div>';
				echo '</td>';
			}
			
			echo "</tr>";
		}

		echo '</table>';	
	}
	function draw_Result_Table()
	{
		echo '<table id="resultTable" class="result"></table>';
	}
} // end of class

$a = new bGenerator(5, 5);
$a->draw_Editor_Table();
$a->draw_Result_Table();

?>

</body>