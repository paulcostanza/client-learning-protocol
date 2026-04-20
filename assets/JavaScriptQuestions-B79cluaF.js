const e=[{id:1,type:"radio",category:"javascript",subcategory:"weird-js",title:"typeof null",question:`What does this code output?
~~~javascript
console.log(typeof null)
~~~
`,options:["null","undefined","object","0"],random:!0,answer:"object",description:"This is a historical bug in JS that was never fixed because it would break too much existing code."},{id:2,type:"radio",category:"javascript",subcategory:"weird-js",title:"[] == false",question:`What is the output of this code: 
~~~javascript
console.log([] == false)
~~~`,options:["true","false","1","0","[ ]"],random:!0,answer:"true",description:"`==` performs *type coercion* before comparing values. `false` becomes the number `0`. JS tries to convert the array to an empty string, which also becomes the number `0`. \n        \nSo essentially the statement becomes `console.log(0 == 0)`."},{id:3,type:"radio",category:"javascript",subcategory:"weird-js",title:"[] === false",question:`What is the output of this code: 
~~~javascript
console.log([] === false)
~~~`,options:["true","false","1","0","[ ]"],random:!0,answer:"false",description:"The strict equality operator (`===`) does not perform type coercion. \n\n- `[]`    → object\n- `false` → boolean\n\nThe different types are not strictly equal, so this bad boy results as `false`."},{id:4,type:"radio",category:"javascript",subcategory:"weird-js",title:"Call before defined",question:`What will this code output:
~~~javascript
function test() {
    console.log(a);
    var a = 5;
}

test();
~~~
`,options:["undefined","5","ReferenceError","NaN",'""'],random:!0,answer:"undefined",description:`Variable declarations in JS are *hoisted* to the top of their function scope but the assignment is not. Our example with \`var\` is interpreted like this:

~~~js
function text() {
    var a;          // hoisted declaration
    console.log(a); // a exists, but has no value yet
    a = 5;          // assignment happens here
}
~~~

*Side note*, \`let\` and \`const\` would throw a \`ReferenceError\` because when they are hoisted they exist in the *Temporal Dead Zone*. Oh JavaScript...`},{id:5,type:"radio",category:"javascript",subcategory:"strings",title:"",question:"Which function is used to serialize an object into a JSON string?",options:["stringify()","parse()","convert()"],random:!0,answer:"stringify()"},{id:6,type:"radio",category:"javascript",subcategory:"intro",title:"Undefined is...",question:`What will this code output:
~~~javascript
console.log(typeof undefined);
~~~
`,options:["undefined","ReferenceError","NaN",'""',"0"],random:!0,answer:"undefined",description:"`undefined` is its own primitive value in JS."},{id:7,type:"radio",category:"javascript",subcategory:"weird-js",title:"",question:`What will this code output:
~~~javascript
const obj = { a: 1};
const copy = obj;

copy.a = 5;
console.log(obj.a);
~~~
`,options:["undefined","ReferenceError","NaN","1","5"],random:!0,answer:"5",description:"- `const obj = {a:1}` means that `obj` will hold a reference to this object in memory. \n- `const copy = obj;` does not create a new object. It creates a second variable that is still pointing to the same object. \n- the result is that modifying `copy` changes `obj` and vice versa.\n\n*Remember*, objects and arrays are assigned by reference, while primitives are assigned by value."},{id:8,type:"input",category:"javascript",subcategory:"weird-js",title:"",question:`What will this code output:
~~~javascript
const nums = [1, 2, 3];

const result = nums.map(n => {
    if (n > 1) {
        return n * 2;
    }
});

console.log(result);
~~~
`,options:[""],random:!1,answer:"^\\[\\s*undefined\\s*,\\s*\\d+\\s*,\\s*\\d+\\s*\\]$",description:"Answer: `[undefined, 4, 6]`\n\n`Array.map()` always returns an array with the same length as the original array. Each element in the new array is the return value of the callback.\n        \nNo `return` statement runs for the first iteration, so JS returns `undefined`.The next two iterations work as expected."},{id:9,type:"radio",category:"javascript",subcategory:"intro",title:"Which role",question:"What role does JavaScript play in web development compared to HTML and CSS? It provides...",options:["structure to the webpage and ensures that your code is free of errors","the styles for the web page and automatically formats your code","interactive functionality and dynamnic behavior for the web page","only used to create advanced animations for web applications"],random:!0,answer:"interactive functionality and dynamnic behavior for the web page"},{id:10,type:"radio",category:"javascript",subcategory:"intro",title:"Unde-null?",question:"If a variable has been declared but not assigned a value, what is its data type?",options:["`undefined`","`null`"],random:!0,answer:"`undefined`"},{id:11,type:"checkbox",category:"javascript",subcategory:"intro",title:"Valid data types",question:"Which of the following are data types in JS?",options:["integer","double","float","number","string","symbol","object","boolean","undefined","null","struct","bigint","char","pointer","enum","tuple"],random:!0,answer:["number","string","symbol","object","boolean","null","undefined","bigint"]},{id:12,type:"radio",category:"javascript",subcategory:"basics",title:"That's fine, I think",question:"Can you declare a `const` variable without assigning it a value?",options:["yes","no"],random:!1,answer:"no",description:"`const` variables *must* be initialized at the time of declaration, else an error will be thrown."},{id:13,type:"radio",category:"javascript",subcategory:"basics",title:"",question:"In JS, which of the following statements is correct about strings? They...",options:["are non primitive data types","are mutable and can be changed after they are created","are immutable","can only be created using single quotes"],random:!0,answer:"are immutable"},{id:14,type:"input",category:"javascript",subcategory:"string-methods",title:"",question:'How would you obtain the ASCII value of the first character in the string `"Hello"` and assign it to the constant varible `firstCharacter`?',options:[""],random:!1,answer:'^\\s*(const|let)\\s+firstCharacter\\s*=\\s*"Hello"\\.charCodeAt\\(0\\)\\s*;?\\s*$',description:'Answer: `const firstCharacter = "Hello".charCodeAt(0)`'},{id:15,type:"input",category:"javascript",subcategory:"string-methods",title:"",question:'How can you check if the string `"JavaScript"` contains `"Script"`?',options:[""],random:!1,answer:`^\\s*(?:"JavaScript"|'JavaScript')\\.includes\\((?:"Script"|'Script')\\)\\s*;?\\s*$`,description:'Answer: `"JavaScript".includes("Script")'},{id:16,type:"input",category:"javascript",subcategory:"string-methods",title:"Extraction Team Go",question:'How would you extract the substring `"Script"` from the string `"JavaScript"`',options:[""],random:!1,answer:`^\\s*(?:"JavaScript"|'JavaScript')\\.(slice|substring)\\(\\s*4\\s*(,\\s*10\\s*)?\\)\\s*;?\\s*$`,description:'We have 4 possible answers: \n        \n- `"JavaScript".slice(4)`\n- `"JavaScript".slice(4, 10)`\n- `"JavaScript".substring(4)`\n- `"JavaScript".substring(4, 10)`'},{id:17,type:"input",category:"javascript",subcategory:"string-methods",title:"",question:'How would you convert the string `"hello"` to all uppercase letters?',options:[""],random:!1,answer:`^\\s*(?:"hello"|'hello')\\.toUpperCase\\(\\)\\s*;?\\s*$`,description:'Answer: `"hello".toUpperCase()`'},{id:18,type:"input",category:"javascript",subcategory:"string-methods",title:"",question:"Given a variable `str`, how would you convert it to all lowercase letters and assign it to a new variable named `strLower`?",options:[""],random:!1,answer:"^\\s*(?:const|let|var)\\s+strLower\\s*=\\s*str\\.toLowerCase\\(\\)\\s*;?\\s*$",description:"Answer: `const strLower = str.toLowerCase()`"},{id:19,type:"input",category:"javascript",subcategory:"string-methods",title:"Switcheroo",question:'How would you replace `"dogs"` with `"cats"` in the string `"I love dogs"` in one statement?',options:[""],random:!1,answer:`^\\s*(?:"I love dogs"|'I love dogs')\\.replace\\((?:"dogs"|'dogs')\\s*,\\s*(?:"cats"|'cats')\\)\\s*;?\\s*$`,description:'Answer: `"I love dogs".replace("dogs", "cats")`'},{id:20,type:"input",category:"javascript",subcategory:"string-methods",title:"",question:`What is printed to the console?
~~~js
let str1 = "Hello"
const str2 = "world"
let str3 = "!"
let str4 = "How"
let str5 = "are"
let str6 = "you"
let str7 = "today"
let str8 = "?"
let space = " "

str1 += str4
space += str1
str8.concat(str1, space, str3)

console.log(str8)
~~~
        `,options:[""],random:!1,answer:"^\\s*\\?\\s*$",description:"Answer: `?`\n        \n*Remember* that `concat()` **does not** change the original string, it returns a new string. In this case, we do not assign it to anything."},{id:21,type:"input",category:"javascript",subcategory:"string-methods",title:"",question:`What is printed to the console?
~~~js
let str1 = "Hello"
const str2 = "world"
let str3 = "!"
let str4 = "How"
let str5 = "are"
let str6 = "you"
let str7 = "today"
let str8 = "?"
let space = " "
let result = ""

str1 += str4
space += str1
result += str8.concat(str1, space, str3)

console.log(result)
~~~
        `,options:[""],random:!1,answer:"^\\s*\\?HelloHow\\s+HelloHow!\\s*$",description:`Answer: \`?HelloHow HelloHow!\`
        
~~~js
str1 += str4        
// "Hello" + "How"

space += str1
// " " + "HelloHow"

result += str8.concat(str1, space, str3)
// "?" + "HelloHow" + " HelloHow" + "!"
~~~`}];export{e as default};
