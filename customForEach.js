Array.prototype.customForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this.at(i), i);
  }
};

const items = [1, 2, 3];
items.customForEach((value, index) => {
  console.log(value, index);
});
