function isPangram(string) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = [];
    string.toLowerCase().replace(/\w/g, (str) => {
        str.split('').reduce((acc, cur) => {
            return !result.includes(cur)
                && alphabet.includes(cur)
                && result.push(cur);
        }, '');
    });
    return alphabet.join('') === result.sort().join('');
}