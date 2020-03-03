function firstNonRepeatingLetter(s) {
    let result = [];

    s.split('').forEach(item => {
        let count = 0;
        s.split('').forEach(element => {
            count += item.toLowerCase() == element.toLowerCase() ? 1 : 0;
        });
        if (count == 1) {
            result.push(item)
        }
    });

    return result[0] ? result[0] : '';
}