//Write a function that returns the number of arguments passed to the function
//when called.
function find(...arg){
  return arg.length;
}
console.log(find(2,5,6,7,4,3,2,3))


//max of three
/*
function maxofThree(x,y,z){
  if (x > y && x > z)
  {
    return `${x} is the greatest number`;
  }
  else if(y > x && y > z){
    return `${y} is the greatest number`;
  }
  else if(z>x && z>y){
    return `${z} is the greatest number`;
  }
}
*/

// console.log(maxofThree(1,2,3));

//
function sumArray(){
  let arr = [1,2,3,4];

  for(let i=0;i<=arr.length;i++){
    let holder = arr[i] + arr[i+1] + arr[i+2] + arr[i+3];
    return holder
  }

}
console.log(sumArray())

//MultiplyArray
function multiplyArray(){
  let arr = [1,2,3,4];

  for(let i=0; i<=arr.length; i++){
    let holder = arr[i] * arr[i+1] * arr[i+2] * arr[i+3];
    return holder
  }
}
console.log(multiplyArray());
