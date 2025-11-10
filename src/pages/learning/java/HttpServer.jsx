export default function HttpServer() {
    return (
        <div className="container">
            <h1>HTTP Sever section foo...</h1>

            <p>Just a general list of some random stuff...</p>

            <hr />

            <h4>When a web browser connects to a simple Java HTTP server and sends a request (to a web page for example), what does your server typically send <em>back</em> to the browser in response?</h4>

            <p>It sends a response. The response includes:</p>

            <ul>
                <li>A <strong>status line</strong> (<code>HTTP/1.1 200 OK</code>)</li>
                <li>Some <strong>headers</strong> (<code>Content-Length</code>, <code>Content-Type</code>)</li>
                <li>The <strong>body</strong> (like the HTML of the webpage)</li>
            </ul>

            <p>So your server receives a <strong>request</strong> -&gt; processes it -&gt; sends back a <strong>response</strong>.</p>

            <hr />

            <h4>In the Java code for a simple HTTP server, you often see something like this inside the response: <code>"HTTP/1.1 200 OK\r\n"</code>. What does the <code>200 OK</code> part mean?</h4>

            <p><code>200 OK</code> is a HTTP status line, and the number is a status code. In this case, <code>200</code> means the request was successful. </p>
        </div>
    )
}