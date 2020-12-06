'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var array = collection.split('->');
  array = array.map(function(num){
    return parseInt(num);
  })
  var compare = function(a,b){
    if(a>b) return 1;
    else if(a == b) return 0;
    else return -1;
  }
  array.sort(compare);

  if(array.length%2 == 0) return (array[array.length/2]+array[array.length/2-1])/2;
  else return array[array.length/2];
}

module.exports = compute_chain_median;
