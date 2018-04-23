// const bubbleSort = array => {
//  if (array.length <= 1) {
//    return array;
//  }

//  for (var i = 0; i < array.length - 1; i++) {
//    var element1 = array[i];
//    var element2 = array[i + 1];


//  }

// }


// class bubbleSort {
//   constructor(array) {
//   }

//   swap() {
//     // if (array.length <= 1) {
//     //      return array;
//     //    }

//     //    for (var i = 0; i < array.length - 1; i++) {
//     //      var element1 = array[i];
//     //      var element2 = array[i + 1];

//   }
// }

const bubbleSort = {};

bubbleSort.swap = function(array) {
  if (array.length <= 1) {
       return array;
     }

     for (var i = 0; i < array.length - 1; i++) {
       var element1 = array[i];
       var element2 = array[i + 1];


     }
}

console.log(bubbleSort.swap.calls());
