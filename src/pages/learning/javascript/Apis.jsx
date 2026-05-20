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

    const fetch = `fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))}`

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

    const optionalMethodParameter = `fetch('url', {method: "POST"})
    .then()
    .then()`

    const requestBody = `fetch("https://apis.clp.com/jsonplaceholder/todos", {
    method: "POST",
    body: JSON.stringify({
        title: "Buy Milk",
        completed: false
    })
})
    .then(res => res.json())
    .then(data => console.log(data))`

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
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet" wrapLines={true}>
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

            <h2>URLs and REST</h2>

            <ul>
                <li>Request</li>
                <li>URLs (parameters & queries)</li>
                <li>REST API design</li>
            </ul>

            <h2>HTTP request</h2>

            <p><strong>HTTP</strong>, or <em>Hypertext Transfer Protocol</em>, is a protocol for determing how hypertext (text) should be transferred over the internet. We use HTTP when making request and responses.</p>

            <blockquote>
                <p>A <strong>protocol</strong> is an agreed-upon, standard way of doing something.</p>
            </blockquote>

            <p>There are severl components of a request:</p>

            <ul>
                <li>The path/address of where the data you are looking for is located. You must know the URL, as that is where the data is located.</li>
                <li>Methods</li>
                <ul>
                    <li>GET</li>
                    <li>POST</li>
                    <li>PUT</li>
                    <li>DELETE</li>
                    <li>PATCH (less common)</li>
                    <li>OPTIONS (less common)</li>
                </ul>
                <li>Body. This is optional and depends on your request type.</li>
                <li>Headers. This is the meta information about the request. Details can include...</li>
                <ul>
                    <li>what kind of browser</li>
                    <li>operating system</li>
                    <li>authentication token for protective resources</li>
                    <li>and a whole lot more</li>
                </ul>
            </ul>

            <Dropdown
                questions={["What does HTTP stand for?", "How would you describe what a protocol is?"]}
                answers={["Hypertext Transfer Protocol", "An agreed-upon, standard way of doing something"]}
            />

            <h2>Request: URLs and Endpoints</h2>

            <p>The path (URL) is an address where your desired resource is located. There are two parts of a URL, the base URL and the endpoint.</p>

            <p>The <strong>base URL</strong> is the part of the URL that <em>will not</em> change no matter what kind of resource you are getting from the API.</p>

            <p>The <strong>endpoint</strong> is the specific resource at that base URL that you are trying to get.</p>

            <ul>
                <li>A full URL: <code>https://apis.clp.com/comments</code></li>
                <li>The base URL: <code>https://apis.clp.com</code></li>
                <li>The endpoint: <code>/comments</code></li>
            </ul>

            <p>If you try to follow the URL, you would get the URL JSON response rather than getting a webpage. Let's look at what a full api might look like:</p>

            <p><code>https://blahblahblah.com/api/v2/products/123</code></p>

            <ul>
                <li><code>api</code>: indicates that this is <em>not</em> a HTML page resource that you are getting, but rather it is the JSON API. </li>
                <li><code>v2</code>: version 2. This is saying this is the second version of the API. In this instance, they have a version 1 that they do not want to completly erase, and they now need an updated version as well. It has been improved in some way, faster, more data, whatever, so a seperate endpoint was created for it. You will often see <code>v1</code>, <code>v2</code>, <code>v3</code>, ..., in that order.</li>
            </ul>

            <Dropdown
                questions={[
                    "What's the difference between a base URL and an endpoint?",
                    "Can you come up with some commonly named endpoints?"
                ]}
                answers={[
                    "The base URL is the part of the URL that will not change, no matter which resource we want to get from the API. Endpoints specifies which resource we want to get from the API.",
                    <>
                        <code>/users</code>, <code>/products</code>, and <code>/products/&lt;name-of-specific-product&gt;</code> to name a few.
                    </>
                ]
                }
            />

            <h2>Request Methods</h2>

            <p>The <strong>request method</strong> tells the server what <em>kind</em> of request you are making.</p>

            <ul>
                <li><code>GET</code>: getting data</li>
                <li><code>POST</code>: adding new data (think posting to facebook)</li>
                <li><code>PUT</code>: update existing data</li>
                <li><code>DELETE</code>: remove data</li>
                <li>there are more, but these are the most common ones we will focus on for now. </li>
            </ul>

            <h3>Diving deeper into fetch</h3>

            <p>Fetch has an optional parameter that allows you to access the <code>method</code> property and change its value. The default for the method parameter is <code>GET</code>, hence why we never defined it with our previous uses.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {optionalMethodParameter}
                </SyntaxHighlighter>
            </div>

            <h2>Request body</h2>

            <p>The <strong>request body</strong> represents the data the we want to send to the server. This is only needed for <code>POST</code> and <code>PUT</code> requests. And it needs to be turned into JSON format before it is sent!</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {requestBody}
                </SyntaxHighlighter>
            </div>

            < br />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="array-methods"
            />
        </div >
    )
}