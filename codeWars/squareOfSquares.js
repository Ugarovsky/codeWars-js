 // Given an integral number, determine if it's a square number
const isSquare = (n) => {
    var isSquare = false;

    if (n < 0) {
        return isSquare
    }

    if (n == 0) {
        return !isSquare;
    }

    for (i = 0; i <= n; i++) {

        if ((i * i).toFixed(0) > n) {
            break;
        }

        if ((i * i).toFixed(0) == n) {
            isSquare = true;
        }
    }

    return isSquare
}

isSquare(25);