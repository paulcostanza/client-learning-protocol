import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function IntroToNodeJs() {
    const quizImports = {
        javaScript: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    return (
        <div className="container">
            <h1>Intro to Node.js</h1>

            <p>Up to this point you have been writing client-side code with JavaScript. This is code that runs on the <em>client side</em> of a web application, typically in the web browser.</p>

            <p>Client-side JS is great but has limitations for more complex tasks:</p>

            <ul>
                <li>Restricted access to local files</li>
                <li>Not designed for handling complex application logic</li>
                <li>Potential security concerns around sensitive information and/or database credentials</li>
            </ul>

            <p>The reason JS has these limitations is because it was <em>initially designed</em> to run exclusively on web browsers. See, the web browser provides the environment that is needed to run JS code, including the JavaScript Engine. They also provide access to the DOM so you can access HTML elements in your code.</p>

            <h2>What is Node.js?</h2>

            <p>Enter Node.js... <em>an open-source, cross-platform JavaScript runtime environment.</em></p>

            <blockquote>
                <p>Say what?</p>
            </blockquote>

            <p>Node.js is open source because its code is publicly available and maintained by a large community of developers. It is cross-platform because it works on any operating system, including Windows, macOS, and linux. Node is a JS runtime environment because it allows you to run JS code <em>outside</em> of a browser.</p>

            <p>Node.js has a ton of range, including its use to build web servers and APIs that handle HTTP requests, command-line tools, automation scripts and backends that power web/mobile applications, and so on.</p>

            <p>If you are developing a website or web application that interacts with a database or handles complex data, then you have a reason to test out Node.js!</p>

            <h2>Browser vs Node runtime environment</h2>

            <p>The browser environment is primarily designed for front-end web development, so it runs <em>client-side</em> JavaScript.</p>

            <p>Node runtime environment is primarily designed for back-end web development, so it runs <em>server-side</em> JS.</p>

            <p>Client-side and server-side determines the APIs that they offer. For example, from the browser, you can access the DOM API, but there are restrictions for accessing the local file system, as they cannot freely read or write arbitrary files. In contrast, from the Node runtime environment, you can access almost all system resources, including the file system, but not the DOM.</p>

            <p>Both JS environments provide a <strong>global object</strong>:</p>

            <ul>
                <li>In the browser JS runtime, this is called <code>window</code>. This <code>window</code> object provides access to browser-related functionalities, such as access to methods for manipulating the DOM, managing cookies, and handling browser events.</li>
                <li>In Node.js, this global object is called <code>global</code> (wow, real original). The <code>global</code> object provides access to Node.js specific functionalities, such as built-in modules for working with local files, networking, and interacting with the operating system.</li>
                <li>Modern JS provides <code>globalThis</code>, which is a standardized global object that works in both browsers and Node.</li>
            </ul>

            <blockquote>
                <p>Note: You can choose the version of Node.js you want to use in your server. However, you have <strong>no</strong> control over the version of the browser environment that your users will use to visit your website.</p>
            </blockquote>

            <h2>Pros and cons</h2>

            <p>Node.js is awesome because it enables us to use JavaScript for both the front-end and back-end, allowing us to skip having to learn another programming language. Node has a non-blocking, event-driven architecture that is great for developing real-time applications where responsiveness and efficiency are essential for creating a good user experience.</p>

            <p>Enter: threads. A <strong>thread</strong> is an independent path of execution within a process. A process may contain one or more threads that execute code.</p>

            <p>Node's architecture relies on a single thread and event loop that can effectively handle a large number of simultaneous requests and input/output operations. This makes it perfect for applications that require handling multiple requests simultaneously.</p>

            <p>When working with Node.js you also have access to <code>npm</code>, a package manager for Node.js. <code>npm</code> is a powerful tool that allows you to install and manage packages and modules for your projects. You will find packages for many different purposes, including...</p>

            <ul>

                <li>handling HTTP requests</li>
                <li>working with databases</li>
                <li>formatting dates and times</li>
                <li>testing code</li>
                <li>a whole lot more</li>
            </ul>

            <p>By using packages, you can reuse code that was already written, tested, and shared by other developers to make your workflow faster and more efficient.</p>

            <h3>And now the bad...</h3>

            <p>Node does have its disadvantages and limitations as well.</p>

            <p>As previously discussed, it only runs one thread at a time. This means that it can only handle one JavaScript operation at a time. While its architecture allows it to be efficient for handling concurrent (simultaneous) requests without blocking this thread, CPU-intensive tasks may block the main thread and result in performance issues. CPU-intensive tasks can include complex mathematical operations, image/video processing, and cryptography. There are ways to overcome this, but they usually increase the complexity of the application.</p>

            <p>Node also relies on asynchronous programming. In <em>asynchronous programming</em>, a task that may take a long time to run is started, but instead of waiting until it is completed, the main program continues running while the asynchronous task runs in in the background. Once the task is completed, the program handles the result.</p>

            <p>This process often involves what we know as <strong>callbacks</strong> which are functions that define what happens when the asynchronous operations are completed. The asynchronous nature of Node.js can potentially make the code more difficult to read, understand, and debug.</p>

            <blockquote>
                <p>Historically, asynchronous code relied heavily on callbacks. Modern Node.js code more commonly uses Promises and the async/await syntax, which make asynchronous code easier to read and maintain.</p>
            </blockquote>

            <p>You need to also be careful when choosing packages from <code>npm</code>, the Node Package Manager, because some of them may not be constantly maintained, so they may introduce vulnerabilities into your own application!</p>

            <h2>Installing Node</h2>

            <p>It is <em>highly</em> recommended that you install a tool called NVM (Node Version Manager). As its name implies, NVM is a tool for managing multiple versions of Node.js on the same computer.</p>

            <p>Setting up this tool from the start will help you in the future because you might need to switch between different versions of Node.js for different projects. NVM allows you to do this very easily.</p>

            <blockquote>
                <p>Please take a break from the material to download NVM. Downloading NVM for macOS/Linux is a lot easier than Windows. For Windows users I suggest setting up WSL (Windows Subsystem for Linux).</p>
            </blockquote>

            <p>Once you have NVM installed, you have access to some commands in the terminal:</p>

            <ul>
                <li><code>nvm ls</code>: list all installed versions of Node.js and check the one that is currently being used</li>
                <li><code>nvm use version_num</code>switch to node version <code>version_num</code></li>
                <li><code>node -v</code>: check your current version of Node.js</li>
                <li><code>npm -v</code>: check your current version of npm</li>
                <li><code>node file.js</code>: runs the JavaScript file that you specify in the currently active Node.js runtime</li>
                <li><code>npm init</code>: create a new Node.js project by creating a <code>package.json</code> file that tracks its details and dependencies</li>
                <li><code>npm install package_name</code>: install a specific package</li>
            </ul>

            <p>When you run the <code>npm init</code> command, it will walk you through an interactive CLI guide for setting up the <code>package.json</code> file. It will ask you questions for the project name, description, version, etc. If you want to start with a default <code>package.json</code> file, you can use the <code>npm init -y</code> or <code>npm init -yes</code> commands.</p>

            <p>When you run <code>npm install package_name</code>, you can exclude any specific package_name (meaning just type <code>npm install</code>) to install all the dependencies listed in the <code>package.json</code> file of a project. This is helpful when you clone a project and need to download a lot of sh!t without having to check each dependency manually.</p>

            <h2>Node.js REPL</h2>

            <p>To enter Node's <strong>REPL</strong> (read, evaluate, print, loop), simply enter <code>node</code> into the terminal without a command. REPL is great for typing in any expression and printing results, without having to constantly add <code>console.log()</code> to everything.</p>

            <ul>
                <li>Variables declared in the REPL persist for the rest of your session. You can reference them in later expressions.</li>
                <li>The REPL provides a special variable, <code>_</code>, that always holds the result of the last evaluated expression. You can use it in any subsequent expression without re-typing the value.</li>
                <li>To exit, type <code>.exit</code> or hit Ctrl+C on your keyboard.</li>
            </ul>

            <blockquote>
                <p>I have never used Node.js's REPL, but it seems cool!</p>
            </blockquote>

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="intro-to-node-js"
            />

        </div>
    )
}