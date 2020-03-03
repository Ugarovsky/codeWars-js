function spinWords(words) {
    let wordsToArray = words.split(' ');

    const resultArray = wordsToArray.map(item => {
        if (item.split('').length >= 5) {
            return item.split('').reverse().join('');
        }

        else
            return item
    })

    return resultArray.join(' ');
}