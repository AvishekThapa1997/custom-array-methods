Array.prototype.customReduce = function (cb, initialValue) {
  let accumlator = initialValue ?? this.at(0);
  for (let i = 0; i < this.length; i++) {
    accumlator = cb(accumlator, this.at(i), i);
  }
  return accumlator;
};
const items = [1, 2, 3];
const res = items.customReduce((prev, curr) => {
  return prev + curr;
}, 0);
console.log(res);
