import IDE from '../../../components/IDE'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import SpookyHouse from '../../../assets/html/semantic-html/spooky-house.png'

export default function SemanticHTML() {
    const quizImports = {
        html: () => import('../../../pages/quiz/database/HTMLQuestions.js')
    }

    const fullSemanticDemo = `<header>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
<main>
  <h1>What makes a good Halloween movie?</h1>
  <p>Basics of scary movies and what makes them good or bad.</p>
  <section>
    <h2>Ghosts</h2>
    <article>
      <h3>Supernatural Atmosphere</h3>
      <p>The best ghost stories rely on psychological tension...</p>
      <figure>
        <img src=${SpookyHouse} alt="Spooky Victorian mansion at night">
        <figcaption>Classic haunted house setting</figcaption>
      </figure>
    </article>
  </section>
  <section>
    <h2>Zombies</h2>
    <h3>Remero vs Russo</h3>
    <article>
      <h4>George A. Romero's Vision</h4>
      <p>Romero <em>pioneered</em> the modern zombie genre...</p>
    </article>
    <article>
      <h4>John Russo's Approach</h4>
      <p>Russo took a different path with his zombie narratives...</p>
    </article>
  </section>
</main>

<aside>
    <h2>Horror Movie Resources</h2>
    <nav aria-label="Related resources">
      <ul>
        <li><a href="#reviews">Latest Reviews</a></li>
        <li><a href="#ratings">Movie Ratings</a></li>
        <li><a href="#recommendations">Recommendations</a></li>
      </ul>
    </nav>
  </aside>

<footer>
  <p>&copy; 2069 Halloween Movie Analysis. No rights reserved.</p>
</footer>`
    return (
        <div className="container">
            <h1>Semantic HTML</h1>

            <h2>Semantic HTML...who cares?</h2>

            <p><em>Semantics</em> are the meaning of words, or phrases, in a language. Elements in HTML have their own semantic meaning. If you think of HTML like a text document, you need to take formatting into account such as headlines, images, and other formatting.</p>

            <p>The semantic meaning of an element refers to what special information that element conveys, so most of the elements have special semantic meanings. But why should you care?</p>

            <ul>
                <li>Ensures the best experience for users with assistive technology</li>
                <li>improves your search rankings (search engine optimization)</li>
                <li>improves your development experience</li>
            </ul>

            <p>Here are some very common semantic HTML elements you will come across:</p>

            <ul>
                <li><code>header</code>: represents introductory content or navigational aids for a page or section. Things like site branding, main navigation, or section headings.</li>
                <li><code>nav</code>: represents a section with navigation links</li>
                <li><code>main</code>: used to contain the main content of the web page</li>
                <li><strong>Headers</strong> like <code>h1</code>, <code>h2</code>, etc: used to define the header of a document or section (hope you remembered these guys from before!)</li>
                <li><code>section</code>: used to divide up content into smaller sections</li>
                <li><code>article</code>: represents self-contained content that could stand alone. Great to organize within the <code>section</code> element.</li>
                <li><code>figure</code>: used to contain illustrations and diagrams.</li>
                <li><code>aside</code>: represents content that is off subject, but related to the main content</li>
                <li><code>footer</code>: marks the end of the page, will sometimes have contact info and/or copyright info</li>
                <li><code>em</code>: marks text that has stress emphasis</li>
            </ul>

            <p>Demo of a basic website structure using semantics:</p>

            <IDE
                HTMLStart={fullSemanticDemo}
            />

            <blockquote>
                Since the <code>nav</code> element is used to provide navigation links to other sections in the document/website, you will usually see the <code>nav</code> element used for menus or table of contents with the anchor element like above. The one's above do not currently link to anything yet, more on how they work later.
            </blockquote>

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="semantic-html"
            />

        </div>
    )
}