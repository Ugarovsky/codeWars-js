function findOdd(A) {
    var result = null;

    A.forEach(element => {
        var count = 0;

        A.map(item => {
            element == item ? ++count : count;
        })

        count % 2 != 0 ? result = element : result;
    });

    return result;
}

findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]); //-1