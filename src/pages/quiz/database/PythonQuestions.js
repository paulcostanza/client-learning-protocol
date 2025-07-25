export default [
    {
        id: 1,
        type: 'radio',
        question: "When a program is dynamically typed it means that once a variable is assigned a type, it cannot change",
        options: [
            'true',
            'false',
        ],
        answer: 'false'
    },
    {
        id: 2,
        type: 'radio',
        question: "In a statically typed language, assigning a value of the wrong type to a variable would cause a(n) _____.",
        options: [
            'type error',
            'syntax error',
            'logic error',
            'overflow error'
        ],
        answer: 'type error'
    },
    {
        id: 3,
        type: 'radio',
        question: "What is the conventional name for the entry point function",
        options: [
            '\`main()\`',
            '\`start()\`',
            '\`play()\`',
            '\`init()\`'
        ],
        answer: '\`main()\`',
        optionsAreCode: 'python'
    },
    {
        id: 4,
        type: 'radio',
        question: "If a function does not explicitly return a value, it returns \`None\` by default",
        options: [
            'true',
            'false'
        ],
        answer: 'true'
    },
    {
        id: 5,
        type: 'radio',
        question: "The _____ method is used to remove the last item from a list and can return it to a variable if assigned",
        options: [
            '\`pop()\`',
            '\`push()\`',
            '\`remove()\`',
            '\`delete()\`'
        ],
        answer: '\`pop()\`'
    },
    {
        id: 6,
        type: 'radio',
        question: `Assume the function \`func_that_doesnt_exist\` is a function that does not exist:

~~~python
print("starting")
func_that_doesnt_exist("uh oh")
print("finished")
~~~

What will happen when the code runs?`,
        options: [
            'A stack trace due to an undefiuned function prints',
            '\`starting\` prints, then a stack trace due to an undefined function prints',
            '\`starting\` prints, then a stack trace due to an undefined function prints, then \`finished\` prints',
        ],
        answer: '\`starting\` prints, then a stack trace due to an undefined function prints'
    }
]


// do I need the key: optionsAreCode?