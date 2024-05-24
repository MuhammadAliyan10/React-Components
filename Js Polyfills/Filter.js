Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};
let arr = [1, 2, 3, 4, 5, 6];
let result = arr.myFilter((num) => {
  return num % 2 == 0;
});

console.log(result);
