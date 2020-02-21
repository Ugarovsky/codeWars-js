const pigIt = (str) => {
    const exSymbols = ',:...!?'

    const resultArr = str.split(' ').map(item => {
        return exSymbols.indexOf(item) == -1 ? `${item.slice(1)}${item[0]}ay` : item;
    })

    return resultArr.join(' ');
}



pigIt('Pig latin is cool !')