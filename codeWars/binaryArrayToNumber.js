const binaryArrayToNumber = arr => {
    var result = 0;
    
    arr.reverse().map((item, i) => {
     item == 1 ? result += Math.pow(item *2, i) : null;
    },)
    
    return result;
};

binaryArrayToNumber([0,0,0,1])
binaryArrayToNumber([0,0,1,0])
binaryArrayToNumber([0,1,1,0])