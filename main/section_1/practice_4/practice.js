function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  collection_a = collection_a.map(function(num){
    return num.key;
  });
  collection_b = object_b.value;
  var collection_c = [];
  collection_a.forEach(function(num1){
    collection_b.forEach(function(num2){
      if(num1 == num2 && !collection_c.includes(num1)){
        collection_c.push(num1);
      }
    })
  })
  return collection_c;
}

module.exports = collect_same_elements;
