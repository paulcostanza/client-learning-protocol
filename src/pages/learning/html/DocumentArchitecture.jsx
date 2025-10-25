import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import IDE from '../../../components/IDE'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import SatoshiNakamoto from '../../../assets/html/documentarchitecture/satoshinakamoto.png'

export default function DocumentArchitecture() {
    const quizImports = {
        html: () => import('../../../pages/quiz/database/HTMLQuestions.js')
    }

    const boilerplateExample = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
            integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="style.css">
        <title>CLP</title>
    </head>
    <body>
        <h1>Hello world!</h1>
        <script src="script.js" async defer></script>
    </body>
</html>`

    const structureExample = `<main>
    <h1>Paul's Website</h1>
    <section>
        <h2>About Me</h2>
        <p>Hi, I am Paul and this is my website.</p>
    </section>
    <section>
        <h2>About the site</h2>
        <p>Here we have <a href="https://clientlearningprotcol.io">C L P</a> for all of your educational needs for programming.</p>
    </section>
</main>
<hr />
<footer>
    <p>
        No &copy; steal what you want
    </p>
</footer>`

    const strongImportantExample = `<ul>
    <li><strong>Important:</strong> Make sure to wear safety goggles.</li>
    <li><strong>Also important:</strong> Bring a poncho.</li>
</ul>`

    const listItems = `<h1>Food</h1>

<h2>My Favorites</h2>
<ol>
    <li>Tacos</li>
    <li>Pizza</li>
    <li>Sushi</li>
</ol>

<h2>Runners up</h2>
<ul>
    <li>Steak</li>
    <li>Chicken</li>
    <li>Pasta</li>
</ul>`

    const figureExample = `<figure>
    <img src="${SatoshiNakamoto}" alt="Satoshi Nakamoto in action">
    <figcaption>Satoshi Nakamoto coding what would eventually become the Bitcoin protocol.</figcaption> 
</figure>`

    return (
        <div className="container">
            <h1>Document Architecture</h1>

            <h2>HTML boilerplate</h2>

            <p>The <strong>boilerplate</strong> is a template for your webpage. Think of it like the foundation for your house. It includes the basic structure and essential elements every HTML document needs to run online. It saves you time and helps ensure your pages are set up properly. Here is an example:</p>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {boilerplateExample}
                </SyntaxHighlighter>
            </div>

            <p>Here are some of the key parts of this boilerplate:</p>

            <ul>
                <li><code>DOCTYPE</code>: used to tell browsers which version of HTML you are using.</li>
                <li><code>html</code>: represents the top level element or the <em>root</em> of an HTML document. To specify the language for the document, you should use the <code>lang</code> attribute.</li>
                <li><code>head</code>: the <code>head</code> section contains important meta data which is behind-the-scenes information needed for browsers and search engines.</li>
                <li><code>meta</code>: represents your site's metadata. These elements have details about things like character encoding and how websites like Facebook should preview your page's link and more.</li>
                <li><code>title</code>: used to set the text that appears in the browser tab or window</li>
                <li><strong>UTF-8 character encoding:</strong> UTF-8, or UCS Transformation Format 8, is a standardized character encoding widely used on the web. Character encoding is the method computers use to store characters as data. The <code>charset</code> attribute is used inside of a <code>meta</code> element to set the character encoding to UTF-8.</li>
                <li><code>body</code>: where all of your content goes. Headers, paragraphs, images, and any elements used for content.</li>
            </ul>

            <p>There is a lot more that is in-depth about what is going on, but don't sweat it! In programming, it will be near impossible to know every little thing and every little detail that goes along with it until you hit that 20-25 year mark. As a noob, if you stop every 5 minutes to master the little things that won't have an obvious effect on your project, you will never get anything done.</p>

            <p>Be comfortable with the fact you will work in a code base and not understand every single thing that is going on at first. Of course you <em>should</em> aim for details and precision, but do not let that hold you back from moving forward! Boilerplate is nice because it is a great way to start you off without having to do the heavy lifting yourself, because sometimes you don't even know what you are supposed to lift. There are various boilerplates you can look up. Your favorite IDE probably even has one!</p>

            <h2>Common HTML elements</h2>

            <p>Here are some of the most common elements you will encounter. Some you are already familary with (headers, paragraphs, images, body) and others you are seeing for the first time. Like any skill, the best way to get used to these is by practice and repetition. Play around in the coding environments, combine stuff, breaking things, and try out any ideas you may have.</p>

            <ul>
                <li><strong>Ordered and unordered list elements:</strong> to create an ordered list of items you should use the <code>ol</code> element with one or more <code>li</code> elements nested inside. For an unordered list of items with bullet points replace <code>ol</code> with <code>ul</code>.</li>
            </ul>

            <IDE
                HTMLStart={listItems}
            />

            <ul>
                <li><strong>Strong importance element:</strong> used to place strong emphasis on text to indicate a sense of urgency and seriousness. Found within any text element.</li>
            </ul>

            <IDE
                HTMLStart={strongImportantExample}
            />

            <ul>
                <li><strong><code>figure</code> and <code>figcaption</code> elements:</strong> the <code>figure</code> element is used to group content like images and diagrams. The <code>figcaption</code> element is used to represent a caption for the content inside the <code>figure</code> element.</li>
            </ul>

            <IDE
                HTMLStart={figureExample}
            />

            <ul>
                <li><strong><code>main</code> element:</strong> used to represent the main content for a web page</li>
                <li><strong><code>section</code> elements:</strong> used to divide up content into smaller sections</li>
                <li><strong><code>footer</code> element:</strong> placed at the bottom of the HTML document and usually contains copyright information and other important page links.</li>
                <li><strong><code>hr</code> element:</strong> the <em>horizontal rule</em> is a self-closing element that is used to seperate content.</li>
            </ul>

            <IDE
                HTMLStart={structureExample}
            />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="document-architecture"
            />
        </div>
    )
}