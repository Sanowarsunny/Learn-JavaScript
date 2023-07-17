//1. Create an anonymous function that takes two numbers as parameters and returns their sum.

const add = (a,b)=>{
    return a+b;
}

const res = add(3,5);
console.log("Sum : " +res);

//    Example Input: 3, 5
//    Example Output: 8

 

// 2. Create an array of numbers and use the `map()` method with an anonymous function to square each number in the array.

const arr = [1, 2, 3, 4, 5];

const squ_arr = arr.map(function(val) {
  return val * val;
});

console.log(squ_arr);

//    Example Input: [1, 2, 3, 4, 5]

//    Example Output: [1, 4, 9, 16, 25]