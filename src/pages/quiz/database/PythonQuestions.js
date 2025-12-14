export default [
    {
        id: 1,
        type: 'radio',
        category: 'python',
        subcategory: '',
        title: '',
        question: "When a program is dynamically typed it means that once a variable is assigned a type, it cannot change",
        options: [
            'true',
            'false',
        ],
        random: true,
        answer: 'false'
    },
    {
        id: 2,
        type: 'radio',
        category: 'python',
        subcategory: '',
        title: '',
        question: "In a statically typed language, assigning a value of the wrong type to a variable would cause a(n) _____.",
        options: [
            'type error',
            'syntax error',
            'logic error',
            'overflow error'
        ],
        random: true,
        answer: 'type error'
    },
    {
        id: 3,
        type: 'radio',
        category: 'python',
        subcategory: '',
        title: '',
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
        subcategory: '',
        title: '',
        question: "If a function does not explicitly return a value, it returns \`None\` by default",
        options: [
            'true',
            'false'
        ],
        random: true,
        answer: 'true'
    },
    {
        id: 5,
        type: 'radio',
        category: 'python',
        subcategory: '',
        title: '',
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
        subcategory: '',
        title: '',
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
        random: true,
        answer: '\`starting\` prints, then a stack trace due to an undefined function prints'
    }
]