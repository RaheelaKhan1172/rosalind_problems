  
function wascallywabbit(n,k) {
  
  if(n === 1) {
    return 1;
  } else  if (n === 2) {
    return 1;
  } else {
                  //   alive prior          adults ready to mate
    return wascallywabbit((n-1),k) + k*(wascallywabbit((n-2),k));
  }
}
