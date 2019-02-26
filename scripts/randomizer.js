function surpriseMe(form)
{
	//Random Gender
	if (!form.genderlock.checked)
	{
		var intGender = Math.floor(Math.random() * 2);
		document.getElementById('gender').options[intGender].selected = "selected";
	}

	//Random Breed
	if (!form.breedlock.checked)
	{
		var intBreed = Math.floor(Math.random() * (document.getElementById('breed_dropdown').length));
		document.getElementById('breed_dropdown').options[intBreed].selected = "selected";
	}

	//Random Sgenes
	//Hair
	if (!form.hairsgenelock.checked)
	{
		var intHairSgene = Math.floor(Math.random() * (document.getElementById('hair_dropdown').length));
		document.getElementById('hair_dropdown').options[intHairSgene].selected = "selected";
	}

	//Body
	if (!form.bodysgenelock.checked)
	{
		var bodyDropdown = document.getElementById('body_dropdown')

		if(form.allowbrs.checked)
		{
			var intBodySgene = Math.floor(Math.random() * (bodyDropdown.length));
			document.getElementById('body_dropdown').options[intBodySgene].selected = "selected";
		}
		else
		{
			var intBodySgene = Math.floor(Math.random() * arrNonBrsBodyGenes.length);
			var geneToSelect = arrNonBrsBodyGenes[intBodySgene];
			for(var i=0; i < bodyDropdown.length; i++)
			{
				if(bodyDropdown.options[i].text == geneToSelect)
				{
					bodyDropdown.selectedIndex = i;
				}
			}
		}
	}

	if (!form.bodycolorizelock.checked)
	{
		var intBodyColorize = Math.floor(Math.random() * 3);
		if (intBodyColorize == 0) document.getElementById('bodycolorize1').checked = true;
		if (intBodyColorize == 1) document.getElementById('bodycolorize2').checked = true;
		if (intBodyColorize == 2) document.getElementById('bodycolorize3').checked = true;
	}

	//Leg
	if (!form.legsgenelock.checked)
	{
		var intLegSgene = Math.floor(Math.random() * (document.getElementById('leg_dropdown').length));
		document.getElementById('leg_dropdown').options[intLegSgene].selected = "selected";
	}

	if (!form.legcolorizelock.checked)
	{
		var intLegColorize = Math.floor(Math.random() * 3);
		if (intLegColorize == 0) document.getElementById('legcolorize1').checked = true;
		if (intLegColorize == 1) document.getElementById('legcolorize2').checked = true;
		if (intLegColorize == 2) document.getElementById('legcolorize3').checked = true;
	}

	//Face
	if (!form.facesgenelock.checked)
	{
		var intFaceSgene = Math.floor((Math.random() * (document.getElementById('face_dropdown').length)));
		document.getElementById('face_dropdown').options[intFaceSgene].selected = "selected";
	}

	if (!form.facecolorizelock.checked)
	{
		var intFaceColorize = Math.floor(Math.random() * 3);
		if (intFaceColorize == 0) document.getElementById('facecolorize1').checked = true;
		if (intFaceColorize == 1) document.getElementById('facecolorize2').checked = true;
		if (intFaceColorize == 2) document.getElementById('facecolorize3').checked = true;
	}

	//Check if user is limiting colors
	if (!form.selectcolor1check.checked && !form.selectcolor2check.checked && !form.selectcolor3check.checked && 
		!form.selectcolor4check.checked && !form.selectcolor5check.checked && !form.selectcolor6check.checked)
	{
		//Pick random Colors
		if (!form.eyecolorlock.checked) setRandomizedColor("eyecolor");
		if (!form.hair1colorlock.checked) setRandomizedColor("hair1color");
		if (!form.hair2colorlock.checked) setRandomizedColor("hair2color");
		if (!form.bodycolorlock.checked) setRandomizedColor("bodycolor");
		if (!form.extra1colorlock.checked) setRandomizedColor("extra1color");
		if (!form.extra2colorlock.checked) setRandomizedColor("extra2color");
	}
	else
	{
		var arrColorsToUse = [];
		if (form.selectcolor1check.checked) arrColorsToUse.push(document.getElementById('selectcolor1text').innerText);
		if (form.selectcolor2check.checked) arrColorsToUse.push(document.getElementById('selectcolor2text').innerText);
		if (form.selectcolor3check.checked) arrColorsToUse.push(document.getElementById('selectcolor3text').innerText);
		if (form.selectcolor4check.checked) arrColorsToUse.push(document.getElementById('selectcolor4text').innerText);
		if (form.selectcolor5check.checked) arrColorsToUse.push(document.getElementById('selectcolor5text').innerText);
		if (form.selectcolor6check.checked) arrColorsToUse.push(document.getElementById('selectcolor6text').innerText);

		//Make sure each selected color is used at least once
		var arrColorLoci = ["eyecolor", "hair1color", "hair2color", "bodycolor", "extra1color", "extra2color"];
		for(var i=0; i < arrColorsToUse.length; i++)
		{
			var intColorLociIndex = Math.floor(Math.random() * arrColorLoci.length);
			setColorFromTextField(arrColorsToUse[i], arrColorLoci[intColorLociIndex]);
			arrColorLoci.splice(intColorLociIndex, 1);
		}

		//Fill in any leftover slots
		for(var u=0; u < arrColorLoci.length; u++)
		{
			var intColorToUse = Math.floor(Math.random() * arrColorsToUse.length);
			setColorFromTextField(arrColorsToUse[intColorToUse], arrColorLoci[u]);
		}
	}

	updateColorVars();

	//Submit the form
	generateURL(form);
}

function setColorFromTextField(color, colorfield)
{
	updateColorForm(colorfield, color)
}

function setRandomizedColor(colorfield)
{
	var color = getRandomColor()
	updateColorForm(colorfield, color);
}

function updateColorForm(colorfield, color)
{
	$("#" + colorfield).spectrum("set", color);
	$("#" + colorfield + "text").text(color);
}

function getRandomColor()
{
    var letters = '0123456789ABCDEF'.split('');
    var color = '';
    for (var i = 0; i < 6; i++ )
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}