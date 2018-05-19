const readline = require("readline");

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});


function askIfGreaterThan(el1, el2, callback){
  reader.question(`Is ${el1} greater than ${el2}?`, function(res) {

    (res ===  'yes') ? callback(true) : callback(false);
  });
}

// function test(boolean) {
//   if (boolean) {
//     console.log('true!');
//   } else {
//     console.log('false');
//   }
// }
function sortCompletionCallback(arr) {
  console.log(arr);
}
// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  if (i === arr.length-1) {
    outerBubbleSortLoop(madeAnySwaps);
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
} else { askIfGreaterThan(arr[i], arr[i+1], function(boolean){
  if (boolean){
    let temp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = temp;
    madeAnySwaps = true;
    innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
  } else {
    innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);

  }
});

}
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }

  }

  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// arr = [1,3,2,4];
// // askIfGreaterThan(1, 2, test);
// innerBubbleSortLoop(arr, 0, false, function() {
//   console.log('In outer bubblesort');
//   console.log(arr);
// });

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
