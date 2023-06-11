function convertToRoman(num) {
let romanNumerals = {
  M:	1000,
  CM:	900,
  D:	500,
  CD:	400,
  C:	100,
  XC:	90,
  L:	50,
  XL:	40,
  X:	10,
  IX:	9,
  V:	5,
  IV:	4,
  I:	1,
}


  let result = "";
  for(let prop in romanNumerals){
    //console.log(prop);
    //console.log(romanNumerals[prop]);
    while(num >= romanNumerals[prop]){
      result += prop;
      num -= romanNumerals[prop];
    }
  }


 return result;
}

convertToRoman(36);