Array.prototype.customMap = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const value = cb(this.at(i), i);
    result.push(value);
  }
  return result;
};
const items = [1, 2, 3, 4];

const squareOfItems = items.customMap((value) => {
  return value * value;
});
console.log(squareOfItems);
