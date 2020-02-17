const duplicateEncode = (word) => {
    const wordSplitArr = word.toLowerCase().split("");
    var result = "";

    wordSplitArr.forEach(element => {
        var charCount = 0;
        wordSplitArr.map(item => {
            charCount += element == item ? 1 : 0;
        })
        result += charCount > 1 ? ')' : '(';
    });

    return result;
}