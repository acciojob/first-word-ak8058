function firstWord(s) {
  // your code here
	let strtrim=s.trim();
	if(strtrim==="")
	{
		return '';
	}
	const spaceindex=strtrim.indexOf(' ');
	if(spaceindex===-1)
	{
		return strtrim;
	}
	return strtrim.slice(0,spaceindex);
}

// Do not change the code below


const s = prompt("Enter String:");
alert(firstWord(s));
