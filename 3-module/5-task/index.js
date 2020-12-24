/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
<<<<<<< HEAD


  let stringWithoutSpaces = str.split(' ').join();
  let itemsDividedByComma = stringWithoutSpaces.split(',');
  let numbersOnly = itemsDividedByComma
    .filter((item) => item !== '' && isFinite(item));

  let max = Math.max(...numbersOnly);
  let min = Math.min(...numbersOnly);

  return {min, max};
}
=======
  
  let strShort = str.split(' ').join();
  let arrWordsAndNum = strShort.split(',');

  let num = arrWordsAndNum.filter(i => i !== '' && isFinite(i))

  return { max: Math.max(...num), min: Math.min(...num)}
}
>>>>>>> 5292260a9c3ecfa392534123fb13a4b90bb490ff
