import IDE from '../../../components/IDE'

export default function OrganizationAndStructure() {
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

    return (
        <div className="container">
            <h1>Organization & Structure</h1>

            <h2>Div elements</h2>

            <p><strong>Div</strong> elements are a generic HTML element that does not hold any semantic meaning. It is used as a generic container to hold other HTML elements.</p>

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
        </div>
    )
}