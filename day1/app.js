//No.1 Write a JavaScript program to compare two objects
//to determine if the first one contains equivalent property values to the second one.
function compare2Objs(obj1, obj2) {
  const obj2Keys = Object.keys(obj2);
  const isMatched = obj2Keys
    .map((key) => {
      return obj2[key] === obj1[key];
    })
    .every((bool) => {
      return bool;
    });
  return isMatched;
}

//testing
console.log(
  compare2Objs(
    { name: "ahmed", age: "26", adress: "beni suef" },
    { name: "alaa", age: "26", adress: "beni suef" }
  )
); //false

console.log(
  compare2Objs(
    { name: "ahmed", age: "26", adress: "beni suef" },
    { name: "ahmed", age: "26" }
  )
); //true
console.log(compare2Objs({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(compare2Objs({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(compare2Objs({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false
/******************************************************************************************/
