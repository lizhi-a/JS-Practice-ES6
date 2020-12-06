'use strict';

function grouping_count(collection) {
  //在这里写入代码
  var obj = {};

  for(let i=0;i<collection.length;i++){
    let v = collection[i];
    if(obj[v])
      obj[v]++;
    else obj[v] = 1;
  }
  return obj;

}

module.exports = grouping_count;
