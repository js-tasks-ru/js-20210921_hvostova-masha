/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const fieldsValues = Object.values(fields);
  const newObject = {};
  Object.entries(obj).forEach((field) => {
    if (!fieldsValues.includes(field[0])) {
      newObject[field[0]] = field[1];
    }
  });
  return newObject;
};
