//Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. 
//The function should return true if the string is valid, and false if it's invalid.


const validParentheses = (parens) => {
    parensToArray = parens.split('');
    result = true;
    counter = 0;

    parensToArray.forEach(element => {
      counter += element == '(' ? 1 : -1;
      result = counter < 0 ? false : result;
      }
    )
    
    return  counter == 0 && result
  }

  validParentheses("()")
  validParentheses("())")