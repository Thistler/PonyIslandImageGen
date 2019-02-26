function setup()
{
	clearInterval(u);

	initializeData();
	updateDataDisplays();

	document.getElementById("basicgen_btn").style.background = '#737373';

	document.getElementById("basic_gen_content").style.display = 'block';
	document.getElementById("add_data").style.display = 'none';
	document.getElementById("url_converter_panel").style.display = 'none';
	document.getElementById("update_panel").style.display = 'none';
  	document.getElementById("help_panel").style.display = 'none';

	document.getElementById("basicgen_btn").addEventListener("click", switchView, false);
	document.getElementById("basicgen_btn").onselectstart = function () { return false; }

	document.getElementById("adddata_btn").addEventListener("click", switchView, false);
	document.getElementById("adddata_btn").onselectstart = function () { return false; }

	document.getElementById("url_converter_btn").addEventListener("click", switchView, false);
	document.getElementById("url_converter_btn").onselectstart = function () { return false; }

	document.getElementById("updates_btn").addEventListener("click", switchView, false);
	document.getElementById("updates_btn").onselectstart = function () { return false; }

	document.getElementById("help_btn").addEventListener("click", switchView, false);
	document.getElementById("help_btn").onselectstart = function () { return false; }
}