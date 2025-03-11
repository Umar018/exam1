function findindex(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(findindex([1, 7, 11, 2, 15], 9));
