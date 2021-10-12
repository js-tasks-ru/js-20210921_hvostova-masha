/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * */

export function invertObj(obj) {
  if (!obj) {
    return obj;
  }
  const invertMap = new Map();
  new Map(Object.entries(obj)).forEach((value, key) => {
    invertMap.set(value, key);
  });
  return Object.fromEntries(invertMap);
}
