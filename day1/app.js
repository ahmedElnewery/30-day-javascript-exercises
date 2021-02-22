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
console.log(
  compare2Objs(
    { age: 25, hair: "long", beard: true },
    { hair: "long", beard: true }
  )
); // true
console.log(
  compare2Objs(
    { hair: "long", beard: true },
    { age: 25, hair: "long", beard: true }
  )
); // false
console.log(
  compare2Objs(
    { hair: "long", beard: true },
    { age: 26, hair: "long", beard: true }
  )
); // false
/******************************************************************************************/
// No2
// Write a JavaScript program to copy a string to the clipboard.

var copyTextareaBtn = document.querySelector("#copyBtn");

copyTextareaBtn.addEventListener("click", function (event) {
  const virtualTextArea = document.createElement("textarea");
  const text = document.getElementById("textCodied").textContent;
  virtualTextArea.textContent = text;
  document.body.append(virtualTextArea);
  virtualTextArea.style.position = "fixed";
  virtualTextArea.style.left = "-10000000px";
  virtualTextArea.select();
  virtualTextArea.focus();
  const successful = document.execCommand("copy");
  if (successful) {
    console.log("get copied");
    document.body.removeChild(virtualTextArea);
  }
});
/******************************************************************************************/
// No3
// Write a JavaScript program to converts a comma-separated values (CSV) string to a 2D array.
function csv_to_array(data, separator = ",", withHeading = false) {
  return data
    .slice(withHeading ? data.indexOf("\n") + 1 : 0)
    .split("\n")
    .map((row) => {
      return row.split(separator);
    });
}

// console.log(csv_to_array("a,b\nc,d"));
// console.log(csv_to_array("a;b\nc;d", ";"));
// console.log(csv_to_array("head1,head2\na,b\nc,d", ",", true));
/******************************************************************************************/
// No4
// Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array of objects. The first row of the string is used as the title row.

function csv_to_json(data, separator = ",") {
  
  const titles = data.slice(0, data.indexOf("\n")).split(separator);
  return data
    .slice(data.indexOf("\n") + 1)
    .split("\n")
    .map((v) => {
      const values = v.split(separator);
      return titles.reduce((obj,title,index)=>{
         obj[title]= values[index]
         return obj 
      },{})
    });
}

console.log(csv_to_json("col1,col2\na,b\nc,d")); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
console.log(csv_to_json("col1;col2\na;b\nc;d\ne;f", ";")); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];

