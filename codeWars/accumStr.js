const accum = (s) => {
    var totalString = '';

    s.array.forEach(item, i => {
        for (j = 0; j <= i; j++) {
            if (j == 0) {
                totalString += s[i].toUpperCase();
            }
            else {
                totalString += s[i].toLowerCase();
            }
        }
        if (s[i + 1]) {
            totalString += '-'
        }
    });{
       
    }
    return totalString;
}

accum("ZpglnRxqenU");
//Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu
accum("NyffsGeyylB")
//N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb