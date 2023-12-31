//?Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

/**
 * ! Here task 1 Start
 */

function revLetter(parm) {
  let reverseLetter = parm.toLowerCase().split("").reverse().join("");

  return reverseLetter;
}

/**
 * ! Here task 1 ENd
 */

//?Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

/**
 * ! Here task 2 Start
 */

function sumPositiveNumbers(arr) {
  let totalSum = 0;

  for (let num of arr) {
    if (num > 0) {
      totalSum += num;
    }
  }

  return totalSum;
}

// const inputArray = [2, -5, 10, -3, 7, 10, -10];
// const output = sumPositiveNumbers(inputArray);
// console.log(output);
/**
 * ! Here task 2 ENd
 */

//?Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

//*  Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

/**
 * ! Here task 3 Start
 */
function findMostFrequentElement(arr) {
  // Create an empty object to store element counts
  const d = {};

  arr.map((e) => {
    d[e] = (d[e] || 0) + 1;
  });

  let data;
  let maxCount = 0;

  for (const num in d) {
    if (d[num] > maxCount) {
      maxCount = d[num];
      data = num;
    }
  }

  return data;
}
// const inputArray = [1, 2, 3, 3, 3, 4, 5, 5, 5, 5];
// const output = findMostFrequentElement(inputArray);
// console.log(output);

/**
 * ! Here task 3 Start
 */

/**
 * *Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

*/

/**
 * ! Here Task 4 Start
 */

function findTargetNumber(arr, target) {
  const result = [];
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return result;
}

// const input = [1, 2, 3, 3, 4, 5, 12];
// const targetNumber = 17;
// console.log(findTargetNumber(input, targetNumber));
/**
 * ! Here Task 4 END
 */

/**
 * *Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

*/

/**
 * ! Here Task 5 Start
 */
function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if ((num2 || num1) === 0) {
        return "Error: Cannot divide by zero.";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator.";
  }
}

/**
 * ! Here Task 5 ENd
 */

/**
 * *Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

*/

/**
 * ! Here Task 6 Start
 */
function generateRandomPassword() {
  const length = 6;
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()?|{}";

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  let password = "";

  if (length < 6) {
    return "Error: Password length must be at least 4 characters.";
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random(allChars) * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}
// console.log(generateRandomPassword());

/**
 * ! Here Task 6 ENd
 */

/**
 *  *Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
 */
/**
 * ! Here Task 7 ENd
 */
function romanToInt(romanNumeral) {
  const romanNumeralsMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const currentChar = romanNumeral[i];
    const currentValue = romanNumeralsMap[currentChar];

    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    prevValue = currentValue;
  }

  return result;
}
console.log(romanToInt(""));
/**
 * ! Here Task 7 ENd
 */

/**
 * *Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

*/

/**
 * ! Here Task 8 Start
 */

function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Error: Array should have at least two elements.";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  if (secondSmallest === Infinity) {
    return "Error: All elements in the array are equal.";
  }

  return secondSmallest;
}
/**
 * ! Here Task 8 ENd
 */
