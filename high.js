//Given a string of words, you need to find the highest scoring word.
// /Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

function high(x) {
    const alpfa = 'abcdefghijklmnopqrstuvwxyz';

    var maxValue = 0;
    var result = '';

    x.split(' ').forEach(element => {
        var value = 0;

        for (var i = 0; element[i]; i++) {
            value += alpfa.indexOf(element[i]) + 1;
        }

        if (maxValue < value) {
            maxValue = value;
            result = element;
        }

    });

    return result;
}
