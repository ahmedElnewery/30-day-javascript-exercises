
//No.6 Write a JavaScript program to target a given value in a nested JSON object, based on the given key.

function findKey(obj, key) {
  let value;
  if (key in obj) {
    return obj[key];
  } else {
    Object.values(obj).forEach((digObj) => {
      typeof digObj === "object"
        ? (value = findKey(digObj, key))
        : (value = undefined);
    });
  }
  return value;
}
//testing
const data = {
  level1: {
    level2: {
      level3: "some data",
    },
  },
};
const dog = {
  "status": "success",
  "message": "https://images.dog.ceo/breeds/african/n02116738_1105.jpg"
}
console.log(findKey(data, "level3"));
console.log(findKey(dog, 'message'));
/***********************************************************************/
