/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {

  let strShort = str.split(' ').join();
  let arrWordsAndNum = strShort.split(',');

  let num = arrWordsAndNum.filter(i => i !== '' && isFinite(i))

  return { max: Math.max(...num), min: Math.min(...num)}
}