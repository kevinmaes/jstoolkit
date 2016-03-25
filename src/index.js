module.exports = () => {
  const sound = "grrrr";
  return {
    talk: () => console.log(sound),
    getSound: () => {return sound;},
    myBool: false
  };
};
