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

// console.log(sumOfNumbers);

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

// console.log(sumOfArray([3, 7, 8]));

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

// console.log(countVowels("Jhankar miA"));

// Problem-01 : Calculate the cash-out Charge

function cashOut(money) {
  if (typeof money !== "number" || !money > 0) {
    return "Invalid";
  }

  return (money * 1.75) / 100;
}

// console.log(cashOut(2000));

// Problem-02 : Valid Bangladeshi Number

function validContact(contact) {
  if (typeof contact !== "string") {
    return "Invalid";
  }

  if (
    contact.length === 11 &&
    !contact.includes(" ") &&
    contact.startsWith("01")
  ) {
    return true;
  } else {
    return false;
  }
}

// console.log(validContact("01600008200"));

// Problem-03 : Admission Success (📚 Will He Succeed?)

function willSuccess(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  let countPass = 0;
  let countFail = 0;
  for (const mark of marks) {
    if (mark >= 50) {
      countPass++;
    } else {
      countFail++;
    }
  }
  if (countPass > countFail) {
    return true;
  } else {
    return false;
  }
}

console.log(willSuccess([90, 99, 87, 48, 34, 49]));
