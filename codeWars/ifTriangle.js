function isTriangle(a, b, c) {

    return a >= b && a >= c && a < b + c ? true :
      b >= a && b >= c && b < a + c ? true :
        c >= b && c >= a && c < a + b ? true : false;
}

isTriangle(1,2,2)
isTriangle(7,2,2)