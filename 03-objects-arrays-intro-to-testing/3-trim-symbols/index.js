/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let previousChar = '';
  let similarCharCount = 0;
  return size === 0 ? '' : string.split('').filter(function (char) {
    if (char === previousChar) {
      similarCharCount++;
      if (similarCharCount > size) {
        similarCharCount--;
        return false;
      }
      return true;
    } else {
      previousChar = char;
      similarCharCount = 1;
      return true;
    }
  }).join('');
}
