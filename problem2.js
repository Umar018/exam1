function move2end(arr) {
  let arr0 = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr0.push(0);
      i -= 1
    }
  }
  arr.push(...arr0);
  return arr;
}

console.log(move2end([0, 1, 0, 0, 3, 12]));
