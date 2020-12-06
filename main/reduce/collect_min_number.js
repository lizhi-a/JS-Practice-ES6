'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  collection = collection.reduce(function(pre,cur){
    return pre<cur?pre:cur;
  })
  return collection;
}

module.exports = collect_min_number;

