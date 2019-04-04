// Finding index of Waldo by using for loop
// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

// function actionWhenFound(i) {
//   console.log("Found Waldo at index: " + i);
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



// Racfactoring using for each method
function findWaldo(arr, found) {
  arr.forEach(function(ar){
    if(ar == 'Waldo'){
      found(arr.indexOf(ar));
    }
  });
}

function actionWhenFound(i) {
  console.log("Found Waldo at index: " + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);