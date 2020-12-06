'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  collection = collection.map( (num) => {
    return num*3+2;
  })
  collection = collection.reduce((prev,cur)=>{
    return prev+cur;
  })
  return collection
}

module.exports = hybrid_operation;

