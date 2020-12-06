'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var array = [];

  if(number_a<number_b){
    for(let i = number_a;i<=number_b;i++){
      if(i<=26) array.push(String.fromCharCode(96+parseInt(i)));
      else if(i<=52){
        array.push('a' + String.fromCharCode(96+parseInt(i-26)));
      }
      else if(i>52){
        array.push('b' + String.fromCharCode(96+parseInt(i-52)));
      }
    }
  }
  else{
    for(let i = number_a;i>=number_b;i--){
      if(i<=26) array.push(String.fromCharCode(96+parseInt(i)));
      else if(i<=52){
        array.push('a' + String.fromCharCode(96+parseInt(i-26)));
      }
      else if(i>52){
        array.push('b' + String.fromCharCode(96+parseInt(i-52)));
      }
    }
  }
  return array;
}

module.exports = get_letter_interval;
