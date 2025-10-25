import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import IDE from '../../../components/IDE'

export default function Fundamentals() {
    const quizImports = {
        html: () => import('../../../pages/quiz/database/HTMLQuestions.js')
    }

    const cssBasicCode = `body {
background: #fff;
color: #000}`

    const basicHTMLSyntx = `<!-- Some basic HTML syntax -->
<elementName>Content goes here</elementName>
<!-- 
    btw, these are comments. 
    This has no effect on the 
    code and is for explaining!
-->`

    const h1Example = `<h1>Main topic of Webpage</h1>
<h2>Sub-topic</h2>`

    const allHeaders = `<h1>Most important</h1>
<h2>Sub heading</h2>
<h3>Sub sub heading</h3>
<h4>Sub sub sub heading</h4>
<h5>Sub su... you get the idea</h5>
<h6>Least important</h6>`

    const paragraphElement = `<h1>Here is our header</h1>
<p>This is a paragraph, awesome!</p>`

    const defaultCSS = `<h1>Our New Default Styling</h1>

<p>Using some simple <code>CSS</code> makes our stuff look <em>much</em> better, and is way easier on the eyes.</p>`

    return (
        <div className="container">
            <h1>HTML Fundamentals</h1>

            <p><em><strong>HyperText Markup Language</strong></em></p>

            <p><strong>HTML</strong> represents the content and structure of the web page. When you visit a website and see content like paragraphs, headings, links, images, and videos: that is HTML.</p>

            <p>HTML is made up of elements. <strong>Elements</strong> are the building blocks for an HTML document. They represent headings, paragraphs, links, images, and more. Most HTML elements consist of an opening tag (<code>&lt;elementName&gt;</code>) and a closing tag (<code>&lt;/elementName&gt;</code>). They can also be called starting and ending tags.</p>

            <p>Between the tags you have <strong>content</strong>. This content can be text or other HTML elements.</p>

            <IDE
                hasCSS={false}
                HTMLStart={basicHTMLSyntx}
                CSSStart={cssBasicCode}
            />

            <p>What distinguishes an opening tag to a closing tag is the forward slash (<code>/</code>) placed adjacent to the left angle bracket in the closing tag. Some elements do not have a closing tag, which we will talk about later.</p>

            <h2>Heading Elements</h2>

            <p>An <code>h1</code> element is the main heading of a webpage. You should only use one per page.</p>

            <p><code>h2</code> elements represent subheadings. You can have multiple per page.</p>

            <IDE
                hasCSS={false}
                HTMLStart={h1Example}
                CSSStart={cssBasicCode}
            />

            <p>In total there are <em>six</em> heading elements: <code>h1</code> through <code>h6</code>. They are used to show the importance of sections on your webpage, <code>h1</code> being the most important and <code>h6</code> the least important.</p>

            <IDE
                hasCSS={false}
                HTMLStart={allHeaders}
                CSSStart={cssBasicCode}
            />

            <p>Each heading looks a little different! This is because elements in HTML are given default values. They look different because each one is <em><strong>styled</strong></em> differently with different font sizes.</p>

            <h2>Paragraph Element</h2>

            <p>When you need to add a paragraph to a webpage, you can use the <code>p</code> element.</p>

            <IDE
                hasCSS={false}
                HTMLStart={paragraphElement}
                CSSStart={cssBasicCode}
            />

            <blockquote>
                <em>Why does each example look so...boring?</em>
            </blockquote>

            <p>The reason why our examples seem so plain is because HTML is responsible for defining the structure and content for the webpage. We use <em><strong>CSS</strong></em> (Cascading Style Sheets) to add style. Things like colors, spacing, fonts, even layout are manipulated via CSS (which we will get to in a little bit). For now, we will add some default styling to make it easier on the eyes.</p>

            <IDE
                HTMLStart={defaultCSS}
            />

            <p>Do not worry about understanding the CSS code right now, we will get to it in a little bit! But if you are familiar, feel free to play around and experiment. It is the only way you will get better!</p>

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="fundamentals"
            />
        </div>
    )
}