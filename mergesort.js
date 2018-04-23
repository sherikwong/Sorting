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
}

const merge = (array1, array2) => {

}

const mergeSort = (array1, array2) => {
  //recursive
}
