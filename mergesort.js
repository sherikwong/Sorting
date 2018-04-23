const split = wholeArray => {
  let firstHalf, secondHalf, halfLength;

  if (wholeArray.length % 2 === 0) {
    halfLength = wholeArray.length / 2;
  } else {
    halfLength = Math.floor(wholeArray.length / 2);
  }

  firstHalf = wholeArray.slice(0, halfLength);
  secondHalf = wholeArray.slice(halfLength);

  return [firstHalf, secondHalf];
};

const merge = (array1, array2) => { // PURPOSE: To take two sorted arrays, and combine them so they are ordered in one array.
  let resultArray = [];
  let mutatable1 = array1;
  let mutatable2 = array2;

  while (mutatable1.length !== 0 || mutatable2.length !== 0) {
    if (mutatable1[0] <= mutatable2[0]) {
      resultArray.push(mutatable1[0]);
      mutatable1 = mutatable1.slice(1);
    } else {
      resultArray.push(mutatable2[0]);
      mutatable2 = mutatable2.slice(1);
    }
  }

  if (mutatable1.length === 0) {
    resultArray.concat(mutatable2);
  } else {
    resultArray.concat(mutatable1);
  }

  return resultArray;
};

const mergeSort = array => { // Should not be using a loop withina loop
  //recursive

  if (array.length === 1) {
    // if the array.length = 1 , then the array is already sorted.
    return array;

  } else {
    let splitArrays = split(array); // [firstHalf, secondHalf];
    console.log(splitArrays)
    // for (let i = 0; i < splitArrays.length; i++) {
    //   let individualArray = splitArrays[i];

      // if (mergeSort(individualArray) !== null) {
        // resultArray.push(mergeSort(individualArray));
    // return merge(mergeSort(splitArrays[0]), mergeSort(splitArrays[1]));

  }
};
