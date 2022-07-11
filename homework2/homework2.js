// 1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr) {
  return arr.map((val) => val * 2);
}
//console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// 2) Take an array of numbers and make them strings
function stringItUp(arr) {
  return arr.map((val) => "" + val);
}
//console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// 3) Capitalize each of an array of names
function capitalizeNames(arr) {
  return arr.map((val) => val[0].toUpperCase() + val.slice(1).toLowerCase());
}
//console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// 4) Make an array of strings of the names
function namesOnly(arr) {
  return arr.map((val) => val.name);
}
// console.log(
//   namesOnly([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"];

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr) {
  return arr.map((val) =>
    val.age >= 18
      ? val.name + " can go to The Matrix"
      : val.name + " is under age!!"
  );
}
// console.log(
//   makeStrings([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

// under age means not 18 +;

// 6)  If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
function positiveSum(arr) {
  if (!arr.length) {
    return 0;
  }
  const positiveArr = arr.filter((val) => val > 0);
  if (!positiveArr.length) {
    return 0;
  }
  return positiveArr.reduce((aggr, val) => aggr + val);
}
const input = [1, -4, 12, 0, -3, 29, -150]; //   42
//console.log(positiveSum(input));

// 7) Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
const input7 = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jeniffer",
    age: 65,
  },
];
// Output ->  [13, 67, 54];
function ageDifference(arr) {
  const ages = arr.map((val) => val.age);
  const max = Math.max(...ages);
  const min = Math.min(...ages);
  return [min, max, max - min];
}
//console.log(ageDifference(input7));

// 8 )
//Count the occurrences of distinct elements in the given 2D array. The given input is an array,
// the elements of which are arrays of strings. The result is an object whose
// property names are the values from the arrays and their value is the number of their occurrences.
const input8 = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];
const output8 = {
  a: 1,
  b: 1,
  c: 2,
  d: 2,
  f: 2,
  g: 1,
};
function occurrence(arr) {
  return arr.reduce((aggr, arr) => {
    arr.forEach((element) => {
      aggr[element] = aggr[element] ? aggr[element] + 1 : 1;
    });
    return aggr;
  }, {});
}
//console.log(occurrence(input8));

// 9)
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Input: nums = [3,2,3]
// Output: 3

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// NOTE if the n / 2 is for example 3.5 you can assume that the majority elements appears not 3.5 times but 4 times
function majority(arr) {
  const info = arr.reduce((aggr, val) => {
    aggr[val] = aggr[val] ? aggr[val] + 1 : 1;
    return aggr;
  }, {});
  const entries = Object.entries(info);
  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1] >= Math.ceil(arr.length / 2)) {
      return entries[i][0];
    }
  }
}
//console.log(majority([3, 2, 3]));
//console.log(majority([2, 2, 1, 1, 1, 2, 2]));

// 10) gtnel trvats array i miji 3rd amenashate krknvox tive;
function thirdMostCommon(arr) {
  const info = arr.reduce((aggr, val) => {
    aggr[val] = aggr[val] ? aggr[val] + 1 : 1;
    return aggr;
  }, {});
  const entries = Object.entries(info);
  console.log(entries);
  return entries.map((arr) => arr.reverse()).sort()[2][0];
}
//console.log(thirdMostCommon([2, 3, 1, 1, 1, 2, 3, 3, 3, 0, 4])); //2

// 11) Given a string s and an array of strings words, determine whether s is a prefix string of words.
//
// A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.
//
// Return true if s is a prefix string of words, or false otherwise.

// Input: s = "iloveleetcode", words = ["i","love","leetcode","apples"]
// Output: true
// Explanation:
// s can be made by concatenating "i", "love", and "leetcode" together.
function isPrefix(s, words) {
  const concat = words.reduce((aggr, val) => {
    return aggr + val;
  }, "");
  return concat.includes(s);
}
//console.log(isPrefix("iloveleetcode", ["i", "love", "leetcode", "apples"]));

// 12) Given an array of objects where objects have the following structure return an array of objects also containing
//     a field country, for example if phone number starts with +374 the field country will be Armenia, you can assume that
// first 4characters of phoneNumber represent the country, so you can just query them ,the country codes are given below,
// you will need to make the names uppercase,
// also there may or may not be a field relation which will be a string representing the name of one of the objects in the array
// you will need to replace that string with a reference to that actual object

///
const phoneCountryCodes = {
  "+374": "Armenia",
  "+375": "Somali",
  "+376": "Russia",
  "+377": "Hoktemberyan",
};

const arrOfObjects = [
  {
    name: "sarah",
    age: 32,
    phoneNumber: "+374000000",
    relation: "nelly",
  },
  {
    name: "nelly",
    age: 11,
    phoneNumber: "+3750020000",
    relation: "sarah",
  },
];

const referancetoSarahObject = arrOfObjects[0];
const referanceToNellyObject = arrOfObjects[1];

// You will need to return
// const arrOfObjects = [

//   {
//       name: 'SARAH',
//       age: 32,
//       phoneNumber: '+374000000',
//       country: 'Armenia',
//       relation: referancetoSarahObject,
//   },
//   {
//       name: 'NELLY',
//       age: 11,
//       phoneNumber: '+3750020000',
//       country: 'Somali',
//       relation: referanceToNellyObject,

//   }
// ];
function modify(arrOfObjects) {
  return arrOfObjects.map((obj) => {
    let referance = obj;
    return {
      name: obj.name.toUpperCase(),
      age: obj.age,
      phoneNumber: obj.phoneNumber,
      county: phoneCountryCodes[obj.phoneNumber.slice(0, 4)],
      relation: referance,
    };
  });
}
//console.log(modify(arrOfObjects));

// *****
const ashakertner = [
  [1, 6],
  [2, 5],
  [4, 3],
];

function order(array) {
  let result = [];

  let patrastvel = array.map((ashakert) => ashakert[0]); // [1,2,4]
  let patasxanel = array.map((ashakert) => ashakert[1]); // [6,5,3]

  let arajinPatasxanoxIndex = patrastvel.indexOf(Math.min(...patrastvel));
  result[arajinPatasxanoxIndex] = 0;

  let currentTime =
    patrastvel[arajinPatasxanoxIndex] + patasxanel[arajinPatasxanoxIndex];

  patrastvel[arajinPatasxanoxIndex] = +Infinity; // vor heto min yntreluc hashvi charnenq
  patasxanel[arajinPatasxanoxIndex] = +Infinity;

  for (let i = 1; i < array.length; i++) {
    let readyIndexes = [];
    let readyStudents = patrastvel.filter((val, i) => {
      if (val <= currentTime) {
        readyIndexes.push(i);
      }
      return val <= currentTime;
    });

    if (readyStudents.length) {
      // kan patasxanelu patrast ashakert/ashakertner(kpatasxani na, um patasxanelu jamanaky min e)

      let patasxanoxner = patasxanel.filter(
        // pahum enq nranc ovqer karox en patasxanel
        (val, i) => readyIndexes.indexOf(i) !== -1
      );
      let patasxanoxIndex = patasxanel.indexOf(Math.min(...patasxanoxner));
      result[patasxanoxIndex] = i;
      currentTime += patasxanel[patasxanoxIndex];
      patrastvel[patasxanoxIndex] = +Infinity;
      patasxanel[patasxanoxIndex] = +Infinity;
    } else {
      // voch mi ashakert patrast chi patasxanelu, kpatasxani na um patrastvelu jamanaky min e
      let patasxanoxIndex = patrastvel.indexOf(Math.min(...patrastvel));
      result[patasxanoxIndex] = i;
      currentTime =
        currentTime +
        patrastvel[patasxanoxIndex] -
        currentTime +
        patasxanel[patasxanoxIndex];
      patrastvel[patasxanoxIndex] = +Infinity;
      patasxanel[patasxanoxIndex] = +Infinity;
    }
  }

  return result;
}

//console.log(order(ashakertner)); //[0, 2, 1]
