Array.prototype.myReduce = function (cb, initialValue) {
  let i = 0;
  let temp;

  if (arguments.length > 1) {
    temp = initialValue;
  } else {
    temp = this[0];
    i = 1;
  }

  for (; i < this.length; i++) {
    temp = cb(temp, this[i], i, this);
  }

  return temp;
};

let arr = [1, 2, 3, 4, 5, 6];
let result = arr.myReduce((acc, next) => {
  return acc + next;
});

console.log(result);
