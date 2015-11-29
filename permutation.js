 function permutation(input) {
  var permArr = [],
    usedNums = [],
    numsArray = [];
  
  for(var i = 1; i <= input; i++) {
    numsArray.push(i);
  }
  
  function recurs() {    //inner function has access to outer functions variable
    var i, currentNum; 
    for(i = 0; i < numsArray.length; i++) {
      currentNum = numsArray.splice(i,1)[0]; //take out each element in turn
      usedNums.push(currentNum); //push curren num into array
      
      if(numsArray.length === 0) {
        permArr.push(usedNums.slice());
      }
      recurs(numsArray);
      numsArray.splice(i,0,currentNum);
      
      usedNums.pop();
    }
    return permArr;
  }
  return recurs();
};

// to print without array format :
  permutation(5).forEach(function (d) {
    console.log(d.join(" "));
});
