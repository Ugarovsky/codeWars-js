function isPrime(n) {
    if (n < 2) {
        return false;
    } else if (n === 2) {
        return true;
    }

    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
        if (n % i === 0) {
            return false;
        }
        i += 1;
    }

    return true;
}


isPrime(73);