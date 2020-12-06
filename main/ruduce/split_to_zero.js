'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var array = [];
  array.push(number);
  while(number>0){
    number = Number( (number-interval).toFixed(1) );
    array.push(number);
  }
  return array;
}

module.exports = spilt_to_zero;
