const sqInRect = (lng, wdth) => {
    let s = lng * wdth;
    var count = 0;
    var result = [];
    var buff = [];

    for (var i = 0; i < s; i++) {
      if (i * i < s) {
        buff.unshift(i);
      }
    }

    for (var i = 0; buff.length > i; i++) {
      if (Math.pow(buff[i], 2) + count <= s) {
        count += Math.pow(buff[i], 2);
        result.push(buff[i]);
      }
      if (Math.pow(buff[i], 2) + count == s) {
        count += Math.pow(buff[i], 2);
        result.push(buff[i]);
      }
    }

    return result.length ? result : null;
  }


  sqInRect(5, 5); //null
  sqInRect(5, 3); // 3 2 1 1
  sqInRect(20, 14); //14 6 6 2 2 2