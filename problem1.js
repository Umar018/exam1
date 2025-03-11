function permute(arr) {
  let result = [];

  if (arr.length === 0) return [];
  if (arr.length === 1) return [arr];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const remain = arr.slice(0, i).concat(arr.slice(i + 1));
    const remainPer = permute(remain)

    for (let j = 0; j < remainPer.length; j++) {
        perArr = [num].concat(remainPer[j])
        result.push(perArr)
    }
  }
  
  return result;
}

console.log(permute([1,2,3]))
