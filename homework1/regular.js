// 1) Write a function named makeQuestion, that takes three arguments: two operands and an operator, and returns a string with the question "What is [oprd1] [opr] [oprd2]?".
function makeQuestion(operand1, operand2, operator) {
  return "What is " + operand1 + " " + operator + " " + operand2 + " ?";
}
//console.log(makeQuestion(2,3,"+"));

// 2) Make an object assign 3 different keys to it by 3 different ways that we have learned;
const obj = {};
obj.age = 30;

const key = "name";
obj[key] = "John";

obj["favourite colour"] = "blue";
//console.log(obj);

// 3) Find the odd one out in the provided array. All array elements are equal, except one. Your function must return this odd one out. ->
//   ["a", "a", "b", "a"] -> // 'b';
function odd(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
      return arr[i];
    }
  }
}
//console.log(odd(["a", "a", "b", "a"]));

//4) Deduce the smallest and the largest number from the supplied numeric array. Return an array containing these numbers, smallest number first.
//    [14, 28, 3, 8, 2] -> [2, 28];
function smallestLargest(arr) {
  let max = arr[0],
    min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < max) {
      min = arr[i];
    }
  }
  return [min, max];
}
//console.log(smallestLargest([14, 28, 3, 8, 2]));

//5) Write a function to separate a single array in to two separate arrays.
//   The supplied array will only contain numeric values. Your function should output two arrays:
//     one containing odd numbers, the other containing even numbers.
function OddEven(arr) {
  let odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      // 0 in neither even nor odd
      if (arr[i] % 2) {
        odd[odd.length] = arr[i];
      } else {
        even[even.length] = arr[i];
      }
    }
  }
  return { odd, even };
}
//console.log(OddEven([4,0,9,7,4,-2]));

//6) In this JavaScript array exercise, the supplied array may contain duplicate values. Write a function
// to return only unique values — values that only occur exactly one time within the provided array.
// [1, 1, 2, 3, 3, 4, 4, 5] -> [2, 5];
function unique(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count === 1) {
      result[result.length] = arr[i];
    }
  }
  return result;
}
//console.log(unique([1, 1, 2, 3, 3, 4, 4, 5])); // [2, 5]

//7) Your function must accept 2 arrays, then return the common words from each.
//    arr1 ["dog", "cat", "parrot"] arr2 ["lizard", "rat", "cat"] -> ["cat"]
function common(arr1, arr2) {
  let commonArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        commonArr[commonArr.length] = arr1[i];
      }
    }
  }
  return commonArr;
}
//console.log(common(["dog", "cat", "parrot"],["lizard", "rat", "cat"]));

// 8) Write a function to accept two arrays. Does the first array contain all elements represented in the second array?
//  arr1 ["monday", "tuesday"], arr2 ["tuesday"] -> true;
function doesContain(arr1, arr2) {
  let condition = true;
  arr2.forEach((val) => {
    if (arr1.indexOf(val) === -1) {
      condition = false;
    }
  });
  return condition;
}
//console.log(doesContain(["monday", "tuesday"],["tuesday"]));

// 9) The supplied array will contain both numeric and non-numeric characters.
//     Return a new array where all numeric values are positioned at the beginning of the array,
//     ["b", 6, "a", "q", 7, 2] -> [2, 6, 7, "a", "b", "q"]
function numericsAttheBeginning(arr) {
  let numeric = [],
    nonNumeric = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      numeric[numeric.length] = arr[i];
    } else {
      nonNumeric[nonNumeric.length] = arr[i];
    }
  }
  return [...numeric, ...nonNumeric];
}
//console.log(numericsAttheBeginning(["b", 6, "a", "q", 7, 2]));

// 10) From the first array, construct a new array based on the indexes supplied.
//      ["mon", "tue", "wed", "thur", "fri"] -> [1, 3, 4];
function filterBasedOnIndex(arr, indexArr) {
  let result = [];
  for (let i = 0; i < indexArr.length; i++) {
    result[result.length] = arr[indexArr[i]];
  }
  return result;
}
//console.log(filterBasedOnIndex(["mon", "tue", "wed", "thur", "fri"],[1, 3, 4]));

// 11) This one is a classic. Simply reverse the string without using reverse(). 'abcd' -> 'dcba';
function reverse(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
//console.log(reverse("abcd"));
