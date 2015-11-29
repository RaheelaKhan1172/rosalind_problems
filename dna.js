    function dna(str) {
  var counts = new Map();
  
  var prevVal;
  var returnstr="";
  var i = 0;
  while (i < str.length) {
    if (!counts.has(str[i])) {
      counts.set(str[i],1);
    } else {
      prevVal = counts.get(str[i]);
      counts.set(str[i], ++prevVal);
    }
    i++;
  }
  return counts.get("A") + " " + counts.get("C") + " " + counts.get("G") + " " + counts.get("T");
}

