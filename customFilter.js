Array.prototype.customFilter = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this.at(i), i)) {
      result.push(this.at(i));
    }
  }
  return result;
};
const items = [1, 2, 3, 4];

const evenItems = items.customFilter((value) => {
  return value % 2 === 0;
});
console.log(evenItems);
