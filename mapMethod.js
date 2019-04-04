var words = ["ground", "control", "to", "major", "tom"];

function findLength(word) {
  return word.length;
}

function makeUpperCase(word) {
  return word.toUpperCase();
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}

var changeArray = function(arr, callback) {
  return arr.map(callback);
};

// var changeArray = function(arr, callback) {
//   return arr.map(function(word) {
//    return callback(word);
//   });
// };

console.log(changeArray(words, findLength));
console.log(changeArray(words, makeUpperCase));
console.log(changeArray(words, reverseWord));
