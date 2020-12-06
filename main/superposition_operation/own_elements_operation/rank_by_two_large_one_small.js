'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  var compare = function(a,b){
    if(a>b) return 1;
    else if(a == b) return 0;
    else return -1;
  }
  collection.sort(compare);
  
  collection.forEach((value,index) => {
    if((index+1)%3 == 0){
      let temp = collection[index-2];
      
      collection[index-2] = collection[index-1];
      collection[index-1] = value;
      collection[index] = temp;
    }
  })
  return collection;
}
module.exports = rank_by_two_large_one_small;
