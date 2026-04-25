import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function APIsControllerClass() {
    const quizImports = {
        cSharp: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    const simpleAPI = `app.MapGet("/hello", () => "Hello");`

    const realAPI = `[HttpGet("/hello")]
public string Hello()
{
    return "Hello";
}`

    const apiStartingPoint = `builder.Services.AddControllers();
app.MapControllers();`

    const userClass = `public class User
{
    public string Name { get; set; }
}`

    const cindy = `{ "name": "Cindy" }`

    const fromBody = `[HttpPost]
public string CreateUser([FromBody] User user)
{
    return user.Name;
}`

    const iActionResult = `[HttpGet("{id}")]
public IActionResult GetUser(int id)
{
    if (id <= 0)
        return BadRequest();

    return Ok(new { id = id, name = "Paul" });
}`

    const ok = `return Ok(new { name = "Paul" });`

    return (
        <div className="container">
            <h1>APIs: Controller Class</h1>

            <p>A <strong>controller</strong> is a function that runs when someone hits a URL. This is the next evolutionary step with APIs in C#. A controller lives inside of a <strong>controller class</strong>.</p>

            <p>These two api's are equal:</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {simpleAPI}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {realAPI}
                </SyntaxHighlighter>
            </div>

            <blockquote>
                <p>You would never need to write the same API two different ways in a project, this is just for demonstration purposes.</p>
            </blockquote>

            <p>If someone goes to <code>/hello</code> in either case, these function each return <code>"Hello"</code>.</p>

            <p>The starting point for a controller would be:</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {apiStartingPoint}
                </SyntaxHighlighter>
            </div>

            <ul>
                <li><code>builder.Services.AddControllers();</code> tells ASP.NET that we have a controller class and want to use them</li>
                <li><code>app.MapControllers();</code> says to look at those controllers and connect their routes (the url that will trigger the code)</li>
            </ul>

            <h2>Keyword definitions</h2>

            <p>Let's go over some common keywords you will see while learning APIs.</p>

            <h3><code>[ApiController]</code></h3>

            <p>Auto blocks bad data being sent to your controller. Example:</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {userClass}
                </SyntaxHighlighter>
            </div>

            <p>We want good data for this, somthing like:</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {cindy}
                </SyntaxHighlighter>
            </div>

            <p>However, if we get bad data, such as a missing <code>name</code> or it does not match waht the method expects, using <code>[ApiController]</code> automatically rejects bad data. It...</p>

            <ul>
                <li>stops the request early</li>
                <li>returns a 400 bad request</li>
                <li>does not run the method</li>
            </ul>

            <h3><code>[FromBody]</code></h3>

            <p>Refers to the data from the request body. It then gives it to the method. It just specificly detains the where the data is coming from.</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {fromBody}
                </SyntaxHighlighter>
            </div>

            <h3><code>IActionResult</code></h3>

            <p>Returns a response.</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {iActionResult}
                </SyntaxHighlighter>
            </div>

            <h3><code>Ok</code></h3>

            <p>Throws a <strong>200 Ok</strong> response with the data.</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {ok}
                </SyntaxHighlighter>
            </div>

            <h3><code>BadRequest()</code></h3>

            <p>Returns a 400 response. Used to catch an error, such as bad data, is being sent.</p>











            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="control-flow"
            />
        </div>
    )
}