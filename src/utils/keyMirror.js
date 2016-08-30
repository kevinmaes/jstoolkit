export const getKeys = keys =>
  Array.isArray(keys) ? keys : Object.keys(keys);

export default keys =>
  getKeys(keys).reduce((obj, key) => {
    obj[key] = key;
    return obj;
  }, {});
