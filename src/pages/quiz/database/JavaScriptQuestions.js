export default [
    {
        id: 1,
        type: 'radio',
        category: 'javascript',
        subcategory: 'weird-js',
        title: 'typeof null',
        question: `What does this code output?
~~~javascript
console.log(typeof null)
~~~
`,
        options: [
            'null',
            'undefined',
            'object',
            '0'
        ],
        random: true,
        answer: 'object',
        description: 'This is a historical bug in JS that was never fixed because it would break too much existing code.'
    },
    {
        id: 2,
        type: 'radio',
        category: 'javascript',
        subcategory: 'weird-js',
        title: '[] == false',
        question: `What is the output of this code: 
~~~javascript
console.log([] == false)
~~~`,
        options: [
            'true',
            'false',
            '1',
            '0',
            '[ ]',
        ],
        random: true,
        answer: 'true',
        description: `\`==\` performs *type coercion* before comparing values. \`false\` becomes the number \`0\`. JS tries to convert the array to an empty string, which also becomes the number \`0\`. 
        
So essentially the statement becomes \`console.log(0 == 0)\`.`
    },
    {
        id: 3,
        type: 'radio',
        category: 'javascript',
        subcategory: 'weird-js',
        title: '[] === false',
        question: `What is the output of this code: 
~~~javascript
console.log([] === false)
~~~`,
        options: [
            'true',
            'false',
            '1',
            '0',
            '[ ]',
        ],
        random: true,
        answer: 'false',
        description: `The strict equality operator (\`===\`) does not perform type coercion. 

- \`[]\`    → object
- \`false\` → boolean

The different types are not strictly equal, so this bad boy results as \`false\`.`
    },
    {
        id: 4,
        type: 'radio',
        category: 'javascript',
        subcategory: 'weird-js',
        title: 'Call before defined',
        question: `What will this code output:
~~~javascript
function test() {
    console.log(a);
    var a = 5;
}

test();
~~~
`,
        options: [
            'undefined',
            '5',
            'ReferenceError',
            'NaN',
            '\"\"'
        ],
        random: true,
        answer: 'undefined',
        description: `Variable declarations in JS are *hoisted* to the top of their function scope but there assignments are not. Our example with \`var\` is interpreted like this:

~~~js
function text() {
    var a;          // hoisted declaration
    console.log(a); // a exists, but has no value yet
    a = 5;          // assignment happens here
}
~~~

*Side note*, \`let\` and \`const\` would throw a \`ReferenceError\` because when they are hoisted they exist in the *Temporal Dead Zone*. Oh JavaScript...`
    },
    {
        id: 5,
        type: 'radio',
        category: 'javascript',
        subcategory: '',
        title: '',
        question: "Which function is used to serialize an object into a JSON string?",
        options: [
            'stringify()',
            'parse()',
            'convert()',
        ],
        random: true,
        answer: 'stringify()'
    },
    {
        id: 6,
        type: 'radio',
        category: 'javascript',
        subcategory: 'weird-js',
        title: 'Undefined is...',
        question: `What will this code output:
~~~javascript
console.log(typeof undefined);
~~~
`,
        options: [
            'undefined',
            'ReferenceError',
            'NaN',
            '\"\"',
            '0'
        ],
        random: true,
        answer: 'undefined',
        description: `\`undefined\` is its own primitive value in JS.`
    },
    {
        id: 7,
        type: 'radio',
        category: 'javascript',
        subcategory: 'weird-js',
        title: '',
        question: `What will this code output:
~~~javascript
const obj = { a: 1};
const copy = obj;

copy.a = 5;
console.log(obj.a);
~~~
`,
        options: [
            'undefined',
            'ReferenceError',
            'NaN',
            '1',
            '5'
        ],
        random: true,
        answer: '5',
        description: `- \`const obj = {a:1}\` means that \`obj\` will hold a reference to this object in memory. 
- \`const copy = obj;\` does not create a new object. It creates a second variable that is still pointing to the same object. 
- the result is that modifying \`copy\` changes \`obj\` and vice versa.

*Remember*, objects and arrays are assigned by reference, while primitives are assigned by value.`
    },
    {
        id: 8,
        type: 'input',
        category: 'javascript',
        subcategory: 'weird-js',
        title: '',
        question: `What will this code output:
~~~javascript
const nums = [1, 2, 3];

const result = nums.map(n => {
    if (n > 1) {
        return n * 2;
    }
});

console.log(result);
~~~
`,
        options: [""],
        random: false,
        answer: '\[\s*undefined\s*,\s*\d+\s*,\s*\d+\s*\]',
        description: `Answer: \`[undefined, 4, 6]\`

\`Array.map()\` always returns an array with the same length as the original array. Each element in the new array is the return value of the callback.
        
No \`return\` statement runs for the first iteration, so JS returns \`undefined\`.The next two iterations work as expected.`
    },
]