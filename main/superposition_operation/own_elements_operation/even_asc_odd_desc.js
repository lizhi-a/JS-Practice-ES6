'use strict';
var even_asc_odd_desc = function(collection){
  var arr1 = [];
  var arr2 = [];
  arr1 = collection.filter((value) => {
      return value%2 == 0;
  })
  arr2 = collection.filter((value) => {
      return value%2 == 1;
  })
  var compare = function(a,b){
      if(a>b) return 1;
      else if (a == b) return 0;
      else return -1;
  }
  arr1.sort(compare);
  arr2.sort(compare);
  arr2 = arr2.reverse();
  var array = [];
  array = [...arr1,...arr2];
  return array;
};
module.exports = even_asc_odd_desc;
