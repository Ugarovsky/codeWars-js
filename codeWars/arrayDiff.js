//t should remove all values from list a, which are present in list b.
const arrayDiff = (a, b) => {

    const resultArr = [];
    a.forEach(function (item2, i) {
        b.map(item => {
            if (item == item2) {
                delete a[i];
            }
        })
    });

    a.forEach(function (item) {
        if (item || item <= 0) {
            resultArr.push(item);
        }
    });

    return resultArr;
}


arrayDiff([3, 4, 5, 6, 7], [3, 4]);