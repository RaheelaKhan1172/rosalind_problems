  function haystack(str,key) {
  var pos = [];
  
  var j = key.length;
  var i = 0;
  
  while (i < str.length) {
    if (str.substr(i,j) === key) {
      pos.push(i+1);
    }
    i++;
  }
  return pos.join(' ');
} 
