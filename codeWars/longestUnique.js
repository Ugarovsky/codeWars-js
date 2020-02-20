function longest(s1, s2) {
    var string = s1 + s2;
    
    function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
   var result = unique(string.split('').sort()).join("");
   return result;
  }
  
  
  longest("aretheyhere", "yestheyarehere")