// The number u(0) = 1 is the first one in u.
//For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
//There are no other numbers in u.
//Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]


const dblLinear = (n) => {
    var arr = [1];

    const y = (x) => {
        return 2 * x + 1;
    }

    const z = (x) => {
        return 3 * x + 1;
    }

    for (i = 0; arr.length < n * 2; i++) {
        arr.push(y(arr[i]));
        arr.push(z(arr[i]));
    }

    return (arr.sort((a, b) => {
        return a - b;
    }));

}

dblLinear(20);