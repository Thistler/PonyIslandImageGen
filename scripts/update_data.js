function initializeData()
{
	arrBreeds = new Array();
	arrAddedBreeds = new Array();
	arrNonBrsBodyGenes = new Array();

	arrSgenes = new Array();
	arrAddedSgenes = new Array();

	arrBreeds.push({"name":"SeaPony", "number":"1"});
	arrBreeds.push({"name":"Pegasus", "number":"2"});
	arrBreeds.push({"name":"FlutterPony", "number":"3"});
	arrBreeds.push({"name":"EarthPony", "number":"4"});
	arrBreeds.push({"name":"Unicorn", "number":"5"});
	arrBreeds.push({"name":"ShellPony", "number":"6"});
	arrBreeds.push({"name":"FairyPony", "number":"7"});
	arrBreeds.push({"name":"MerPony", "number":"8"});
	arrBreeds.push({"name":"DragonPony", "number":"9"});
	arrBreeds.push({"name":"WingedUnicorn", "number":"10"});
	arrBreeds.push({"name":"PhoenixPony", "number":"11"});
	arrBreeds.push({"name":"Valkyrie", "number":"12"});
	arrBreeds.push({"name":"KirinPony", "number":"13"});
	arrBreeds.push({"name":"MerDragon", "number":"14"});
	arrBreeds.push({"name":"WishingPony", "number":"15"});
	arrBreeds.push({"name":"PurrPony", "number":"16"});
	arrBreeds.push({"name":"ReindeerPony", "number":"17"});
	arrBreeds.push({"name":"MountainPony", "number":"18"});
	arrBreeds.push({"name":"KitsunePony", "number":"19"});
	arrBreeds.push({"name":"DinoPony", "number":"20"});

	arrSgenes.push({"loci":"body","name":"Paint","number":"1","brs":"0"});
	arrSgenes.push({"loci":"body","name":"Zigzag","number":"2","brs":"0"});
	arrSgenes.push({"loci":"body","name":"LDapple","number":"3","brs":"0"});
	arrSgenes.push({"loci":"body","name":"Hdapple","number":"4","brs":"0"});
	arrSgenes.push({"loci":"body","name":"BodyFade","number":"5","brs":"0"});
	arrSgenes.push({"loci":"body","name":"Clownfish","number":"6","brs":"1"});
	arrSgenes.push({"loci":"body","name":"Zebra","number":"7","brs":"5"});
	arrSgenes.push({"loci":"body","name":"Tarantula","number":"8","brs":"18"});
	arrSgenes.push({"loci":"body","name":"Monarch","number":"9","brs":"10"});
	arrSgenes.push({"loci":"body","name":"Fawn","number":"10","brs":"17"});
	arrSgenes.push({"loci":"body","name":"ZebraFinch","number":"11","brs":"2"});
	arrSgenes.push({"loci":"body","name":"Koi","number":"12","brs":"8"});
	arrSgenes.push({"loci":"body","name":"Appaloosa","number":"13","brs":"4"});
	arrSgenes.push({"loci":"body","name":"Gemsbok","number":"14","brs":"12"});
	arrSgenes.push({"loci":"body","name":"Numbat","number":"15","brs":"3"});
	arrSgenes.push({"loci":"body","name":"Biolum","number":"16","brs":"15"});
	arrSgenes.push({"loci":"leg","name":"Socks","number":"18","brs":"0"});
	arrSgenes.push({"loci":"leg","name":"Stocking","number":"19","brs":"0"});
	arrSgenes.push({"loci":"leg","name":"Fade","number":"20","brs":"0"});
	arrSgenes.push({"loci":"leg","name":"Okapi","number":"21","brs":"0"});
	arrSgenes.push({"loci":"hair","name":"Stripe","number":"23","brs":"0"});
	arrSgenes.push({"loci":"hair","name":"Rainbow","number":"24","brs":"0"});
	arrSgenes.push({"loci":"hair","name":"Tips","number":"25","brs":"0"});
	arrSgenes.push({"loci":"hair","name":"Mstripe","number":"26","brs":"0"});
	arrSgenes.push({"loci":"hair","name":"QStripe","number":"27","brs":"0"});
	arrSgenes.push({"loci":"hair","name":"Hfade","number":"28","brs":"0"});
	arrSgenes.push({"loci":"face","name":"Star","number":"29","brs":"0"});
	arrSgenes.push({"loci":"face","name":"Freckle","number":"30","brs":"0"});
	arrSgenes.push({"loci":"face","name":"Blaze","number":"31","brs":"0"});
	arrSgenes.push({"loci":"face","name":"Fade","number":"32","brs":"0"});
	arrSgenes.push({"loci":"face","name":"Skull","number":"33","brs":"0"});
	arrSgenes.push({"loci":"leg","name":"LegFreckles","number":"35","brs":"0"});
	arrSgenes.push({"loci":"body","name":"Python","number":"36","brs":"9"});
	arrSgenes.push({"loci":"face","name":"Baldface","number":"37","brs":"0"});
	arrSgenes.push({"loci":"hair","name":"Roots","number":"38","brs":"0"});
	arrSgenes.push({"loci":"face","name":"Splotches","number":"39","brs":"0"});
	arrSgenes.push({"loci":"body","name":"BodyFreckles","number":"40","brs":"0"});
	arrSgenes.push({"loci":"body","name":"Turtle","number":"41","brs":"6"});
	arrSgenes.push({"loci":"face","name":"Splash","number":"42","brs":"0"});
	arrSgenes.push({"loci":"leg","name":"Splash","number":"43","brs":"0"});
	arrSgenes.push({"loci":"face","name":"Woodpecker","number":"44","brs":"0"});
	arrSgenes.push({"loci":"face","name":"Wolf","number":"45","brs":"0"});
	arrSgenes.push({"loci":"face","name":"Fox","number":"46","brs":"0"});
	arrSgenes.push({"loci":"leg","name":"Dipped","number":"47","brs":"0"});
	arrSgenes.push({"loci":"body","name":"Tabby","number":"48","brs":"16"});
	arrSgenes.push({"loci":"body","name":"Frog","number":"49","brs":"13"});
	arrSgenes.push({"loci":"hair","name":"Highlights","number":"50","brs":"0"});
	arrSgenes.push({"loci":"hair","name":"HairSplash","number":"54","brs":"0"});
	arrSgenes.push({"loci":"body","name":"BodySplotches","number":"55","brs":"0"});
	arrSgenes.push({"loci":"body","name":"Vulpine","number":"56","brs":"19"});
	arrSgenes.push({"loci":"body","name":"Falcon","number":"57","brs":"11"});
	arrSgenes.push({"loci":"hair","name":"TStripes","number":"58","brs":"0"});
	arrSgenes.push({"loci":"hair","name":"Split","number":"59","brs":"0"});
	arrSgenes.push({"loci":"leg","name":"Leg Splotches","number":"60","brs":"0"});

	if(typeof(Storage)!=="undefined")
	{
		//Load extra breeds
		if (!localStorage.savedBreeds)
		{
			localStorage.savedBreeds = arrAddedBreeds;
		}
		else
		{
			arrAddedBreeds = new Array();
			arrAddedBreeds = JSON.parse(localStorage.savedBreeds);
		}

		//Load extra genes
		if (!localStorage.savedGenes)
		{
			localStorage.savedGenes = arrAddedSgenes;
		}
		else
		{
			arrAddedSgenes = new Array();
			arrAddedSgenes = JSON.parse(localStorage.savedGenes);
		}
	}
	else
	{
		document.getElementById("local_storage_msg").innerHTML = "<p>WARNING! Your machine does not support local storage. Breeds/sgenes manually added will NOT be saved once you navigate away from the page.</p>"
	}

	//Get list of non-BrS genes
	arrNonBrsBodyGenes.push("None");
	for(var i=0; i < arrSgenes.length; i++)
	{
		if(arrSgenes[i].brs == 0 && arrSgenes[i].loci == "body")
		{
			arrNonBrsBodyGenes.push(arrSgenes[i].name);
		}
	}
	for(var i=0; i < arrAddedSgenes.length; i++)
	{
		if(arrAddedSgenes[i].brs == 0 && arrAddedSgenes[i].loci == "body")
		{
			arrNonBrsBodyGenes.push(arrAddedSgenes[i].name);
		}
	}

	//removeDuplicates(arrAddedBreeds, arrBreeds);
	//removeDuplicates(arrAddedSgenes, arrSgenes);

	localStorage.setItem("savedBreeds", JSON.stringify(arrAddedBreeds));
	localStorage.setItem("savedGenes", JSON.stringify(arrAddedSgenes));
}

function removeDuplicates(argAddedArray, argArray)
{
	for(var i=0; i<argAddedArray.length; i++)
	{
		for(var u=0; u<argArray.length; u++)
		{
			if((argArray[u].number) && (argAddedArray[i].number))
			{
				if(argAddedArray[i].number == argArray[u].number)
				{
					argAddedArray.splice(i, 1);
					break;
				}
			}
		}
	}
}

function updateDataDisplays()
{
	updateBreedDropdown();
	updateSgeneDropdowns();
	listAddedData();
}

function addBreed(form)
{
	arrAddedBreeds.push({"number":String(form.breed_number.value), "name":String(form.breed_name.value)});

	localStorage.setItem("savedBreeds", JSON.stringify(arrAddedBreeds));

	updateDataDisplays();

	form.breed_number.value = "";
	form.breed_name.value = "";
}

function addGene(form)
{
	arrAddedSgenes.push({"loci":String(form.gene_loci.value), "number":String(form.gene_number.value), "name":String(form.gene_name.value), "brs":String(form.brs_number.value)});
	localStorage.setItem("savedGenes", JSON.stringify(arrAddedSgenes));

	updateDataDisplays();

	form.gene_number.value = "";
	form.gene_name.value = "";
}

function removeItem(arg)
{
	var type = this.parentElement.parentElement.parentElement.parentElement.title
	var c = confirm("Are you sure you want to delete the " + type + " " + this.id + "?");
	if(c == true)
	{
		if(type == "breed")
		{
			for(var i=0; i<arrAddedBreeds.length; i++)
			{
				if (arrAddedBreeds[i].name == this.id)
				{
					arrAddedBreeds.splice(i, 1);
					break;
				}
			}
		}
		else
		{
			for(var u=0; u<arrAddedSgenes.length; u++)
			{
				if (arrAddedSgenes[u].name == this.id)
				{
					arrAddedSgenes.splice(u, 1);
					break;
				}
			}
		}

		localStorage.setItem("savedBreeds", JSON.stringify(arrAddedBreeds));
		localStorage.setItem("savedGenes", JSON.stringify(arrAddedSgenes));
		updateDataDisplays();
	}
}


function listAddedData()
{
	var listHtml = "";
	listHtml += "<div class=\"form_box\"><div class='table_header'>Breeds:</div><table id='added_breeds_table' title='breed' class='alternating_table'><col width='200'><col width='90'><col width='100'><tr><th>Breed Name</th><th>#</th><th>Delete?</th></tr>";

	for(var i = 0; i < arrBreeds.length; i++)
	{
		var name = arrBreeds[i].name;
		listHtml += getTableRow(arrBreeds[i], false);
	}

	for(var i = 0; i < arrAddedBreeds.length; i++)
	{
		var name = arrAddedBreeds[i].name;
		listHtml += getTableRow(arrAddedBreeds[i], true);
	}

	listHtml += "</table></div><div class=\"form_box_med\"><div class='table_header'>Genes:</div><table id='added_sgenes_table' title='gene' class='alternating_table'><col width='150'><col width='60'><col width='120'><col width='150'><tr><th>Gene Name</th><th>#</th><th>Loci</th><th>BrS Breed</th><th>Delete?</th></tr>";

	for(var i = 0; i < arrSgenes.length; i++)
	{
		var name = arrSgenes[i].name;
		listHtml += getTableRow(arrSgenes[i], false);
	}

	for(var i = 0; i < arrAddedSgenes.length; i++)
	{
		var name = arrAddedSgenes[i].name;
		listHtml += getTableRow(arrAddedSgenes[i], true);
	}
	listHtml += "</table></div>";

	document.getElementById("data_list").innerHTML = listHtml;

	updateDeleteButtons();
}

function getTableRow(argItem, argCanDelete)
{
	var deleteClass = '>';
	if (argCanDelete) deleteClass = " class='delete'>DELETE"

	var brsTd = '';
	var loci_text = '';
	//Check if it's a breed or an sgene
	if (argItem.loci)
	{
		loci_text = "<td>" + argItem.loci + "</td>";
		if(argItem.brs != "0")
		{
			brsTd = "<td>" + getBreedNameFromNumber(argItem.brs) + "</td>";
		}
		else
		{
			brsTd = "<td></td>";
		}
	}

	return "<tr><td>" + argItem.name + "</td><td>" + argItem.number + "</td>" + loci_text + brsTd + "<td><div id='" + argItem.name + "'" + deleteClass + "</div></td></tr>"
}

function getBreedNameFromNumber(argNumber)
{
	var ret = "Undefined";

	arrAllBreeds = arrBreeds.concat(arrAddedBreeds);
	for (var i=0; i<arrAllBreeds.length; i++)
	{
		if(arrAllBreeds[i].number == argNumber)
		{
			ret = arrAllBreeds[i].name;
			break;
		}
	}
	return ret;
}

function updateDeleteButtons()
{
	var arrDeleteButtons = document.getElementsByClassName('delete');

	for(var i = 0; i < arrDeleteButtons.length; i++) 
	{
		arrDeleteButtons[i].addEventListener("click", removeItem, false);
		arrDeleteButtons[i].onselectstart = function () { return false; };
	}
}