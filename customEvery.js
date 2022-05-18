Array.prototype.customEvery = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this.at(i), i)) {
      return false;
    }
  }
  return true;
};

const items = [0, 2, 4, 8, 10];
console.log(items.customEvery((value) => value % 2 === 0));
