import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Strings() {
    const lettersOnly = `original_string = "Hello123World!6789"
letters_only = "".join([char for char in original_string if char.isalpha()])
print(letters_only)`

    const lettersOnlyOutput = `Helloworld`
    return (
        <div className="container">
            <h1>Strings</h1>

            <h2>Quick methods reference sheet</h2>

            <ul>
                <li><code>.lower()</code> converts string to lowercase</li>
                <li><code>.islower()</code> returns a bollean if all characters are lowercase, ignores space, numbers, and symbols</li>
                <li><code>.isalpha()</code> returns a boolean if all characters are letters</li>
                <li><code>isalnum()</code> returns a bollean if all characters are alphanumeric (a-z, A-Z, 0-9)</li>
                <li><code></code></li>
            </ul>

            <h2>Quick tricks</h2>

            <p>Grab only the letters from a string with list concatenation</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {lettersOnly}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {lettersOnlyOutput}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}