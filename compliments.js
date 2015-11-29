   function compliment(str) {
  
  var map = {"A":"T", "C":"G", "T":"A", "G":"C" } 
  
  return str.split('').reverse().map((d)=> map[d]).join('');
}

