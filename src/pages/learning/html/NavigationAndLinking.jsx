import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import IDE from '../../../components/IDE'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function NavigationAndLinking() {
    const quizImports = {
        html: () => import('../../../pages/quiz/database/HTMLQuestions.js')
    }

    const anchorElement = `<a href="https://clientlearningprotocol.io">Client Learning Protocol</a>`

    const anchorElementWithBlank = `<a href="https://clientlearningprotocol.io" target="_blank">Visit CLP!</a>`

    const webAbsolutePath = `<a href="https://clientlearningprotocol.io/img/computer.svg">
  View Computer Picture
</a>`

    const localMachineAbsolutePath = `<p>
  Read more on the
  <a href="/Users/user/Desktop/clp/script-code/absolute-vs-relative-paths/pages/about.html">
    About Page
  </a>
</p>`

    const webRelativePath = `<p>
  Read more on the <a href="about.html">About Page</a>
</p>`

    const fileTree = `cool-app/
├─ public/
│  ├─ favicon.ico
│  └─ index.html
└─ src/
   ├─ index.css
   └─ index.js`

    const linkElement = `<link rel="stylesheet" href="./style.css" />`

    const linkInHead = `<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>L I N K | E X A M P L E S</title>
  <link rel="stylesheet" href="./styles.css" />
</head>`

    const multipleLinks = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link 
    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" 
    rel="stylesheet"
>`

    return (
        <div className="container">
            <h1>Navigation & Linking</h1>

            <h2>Links</h2>

            <p>An <strong>anchor element</strong> is used to apply links to a web page. The <code>href</code> attribute is used to specify where the link should go when the user clicks on it.</p>

            <IDE
                HTMLStart={anchorElement}
            />

            <h2>Target attribute types</h2>

            <p>The <code>target</code> attribute tells the browser where to open the URL for the anchor element. There are a few possible values, but the most common one is <code>_blank</code>.</p>

            <ul>
                <li><code>_blank</code>: opens the link in a new browsing context. Typically, this will open in a new tab, but some users might configure their browsers to open a new window instead.</li>
                <li><code>_self</code>: the default value for the <code>target</code> attribute. This opens the link in the current browsing context. In most cases, this will be the current tab or window.</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {anchorElementWithBlank}
                </SyntaxHighlighter>
            </div>

            <p>There are a few others but <s>I am too lazy to talk about them</s> they are not as important or common.</p>

            <h2>Absolute vs. Relative Paths</h2>

            <p>A <strong>path</strong> is a string that specifies the location of a file or directory in a file system. Specifically for web development, paths let developers link to resources like images, stylesheets, scripts, and other web pages. There are three different kinds of <em>path syntax</em> you need to know:</p>

            <ul>
                <li><strong>Slash:</strong> depending on your operating system, you can have backslash (<code>\\</code> for windows) or forward slash (<code>/</code> linux, mac, & web addresses). This is known as the <em>path separator</em> and is used to indicate a break in the text between folder or file names.</li>
                <li><strong>Single dot:</strong> <code>.</code> - points to the current directory</li>
                <li><strong>Double dot:</strong> <code>..</code> - points to the parent directory</li>
            </ul>

            <p><em><strong>Uh...directories?</strong></em></p>

            <p>Just a fancy term for a folder.</p>

            <p>An <strong>absolute path</strong> is a complete link to a resource. It starts from the root directory, includes every other directory, and finally the filename and extension. The <em>root directory</em> refers to the top-level directory or folder in a hierarchy. An absolute path also includes the protocol - which could be <code>http</code>, <code>https</code>, and <code>file</code> and the domain name if the resource is on the web.</p>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {webAbsolutePath}
                </SyntaxHighlighter>
            </div>

            <p>Here we have the <code>https</code> protocol, where <code>clientlearningprotocol.io</code> is the domain name, and <code>computer.svg</code> is the file name.</p>

            <p>What would an absolute path look like if you were on your local machine? It could look something like this:</p>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {localMachineAbsolutePath}
                </SyntaxHighlighter>
            </div>

            <p>Now what if the resource you want to link to is more easily accessible from a point other than the root? A <strong>relative path</strong> specifies the location of a file relative to the directory of the current file. It <em>does not</em> include the protocol or the domain name, making it shorter and more flexible for internal links within the same website.</p>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {webRelativePath}
                </SyntaxHighlighter>
            </div>

            <p>Something like this would work really well if you are on the <code>contact.html</code> page.</p>

            <p><strong>Example</strong></p>

            <p>Take a look at our tree:</p>

            <div className="">
                <SyntaxHighlighter language="terminal" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {fileTree}
                </SyntaxHighlighter>
            </div>

            <ul>
                <li>If your <code>public/index.html</code> file needed to load the <code>favicon.ico</code> file, you would use a relative path with a single dot to access the current directory: <code>./favicon.ico</code>.</li>
                <li>If your <code>public/index.html</code> file needed to load the <code>index.css</code> file, you would use a relative path with double dots to navigate to the parent <code>cool-app</code> directory first, then to the <code>src</code> directory, and finally to your file: <code>../src/index.css</code>.</li>
            </ul>

            <h2>Link element</h2>

            <p>The <code>link</code> element is used to connect to external resources like stylesheets, site icons, and font links. Here is some basic syntax for using the <code>link</code> element for an external CSS file:</p>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {linkElement}
                </SyntaxHighlighter>
            </div>

            <p>The <code>rel</code> attribute is used to specify the relationship between the linked resource and the HTML document. For this specific instance, we need to specify that this linked resource is a <code>stylesheet</code>.</p>

            <blockquote>
                <p>It is considered best practice to separate your HTML and CSS into different files. Developers will use the <code>link</code> element for their external CSS file instead of writing everything in the HTML document.</p>
            </blockquote>

            <p>The <code>href</code> attribute is used to specify the location of the URL for the external resource. The <code>dot</code> followed by a forward slash in the example tells the computer to look in the current folder, or <em>directory</em>, for the <code>styles.css</code> file.</p>

            <p>The <code>link</code> element should be placed inside the <code>head</code> element like so:</p>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {linkInHead}
                </SyntaxHighlighter>
            </div>

            <p>Often times you will see multiple <code>link</code> elements inside of a codebase. Example, adding in extra fonts:</p>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {multipleLinks}
                </SyntaxHighlighter>
            </div>

            <p>Here we are linking to a type of monospace font that I found from Google Fonts. Google Fonts is a set of free and open source custom fonts that you can use inside any project. You simply pick the style and settings for your font and then plug in the code into your project. They use a lot of similar attributes we have seen before, and some we have not!</p>

            <p><em><strong>Woah that was a lot of code! What is head, meta, and title?!</strong></em></p>

            <blockquote>
                <p>Enter: Document Architecture</p>
            </blockquote>

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="navigation-and-linking"
            />
        </div>
    )
}