function updateURL(form)
{
	var imgSrc = form.inputbox.value;

	//Get the breed name from URL
	var breed = imgSrc.substring(imgSrc.lastIndexOf("breed=")+6, imgSrc.lastIndexOf("&gender"));
	//Convert breed name to breed ID number
	breed = getBreedNo(breed);

	//Get gender from URL
	var gender = imgSrc.substring(imgSrc.lastIndexOf("gender=")+7, imgSrc.lastIndexOf("&DNA"));
	gender = gender.toLowerCase();

	//Get colors
	var colorSplit = imgSrc.split("DNA=");
	var dnaString = colorSplit[1].substring(0, 41);
	var arrColors = dnaString.split("|");

	//OLD PI color order
	//body, hair, eyes, hair 2, extra 1, extra 2

	//New PI color order
	//eyes, hair, hair 2, body, extra 1, extra 2

	//Re-order the colors
	var colors = arrColors[2] + "|" + arrColors[1] + "|" + arrColors[3] + "|" + arrColors[0] + "|" + arrColors[4] + "|" + arrColors[5];

	//Get sgenes
	var sgeneString = colorSplit[1].substring(42, 63);
	var arrSgenes = sgeneString.split("|");

	var sgenes = "";

	//get body sgene
	if(arrSgenes[0] != "++")
	{
		sgenes += getBodySgene(arrSgenes[0]) + "|";
	}
	//get leg sgene
	if(arrSgenes[1] != "++")
	{
		sgenes += getLegSgene(arrSgenes[1]) + "|";
	}
	//get hair sgene
	if(arrSgenes[2] != "++")
	{
		sgenes += getHairSgene(arrSgenes[2]) + "|";
	}
	//get face sgene
	if(arrSgenes[3] != "++")
	{
		sgenes += getFaceSgene(arrSgenes[3]) + "|";
	}


	//Put it all together
	var newURL = "http://im4.ponyisland.net/?img=pony&gender=" + gender + "&breed=" + breed + "&colors=" + colors + "&genes=" + sgenes + "&size=350";

 	document.getElementById("ponyimg_converted").src = newURL;
}

function getBreedNo(breed)
{
	switch(breed)
	{
		case "SeaPony":
			return "1";
			break;

		case "Pegasus":
			return "2";
			break;

		case "FlutterPony":
			return "3"
			break;

		case "EarthPony":
			return "4"
			break;

		case "Unicorn":
			return "5"
			break;

		case "ShellPony":
			return "6"
			break;

		case "FairyPony":
			return "7"
			break;

		case "MerPony":
			return "8"
			break;

		case "DragonPony":
			return "9"
			break;

		case "WingedUnicorn":
			return "10"
			break;

		case "PhoenixPony":
			return "11"
			break;

		case "Valkyrie":
			return "12"
			break;

		case "KirinPony":
			return "13"
			break;

		case "MerDragon":
			return "14"
			break;

		case "WishingPony":
			return "15"
			break;

		case "PurrPony":
			return "16"
			break;

		case "ReindeerPony":
			return "17";
			break;

		case "MountainPony":
			return "18";
			break;
	}
}

function getBodySgene(sgene)
{
	var firstLetter = sgene.charAt(0);
	var secondLetter = sgene.charAt(1);

	var ret = "";

	switch(firstLetter)
	{
		case "P":
			ret = "1";
			break;

		case "Z":
			ret = "2";
			break;

		case "L":
			ret = "3";
			break;

		case "H":
			ret = "4";
			break;

		case "D":
			ret = "5";
			break;

		case "W":
			ret = "6";
			break;

		case "E":
			ret = "7";
			break;

		case "T":
			ret = "8";
			break;

		case "M":
			ret = "9";
			break;

		case "F":
			ret = "10";
			break;

		case "I":
			ret = "11";
			break;

		case "K":
			ret = "12";
			break;

		case "A":
			ret = "13";
			break;

		case "G":
			ret = "14";
			break;

		case "N":
			ret = "15";
			break;

		case "B":
			ret = "16";
			break;
	}

	if (secondLetter == "C")
	{
		ret += "|17"
	}

	return ret;
}

function getLegSgene(sgene)
{
	var firstLetter = sgene.charAt(0);
	var secondLetter = sgene.charAt(1);

	var ret = "";

	switch(firstLetter)
	{
		case "H":
			ret = "18";
			break;

		case "F":
			ret = "19";
			break;

		case "D":
			ret = "20";
			break;

		case "O":
			ret = "21";
			break;
	}

	if (secondLetter == "C")
	{
		ret += "|22"
	}

	return ret;
}

function getHairSgene(sgene)
{
	switch (sgene)
	{
		case "SS":
			return "23";
			break;

		case "RR":
			return "24";
			break;

		case "TT":
			return "25";
			break;

		case "MM":
			return "26";
			break;

		case "QQ":
			return "27";
			break;

		case "DD":
			return "28";
			break;
	}
}

function getFaceSgene(sgene)
{
	var firstLetter = sgene.charAt(0);
	var secondLetter = sgene.charAt(1);

	var ret = "";

	switch(firstLetter)
	{
		case "S":
			ret = "29";
			break;

		case "F":
			ret = "30";
			break;

		case "B":
			ret = "31";
			break;

		case "D":
			ret = "32";
			break;

		case "K":
			ret = "33";
			break;
	}

	if (secondLetter == "C")
	{
		ret += "|34"
	}

	return ret;
}