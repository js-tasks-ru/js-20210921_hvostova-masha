/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  if (!arr) {
    return [];
  }
  const set = new Set();
  arr.forEach((item) => {
    if (!set.has(item)) {
      set.add(item);
    }
  });
  return Array.from(set.keys());
}
