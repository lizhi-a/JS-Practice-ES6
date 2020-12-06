'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  collection = collection.reduce(function(pre,cur){
    return pre>cur?pre:cur;
  })
  return collection;
}

module.exports = collect_max_number;
