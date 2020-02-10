const sumTwoSmallestNumbers = (numbers) => {

    const positiveNumbers = [];

    numbers.map(item => {
        if (item > 0) {
            positiveNumbers.push(item);
        }
    });

    const sortPositiveNumbers = positiveNumbers.sort(function (a, b) { return b - a }).reverse();

    return sortPositiveNumbers[0] + sortPositiveNumbers[1];
}

sumTwoSmallestNumbers([12, 19, 22, 5, 8]);