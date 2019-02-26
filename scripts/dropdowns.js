function clearSgeneDropdowns()
{
	document.getElementById("hair_dropdown").length = 0;
	document.getElementById("body_dropdown").length = 0;
	document.getElementById("leg_dropdown").length = 0;
	document.getElementById("face_dropdown").length = 0;

	var emptyDropdownOption = {"name":"None","number":"0"};
	addDropdownOption(emptyDropdownOption, document.getElementById("hair_dropdown"));
	addDropdownOption(emptyDropdownOption, document.getElementById("body_dropdown"));
	addDropdownOption(emptyDropdownOption, document.getElementById("leg_dropdown"));
	addDropdownOption(emptyDropdownOption, document.getElementById("face_dropdown"));
}

function updateSgeneDropdowns()
{
	clearSgeneDropdowns();
	arrFullSgeneList = arrSgenes.concat(arrAddedSgenes);

	for(var i = 0; i < arrFullSgeneList.length; i++)
	{
		addDropdownOption(arrFullSgeneList[i], document.getElementById(arrFullSgeneList[i].loci + "_dropdown"));
	}
}

function updateBreedDropdown()
{
	document.getElementById("breed_dropdown").length = 0;
	arrFullBreedList = arrBreeds.concat(arrAddedBreeds);

	for(var i = 0; i < arrFullBreedList.length; i++)
	{
		addDropdownOption(arrFullBreedList[i], document.getElementById("breed_dropdown"));
	}
}

function addDropdownOption(argOpt, argDropdown)
{
	var el = document.createElement("option");
	el.textContent = argOpt.name;
	el.value = argOpt.number;
	argDropdown.appendChild(el);
}