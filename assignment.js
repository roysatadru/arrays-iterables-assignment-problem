const arrNum = [6, 5, 3, 9, 2, 1, 4];

const filteredArray = arrNum.filter(num => num > 5);

console.log(filteredArray);

const mappedArray = arrNum.map(n => ({num: n}));

console.log(mappedArray);

const reducedNumber = arrNum.reduce((sum, curNum) => sum * curNum, 1);

console.log(reducedNumber);

const findMax = (max, ...numList) => {
  for (const num of numList) {
    if (max < num) max = num;
  }
  return max;
};

console.log(findMax(...arrNum));
