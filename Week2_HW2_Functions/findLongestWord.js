//Write a function findLongestWord that takes an array of words and returns the
//length of the longest one.

function longestWord(array)
  {
    let max_str = array[0].length;
    let word = array[0];
    for (var i = 1; i < array.length; i++) {
        var maxi = array[i].length;
        if (maxi > max_str)
            word = array[i];
            max_str = maxi;

        }
        return word;
    }



console.log(longestWord(['Hello', 'Why' , 'Beef',]));
