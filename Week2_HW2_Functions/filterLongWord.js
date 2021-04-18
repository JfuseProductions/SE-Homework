function filterLongWords(array,i){
  let newArray = []

  for(let j = 0; j < array.length ; j++){

    if (array[j].length > 4){ //array[0] == 'Hello' > 4 than newArray.push(i)
      newArray.push(array[j])
    }
  }
return newArray
}

console.log(filterLongWords(["hello","hi","words","word","yes","flags","monster"] , 5))
