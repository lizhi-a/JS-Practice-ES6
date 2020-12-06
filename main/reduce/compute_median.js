'use strict';

function compute_median(collection) {
  //在这里写入代码

  var compare = function(a,b){
    if(a>b) return 1;
    else if(a == b) return 0;
    else return -1;
  }
  collection.sort(compare);
  var length = collection.length;
  if(length%2 == 0) return( (collection[length/2]+collection[length/2-1])/2);
  else return( collection[parseInt(length/2)]);

}

module.exports = compute_median;


