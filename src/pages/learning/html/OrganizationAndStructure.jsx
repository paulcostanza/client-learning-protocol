import IDE from '../../../components/IDE'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function OrganizationAndStructure() {
    const quizImports = {
        html: () => import('../../../pages/quiz/database/HTMLQuestions.js')
    }

    const divExample = `<div>
    <h1>I am a heading</h1>
    <p>I am a paragraph</p>
</div>`

    const idHTML = `<h1 id="title">Id Example Page</h1>
<div id="red-box">This div is red</div>`

    const idCSS = `body {
	background: #2d2d2d;
	color: #ccc;
}

a { color: #357abd; }
img { width: 300px; }
footer { font-size: 0.88em; }

/* id example */
#red-box {
  color: red;
}`

    const classHTML = `<div class="box"></div>
<div class="box red-box"></div>
<div class="box blue-box"></div>`

    const classCSS = `body {
	background: #2d2d2d;
	color: #ccc;
}

a { color: #357abd; }
img { width: 300px; }
footer { font-size: 0.88em; }

.box {
  width: 100px;
  height: 100px;
}

.red-box {
  background-color: red;
}

.blue-box {
  background-color: blue;
}`

    const fakeImg = `<p>This is an <img /> element</p>`

    const realImg = `<p>This is an &lt;img /&gt; element</p>`

    const entities = `<h2>&copy;</h2> <!-- Copyright -->
<h2>&reg;</h2> <!-- Registered Trademark -->
<h2>&trade;</h2> <!-- Trademark -->
<h2>&quot;</h2> <!-- Double Quote -->
<h2>&apos;</h2> <!-- Single Quote -->
<h2>&amp;</h2> <!-- Ampersand -->`

    const goodStructuralHierarchy = `<main>
    <h1>Client Learning Protocol</h1>
    <h2>Web Development</h2>
    <h3>Front-end</h3>
    <h3>Databases</h3>
    <h4>Back-end</h4>
    <h2>Embeded Programming</h2>
    <h3>C</h3>
</main>`

    const badStructuralHierarchy = `<div>
    <section>
    <h1>Client Learning Protocol</h1>
    <h3>Introduction to HTML</h3>
    <h2>Learn Frontend Development</h2>
    </section>
    <article>
    <p>
        Here is some
        <h1>Large Text</h1>
    </p>
    </article>
</div>`

    return (
        <div className="container">
            <h1>Organization & Structure</h1>

            <h2>Div elements</h2>

            <p><code>div</code> elements are a generic HTML element that does not hold any semantic meaning. It is used as a generic container to hold other HTML elements. You will mainly use the <code>div</code> element when you want to group HTML elements that will share a set of CSS styles. </p>

            <IDE
                HTMLStart={divExample}
            />

            <p>Later on in the CSS section, you will learn how some elements can be styled by height, width, background color, and all of these can be applied to the <code>div</code>.</p>

            <p>When we go into the semantic section of HTML, you will see how labeling different sections of your webpage is important. The <code>div</code> is very common for this role.</p>

            <h2>Identifiers and Groupings</h2>

            <p>An <code>id</code> attribute provides a unique element identifier for HTML elements. Id names should only be used once per HTML document. Id names <em>cannot</em> have spaces. If your Id name contains multiple words then you can use dashes between the words.</p>

            <IDE
                HTMLStart={idHTML}
                CSSStart={idCSS}
            />

            <p>There are a couple of reasons you would need to identify specific elements in your code. One would be to reference it from other files. For example, we have some CSS code that is targeting the <code>h1</code>'s "Id Example Page", and another targeting <code>div</code>'s "This div is red". The CSS will add to the id of <code>red-box</code>. <code>#</code> is how CSS identifies an <code>id</code> attribute.</p>

            <p>The dash separating words is done on purpose. <code>id</code>'s <em>cannot</em> have spaces in the value. If you do that, the browser would see 2 different values, not one.</p>

            <p>A <code>class</code> is used to group elements for styling and behavior. Unlike Ids, you can reuse the same class name throughout the HTML document. The <code>class</code> value can also have spaces to hold multiple classes.</p>

            <IDE
                HTMLStart={classHTML}
                CSSStart={classCSS}
            />

            <p>The <code>.</code> is used in CSS to identify the class element.</p>

            <h2>HTML Entities</h2>

            <IDE
                HTMLStart={fakeImg}
            />

            <blockquote>
                <em><strong>Wait, why does the text not say</strong></em> <code>This is an &lt;img /&gt; element</code><em><strong>?</strong></em>
            </blockquote>

            <p>The HTML <em>parser</em> sees the less than <code>&lt;</code> symbol followed by an HTML tag name. It will interpret that as an HTML element and not the text like you expected.</p>

            <p>To fix this issue, you can use a couple of entities. A <strong>HTML entity</strong> (aka a character reference) is a set of characters used to represent a reserved character in HTML. Examples include the ampersand and less than symbol. Here we updated the code with them:</p>

            <IDE
                HTMLStart={realImg}
            />

            <p>These character references start with an ampersand sign <code>&</code> and end with a semicolon <code>;</code>. By using a named character reference, the HTML parser will not confuse this with an actual HTML element.</p>

            <p>You will often see them used for symbols:</p>

            <IDE
                HTMLStart={entities}
            />

            <h2>Why is Structural Hierarchy good?</h2>

            <p>Using the right hierarchy is important for accessibility. Assistive technologies, like screen readers, rely on the structure of a web page to determine how to parse and announce that web page to the user.</p>

            <p>Example: using the correct heading elements in their correct order. Much like a text document, you do not want to use heading levels in the incorrect order. Your <code>h1</code> element is your top-level heading. You will rarely have more than one of these on a page, and it should typically come before all of you content.</p>

            <p>Your <code>h2</code> element is your subheading. It should always come after your <code>h1</code> and might come after some introductory text. Unlike <code>h1</code>, you can have multiple <code>h2</code> elements on your page. You will often do this to delineate different sections of content.</p>

            <p>The rest of the header elements should follow the same pattern. You can have multiple heading elements of the same element at the same level. Make sure to <em>never</em> skip a header. It may be tempting to use a specific heading element because of its styling. Instead, you should choose the appropriate element for your document structure and use CSS to achieve the styling you would like.</p>

            <p>Here is an example of good structural Hierarchy:</p>

            <pre><code>
                { }
            </code></pre>

            <IDE
                HTMLStart={goodStructuralHierarchy}
            />

            <p>Here is an example of bad structural Hierarchy:</p>

            <IDE
                HTMLStart={badStructuralHierarchy}
            />

            <p>In the next section we will dive deeper into some more elements that hold meaning and structure, <em>Semantic HTML Elements</em>.</p>

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="organization-and-structure"
            />
        </div>
    )
}