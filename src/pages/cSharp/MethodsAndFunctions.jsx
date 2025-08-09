import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Latex from 'react-latex'

export default function MethodsAndFunctions() {

    const implicitTypeConversion = `byte b = 1;
int i = b;`

    const explicitTypeConvedrsion = `int i = 1;
byte b = i; // won't compile!`

    const doingItAnyway = `int i = 1;
byte b = (byte)i;`

    const casting = `float f = 1.0f;
int i = (int)f;`

    const notCompatible = `string s = "1";
int i = (int)s; // will not compile`

    const convert = `string s = "1";
int i = Convert.ToInt32(s);
int j = int.Parse(s);`
    return (
        <>
            <h1>Methods & Functions</h1>
            <h2 id="type-conversion">Type Conversion</h2>
            <ul>
                <li>implicit type conversion</li>
                <li>explicit type conversion (casting)</li>
                <li>conversion between non-compatible types</li>
            </ul>

            <h4 id="implicit-type-conversion">Implicit type conversion</h4>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {implicitTypeConversion}
                </SyntaxHighlighter>
            </div>

            <p>Since a byte only takes up 1 byte in memory and an int takes up 4 bytes, this easily works! Here is what the binary representation would look like:</p>

            <p>One byte: <Latex children={"00000001"} style={{ textAlign: 'right' }} /></p>
            <p>Four bytes: <Latex children={"00000000 00000000 00000000 00000001"} /></p>

            <p>There is no data lose in this conversion, allowing for the conversion to be implicit.</p>

            <h4 id="explicit-type-conversion">Explicit type conversion</h4>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {explicitTypeConvedrsion}
                </SyntaxHighlighter>
            </div>

            <p>Going the other way, 3 bytes out of 4 bytes will be gone. There is a chance for data loss. Now data loss only happens
                if the value stored is beyond the capacity of a byte. In this example one can be stored in byte, so no data loss
                will happen. If <code>i = 300</code>, there is no way it can fit.</p>

            <p>When the compiler knows there will be a chance for data loss it <em>does not</em> allow implicit type conversion. You
                need to explicity tell the compiler that you are aware of the data loss and you still want to go ahead with the
                conversion. In situations like that, you need to add the prefix of the variable with the target type like so:</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {doingItAnyway}
                </SyntaxHighlighter>
            </div>

            <p>This is what is known as <strong>casting</strong>. Another one:</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {casting}
                </SyntaxHighlighter>
            </div>

            <p>Sometimes you will work with types of data that <em>are not</em> compatible, like so:</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {notCompatible}
                </SyntaxHighlighter>
            </div>

            <p>Since string and int are not compatible they cannot use explicit casting, so we need a different mechanism for
                converting a string to a number. We can either use the convert class or the parse method.</p>

            <h4 id="non-compatible-types">Non-compatible types</h4>

            <p>The <em>convert class</em> is part of .NET framework and is defined in the system namespace. It has a bunch of
                methods for converting various types to other types.</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {convert}
                </SyntaxHighlighter>
            </div>

            <p>Here are some of the methods you can find in the convert class:</p>
            <ul>
                <li><code>ToByte()</code></li>
                <li><code>ToInt16()</code></li>
                <li><code>ToInt32()</code></li>
                <li><code>ToInt64()</code></li>
            </ul>


            <div className="container accordion">
                {/* Question #6 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse"
                            data-bs-target="#questionSix" aria-expanded="false" aria-controls="questionSix">

                            {/* this div cancels out weird effects that happen without it */}
                            <div>
                                <strong>True or False:</strong> C# allows implicit type conversion from <code>int</code> to <code>byte</code> without a cast.
                            </div>

                        </button>
                    </h2>
                    <div id="questionSix" className="accordion-collapse collapse" data-bs-parent="#this-question">
                        <div className="accordion-body">
                            Answer: False
                            <br />
                            Implicit type conversion from <code>int</code> to <code>byte</code> is not allowed because <code>byte</code> has a smaller range than <code>int</code>. For this example, you would need an <em>explicit cast</em>.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}