export default keys => {
  const keysArr = Array.isArray(keys) ? keys : Object.keys(keys);
  const mirror = {};
  keysArr.forEach(key => mirror[key] = key);
  return mirror;

  // return keysArr.reduce((obj, key) =>
  //   obj[key] = key, obj
  // , {}

};
