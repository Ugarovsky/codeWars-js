
    function scramble(str1, str2) {
        var hashtab = [...new Array(256)].map(x => 0);
  
        str2.split('').forEach(ele => hashtab[ele.charCodeAt(0)]++);
        str1.split('').forEach(ele => hashtab[ele.charCodeAt(0)]--);
  
        hashtab = hashtab.filter(x => x > 0);
  
        return hashtab.length == 0;
      }
  
      console.log(scramble('rkqodlw', 'world'));
      console.log(scramble('katas', 'steak'));
      console.log(scramble('aabbcamaomsccdd', 'commas'));
      console.log(scramble('cedewaraaossoqqyt', 'codewars'));