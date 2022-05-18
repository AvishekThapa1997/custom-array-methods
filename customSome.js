Array.prototype.customSome = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this.at(i), i)) {
      return true;
    }
  }
  return false;
};
