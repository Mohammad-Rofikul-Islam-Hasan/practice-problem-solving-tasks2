// Task-1 Solution

function sum(num1, num2) {
  const sumNumbers = num1 + num2;

  return sumNumbers;
}

function multiply(num1, num2) {
  const multiplyNumbers = num1 * num2;

  return multiplyNumbers;
}

const sumOfNumbers = sum(2, 3) + multiply(2, 3);

console.log(sumOfNumbers);

// Task-2 Solution

function sumOfArray(arr) {
  if (!Array.isArray(arr)) {
    return "Invalid";
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "Invalid";
    }
    sum = sum + arr[i];
  }
  return sum;
}

console.log(sumOfArray([3, 7, 8]));

// Task-3 solution

function countVowels(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let vowelCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      vowelCount++;
    }
  }
  return vowelCount;
}

console.log(countVowels("Jhankar miA"));
