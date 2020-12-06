'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var compare = function(a,b){
    if(a>b) return 1;
    else if(a == b) return 0;
    else return -1;
  }
  collection.sort(compare);

  var media = 0;
  if(collection.length%2 == 0) media = (collection[collection.length/2]+collection[collection.length/2-1])/2;
  else media = collection[parseInt(collection.length/2)];

  if(media <= 26){
    return (String.fromCharCode(96 + parseInt(media))) ;
  }
  else{
    return (('a' + String.fromCharCode(96 + Math.round(media-26))));
  }

}

module.exports = median_to_letter;
