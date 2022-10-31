function palindrome(str) {
  //let regexRule ="/[a-z]./g";

  // Process the string, remove spaces, convert it to lowercase
  let originalStr = str;
  let processedStr = str.toLowerCase();
  processedStr = processedStr.replace(/[\s,._\-\)\(:\\\/]{1,}/g,"");
  console.log("originalStr=",originalStr);
  console.log("processedStr=",processedStr);


  let matchCharactersArr = processedStr.match(/[\(\):\/\-\w\\]{1,}/g);
  console.log("matchCharacters=",matchCharactersArr);

  let matchStrBeforeRevert = matchCharactersArr[0];
  console.log("matchStrBeforeRevert=",matchStrBeforeRevert);

  let matchStrAfterRevert = "";

  for ( let i=matchStrBeforeRevert.length-1; i>=0; i-- ){
	  //console.log(matchStrBeforeRevert[i]);
	  matchStrAfterRevert =  matchStrAfterRevert.concat(matchStrBeforeRevert[i]);

  }
  console.log("matchStrAfterRevert=",matchStrAfterRevert);



  if (matchStrBeforeRevert === matchStrAfterRevert) {
  	console.log ("STRINGS ARE IDENTICAL");
	return true;
  } else {
  	console.log ("DIFFERENT STRINGS");
	return false;
  }




}



palindrome("eye");
//palindrome("Race car");
//palindrome("One two three four");
//palindrome("0_0 (: /-\ :) 0-0");
//palindrome("My age is 0, 0 si ega ym.");
//palindrome("_eye");
//palindrome("0_0 (: /-\ :) 0-0")