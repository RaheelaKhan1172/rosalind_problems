    function hamming(str1,str2) {
  var count = 0;
  
  var i = 0;
  while (i < str1.length) {
    if (str1[i] !== str2[i]) {
      count++;
    }
    i++;
  };
    return count;
  };
