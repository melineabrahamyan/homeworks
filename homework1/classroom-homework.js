//1 Find the value that is not being repeated inside the given array.
//   ["a", "a", "b", "a"] -> // 'b';
function odd(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
      return arr[i];
    }
  }
}
//console.log(odd(["a", "a", "b", "a"]));

//2 Find the smallest and the largest number from the supplied numeric array. Return an array containing these numbers։
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

//3 From the given array of numbers create two arrays one containing only odd and the other only even numbers
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

//4 Write a function to return only unique values of the given array
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

//5 Create a function that accepts 2 arrays of words and returns the common words from each
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

//6 Write a function that accepts 2 array arguments and returns a boolean value - Does the first array contain all elements represented in the second array.
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

//7 From the given array of numbers and strings create 2 new arrays, one containing only numbers, another one only strings.
function numbersAndStrings(arr) {
  let numArr = [],
    strArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      numArr[numArr.length] = arr[i];
    } else {
      strArr[strArr.length] = arr[i];
    }
  }
  return { numArr, strArr };
}
//console.log(numbersAndStrings([1, 2, "hi", 10, "ok"]));

// Create a function that will reverse the given string.
function reverse(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
//console.log(reverse("abcd"));

const payments = [
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe", // Name of the student
    payedAmount: 1600, // Amount payed with this transaction
    year: 2020, // The payment year
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1500,
    year: 2021,
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1400,
    year: 2022,
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1300,
    year: 2023,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1500,
    year: 2020,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1400,
    year: 2021,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1300,
    year: 2022,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1200,
    year: 2023,
  },
];

//8 Find the max payment
function maxPayment(arr) {
  let max = arr[0].payedAmount;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].payedAmount > max) {
      max = arr[i].payedAmount;
    }
  }
  return max;
}
//console.log(maxPayment(payments));

//9 Calculate the sum of all payments
function paymentSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].payedAmount;
  }
  return sum;
}
//console.log(paymentSum(payments));

//10 Find the count of all payments that are more than 1500
function count(arr) {
  let Count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].payedAmount > 1500) {
      Count++;
    }
  }
  return Count;
}
//console.log(count(payments));

//11 Calculate the average of all payments
function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].payedAmount;
  }
  return sum / arr.length;
}
//console.log(average(payments));

//12 Calculate the total sum of payment amounts made by each student.
//We need to return an array that contains a list of information about students, including the total paid amount by the student.
function totalSum(arr) {
  let infoObj = arr.reduce((aggr, obj) => {
    if (aggr[obj.studentId]) {
      aggr[obj.studentId].push(obj);
    } else {
      aggr[obj.studentId] = [obj];
    }
    return aggr;
  }, {});

  let keys = Object.keys(infoObj);
  return keys.map((key) => {
    let objArr = infoObj[key[0]];
    let totalAmount = objArr.reduce((aggr, obj) => {
      return aggr + obj.payedAmount;
    }, 0);
    return {
      studentId: objArr[0].studentId,
      studentName: objArr[0].studentName,
      totalAmount: totalAmount,
    };
  });
}
//console.log(totalSum(payments));

const evaluations = [
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 70,
  },
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 60,
  },
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 50,
  },
  {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 60,
  },
  {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 50,
  },
  {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 40,
  },
  {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 45,
  },
  {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 35,
  },
  {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 25,
  },
];

//13 Return  the evaluation record with the lowest evaluation score
function lowestScore(arr) {
  let min = arr[0].score;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].score < min) {
      min = arr[i].score;
    }
  }
  return min;
}
//console.log(lowestScore(evaluations));

//14 Return the name of the student who has the lowest evaluation score․
function lowestScoreStudent(arr) {
  let min = arr[0].score;
  let name = arr[0].studentName;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].score < min) {
      min = arr[i].score;
      name = arr[i].studentName;
    }
  }
  return name;
}
//console.log(lowestScoreStudent(evaluations));

//15  Return array of students that have any evaluation more than 60․
function getList(arr) {
  return arr.filter((val) => val.score > 60);
}
//console.log(getList(evaluations));

//16 Return array of students for whom the average evaluation is less than 40
function averageLessThan40(arr) {
  let infoObj = arr.reduce((aggr, obj) => {
    if (aggr[obj.studentId]) {
      aggr[obj.studentId].push(obj);
    } else {
      aggr[obj.studentId] = [obj];
    }
    return aggr;
  }, {});

  let keys = Object.keys(infoObj);
  let totalInfo = keys.map((key) => {
    let objArr = infoObj[key[0]];
    let totalScore = objArr.reduce((aggr, obj) => {
      return aggr + obj.score;
    }, 0);
    return {
      studentId: objArr[0].studentId,
      studentName: objArr[0].studentName,
      courseId: objArr[0].courseId,
      totalScore: totalScore / objArr.length,
    };
  });
  return totalInfo.filter((info) => info.totalScore < 40);
}
//console.log(averageLessThan40(evaluations));
