const highAndLow = (numbers) => {
    var max = null;
    var min = null; 
  
    numbers.split(" ").forEach(element => {
        max = +element > max  || max == null ? element : max;
        min = +element < min  || min == null ? element : min;
    });
  
    return(`${max} ${min}`);
  }
  
  highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")