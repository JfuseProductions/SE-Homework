//Define a function reverseString that computes the reversal of a string.
//For example, reverseString("jag testar") should return the string "ratset gaj"

function reverseString(string){;
    
    let stringArr = string.split('') ; // SPLIT THE STRING INTO an ARRAY
    let reverseArr = stringArr.reverse() ; // Reverse the original array
    let joinArr = reverseArr.join('') ;
return joinArr;
}

// console.log(reverseString('HelloWorld'));

console.log(reverseString('Hello'));
