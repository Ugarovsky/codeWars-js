const solution = (number) => {
    var result = 0;

    for (i = 0; number > i; i++) {
        result += (i % 3 == 0 || i % 5 == 0) ? i : 0;
    }

    return result
}

console.log(solution(10));