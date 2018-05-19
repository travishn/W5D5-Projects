const readline = require("readline");

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

function sumNum(res) {
  console.log(`Your sum is ${res}`);
  reader.close();
}

function addNums(sum, numsLeft, callback) {
  if (numsLeft > 0) {
    reader.question("Give me a number", function(res) {
      let num = parseInt(res);
      console.log(`${num+sum}`);
      addNums(sum+num, numsLeft - 1, callback);
    });

  } else {
    return callback(sum);
  }
}

addNums(0, 3, sumNum);

// console.log("hello");
