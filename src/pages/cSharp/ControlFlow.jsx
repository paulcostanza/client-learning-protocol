import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function ControlFlow() {

    const overflowing = `byte number = 255
number = number + 1; // 0, this is overflowing!`


    const checked = `checked 
{
    byte number = 255;

    number = number + 1;
}`

    const scope = `{
    byte a = 1;
    {
        byte b = 2;
        {
            byte c = 3;
        }
    }
}`

    return (
        <>

            <h1>Control Flow</h1>

            <h2 id="overflowing">Overflowing</h2>

            <p>Going over (or under) a data types limit. Example:</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {overflowing}
                </SyntaxHighlighter>
            </div>

            <p>A byte's range is only 0 - 255, so when a limit in either direction is reached it will roll over to the other side.
                C# does not have any overflow checker. If you believe it may happen and want to make sure it does not, then use the <code>checked</code> keyword like so:
            </p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {checked}
                </SyntaxHighlighter>
            </div>

            <p>The overflow will not run at runtime. Instead, an <em>exception</em> will be thrown. If you do not handle the error,
                the program will crash.</p>
            <p>Usually, you would just choose a data type that is more appropriate for your range rather than worrying about this.</p>

            <div className="container accordion">

                {/* Question #5 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse"
                            data-bs-target="#questionFive" aria-expanded="false" aria-controls="questionFive">
                            <div>
                                <strong>True or False:</strong> Overflowing a byte will always crash your program, even without the checked keyword.
                            </div>

                        </button>
                    </h2>
                    <div id="questionFive" className="accordion-collapse collapse" data-bs-parent="#this-question">
                        <div className="accordion-body">
                            <strong>Answer:</strong> False
                            <br />
                            The value will <em>wrap around</em>.
                        </div>
                    </div>
                </div>
            </div>

            <h2 id="scope">Scope</h2>

            <p>Where a variable / constant has meaning and is accessible.</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {scope}
                </SyntaxHighlighter>
            </div>

        </>
    )
}