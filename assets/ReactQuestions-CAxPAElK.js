const e=[{id:1,type:"radio",title:"JSX Console Output",question:`What would show up in my console if I were to run this line of code:

~~~jsx
console.log(<h1>Hello world!</h1>)
~~~
        `,options:["an object","an HTML element","`undefined`","`Hello world!`","null"],answer:"an object",description:"Not an actual HTML element like in vanilla DOM JavaScript, but an object! What is created from the JSX in our React code is a plain JS object that React will use to render and update the view efficiently."},{id:2,type:"radio",title:"Parent Trap",question:`What is wrong with this code:
        
~~~jsx
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
~~~
        `,options:["missing one parent element","missing a closing tag","this will cause a syntax error in JSX","needs a semicolon","no error, this works"],answer:"missing one parent element",description:`You need to wrap the \`h1\` and \`p\` elements into one parent element. Any element will do. Here is an example using a *fragment*:
        
~~~jsx
root.render(
    <>
        <h1>Hi there</h1>
        <p>This is my website!</p>
    </>
)
        `},{id:3,type:"radio",title:"Declarative Vibes",question:"What does it mean for something to be *declarative*?",options:["you tell the computer what to do","you write step-by-step instructions","you use only HTML","you avoid using functions","you manually update the DOM"],answer:"you tell the computer what to do",description:"You can let the library/tool do more of the work (the how) with a description (the why) for you."},{id:4,type:"radio",title:"Imperative Moves",question:"What does it mean for something to be *imperative*?",options:["you give the computer specific instructions","you describe the desired outcome","you use only CSS","you let React handle everything"],answer:"you give the computer specific instructions"},{id:5,type:"radio",title:"Composable Magic",question:"What does it mean for something to be composable?",options:["break down from larger pieces and put them back together","write code in a single file","avoid using components","never reuse code","use only global variables"],answer:"break down from larger pieces and put them back together"},{id:6,type:"radio",title:"React: What's That?",question:"What is a React component",options:["a function that returns React elements","an HTML file","a CSS class","a JavaScript variable","a browser plugin"],answer:"a function that returns React elements",description:"A React component is a function that returns React elements, which describe what should appear in the DOM."},{id:7,type:"radio",title:"Pascal Case Please",question:`What is wrong with this code:
        
~~~jsx
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
~~~
        `,options:["there should be brackets around the `small` element","should be `MyComponent`","should use snake_case","should be lowercase","should be wrapped in `<div>`","should be a class"],answer:"should be `MyComponent`",description:"Function names in JSX need to be written in pascal case"},{id:8,type:"radio",title:"Header Oops",question:`What is wrong with this code:
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
        `,options:["header should be written as `<Header />` inside `root.render()`","nothing, this will work","header should be written as `<Header() />` inside `root.render()`","should import React","should use a class component"],answer:"header should be written as `<Header />` inside `root.render()`"},{id:9,type:"radio",title:"Root Awakening",question:`What does the following code do:
        
~~~jsx
const root = createRoot(document.getElementById("root"))
root.render(<h1>Hello nerd...</h1>)
~~~
`,options:['creates a new HTML element and renders it inside an element with the id "root"','creates a new React component and renders it inside an element with the id "root"','renders a static HTML page inside a div with the id "root"',"renders a React element inside an HTML page",'renders a React element inside an HTML element with the id "root"'],answer:'renders a React element inside an HTML element with the id "root"',description:'`createRoot` is used to set up a root container in the HTML (with the `id="root`) and the `root.render` method is used to render a React element (`<h1>Hello nerd...</h1>`) inside that HTML element'},{id:10,type:"radio",title:"Element Mystery",question:`What will this code output in the console?
~~~jsx
import { createElement } from 'React'
const reactElement = createElement("h1", null, "Hello from createElement")
console.log(reactElement)
~~~
        `,options:["an HTML element object","a React element object",'a string with the text "Hello from createElement"',"an error due to incorrect usage of `createElement`","a string","an array","undefined"],answer:"a React element object"},{id:11,type:"radio",title:"Single Parent Rule",question:`What will happen if you try to run the following code?
~~~jsx
root.render(
    <h1>Hi there</h1>
    <p>This is my website!<p>
)
~~~
        `,options:["it will work, rendering both `<h1>` and `<p>` elements","it will throw an error because react expects a single root element","it will render the `<h1>` element, but ignore the `<p>` element","it will render an empty page"],answer:"it will throw an error because react expects a single root element",description:"React requires that multiple elements be wrapped inside a single parent element. If you do not wrap them in a parent (like a `<div>`, `<Fragment>`, or `<>...</>`), React will throw an error."},{id:12,type:"radio",title:"Dec vs Imp",question:"What is the primary difference between declarative and imperative programming in React?",options:["declarative programming requires more manual control over the code execution","imperative programming describes what needs to be done, while declarative programming focuses on how to do it","declarative programming tells the system how to perform tasks, while imperative programming describes what should be done","declarative programming involves explicitly defining every step in the process, while imperative programming leaves it to the framework to decide","declarative programming describes what should be done, while imperative programming tells the system how to perform tasks"],answer:"declarative programming describes what should be done, while imperative programming tells the system how to perform tasks",description:"**Declarative programming** is about telling React what you want to happen, and React will figure out how to do it. **Imperative programming** involves describing how something should be done step by step, giving you more control over the execution process."},{id:13,type:"radio",title:"Mix & Match",question:"What does it mean for React to be *composable*?",options:["you can mix JavaScript code and HTML in any way you like","React allows you to easily build complex systems by combining smaller, reusable components","React can only render basic HTML elements, like `<div` and `<span>`","React uses a specific programming language that allows easy composability"],answer:"React allows you to easily build complex systems by combining smaller, reusable components"}];export{e as default};
