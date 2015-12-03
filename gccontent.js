var fs = require('fs');

fs.readFile('rosalind_gc.txt', function(err,data) {
  if(err) throw err;
  var newData = data.toString().split('>');
  newData.shift(); 
  
  var newAgain = newData.map(function (elem,index) {
      // data is now split at new line = > ["rosalind_#443", 'SDFDSACCCDF' "SDDADDADADADASSDA']
    var temp = elem.split("\n")
    /// 'rosalind_454554'
    var name = temp.shift();
    /// 'dffsfdsfdsfsf' => 
    temp = temp.join('')
    temp  = gcContent(temp); 
    // [name, number]
    return [name, temp]; 
  });
  newAgain.sort(function(a,b) {
    return b[1] - a[1];
  });
  var value = newAgain.shift();
  console.log(value);
  return value;
});

function gcContent(str) {

  var count = 0, i = 0; 

  while (i < str.length) {
    if (str[i] === "G" || str[i] === "C") {
      count ++; 
    };
  i++;
  }
  return (count*100) / str.length; 
};
