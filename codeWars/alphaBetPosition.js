const alphabetPosition = (text) => {

    const alpfa = 'abcdefghijklmnopqrstuvwxyz';
    var varTextToLower = text.toLowerCase();
    var result = '';

    for (i = 0; varTextToLower[i]; i++) {
        if (alpfa.indexOf(varTextToLower[i]) >= 0) {
            result += `${alpfa.indexOf(varTextToLower[i]) + 1} `;
        }
    }

    return result.substring(0, result.length - 1);
}

alphabetPosition("The sunset sets at twelve o' clock.");