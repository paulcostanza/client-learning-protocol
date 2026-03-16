import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function ArrayMethods() {
    const mapMethod = `const nums = [1, 2, 3];
    
const result = nums.map(n => {
    if (n > 1) {
        return n * 2;
    }
});

console.log(result);`

    const mapMethodConsole = `[undefined, 4, 6]`

    const callback = `n => {
    if (n > 1) {
        return n * 2;
    }
}`

    const useFilter = `nums.filter(n => n > 1).map(n => n * 2); // [4, 6]`

    return (
        <div className="container">
            <h1>Array Methods</h1>

            <h2><code>.map()</code></h2>

            <p>Let's take a look at an example of using the <code>map</code> method.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {mapMethod}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {mapMethodConsole}
                </SyntaxHighlighter>
            </div>

            <blockquote>Uh... what?</blockquote>

            <p><code>Array.map()</code> always returns an array with the same length as the original array. Each element in the new array is the return value of the callback.</p>

            <p>The callback:</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {callback}
                </SyntaxHighlighter>
            </div>

            <p>For our first iteration we have <code>n = 1</code> which results in <code>if (1 &gt; 1)</code> which is false. No <code>eturn</code> statement runs, so JS returns <code>undefined</code>. The next two iterations work as expected.</p>

            <p>Sidenote: if you want to remove elements, <code>map()</code> is the wrong tool! You would typically use <code>filter</code> first:</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {useFilter}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}