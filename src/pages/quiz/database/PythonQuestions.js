export default [
    {
        id: 1,
        type: 'radio',
        category: 'python',
        subcategory: 'basics',
        title: 'Dynamic types',
        question: "When a program is dynamically typed it means that once a variable is assigned a type, it cannot change",
        options: [
            'true',
            'false',
        ],
        random: false,
        answer: 'false'
    },
    {
        id: 2,
        type: 'radio',
        category: 'python',
        subcategory: 'basics',
        title: 'Statically typed',
        question: "In a statically typed language, assigning a value of the wrong type to a variable would cause (a(n)) _____.",
        options: [
            'type error',
            'syntax error',
            'logic error',
            'overflow error',
            'no error',
        ],
        random: true,
        answer: 'type error'
    },
    {
        id: 3,
        type: 'radio',
        category: 'python',
        subcategory: 'functions',
        title: 'Where do I start?',
        question: "What is the conventional name for the entry point function",
        options: [
            '\`main()\`',
            '\`start()\`',
            '\`play()\`',
            '\`init()\`'
        ],
        random: true,
        answer: '\`main()\`',
        optionsAreCode: 'python'
    },
    {
        id: 4,
        type: 'radio',
        category: 'python',
        subcategory: 'functions',
        title: 'What gets returned',
        question: "If a function does not explicitly return a value, it returns \`None\` by default",
        options: [
            'true',
            'false'
        ],
        random: false,
        answer: 'true'
    },
    {
        id: 5,
        type: 'radio',
        category: 'python',
        subcategory: 'lists',
        title: 'Last in line',
        question: "The _____ method is used to remove the last item from a list and can return it to a variable if assigned",
        options: [
            '\`pop()\`',
            '\`push()\`',
            '\`remove()\`',
            '\`delete()\`'
        ],
        random: true,
        answer: '\`pop()\`'
    },
    {
        id: 6,
        type: 'radio',
        category: 'python',
        subcategory: 'functions',
        title: 'Assume nothing',
        question: `Assume the function \`func_that_doesnt_exist\` is a function that does not exist:

~~~python
print("starting")
func_that_doesnt_exist("uh oh")
print("finished")
~~~

What will happen when the code runs?`,
        options: [
            'A stack trace due to an undefined function prints',
            '\`starting\` prints, then a stack trace due to an undefined function prints',
            '\`starting\` prints, then a stack trace due to an undefined function prints, then \`finished\` prints',
        ],
        random: false,
        answer: '\`starting\` prints, then a stack trace due to an undefined function prints'
    },
    {
        id: 7,
        type: 'radio',
        category: 'python',
        subcategory: 'functions',
        title: 'Why return?',
        question: 'What is the purpose of the `return` statement in a function?',
        options: [
            'to display a message to the user',
            'to exit the program',
            'to return a value or result',
            'to comment out code'
        ],
        random: true,
        answer: 'to return a value or result',
        description: 'The `return` statement is used to send a value or result back to the caller of the function, which allows the function to produce an output that can be used elsewhere in the program.'
    },
    {
        id: 8,
        type: 'radio',
        category: 'python',
        subcategory: 'math-101',
        title: 'Let the bodies hit...',
        question: 'What is the purpose of using floor division over regular division?',
        options: [
            'to get a more precise result',
            'to always round down to the nearest integer',
            'to handle decimal values more accurately',
            'to speed up computational performance'
        ],
        random: true,
        answer: 'to always round down to the nearest integer',
        description: `The purpose of using floor division \`//\` over regular division \`/\` is to snag the quotient without any fractional part. It gets *truncated* (rounded down) to the nearest whole number. 

This is useful in situations where you specifically want to discard the fractional part and just need to get the integer result.`
    },
    {
        id: 9,
        type: 'checkbox',
        category: 'python',
        subcategory: 'basics',
        title: 'Valid variable names',
        question: 'Which of the following is/are (a) valid variable name(s)?',
        options: [
            '123variable',
            'my-variable',
            '_variable_name',
            'variable123',
            'variable name'
        ],
        random: true,
        answer: ['_variable_name', 'variable123'],
        description: 'Variable names in programming typically consist of letters, numbers, and underscores. They must start with a letter or underscore and should not contain spaces or special characters (such as a hyphen).'
    },
    {
        id: 10,
        type: 'radio',
        category: 'python',
        subcategory: 'control-flow',
        title: 'And',
        question: 'In a logical \`and\` operation, if the first condition is \`False\`, is the second condition checked?',
        options: [
            'yes, the second condition is always checked',
            'no, the second condition is never checked',
            'it depends on the programming language'
        ],
        random: false,
        answer: 'no, the second condition is never checked',
        description: `If the first condition is \`False\`, there is no need to check the second condition because the overall result will always be \`False\`. The short-circuit behavior means that if any condition in a logical \`and\` operation is \`False\`, the entire expression is considered \`False\`, and further condition checks are skipped. 

This behavior holds true in many programming languages for efficiency and to avoid unnecessary evaluations.`
    },
    {
        id: 11,
        type: 'input',
        category: 'python',
        subcategory: 'built-in-functions',
        title: 'Zip I',
        question: `What does this print?
~~~python
a = [1, 2, 3]
b = [4, 5, 6]

print(list(zip(a, b)))
~~~`,
        options: [""],
        random: false,
        answer: "\\[\\s*\\(\\s*1\\s*,\\s*4\\s*\\)\\s*,\\s*\\(\\s*2\\s*,\\s*5\\s*\\)\\s*,\\s*\\(\\s*3\\s*,\\s*6\\s*\\)\\s*\\]",
        description: `Answer: \`[(1,4), (2,5), (3,6)]\`

\`zip(a, b)\` pairs elements by index, it does *not* combine lists. Sot zip does this:

~~~console
(1, 4)
(2, 5)
(3, 6)
~~~

And then \`list(...)\` turns everything inside of it into elements in a list.`
    },
    {
        id: 12,
        type: 'input',
        category: 'python',
        subcategory: 'built-in-functions',
        title: 'Zip II',
        question: `What does this print?
~~~python
a = [1, 2, 3]
b = [4, 5]

print(list(zip(a, b)))
~~~`,
        options: [""],
        random: false,
        answer: "\\[\\s*\\(\\s*1\\s*,\\s*4\\s*\\)\\s*,\\s*\\(\\s*2\\s*,\\s*5\\s*\\)\\s*\\]",
        description: `Answer: \`[(1, 4), (2, 5)]\`

\`zip(a, b)\` stops at the shortest iterable. The \`3\` gets ignored because list \`b\` has no matching index.`
    },
    {
        id: 13,
        type: 'input',
        category: 'python',
        subcategory: 'built-in-functions',
        title: 'Zip III',
        question: `What does this print?
~~~python
matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
]

print(list(zip(*matrix)))
~~~`,
        options: [""],
        random: false,
        answer: "\\[\\s*\\(\\s*1\\s*,\\s*3\\s*,\\s*5\\s*\\)\\s*,\\s*\\(\\s*2\\s*,\\s*4\\s*,\\s*6\\s*\\)\\s*\\]",
        description: `Answer: \`[(1, 3, 5), (2, 4, 6)]\`

After starting with the \`matrix\`, we unpack with \`zip(*matrix)\` which becomes \`zip([1, 2], [3, 4], [5, 6])\`. Finally, we zip the pairs by index.`
    },
    {
        id: 14,
        type: 'input',
        category: 'python',
        subcategory: 'built-in-functions',
        title: 'Zip IV',
        question: `What does this print?
~~~python
matrix = [
    [1, 2],
    [3, 4]
]

print(list(zip(matrix)))
~~~`,
        options: [""],
        random: false,
        answer: "\\[\\s*\\(\\s*\\[\\s*1\\s*,\\s*2\\s*\\]\\s*,\\s*\\)\\s*,\\s*\\(\\s*\\[\\s*3\\s*,\\s*4\\s*\\]\\s*,\\s*\\)\\s*\\]",
        description: `Answer: \`[([1, 2], ), ([3, 4], )]\`

\`zip(matrix)\` means: \`zip([[1, 2], [3, 4]])\`

Zip will group elements into a tuple when you have *one* list like so:
~~~console
([1, 2], )
([3, 4], )
~~~

- \`zip(matrix)\`: one iterable -> wraps each element in a tuple. *Treat each row as a single item.*
- \`zip(*matrix)\`: multiple iterables -> combine by index. *Spread rows out and align columns.*
`
    },
    {
        id: 15,
        type: 'radio',
        category: 'python',
        subcategory: 'built-in-functions',
        title: 'Zip V',
        question: `What does this print?
~~~python
a = [1, 2, 3]

print(list(zip(*a)))
~~~`,
        options: [
            '\`[(1), (2), (3)]\`',
            '\`[(1, 2, 3)]\`',
            '\`TypeError\`'
        ],
        random: true,
        answer: '\`TypeError\`',
        description: `Answer: \`TypeError: 'int' object is not iterable\`
        
\`zip(*a)\` becomes \`zip(1, 2, 3)\`. However, our zip function *requires* an iterable such as a list, string, dict, whatever. And integers are not iterable. Ever try using an integer but forget the \`range\` function in a for loop? 

You can only use \`*\` if the elements inside are iterable.`
    },
    {
        id: 16,
        type: 'input',
        category: 'python',
        subcategory: 'tuples',
        title: 'Felix',
        question: `Create a tuple with a single string value of \`Felix\` and assign it to the variable \`cat\``,
        options: [""],
        random: false,
        answer: "cat\\s*=\\s*\\(\\s*(['\"])Felix\\1\\s*,\\s*\\)",
        description: `Answer: \`cat = ("Felix", )\`

Creating single-item tuples is a special case. You *must* include a comma so Python knows we are assigning a tuple rather than just throwing in parentheses. In this case without the comma, Python thinks we are assigning a string.`
    },
    {
        id: 17,
        type: 'input',
        category: 'python',
        subcategory: 'lists',
        title: 'Get that idx',
        question: `Fill in the one liner to return the index of the first occurrence of the target number in the list:
        
~~~python
def find_idx(nums, target):
    # what goes here?
~~~
`,
        options: [""],
        random: false,
        answer: "return\\s+nums\\.index\\(\\s*target\\s*\\)",
        description: `Answer: \`return nums.index(target)\`

\`index(find_me)\` searches for the first occurence of \`find_me\` and returns the element's index.`
    },
    {
        id: 18,
        type: 'input',
        category: 'python',
        subcategory: 'dictionaries',
        title: 'Simple dict',
        question: `Create a simple dictionary, mapping \`name\` to \`age\`. Don't forget to return it!
~~~python
def create_dict(name, age):
    # what goes here?
~~~`,
        options: [""],
        random: false,
        answer: "return\\s*\\{\\s*name\\s*:\\s*age\\s*\\}",
        description: `Answer: \`return {name: age}\``
    },
    {
        id: 19,
        type: 'input',
        category: 'python',
        subcategory: 'dictionaries',
        title: 'Print the dict',
        question: `How would you print the dictionary itself? Do not return anything.
~~~python
baseball = { 
  "bats": 3
  "baseballs": 10, 
  "gloves": 12
}
~~~`,
        options: [""],
        random: false,
        answer: "print\\(\\s*baseball\\s*\\)",
        description: `Answer: \`print(baseball)\``
    },
    {
        id: 20,
        type: 'input',
        category: 'python',
        subcategory: 'dictionaries',
        title: 'Print the value',
        question: `How would you print the value of \`bats\`? Do not return anything.
~~~python
baseball = { 
  "bats": 3
  "baseballs": 10, 
  "gloves": 12
}
~~~`,
        options: [""],
        random: false,
        answer: "print\\(\\s*baseball\\[\\s*['\"]bats['\"]\\s*\\]\\s*\\)",
        description: `Answer: \`print(baseball["bats"])\``
    },
    {
        id: 21,
        type: 'input',
        category: 'python',
        subcategory: 'dictionaries',
        title: 'Can I get a helmet?',
        question: `How would you print \`True\` or \`False\`, depending on whether the key \`"helmets"\` is in the dictionary? Do not return anything.
~~~python
baseball = { 
  "bats": 3
  "baseballs": 10, 
  "gloves": 12
}
~~~`,
        options: [""],
        random: false,
        answer: "print\\(\\s*['\"]helmets['\"]\\s+in\\s+baseball\\s*\\)",
        description: `Answer: \`print("helmets" in baseball)\``
    },
]