function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection_b = object_b.value;
  collection_a.forEach(function(num1){
    collection_b.forEach(function(num2){
      if(num1.key == num2){
        let k = parseInt(num1.count/3);
        num1.count -= k;
      }
    })
  })
  return collection_a;
}

module.exports = create_updated_collection;
