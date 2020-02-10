
//Write a function that rearranges an integer into its largest possible value.
const superSize = (num) => {
    const numToString = num.toString();
    var numArr = [];

    numToString.forEach((item,i)=> {
        numArr.push(numToString[i]);
    }) 

    return +numArr.sort().reverse().join('');
}

superSize(250);