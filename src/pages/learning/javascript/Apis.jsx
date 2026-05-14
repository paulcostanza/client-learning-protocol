import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import Dropdown from "../../../Helpers/Dropdown"

import ClientServer from '../../../assets/javascript/apis/client server.png'
import RequestResponse from '../../../assets/javascript/apis/request response.png'

export default function APIs() {
    const quizImports = {
        javaScript: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    const joeSchmoe = `{
    "name": "Joe Schmoe",
    "age": 42,
    "gender": "male",
    "hobbies": [
        "skiing",
        "surfing",
        "piccolo"
    ]
}`

    const fetch = `{
    "name": "Joe Schmoe",
    "age": 42,
    "gender": "male",
    "hobbies": [
        "skiing",
        "surfing",
        "piccolo"
    ]
}`

    const then = `console.log("first")

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))

console.log("third")`

    const thenConsole = `first
third
{message: 'https://images.puppy.net/breeds/affenpinscher/n02690627_12003.jpg', status: 'success'}`

    const response = `fetch('url')
    .then(response => response.json())
    .then(data => {
        const img = \`<p>data.activity</p>\`
    })`

    return (
        <div className="container">
            <h1>APIs</h1>

            <p>So far we have been using data that is stored in our code. Seperate files of objects that we set. This is not how it is in the real world.</p>

            <p>Data is modular, changing, and can be gather from a vas source of places. In reality, it comes from databases located half-way across the world.</p>

            <p>Accessing real data is awesome for building more interesting applications. To use the data in our web apps we must learn:</p>

            <ul>
                <li>some networking basics</li>
                <li>URLS & REST</li>
                <li>Async JavaScript</li>
            </ul>

            <h2>What are APIs?</h2>

            <p>An <strong>Application Programming Interface</strong> is any tool that helps connect your program with someone else's program. Now, API is a huge term with multiple implications, which makes learning about them so <s>confusing</s> awesome.</p>

            <p>In order to grab data via an API, we need to access it from a <strong>server</strong>:</p>

            <ul>
                <li>the server hosts an API by exposing <strong>endpoints</strong> we can access for getting data from the server</li>
                <li>the server will not give us every piece of data, rather just the things they want us to access</li>
            </ul>

            <p>In JS, we are given some pre-written code to help us out. Examples:</p>

            <ul>
                <li>the DOM API gives you access to things like <code>.getElementById</code></li>
                <li>local storage, we know how to access it, but we do not know how it actually access the data that is stored</li>
                <li>any 3rd party packages or imports, we don't not know how it works under the hood, but at the same time we don't really care</li>
            </ul>

            <Dropdown
                questions={["What does API stand for?", "How would you describe an API in your own words?"]}
                answers={["Application Programming Interface", "A tool that allows your code to talk with someone else's code. Things like Web APIs, 3rd-party package, etc."]}
            />

            <h2>Clients and Servers</h2>

            <p>A <strong>client</strong> is any device that connects to the internet to get data from somewhere (this is know as <em>making a request</em>):</p>

            <ul>
                <li>laptop</li>
                <li>phone</li>
                <li>tablet</li>
                <li>smart device</li>
                <li>even another server!</li>
            </ul>

            <p>A <strong>server</strong> is basically a computer that accepts requests from clients that are asking for something. It will then <em>respond</em> to the client with those things, such as:</p>

            <ul>
                <li>looking up a website</li>
                <li>signing in</li>
            </ul>

            <p><img className="img-in-reading" src={ClientServer} alt="images of a clients and a server" /></p>

            <p>A <strong>request</strong> is when a device asks for a <em>resource</em> such as data, an image, HTML page, authentication token, etc. It requires a connection to the internet.</p>

            <p>A <strong>response</strong> is a reply to the request. It can contain a resource, such as HTML or JSON data, that is asked for by the client. It could also contain a response saying the client is <em>not</em> authorized to receive the resource.</p>

            <p><img className="img-in-reading" src={RequestResponse} alt="images of a request and response between clients and a server" /></p>

            <h2>JSON review</h2>

            <p>There are a few distinctions between JavaScript objects. The main one being that keys <em>need</em> to be in double quotes.</p>


            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {joeSchmoe}
                </SyntaxHighlighter>
            </div>

            <p>Values can still be any data type.</p>

            <h3>Fetch</h3>

            <p><strong>Fetch</strong> is a built-in function in JS.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {fetch}
                </SyntaxHighlighter>
            </div>

            <h3><code>.then()</code> and Asynchronous JS</h3>

            <p><strong>Asynchronous</strong> means out of order or out of time.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {then}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {thenConsole}
                </SyntaxHighlighter>
            </div>

            <p><code>.then()</code> does not slow down or halt your code from running. It allows both console logs to run before the data comes back from the server and <em>then</em> run after the URL was fetched.</p>

            <p><code>response.json()</code> takes the data that is returned ( the response) from grabbing the api and changes it from JSON to JavaScript.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {response}
                </SyntaxHighlighter>
            </div>

            <br />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="array-methods"
            />
        </div>
    )
}