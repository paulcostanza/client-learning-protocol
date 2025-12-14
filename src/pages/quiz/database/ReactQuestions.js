export default [
    {
        id: 1,
        type: 'radio',
        category: 'React',
        subcategory: '',
        title: 'JSX Console Output',
        question: `What would show up in my console if I were to run this line of code:

~~~jsx
console.log(<h1>Hello world!</h1>)
~~~
        `,
        options: [
            'an object',
            'an HTML element',
            '\`undefined\`',
            '\`Hello world!\`',
            'null'
        ],
        random: true,
        answer: 'an object',
        description: 'Not an actual HTML element like in vanilla DOM JavaScript, but an object! What is created from the JSX in our React code is a plain JS object that React will use to render and update the view efficiently.'
    },
    {
        id: 2,
        type: 'radio',
        category: 'React',
        subcategory: '',
        title: 'Bad react',
        question: `What is wrong with this code:
        
~~~jsx
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
~~~
        `,
        options: [
            'missing one parent element',
            'missing a closing tag',
            'this will cause a syntax error in JSX',
            'needs a semicolon',
            'no error, this works',
        ],
        random: true,
        answer: 'missing one parent element',
        description: `You need to wrap the \`h1\` and \`p\` elements into one parent element. Any element will do. Here is an example using a *fragment*:
        
~~~jsx
root.render(
    <>
        <h1>Hi there</h1>
        <p>This is my website!</p>
    </>
)`
    },
    {
        id: 3,
        type: 'radio',
        category: 'React',
        subcategory: '',
        title: 'Declarative Vibes',
        question: 'What does it mean for something to be *declarative*?',
        options: [
            'you tell the computer what to do',
            'you write step-by-step instructions',
            'you use only HTML',
            'you avoid using functions',
            'you manually update the DOM',
        ],
        random: true,
        answer: 'you tell the computer what to do',
        description: 'You can let the library/tool do more of the work (the how) with a description (the why) for you.'
    },
    {
        id: 4,
        type: 'radio',
        category: 'React',
        subcategory: '',
        title: 'Imperative Moves',
        question: 'What does it mean for something to be *imperative*?',
        options: [
            'you give the computer specific instructions',
            'you describe the desired outcome',
            'you use only CSS',
            'you let React handle everything'
        ],
        random: true,
        answer: 'you give the computer specific instructions'
    },
    {
        id: 5,
        type: 'radio',
        category: 'React',
        subcategory: '',
        title: 'Composable Magic',
        question: 'What does it mean for something to be composable?',
        options: [
            'break down from larger pieces and put them back together',
            'write code in a single file',
            'avoid using components',
            'never reuse code',
            'use only global variables'
        ],
        random: true,
        answer: 'break down from larger pieces and put them back together'
    },
    {
        id: 6,
        type: 'radio',
        category: 'React',
        subcategory: '',
        title: 'React: What\'s That?',
        question: 'What is a React component',
        options: [
            'a function that returns React elements',
            'an HTML file',
            'a CSS class',
            'a JavaScript variable',
            'a browser plugin'
        ],
        random: true,
        answer: 'a function that returns React elements',
        description: 'A React component is a function that returns React elements, which describe what should appear in the DOM.'
    },
    {
        id: 7,
        type: 'radio',
        category: 'React',
        subcategory: 'hashmap',
        title: 'Pascal Case Please',
        question: `What is wrong with this code:
        
~~~jsx
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
~~~
        `,
        options: [
            'there should be brackets around the \`small\` element',
            'should be \`MyComponent\`',
            'should use snake_case',
            'should be lowercase',
            'should be wrapped in \`<div>\`',
            'should be a class'
        ],
        random: true,
        answer: 'should be \`MyComponent\`',
        description: 'Function names in JSX need to be written in pascal case'
    },
    {
        id: 8,
        type: 'radio',
        category: 'React',
        subcategory: 'hashmap',
        title: 'Header Oops',
        question: `What is wrong with this code:
~~~jsx
function Header() {
    return (
        <header>
            <img src="./smiles.png" width="42" alt="Puppy Smiling" />
        </header>
    )
}

root.render(Header())
~~~
        `,
        options: [
            `header should be written as \`<Header />\` inside \`root.render()\``,
            'nothing, this will work',
            `header should be written as \`<Header() />\` inside \`root.render()\``,
            'should import React',
            'should use a class component'
        ],
        random: true,
        answer: `header should be written as \`<Header />\` inside \`root.render()\``
    },
    {
        id: 9,
        type: 'input',
        category: 'React',
        subcategory: '',
        title: 'State fair',
        question: `Which react hook lets you add and manage local state in functional components?`,
        options: [""],
        random: false,
        answer: "useState\(\s*.*?\s*\)",
        description: 'Answer: \`useState()\`'
    },
    {
        id: 10,
        type: 'radio',
        category: 'React',
        subcategory: '',
        title: 'Element Mystery',
        question: `What will this code output in the console?
~~~jsx
import { createElement } from 'React'
const reactElement = createElement("h1", null, "Hello from createElement")
console.log(reactElement)
~~~
        `,
        options: [
            'an HTML element object',
            'a React element object',
            'a string with the text "Hello from createElement"',
            'an error due to incorrect usage of \`createElement\`',
            'a string',
            'an array',
            'undefined'
        ],
        random: true,
        answer: 'a React element object'
    },
    {
        id: 11,
        type: 'radio',
        category: 'React',
        subcategory: '',
        title: 'Single Parent Rule',
        question: `What will happen if you try to run the following code?
~~~jsx
root.render(
    <h1>Hi there</h1>
    <p>This is my website!<p>
)
~~~
        `,
        options: [
            'it will work, rendering both \`<h1>\` and \`<p>\` elements',
            'it will throw an error because react expects a single root element',
            'it will render the \`<h1>\` element, but ignore the \`<p>\` element',
            'it will render an empty page'
        ],
        random: true,
        answer: 'it will throw an error because react expects a single root element',
        description: 'React requires that multiple elements be wrapped inside a single parent element. If you do not wrap them in a parent (like a \`<div>\`, \`<Fragment>\`, or \`<>...</>\`), React will throw an error.'
    },
    {
        id: 12,
        type: 'radio',
        category: 'React',
        subcategory: '',
        title: 'Dec vs Imp',
        question: 'What is the primary difference between declarative and imperative programming in React?',
        options: [
            'declarative programming requires more manual control over the code execution',
            'imperative programming describes what needs to be done, while declarative programming focuses on how to do it',
            'declarative programming tells the system how to perform tasks, while imperative programming describes what should be done',
            'declarative programming involves explicitly defining every step in the process, while imperative programming leaves it to the framework to decide',
            'declarative programming describes what should be done, while imperative programming tells the system how to perform tasks'
        ],
        random: true,
        answer: 'declarative programming describes what should be done, while imperative programming tells the system how to perform tasks',
        description: `**Declarative programming** is about telling React what you want to happen, and React will figure out how to do it. **Imperative programming** involves describing how something should be done step by step, giving you more control over the execution process.`
    },
    {
        id: 13,
        type: 'radio',
        category: 'React',
        subcategory: '',
        title: 'Mix & Match',
        question: 'What does it mean for React to be *composable*?',
        options: [
            'you can mix JavaScript code and HTML in any way you like',
            'React allows you to easily build complex systems by combining smaller, reusable components',
            'React can only render basic HTML elements, like \`<div\` and \`<span>\`',
            'React uses a specific programming language that allows easy composability'
        ],
        random: true,
        answer: 'React allows you to easily build complex systems by combining smaller, reusable components'
    },
    {
        id: 14,
        type: 'input',
        category: 'React',
        subcategory: '',
        title: 'Fetch after render',
        question: `Which react hook runs effects, such as fetching data, after rendering?`,
        options: [""],
        random: false,
        answer: "useEffect\(\s*.*?\s*\)",
        description: 'Answer: \`useEffect()\`'
    },
    {
        id: 15,
        type: 'input',
        category: 'React',
        subcategory: '',
        title: 'Prop drilling',
        question: `Which react hook gives you access to shared data without prop drilling?`,
        options: [""],
        random: false,
        answer: "useContext\(\s*.*?\s*\)",
        description: `Answer: \`useContext()\`
Grabs data from React\'s *Context API*`
    },
    {
        id: 16,
        type: 'input',
        category: 'React',
        subcategory: '',
        title: 'DOM reference',
        question: `Which react hook stores a mutable value or DOM reference that persists across renders without re-rendering?`,
        options: [""],
        random: false,
        answer: "useRef(?:\(\))?;?",
        description: 'Answer: \`useRef()\`'
    },
    {
        id: 17,
        type: 'input',
        category: 'React',
        subcategory: '',
        title: '',
        question: `Which react hook memoizes expensive calculations so they only recompute when dependencies change?`,
        options: [""],
        random: false,
        answer: "useMemo\(\s*.*?\s*\)",
        description: `Answer: \`useMemo()\`
        
Remember, ***memoize*** means the value or function is *stored and reused* instead of being recalculated every render, unless its dependencies change.

Example: if you have an expensive calculation, useMemo will save (“memoize”) the result and only redo the calculation when needed.`
    },
    {
        id: 18,
        type: 'input',
        category: 'React',
        subcategory: '',
        title: '',
        question: `Which react hook returns a memoized frunction to prevent unnecessary re-renders of child components?`,
        options: [""],
        random: false,
        answer: "useCallback\(\s*.*?\s*\)",
        description: `Answer: \`useCallback()\`
        
Remember, ***memoize*** means the value or function is *stored and reused* instead of being recalculated every render, unless its dependencies change.

Example: if you pass a function to a child component, useCallback will save (“memoize”) that function so it does not get recreated every render and cause unnecessary re-renders of the child.`
    },
    {
        id: 19,
        type: 'input',
        category: 'React',
        subcategory: '',
        title: '',
        question: `Which react hook manages complex state logic using a reducer function?`,
        options: [""],
        random: false,
        answer: "useReducer\(\s*.*?\s*\)",
        description: 'Answer: \`useReducer()\` ... kinda like Redux, but local!'
    },
];