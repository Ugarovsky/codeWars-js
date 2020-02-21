const findMissingLetter = (array) => {
    const alpf = 'abcdefghijklmnopqrstuvwxyz';

    var symbolCount = -1;
    var result;

    array.forEach((element, i) => {
      if (symbolCount < 0) {
        symbolCount = alpf.indexOf(element) > -1 ? alpf.indexOf(element) : alpf.toLocaleUpperCase().indexOf(element);
      }

      if (!result) {
        if (array[i + 1] != alpf[symbolCount + i + 1] && array[i + 1] != alpf[symbolCount + i + 1].toLocaleUpperCase()) {
          result = array[i] == alpf[symbolCount + i].toLocaleUpperCase() ? alpf[symbolCount + i +1].toLocaleUpperCase() : alpf[symbolCount + i + 1];
        }
      }
    });
    return result;
  }

  findMissingLetter(['P', 'Q', 'S', 'T', 'U', 'V', 'W'])