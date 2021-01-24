const array = [1, 2, 3];

Array.prototype.customMap = function (f) {
  let arrWithMap = [];
  for (let i = 0; i < this.length; i++) {
    const value = this[i];
    const result = f(value, i, this);
    arrWithMap.push(result);
  }
  return arrWithMap;
};

Array.prototype.customFilter = function (f) {
  let arrayWithFilter = [];
  for (let i = 0; i < this.length; i++) {
    const value = this[i];
    if (f(value, i, this)) {
      arrayWithFilter.push(value);
    }
  }
  return arrayWithFilter;
};

Array.prototype.customReducer = function(f, initialValue = 0) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = f(accumulator, this[i], i, this);
    }
    return accumulator;
}

