// Name : Abdelrahman Ayman
// Task : 2
// Function - IF - For - While {return, continue, break}

/*
 -- A function is a block of code designed to perform a specific task. It can take inputs (parameters),
  execute code, and optionally return a result using the return statement.

 -- An if statement executes a block of code if a specified condition is true.
  It can also include else if and else blocks to handle other conditions.

 -- A for loop is used to repeat a block of code a specific number of times.
  It consists of an initialization, a condition, and an increment/decrement.
       - continue: Skips the current iteration and moves to the next one.
       - break: Exits the loop entirely.
    
 -- A while loop repeats a block of code as long as a specified condition is true.
       - continue: Skips the current iteration and moves to the next one.
       - break: Exits the loop entirely.
*/

/* ======================================================= */
/* ======================================================= */
/* ======================================================= */
/* ======================================================= */

//EX.1 -- IF
let number = 10;

if (number > 0) {
  console.log("The number is positive");
} else if (number < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
} // ----> The number is positive

//EX.2 -- IF
function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(checkNumber(10)); // ----> Positive
console.log(checkNumber(-5)); // ----> Negative
console.log(checkNumber(0)); // ----> Zero

/* ======================================================= */
/* ======================================================= */

//EX.1 -- For
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
// ----> 1 2 3 4 ----> This for loop will not print the number 5, unlike the following example

//EX.2 -- For
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Stopping the loop at i =", i); // ----> Stopping the loop at i = 5
    break; // Exit the loop when i === 5
  }
  console.log(i); // ----> 1,2,3,4
}

//EX.3 -- For
for (let i = 1; i < 10; i++) {
  if (i % 2 === 0) {
    console.log("even");
    continue;
  }
  console.log(i); // ----> 1 3 5 7 9
}

/* ======================================================= */
/* ======================================================= */

//EX.1 -- While
let j = 0;
while (j < 10) {
  j++;
  if (j % 2 === 0) {
    continue; // Skip "iteration" if j is even
  }
  console.log(j);
} // ----> 1 3 5 7 9

//EX.2 -- While
let count = 0;

while (count < 10) {
  count++;

  if (count === 3) {
    continue; // Skip when count === 3
  }

  if (count === 7) {
    break; // Exit when count === 7
  }

  console.log(count);
}

/* ======================================================= */
/* ======================================================= */

//EX.1 -- Function
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  }
  return "Odd";
}

let result = checkEvenOrOdd(4);
console.log(result); // ----> Even

result = checkEvenOrOdd(7);
console.log(result); // ----> Odd

//EX.2 -- Function
function processNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      continue;
    } else if (arr[i] < 0) {
      return "Negative number found!";
    } else if (arr[i] > 10) {
      break;
    }
    console.log("Processing:", arr[i]);
  }
  return "Processing completed!";
}

let numbers = [2, 5, 0, 7, 12, -1];
console.log(processNumbers(numbers)); // ----> Processing: 2 , Processing: 5 , Processing: 7 , "Processing completed!"

/*
    --> return: Exits a function and optionally returns a value.
    --> continue: Skips the current iteration of a loop and moves to the next iteration.
    --> break: Exits a loop entirely, stopping further iterations.
*/
