function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var array = [];
  var k = 0;
  var count = 1;
  collection_a.forEach(function(value,index){
    if(value == collection_a[index+1])
      count++;
    else{
      array[k] = {
        key: value ,
        count:count
      }
      count = 1;
      k++;
    }
  })

  var collection_b = object_b.value;
  array.forEach( (n) => {
    collection_b.forEach( (m) => {
      if(n.key == m){
        var t = parseInt(n.count/3);
        n.count -= t;
      }
    })
  })

  return array;
}

module.exports = create_updated_collection;
