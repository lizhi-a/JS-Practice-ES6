function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
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
