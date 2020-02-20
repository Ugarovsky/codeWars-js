const toCamelCase = (str) => {
    result = '';
    strToArr = str.indexOf('_') >= 0 ? str.split('_') : str.split('-');
    
    strToArr.forEach((element,i) => {
      result += i == 0 ? element : element.charAt(0).toUpperCase() + element.slice(1)
    });

    return result;
}

toCamelCase("the_stealth_warrior")
toCamelCase('the-Stealth-Warrior')