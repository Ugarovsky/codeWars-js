const persistence = (num) => {
    var round = 0;

    function multiArr(num) {
        ++round

        var arr = String(num).split("");
        var multi = arr.reduce(function (multi, current) {
            return multi * current;
        }, 1);

        return multi >= 10 ? multiArr(multi) : round

    }
    return num >= 10 ? multiArr(num) : round;
}

persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
// and 4 has only one digit

persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
// 1*2*6 = 12, and finally 1*2 = 2

persistence(4) === 0 // because 4 is already a one-digit number