// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
const getNthCharacterInArray = (a, n) => {
    return a[n];
  };
  console.log(getNthCharacterInArray([7,2,1,6,3],0));
  /*
  Test cases:
  myFunction([1,2,3,4,5],3) Expected 3
  myFunction([10,9,8,7,6],5) Expected 6
  myFunction([7,2,1,6,3],1) Expected 7
  */
  
  // ========================================
  
  // Write a function that takes an array (a) as argument
  // Remove the first 3 elements of 'a'
  // Return the result
  // Tip: use the array prototype function slice()
  const removeFirstThreeElements = (a) => {
    return a.slice(3.9)
  };
  console.log(removeFirstThreeElements([5,4,3,2,1,0]));
  
  /*
  Test cases:
  myFunction([1,2,3,4]) Expected [4]
  myFunction([5,4,3,2,1,0]) Expected [2,1,0]
  myFunction([99,1,1]) Expected []
  */
  
  // ========================================
  
  // Write a function that takes an array (a) and a number (n) as arguments
  // It should return the last n elements of a
  // Tip: use the array prototype function slice()
  const removeLastNElements = (a, n) => {
    return a.slice(n, a.length);
  };

  console.log(removeLastNElements([1, 2, 3, 4, 5], 2));
  
  /*
  Test cases:
  myFunction([1, 2, 3, 4, 5], 2) Expected [ 4, 5 ]
  myFunction([1, 2, 3], 6) Expected [ 1, 2, 3 ]
  myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3) Expected [ 6, 7, 8 ]
  */
  
  // ========================================
  // Write a function that takes an array (a) as argument
  // Return the number of elements in a
  // Tip: How do you find the length of an array?
  const countNumberOfElements = (a) => {
    return a.length;
  };
  console.log(countNumberOfElements([1,2,2,4]));
  /*
  Test cases: 
  myFunction([1,2,2,4]) Expected 4
  myFunction([9,9,9]) Expected 3
  myFunction([4,3,2,1,0]) Expected 5
  */
  
  // ========================================
  
  // Write a function that takes an array of numbers as argument
  // Return the number of negative values in the array
  // Tip: There are multiple ways to solve this e.g.
  // - Use .filter() to filter only negative numbers, and count them
  // - Use .forEach() to iterate through all numbers and count negatives
  const countNumberOfNegativeValues = (a) => {
    let counter = 0;
    a.forEach((num) => {
      if (num < 0) {
        counter++;
      }
    });
    return counter;
  };
console.log(countNumberOfNegativeValues([1,-2,2,-4]));


  /*
  Test cases:
  myFunction([1,-2,2,-4]) Expected 2
  myFunction([0,9,1]) Expected 0
  myFunction([4,-3,2,1,0]) Expected 1
  */
  
  // ========================================
  
  // Write a function that takes an array of numbers as argument
  // It should return the sum of the numbers
  // Tip: forEach, c-style loop (or even .reduce() for the brave)
  const calcSumOfArrayOfNumbers = (a) => {
    let sum = 0;
  a.forEach((num) => {
    sum += num;
  });
  return sum;
};
console.log(calcSumOfArrayOfNumbers([10,100,40]));
  
  /*
  Test cases:
  myFunction([10,100,40]) Expected 150
  myFunction([10,100,1000,1]) Expected 1111
  myFunction([-50,0,50,200]) Expected 200
  */
  
  // ========================================
  // Write a function that takes an array of numbers as argument
  // It should return the average of the numbers
  // Tip: forEach, c-style loop (or even .reduce() for the brave)
  // to get the sum, then divide by number of elements in array
  const calcAvgOfArrayOfNumbers = (arr) => {
    let sum = 0;
    arr.forEach((num) => {
    sum += num ;
  });
  return sum / arr.length;

  };
  console.log(calcAvgOfArrayOfNumbers([10,100,40]));
  
  /*
  Test cases:
  myFunction([10,100,40]) Expected 50
  myFunction([10,100,1000]) Expected 370
  myFunction([-50,0,50,200]) Expected 50
  */
  
  // ========================================
  // Write a function that takes an array of strings as argument
  // Return the longest string
  // Tip: It's possible to get length of string with .length
  // E.g. 'Gunnsteinn'.length = 10
  const getLongestStringFromArray = (arr) => {
    let longestString = ""
    arr.forEach((str) => {
        if(str.length > longestString.length){
            longestString = str;
        }
    });
    return longestString;

  };
  console.log(getLongestStringFromArray(["apple", "banana", "orange", "kiwi"]));
  
  /*
  Test cases:
  myFunction(['help', 'me']) Expected 'help'
  myFunction(['I', 'need', 'candy']) Expected 'candy'
  */
  
  // ========================================
  // Write a function that takes an array as argument
  // It should return true if all elements in the array are equal
  // It should return false otherwise
  // Tip: STRICTLY equal, ====
  const areAllEqual = (arr) => {
    const firstElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== firstElement) {
        return false;
      }
    }
    return true;
  };
    
  
  console.log(areAllEqual([true, true, true, true]));
  console.log(areAllEqual([1,1,1,"3"]));
  /*
  Test cases:
  myFunction([true, true, true, true]) Expected true 
  myFunction(['test', 'test', 'test']) Expected true 
  myFunction([1,1,1,2]) Expected false 
  myFunction(['10',10,10,10]) Expected false 
  */
  // ========================================
  // Write a function that takes arguments an arbitrary number of arrays
  // It should return an array containing the values of all arrays
  // Tip: Make use of the spread syntax (...), as the parameters suggest
  const mergeAllArrays = (...arrays) => {
    return [].concat(...arrays);
  };
  
  console.log(mergeAllArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]));
  /*
  Test cases:
  myFunction([1, 2, 3], [4, 5, 6]) Expected [1, 2, 3, 4, 5, 6]
  myFunction(['a', 'b', 'c'], [4, 5, 6]) Expected ['a', 'b', 'c', 4, 5, 6]
  myFunction([true, true], [1, 2], ['a', 'b']) Expected [true, true, 1, 2, 'a', 'b']
  */