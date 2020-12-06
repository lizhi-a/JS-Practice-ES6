'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
 var flag = true;
 collection_a.reduce(function(pre,cur,index){
   if(collection_a[index] != collection_b[index]) flag = false;
 })

 return flag;
}

module.exports = compare_collections;


