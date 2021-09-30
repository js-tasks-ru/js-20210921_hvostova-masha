/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const fieldsPath = path.split(".");
  const targetField = fieldsPath[fieldsPath.length - 1];
  let currentFieldIndex = 0;
  return function getter(obj) {
    if (!obj) {
      return obj;
    }
    const map = new Map(Object.entries(obj));
    return map.has(targetField) ? map.get(targetField) : getter(map.get(fieldsPath[currentFieldIndex++]));
  };
}
