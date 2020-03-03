const nbrOfLaps = (x, y) => {
    var smallerNum;
    x < y ? smallerNum = x : smallerNum = y;
    for (var i = smallerNum; i > 0; i--) {
        if (x % i === 0 && y % i === 0) {
            x = x / i;
            y = y / i;
        }
    }
    return [y, x];
}