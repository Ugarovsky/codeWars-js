function sortArray(array) {
  result = [];
  buf = [];
  count = 0;

  array.forEach((element, i) => {
      if(element % 2 != 0) { 
        buf[i] = +element;
      }
  });

  result = array.map((item , i) => { 
      if(item % 2 == 0) { 
        return item;
      }
      else {
        count++;
        return buf.sort(function(a,b) { 
          return a - b;
        })[count - 1];
      }
  });


  return result;

}

sortArray([5, 3, 2, 8, 1, 4])