function createPhoneNumber(numbers){
    return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
 }
  
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])