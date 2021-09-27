/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const fieldsValues = Object.values(fields);
  const newObject = {};
  Object.entries(obj).forEach((field, index) => {
    if (field[0] === fieldsValues[index]) {
      newObject[field[0]] = field[1];
    }
  });
  return newObject;
};
