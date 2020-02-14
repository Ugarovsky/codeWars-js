var moveZeros = function (arr) {
    
    var zeroCounts = 0;
    var resultArr = [];

    arr.forEach(element => {
    element === 0 ? ++zeroCounts : resultArr.push(element);   
    });

    for(i=0; zeroCounts > i; i++) { 
      resultArr.push(0);
    }

    return resultArr;
  }