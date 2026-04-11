import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function StringMethods() {
    const quizImports = {
        javaScript: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    const concatExample = `let str1 = 'Hello';
let str2 = 'World';

let result = str1.concat(' ', str2); 
console.log(result); // Hello World`

    const indexOf = `const text = "The quick brown fox jumps over the lazy dog.";
console.log(text.indexOf("fox")); // 16
console.log(text.indexOf("cat")); // -1`

    const includes = `const text = "The quick brown fox jumps over the lazy dog.";
console.log(text.includes("fox")); // true
console.log(text.includes("cat")); // false`

    const slice = `const text = "freeCodeCamp";
console.log(text.slice(0, 4));  // "free"
console.log(text.slice(4, 8));  // "Code"
console.log(text.slice(8, 12)); // "Camp"`

    const toUpperCase = `const text = "Hello, world!";
console.log(text.toUpperCase()); // "HELLO, WORLD!"`

    const toLowerCase = `const text = "HELLO, WORLD!"
console.log(text.toLowerCase()); // "hello, world!"`

    const replace = `const text = "I like cats";
console.log(text.replace("cats", "dogs")); // "I like dogs"`

    const replaceAll = `const text = "I love cats and cats are so much fun!";
console.log(text.replaceAll("cats", "dogs")); // "I love dogs and dogs are so much fun!"
`

    const repeat = `const text = "Nerd Alert! ";
console.log(text.repeat(3)); // "Nerd Alert! Nerd Alert! Nerd Alert! "`

    const trim = `const hello = "   Hello There   "
const start = "*"
const end = "*"

console.log(start + hello.trim() + end)
console.log(start + hello.trimStart() + end)
console.log(start + hello.trimEnd() + end)`

    const trimConsole = `*HelloThere*
*HelloThere   *
*   HelloThere*`

    const charCodeAt = `const letter = "A";
console.log(letter.charCodeAt(0));  // 65`

    const fromCharCode = `const char = String.fromCharCode(65);
console.log(char);  // A`

    return (
        <div className="container">
            <h1>String Methods</h1>

            <blockquote>
                <p>Hold up, what the hell is a method?</p>
            </blockquote>

            <p>In programming, a <code>function</code> is a reusable block of code that performs a specific task and can be called with various inputs. A <code>method</code> is a type of function that is associated with an object, meaning it operates on the data contained <em>within</em> that object.</p>

            <p>In future lessons, we will dive much deeper into how functions, objects, and methods work in JavaScript. For now, it is important to understand that JS has dozens of methods you can use for various data types, like the <code>concat()</code> method for strings.</p>

            <h2><code>concat()</code></h2>

            <p>In addition to the two previous ways we talked about in the last section, you can concatenate strings with the <code>concat()</code> method.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {concatExample}
                </SyntaxHighlighter>
            </div>

            <p>In this example, we use the <code>concat()</code> method to join <code>str1</code>, a space (<code>' '</code>), and <code>str2</code> into a single string.</p>

            <p>What makes this method cool is that you can add as many or as few string elements as you want to concatenate. All you need to do is seperate them by a comma inside the parenthesis.</p>

            <h3>Concatenation review</h3>

            <ul>
                <li><code>+</code> operator is best for simple concatenation, especially when you need to combine a few strings or variables</li>
                <li><code>+=</code> operator is useful when building up a string step by step or appending new content to an existing string variable</li>
                <li>the <code>concat()</code> method is beneficial when you need to concatenate multiple strings together</li>
            </ul>

            <h2><code>indexOf()</code></h2>

            <p><em>Returns an integer</em></p>

            <p>Searches for a substring within a string. If the substring is found, <code>indexOf</code> returns the index of the first occurrence of that substring. If not found, this method returns -1, indicating that the search was not successful.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {indexOf}
                </SyntaxHighlighter>
            </div>

            <h2><code>includes()</code></h2>

            <p><em>Returns a boolean</em></p>

            <p>Used to check if a string contains a specific substring. If the substring is found, the method returns <code>true</code>, otherwise it returns <code>false</code>.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {includes}
                </SyntaxHighlighter>
            </div>

            <h2><code>slice()</code></h2>

            <p><em>Returns a string</em></p>

            <p>Extracts a portion of a string and returns a new string without modifying the original string. It takes two <strong>parameters</strong> (values your method can operate with): the starting index and an (optional) ending index.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {slice}
                </SyntaxHighlighter>
            </div>

            <h2><code>toUpperCase()</code></h2>

            <p><em>Returns a string</em></p>

            <p>Returns a new string with all characters converted to uppercase.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {toUpperCase}
                </SyntaxHighlighter>
            </div>

            <h2><code>toLowerCase()</code></h2>

            <p><em>Returns a string</em></p>

            <p>Returns a new string with all characters converted to lowercase.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {toLowerCase}
                </SyntaxHighlighter>
            </div>

            <h2><code>replace()</code></h2>

            <p><em>Returns a string</em></p>

            <p>Allows you to find the first occurence of a specified value (like a word or a character) in a string and replace it with another value. The method returns a new string with the replacement and leaves the original unchanged because JavaScript strings are immutable.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {replace}
                </SyntaxHighlighter>
            </div>

            <h2><code>replaceAll()</code></h2>

            <p><em>Returns a string</em></p>

            <p>This method allows you to find <em>all</em> occurences of a specified value (a word, character, or pattern) in a string and replace them with another value. It works like <code>replace()</code>, but instead of stopping after the first match, it updates every match found in the string.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {replaceAll}
                </SyntaxHighlighter>
            </div>

            <h2><code>repeat()</code></h2>

            <p><em>Returns a string</em></p>

            <p>Used to repeat a string a specific number of times.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {repeat}
                </SyntaxHighlighter>
            </div>

            <h2><code>trim()</code>, <code>trimStart()</code>, and <code>trimEnd()</code></h2>

            <p><em>All methods return a string</em></p>

            <ul>
                <li><code>trim()</code>: Used to remove whitespace from both the beginning and end of a string</li>
                <li><code>trimStart()</code>: Removes whitespace from the beginning (start) of the string</li>
                <li><code>trimEnd()</code>: Removes whitespace from the end (uh... end) of the string</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {trim}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {trimConsole}
                </SyntaxHighlighter>
            </div>

            <h2>ASCII & Unicode</h2>

            <p><strong>ASCII</strong>, the American Standard Code for Information Interchange, is a character encoding standard used to represent basic English characters using numeric values.</p>

            <p><strong>Unicode</strong> is what JavaScript strings use. Specifically UTF-16 encoding. For the first 128 characters (letters, digits & symbols), the Unicode values match ASCII code. This is why ASCII based examples will work in JS.</p>

            <p>The <code>charCodeAt()</code> method returns the UTF-16 code unit of the character at a specified index.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {charCodeAt}
                </SyntaxHighlighter>
            </div>

            <p>The <code>fromCharCode()</code> method converts an ASCII code into its corresponding character.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {fromCharCode}
                </SyntaxHighlighter>
            </div>

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="string-methods"
            />

        </div>
    )
}