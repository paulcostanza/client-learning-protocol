import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function APIsIntro() {
    const quizImports = {
        cSharp: () => import('../../../pages/quiz/database/CSharpQuestions.js')
    }

    const JSON = `{
	"name": "Janice",
	"score": 98
}`

    const simpleEndpoint = `var app = WebApplication.Create();
app.MapGet("/hello", () => "Hello world");
app.Run();`

    const mapGet = `app.MapGet("/user", () => new { name = "Jimmy", score = 100 });`

    const jimmyJson = `{
  "name": "Jimmy",
  "score": 100
}`

    const howToPostRequest = `// instead of this
() => something
// or
() => data

// think this
(data) => something
// and
(input) => output`

    const userClass = `public class User
{
	public string Name { get; set; }
	public int Score { get; set; }
}`

    const postUser = `app.MapPost("/user", (User user) => user);`

    const something = `() => something`

    const list = `var users = new List<User>();

app.MapPost("/users", (User user) =>
{
    users.Add(user);
    return user;
});

app.MapGet("/users", () => users);`

    const mentalModelState = `// from this
input => output

// to this
input => modifies state => returns output`

    const deleteMethod = `// remove the item at this index
DELETE /numbers/{id}`

    const review = `var users = new List<User>();

app.MapPost("/users", (User user) =>
{
    users.Add(user);
    return user;
});

app.MapGet("/users", () =>
{
    return users;
});

app.MapPut("/users/{id}", (int id, User updatedUser) =>
{
    var user = users.FirstOrDefault(u => u.Id == id);

	if (user == null)
	{
		return Result.BadRequest("No");
	}

	user.Name = updatedUser.Name;
	user.Score = updatedUser.Score;

	return Result.Ok(user);
});

app.MapDelete("/users/{id}", (int id) =>
{
    var user = users.FirstOrDefault(u => u.Id == id);

	if (user == null)
	{
		return Result.BadRequest("No");
	}

	users.RemoveAt(user);

	return Result.Ok(user);
});
`

    const goal = `[HttpPost]
public ActionResult<User> CreateUser([FromBody] User user)
{
    if (user == null)
        return BadRequest();

    return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
}`

    return (
        <div className="container">
            <h1>APIs: Intro</h1>

            <blockquote>
                <p>What is an API?</p>
            </blockquote>

            <p>An <strong>API</strong> is a way for a client (browser, app, etc) to send requests to your server and get data back. In C#, we build APIs using <em>ASP.NET CORE</em>.</p>

            <p>An API can...</p>

            <ul>
                <li>receive an HTTP request</li>
                <li>run some C# code</li>
                <li>return a response</li>
            </ul>

            <h3>Essentials</h3>

            <p>HTTP Methods</p>

            <ul>
                <li><code>GET</code></li>
                <li><code>POST</code></li>
                <li><code>PUT</code></li>
                <li><code>DELETE</code></li>
            </ul>

            <p>Routes - aka endpoints, are just the URL</p>

            <ul>
                <li><code>/users</code></li>
                <li><code>/user/5</code></li>
                <li><code>/products</code></li>
            </ul>

            <p>APIs usually return JSON</p>

            <div className="">
                <SyntaxHighlighter language="json" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {JSON}
                </SyntaxHighlighter>
            </div>

            <h2>Simplest possible endpoint</h2>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {simpleEndpoint}
                </SyntaxHighlighter>
            </div>

            <ul>
                <li><code>var app = WebApplication.Create();</code> sets up your web server</li>
                <li><code>app.MapGet("/hello", () =&gt; "Hello world");</code></li>
                <ul>
                    <li><code>MapGet</code>: indicates a GET request</li>
                    <li><code>"/hello"</code>: our URL route</li>
                    <li><code>() =&gt; "Hello world"</code>: the function that runs</li>
                </ul>
                <li><code>app.Run();</code> starts the server</li>
            </ul>

            <blockquote>
                <p>So what exactly is happening here?</p>
            </blockquote>

            <ol>
                <li>Someone goes to or request <code>/hello</code></li>
                <li>The function <code>() =&gt; "Hello world"</code> will run</li>
                <li>It then returns <code>Hello world</code></li>
            </ol>

            <p>This is a small example and only returns a single value. Real APIs return <em>structured data</em>.</p>

            <h2>Returning real API Data - GET requests</h2>

            <p>ASP.NET automatically converts objects into JSON. So this:</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {mapGet}
                </SyntaxHighlighter>
            </div>

            <p>Will return this:</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {jimmyJson}
                </SyntaxHighlighter>
            </div>

            <h2>Accepting Input - POST requests</h2>

            <p>So far, our API has only returned data. Let's flip the situation: the client sends data and your API receives it.</p>

            <p>Instead of just execution some sort of action, we will now send data, and do something with it.</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {howToPostRequest}
                </SyntaxHighlighter>
            </div>

            <p>Let's use a typical <code>User</code> class example:</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {userClass}
                </SyntaxHighlighter>
            </div>

            <p>And our API:</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {postUser}
                </SyntaxHighlighter>
            </div>

            <ul>
                <li>our route is <code>/user</code></li>
                <li>we use a POST method</li>
                <li>the API expects JSON from the client</li>
                <li>that JSON is converted into a <code>User</code> object</li>
            </ul>

            <p>Now what the API is doing...</p>

            <ul>
                <li>takes JSON</li>
                <li>converts it into a <code>User</code> object</li>
                <li>passes it into the API function</li>
                <li>returns it back as JSON</li>
            </ul>

            <p>So our JSON automatically becomes a C# object. This is called <strong>model binding</strong>.</p>

            <p>Core rules to follow when returning:</p>

            <ul>
                <li>if you return an object, you get JSON</li>
                <li>if you return a primitive, you get just the value</li>
            </ul>


            <h2>Route Parameters - Dynamic URLs</h2>

            <p><code>app.MapGet("/square/&#123;x&#125;", (int x) =&gt; x * x);</code></p>

            <p>The <code>&#123;x&#125;</code> is a value that comes from the URL. It gets passed into the function</p>

            <p>Say we have a request of <code>GET /square/5</code>. In this scenerio, <code>x = 5</code>, and the function runs <code>x * x</code>. Our resposne is <code>25</code>.</p>

            <p>The key concept to understand with this example is that data can come from the URL, not just the JSON body. We can now have two input sources in an API, the Body and the Route.</p>

            <h2>State Behavior</h2>

            <p>So far everything we have done is <code>stateless</code>.</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {something}
                </SyntaxHighlighter>
            </div>

            <p>Nothing is stored and every request has been independent. However, real APIs store data.</p>

            <ul>
                <li>POST <code>/users</code> creates a user</li>
                <li>GET <code>/users</code> returns all users</li>
            </ul>

            <p>To simulate this we will use a list!</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {list}
                </SyntaxHighlighter>
            </div>

            <p>Now our API has memory and data that will persists across requests while the app is running. We can upgrade our mental model...</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {mentalModelState}
                </SyntaxHighlighter>
            </div>

            <h2>Handling Errors</h2>

            <p>To prevent crashes on bad input, it is important for APIs to handle potential errors gracefully.</p>

            <h2>DELETE - Removing data</h2>

            <p>An example URL:</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {deleteMethod}
                </SyntaxHighlighter>
            </div>

            <h2>Review</h2>

            <p>Here is a summary of what our simple APIs look like in action:</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {review}
                </SyntaxHighlighter>
            </div>

            <p>But in the next section we will focus on APIs that look a lot more like this:</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {goal}
                </SyntaxHighlighter>
            </div>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="apis-intro"
            />
        </div>
    )
}