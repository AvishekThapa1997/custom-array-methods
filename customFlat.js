Array.prototype.customFlat = function (depth = NaN) {
  const flattenArray = function (array, depthValue) {
    const result = [];
    array.forEach((item) => {
      if (Array.isArray(item) && depthValue > 0) {
        result.push(...flattenArray(item, depthValue - 1));
      } else {
        result.push(item);
      }
    });
    return result;
    // return array.reduce((prev, currValue) => {
    //   if (Array.isArray(currValue)) {
    //     prev.push(...flattenArray(currValue));
    //   } else {
    //     prev.push(currValue);
    //   }
    //   return prev;
    // }, []);
  };
  return flattenArray(this, depth);
};

const deepArray = [1, [2], [[3, 4, [5, 6]]]];
// [1,2,[3,4,[5,6]]]
console.log(deepArray.customFlat(1));
