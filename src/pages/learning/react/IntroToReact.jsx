import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function IntroToReact() {
    const quizImports = {
        react: () => import('../../../pages/quiz/database/ReactQuestions.js')
    }

    const reactSetup = `import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))
root.render(<h1>Hello nerd...</h1>)`

    const oldSchoolStyle = `import { createElement } from "react"
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))
const reactElement = createElement("h1", null, "Hello from createElement")

console.log(reactElement)

root.render(
    reactElement
)`

    const reactElement = `> {type: 'h1', key: null, ref: null, props: {children: 'Hello from createElement'}}`

    const syntacticSugar = `import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))
const reactElement = <h1>Hello from JSX!</h1>

console.log(reactElement)

root.render(
    reactElement
)`

    const components101 = `<body>
    <MyAwesomeNavbar />
    <MainContent />
    <MyAwesomeFooter />
</body>`

    const addingComponents = `import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

function MainContent() {
    return (
        <h1>React is great!</h1>
    )
}

function SideContent() {
    return <p>This is some extra stuff</p>
}

root.render(
    <div>
        <MainContent />
        <SideContent />
    </div>
)
`

    const imperativeExample = `const h1 = document.createElement("h1")
h1.textContent = "This is imperative coding"
h1.className = "header"
document.getElementById("root").appendChild(h1)`

    const declarativeExample = `root.render(
    <h1 className="header">This is a declarative example</h1>
)`

    const customComponents = `import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

function MyList() {
    return (
        <ol>
            <li>List item one</li>
            <li>List item two</li>
            <li>List item three</li>
            <li>List item four</li>
        </ol>
    )
}

root.render(
    <MyList />
)
`

    const importFragement = `import { Fragment } from "react"`

    const parentChildComponent = `import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

function Header() {
    return (
        <header>
            <img src="react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

function MainContent() {
    return (
        <main>
            <h1>Reason I am excited to learn React</h1>
            <ol>
                <li>React is a popular library 😎</li>
                <li>Get a job as a front end developer</li>
            </ol>
        </main>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2024 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

root.render(
        <Page />
)
`

    const exportComponent = `// from the file Header.jsx
export default function Header() {
    return (
        <header className="header">
            <img src="react-logo.png" className="nav-logo" alt="React logo" />
            <nav>
                <ul className="nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                </ul>
            </nav>
        </header>
    )
}`

    const importComponent = `// from the file index.jsx
import { createRoot } from "react-dom/client"
import Header from "./Header"
const root = createRoot(document.getElementById("root"))

// later on in the code...

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

root.render(
    <Page />
)`

    const cssFlex = `element {
    display: flex;
    align-items: center;
}`

    return (
        <>
            <h1 id="learn-react---section-1">Intro to React</h1>

            <h2 id="static-pages">Static Pages</h2>

            <p>React takes javascript and adds it to the html for us.</p>

            <ol>
                <li>create a root</li>
                <li>render some markup to the root</li>
            </ol>

            <p>setting up react:</p>

            <div className="">
                <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers className="code-snippet" wrapLines={true}>
                    {reactSetup}
                </SyntaxHighlighter>
            </div>

            <h2 id="how-to-create-a-react-program">How to create a react program</h2>

            <p>This site uses Vite. A build tool</p>

            <p>I have everything downloaded and ready to go. Here are the steps for my windows machine:</p>

            <ol>
                <li>open up command prompt</li>
                <li>type in <code>npm create vite@latest</code></li>
                <li>write in the project name</li>
                <li>type in <code>cd nameOfProject</code></li>
                <li>type in <code>npm install</code></li>
                <li>type in <code>code .</code> to open up VS code</li>
                <li>In VS code, open up terminal and type in <code>npm run dev</code></li>
            </ol>

            <p>There might be a few things to do in between steps, but this is mostly how it is done!</p>

            <h2 id="librariesframeworks">Libraries/Frameworks</h2>

            <p>Libraries</p>

            <ul>
                <li>collection of reusable code</li>
                <li>reduces need to write repetitive/complex things from scratch</li>
                <li>You control how/when it's used. No/few boundaries</li>
            </ul>

            <p>Frameworks</p>

            <ul>
                <li>Predetermined architecture - you follow a specified pattern of development</li>
                <li>You work within the boundaries set by the framework</li>
                <li><em>Right</em> and <em>wrong</em> ways to use it.</li>
            </ul>

            <p>React is specifically called a library by the React team.</p>

            <h2 id="codereactcreateelementcode">How <code>React.createElement()</code> works</h2>

            <p>Old school style:</p>

            <div className="">
                <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers className="code-snippet" wrapLines={true}>
                    {oldSchoolStyle}
                </SyntaxHighlighter>
            </div>

            <p>In the terminal from <code>console.log(reactElement)</code></p>

            <div className="">
                <SyntaxHighlighter language="bash" style={tomorrow} showLineNumbers className="code-snippet" wrapLines={true}>
                    {reactElement}
                </SyntaxHighlighter>
            </div>

            <h2 id="jsx">JSX</h2>

            <p><em>Syntactic Sugar</em></p>

            <div className="">
                <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers className="code-snippet" wrapLines={true}>
                    {syntacticSugar}
                </SyntaxHighlighter>
            </div>

            <h2 id="react-is-composable">React is Composable</h2>

            <p>It's composable! It can easily reuse and interchange <em>pieces of the web</em> that can be combined in various ways to create complex systems. Think of legos, they can be built up, broken down, and recomposed into what ever you want.</p>

            <p>React creates custom <strong>components</strong> from larger pieces of code. You can run non-native html elements that you create into simplier code. Example, image having three large sections of code, a navbar, the main content, and a footer. Rather than rewriting all of the code each time for each webpage, in React you could simply run:</p>

            <div className="">
                <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers className="code-snippet" wrapLines={true}>
                    {components101}
                </SyntaxHighlighter>
            </div>

            <p>Here is another example of putting it all together:</p>

            <div className="">
                <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers className="code-snippet" wrapLongLines={true}>
                    {addingComponents}
                </SyntaxHighlighter>
            </div>


            <h2 id="react-is-declarative">React is Declarative</h2>

            <p>Declarative means that you can use the library to handle the manual, tedious tasks that we otherwise would have to
                worry about outselves.</p>

            <h4 id="declarative-vs-imperative">Declarative vs Imperative</h4>

            <p>Declarative would be like us asking &quot;What should be done!&quot; We tell the computer what needs to happen, and it will do it for you.</p>

            <p>Imperative would be like us asking &quot;How should it be done?&quot; We would need to describe every step to the computer on how to do the thing and then it will do it.</p>

            <p>Imperative example:</p>

            <div className="">
                <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers className="code-snippet" wrapLongLines={true}>
                    {imperativeExample}
                </SyntaxHighlighter>
            </div>

            <p>Declarative example:</p>

            <div className="">
                <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers className="code-snippet" wrapLongLines={true}>
                    {declarativeExample}
                </SyntaxHighlighter>
            </div>

            <h2 id="random-housekeeping">Random housekeeping</h2>

            <ol>
                <li>
                    <p>When using static images (not from a CDN or database) we need to deal with them in a unique way. You need to call the image from the project root, not the current directory. More on this later!</p>
                </li>
                <li>
                    <p>When rendering multiple elements in react, you need to wrap all elements into a single parent element. You could put them in a <code>&lt;div&gt;&lt;/div&gt;</code>, <code>&lt;&gt;&lt;/&gt;</code> or whatever makes the most syntactical sense.</p>
                </li>
            </ol>

            <h2 id="custom-components">Custom Components</h2>

            <div className="">
                <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers className="code-snippet" wrapLongLines={true} >
                    {customComponents}
                </SyntaxHighlighter>
            </div>


            <p>The component is the function we wrote called <code>MyList</code>.</p>

            <ul>
                <li>Function name needs to be pascal case</li>
                <li>When calling the function use <code>&lt; /&gt;</code> instead of <code>()</code></li>
            </ul>

            <h2 id="fragments">Fragments</h2>

            <p><em>How to compose components together</em></p>

            <p><strong>Fragment</strong> is a built-in component that we can use in React.</p>

            <div className="">
                <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers className="code-snippet" wrapLongLines={true}>
                    {importFragement}
                </SyntaxHighlighter>
            </div>

            <p>This allows for the empty angle brackets when we render. This will allow us to not add unnecessary html elements and help keep the code clean (these guys <code>&lt;&gt;&lt;/&gt;</code>). You do not need to manually import it.</p>

            <h2 id="custom-components---parentchild-components">Custom Components - Parent/Child Components</h2>

            <p>Take a look at the following React code:</p>

            <div className="">
                <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers className="code-snippet" wrapLines={true}>
                    {parentChildComponent}
                </SyntaxHighlighter>
            </div>

            <p>In the code you can see a hierarchy. The <code>Page</code> component is render, which in turn renders the <code>Header</code>, <code>MainContent</code>, and <code>Footer</code> components. In larger applications this can continue down the tree, customer components inside of custom components inside of...you get the idea.</p>

            <h2 id="styling-with-classes">Styling with Classes</h2>

            <p>To add the <code>class</code> attribute to html elements, we will actually write <code>className</code> in JSX, instead of the traditional <code>class</code> from HTML.</p>

            <h2 id="organizing-components">Organizing Components</h2>

            <p>As you can see, our file will grow really large if we put everything into it. To avoid this, we can create files for each component. When doing this be mindful of two things:</p>

            <ol>
                <li>You need to export the component into <code>index.jsx</code></li>
                <li>You need to import the component</li>
            </ol>

            <p>Example of exporting:</p>

            <div className="">
                <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers className="code-snippet" wrapLines={true}>
                    {exportComponent}
                </SyntaxHighlighter>
            </div>

            <p>Example of importing:</p>

            <div className="">
                <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers className="code-snippet" wrapLines={true}>
                    {importComponent}
                </SyntaxHighlighter>
            </div>

            <p>In the <code>import Header from &quot;./Header&quot;</code> part:</p>

            <ul>
                <li><code>Header</code>: this can be called whatever you want. This is used in the code to call the component.</li>
                <li><code>&quot;./Header&quot;</code>: the <code>./</code> part is used to identify this is our file, and not a file built into the jsx library. The <code>Header</code> part grabs the file. Notice that it does not need the <code>.jsx</code> file extention, it is grabbed automatically. Some people like to have it, but the program knows what to do.</li>
            </ul>

            <h2 id="make-mental-outline-of-project">Make Mental Outline of project</h2>

            <p>Make note of what you want on the page and how to go about creating it.</p>

            <h2 id="random-tips--tricks-with-css">Random tips &amp; tricks with css</h2>

            <div className="">
                <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers className="code-snippet">
                    {cssFlex}
                </SyntaxHighlighter>
            </div>

            <p>Change the <code>display</code> to <code>flex</code> to use FlexBox! Now you have access to <code>align-items</code>, which controls the vertical placement of your element.</p>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="intro"
            />
        </>
    )
}