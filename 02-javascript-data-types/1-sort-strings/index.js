/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const sortedArray = [...arr];
  if (param === 'asc') {
    return sortedArray.sort((a, b) => {
      return a.localeCompare(b, ['ru', 'en'], {sensitivity: "variant", caseFirst: "upper"});
    });
  } else {
    return sortedArray.sort((a, b) => {
      return b.localeCompare(a, ['ru', 'en'], {sensitivity: "variant", caseFirst: "upper"});
    });
  }
}
