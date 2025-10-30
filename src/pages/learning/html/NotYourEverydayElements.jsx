import IDE from '../../../components/IDE'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function NotYourEverydayElements() {
    const quizImports = {
        html: () => import('../../../pages/quiz/database/HTMLQuestions.js')
    }

    const blockquoteExample = `<blockquote cite="https://genius.com/Limp-bizkit-nookie-lyrics">
  "I did it all for the nookie"
</blockquote>`

    const blockquoteWithParagraphsExample = `<blockquote cite="https://genius.com/Limp-bizkit-nookie-lyrics">
    <p>(Hey) Like a chump</p>
    <p>(Hey) I'm like a chump</p>
    <p>(Hey) Like a chump</p>
    <p>(Hey) Like a chump</p>
    <p>(Hey) I'm like a chump</p>
    <p>(Hey) Like a chump</p>
    <p>(Hey) Like a chump</p>
</blockquote>`

    const visualCite = `<div>
  <blockquote cite="https://genius.com/Limp-bizkit-nookie-lyrics">
    She put my tender heart in a blender, and still, I surrendered
  </blockquote>
  <p>—Limp Bizkit, <cite>Nookie</cite></p>
</div>`

    const inlineQuote = `<p>
  As Fred Durst said, <q cite="https://genius.com/Limp-bizkit-nookie-lyrics">So you can take that cookie, and stick it up your...</q>
</p>`

    const superscriptExample = `<p>6<sup>9</sup> is 10,077,696.</p>`

    const subscriptExample = `<!-- chemical representation for Carbon dioxide -->
<p>CO<sub>2</sub></p>`

    const codeExample = `<p>To set the text color to pink in CSS, use the following code: <code>color: pink;</code></p>`

    const preformattedCodeExample = `<p>How to change the font color of your website:</p> 
<pre>
  <code>
    body {
      color: red;
    }
  </code>
</pre>`

    const strikethroughExample = `<p><s>Tomorrow I will go for a jog at noon.</s></p>

<p>Due to unforeseen laziness, I'm going to Dairy Queen.</p>`

    const abbreviationExample = `<p>
  <abbr title="HyperText Markup Language">HTML</abbr> is the foundation of the web.
</p>`

    return (
        <div className="container">
            <h1>Not Your Everyday Elements</h1>

            <p>These aren't super common elements you would see everyday, but this is my website, so I say learn it!</p>

            <h2>How do Block and Inline Quotes Work?</h2>

            <p>In HTML, quoted elements are used to distinguish quoted text from the surrounding content. This gives the quoted text a format that is easy to identify.</p>

            <p>You should use the <strong>block quotation element</strong> for representing a section quoted from another source. It is mainly used for extended quotation. If the source of the quote has an address, you can cite it with the <code>cite</code> attribute. The value of this attribute should be a valid URL.</p>

            <IDE
                HTMLStart={blockquoteExample}
            />

            <p>While the <code>cite</code> attribute does not change the presentation of the block quote, it is very helpful for giving screen readers and search engines more information about the quote.</p>

            <p>If you want to start and end the block quote with quotation marks, you may need to write them explicitly within the text. You can write the text directly within the block quotation element like in the above example, or wrap it within one or more paragraph elements. This is helpful when the text has multiple paragraphs, but you want to keep them within the same block quote. Example:</p>

            <IDE
                HTMLStart={blockquoteWithParagraphsExample}
            />

            <p>All the paragraphs are contained within the same block quotation element, so they are part of the same quotation. You can see that the element has a <code>cite</code> attribute with the URL of the source.</p>

            <p>You may have been wondering how to <em>visually</em> source the <code>cite</code> attribute for users. In this case, just add a citation element, also named <code>cite</code>, outside of the block quotation element. The citation element is an HTML element that you can use to mark up the title of a referenced creative work like a book article, song, film, website, research paper, whatever.</p>

            <IDE
                HTMLStart={visualCite}
            />

            <p>Here we see that the block quotation element contains quoted text. Below the element you can see a paragraph element with the name of the author, followed by a citation element. The citation element contains the title of the song where the quotation came from.</p>

            <p>You should use block quotes like these for long quotations from other sources, but sometimes you will only need to quote a few words within a larger paragraph. This is exactly what the inline quotation element is for! Most modern browsers will add quotation marks around the inline quote automatically when you use this element.</p>

            <IDE
                HTMLStart={inlineQuote}
            />

            <p>This works exactly the same as it did with the block quotation element. You can see a paragraph that contains the inline quote from the inline quotation element. There won't be any visual changes, but it gives screen readers and search engines more information about the quote.</p>

            <blockquote>
                You should use block quotes for extended quotations from other sources and inline quotes for short quotations from other sources that should be part of existing paragraphs.
            </blockquote>

            <h2>Displaying Mathematical Equations and Chemical Formulas in HTML</h2>

            <p>The <strong>superscript</strong> element is used to display a piece of text as a superscript. A superscript is a symbol or letter printed above the normal line of text.</p>

            <IDE
                HTMLStart={superscriptExample}
            />

            <p>In this example, the number 9 is wrapped in <code>sup</code> tags to represent the superscript inside the paragraph. In the output window you can see that the second number 9 is smaller and slightly higher than the number 6.</p>

            <p>Now to represent chemical equations inside HTML, you would use the <strong>subscript element</strong>. This element uses a subscript which displays a lowered baseline using smaller text.</p>

            <IDE
                HTMLStart={subscriptExample}
            />

            <p>The number 2 is wrapped inside the <code>sub</code> tags to illustrate that the character should be a subscript.</p>

            <blockquote>
                It is important to note that superscript and subscript elements should <em>only</em> be used for typographical reasons. If you want to style a piece of text with a raised/lowered baseline, then you should use CSS instead of the superscript/subscript element.
            </blockquote>

            <h2>Representing Computer Code in HTML</h2>

            <p>The inline <strong>code element</strong> is used to represent short snippets of code inside text. Common use cases for the code element would be for technical articles and documentation pages.</p>

            <IDE
                HTMLStart={codeExample}
            />

            <p>The CSS <code>color</code> property is used to set the text pink in the example above. By wrapping this code snippet inside of <code>code</code> tags, it communicates to the browser that the text is a piece of inline code.</p>

            <p>The browser applies a couple of default styles for content inside of the <code>code</code> element, include the monospaced font.</p>

            <p>Now <code>code</code> is meant to represent a single line of code. If you want to represent multiple lines of code, you will need to place a <code>code</code> element inside a preformatted text element.</p>

            <p>The <strong>preformatted text element</strong> is used to represent preformatted text...obviously lol.</p>

            <IDE
                HTMLStart={preformattedCodeExample}
            />

            <p>When using the <code>pre</code> element, you will need to be mindful of spacing because it will display exactly as written inside the HTML document.</p>

            <blockquote>
                For short inline examples, use <code>code</code>, and for displaying longer code snippets, use both <code>pre</code> and <code>code</code>.
            </blockquote>

            <h2>The strikethrough element</h2>

            <p>The strikethrough element is used to represent text that is no longer accurate or relevant.</p>

            <IDE
                HTMLStart={strikethroughExample}
            />

            <h2>The abbreviation element</h2>

            <p>The <code>abbr</code> element is used to represent an abbreviation or acronym. To help users understand what the abbreviation or acronym is, you can show its full form, a human readable description, with the <code>title</code> attribute.</p>

            <IDE
                HTMLStart={abbreviationExample}
            />

            <p>The <code>title</code> attribute only shows up on screen if using a mouse. Hover over it to read the description. It is also a super helpful element for those with accessibility needs.</p>

            <hr />

            <p>More skipped elements I was too lazy to write about. Personally, I never really use these which is why I did not add them.</p>

            <ul>
                <li><code>address</code></li>
                <li><code>time</code></li>
                <li><code>datetime</code></li>
                <li>description lists</li>
                <li>idiomatic text elements</li>
                <li>abbreviation elements</li>
            </ul>

            <p>And there are wayyy more to the list too! Make sure to never stop exploring and learning.</p>

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="not-your-everday-elements"
            />
        </div>
    )
}