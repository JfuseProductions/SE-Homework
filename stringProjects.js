//CHECKS IF A STRING IS BLANK




function whereBlank(input) {
  if (input === '') {
    console.log(`${input} is empty`)
  } else {
    console.log(`${input} is a string`)
  }
}
whereBlank('Joshua Mendoza');
whereBlank('')






//SPLIT A STRING AND CONVERT TO ARRAY
function stringToArray(input) {

  let arr = input.split('');
  console.log(arr);
}
stringToArray('Joshua')







//CONVERT FIRST AND LAST NAME TO ABBREVIATED FORM = Joshua Mendoza => Joshua M.
function abbrName(name) {
  let abbr = name.split('');

  for (let i = 0; i < abbr.length; i++) {

    if (abbr[i] === ' ') {
      let space = abbr.indexOf(abbr[i - 1]); //LAST LETTER OF NAME

      let firstLetter = (abbr[i + 1]);      // takes the persons first letter of last name or first letter after an empty space

      let arrName = []                      // empty array to add letters to

      for (let i = 0, j = 0; i <= space; i++, j++) {
          arrName.push(abbr[j])             // ADDS EACH LETTER FROM the abbreviated variable that was split back into an array
      }
      let firstName = ''
      firstName = arrName.join('');

      console.log(`${firstName} ${firstLetter}.`)
    }
  }
}

abbrName('Joshua Mendoza');
