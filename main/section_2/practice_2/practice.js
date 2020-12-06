function count_same_elements(collection) {
  //在这里写入代码
  var array = [];
  var k = 0;
  var count = 1;
  collection.forEach(function(value,index){
    if(value.length != 1){
      var m = value.split('-');
      array[k] = {
        key:m[0],
        count:Number(m[1])
      }
      k++;
    }
    else{
      if(value == collection[index+1])
        count++;
      else{
        array[k] = {
          key:value,
          count:count
        }
        count = 1;
        k++;
      }
    }
    
  })
  return array;
}

module.exports = count_same_elements;
