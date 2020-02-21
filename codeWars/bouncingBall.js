function bouncingBall(h, bounce, window) {
    var resultCount = 0;

    const nextH = (nowH) => {
        return h * bounce;
    }

    if (h > 0 && bounce > 0 && bounce < 1 && h > window) {

        while (h > window) {
            h = nextH(h);
            resultCount += h > window ? 2 : 1;
        }


        return resultCount;
    }

    else {
        return -1;
    }
}