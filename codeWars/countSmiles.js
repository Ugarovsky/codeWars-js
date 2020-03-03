function countSmileys(arr) {

    let faceRegex = /[;:][~-]?[)D]/
    let incr = 0;
    for (face of arr) {
        if (faceRegex.test(face)) {
            incr++;
        }
    }
    return incr;
}