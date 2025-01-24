export default function Scope() {
    return (
        <>
            <h1 id="scope">Scope</h1>

            <p><strong>Scope</strong> refers to <em>where</em> a variable or function name is available to be used.</p>

            <h2 id="weird-python-scope-issue">Weird python scope issue</h2>

            {/* Code */}
            <pre className="hljs"><code><div><span className="hljs-function"><span className="hljs-keyword">def</span> <span className="hljs-title">get_names</span><span className="hljs-params">()</span>:</span><br />
                &nbsp;&nbsp;names = [<span className="hljs-string">"paul"</span>, <span className="hljs-string">"sally"</span>, <span className="hljs-string">"jimmy"</span>]<br /><br />
                &nbsp;&nbsp;<span className="hljs-keyword">for</span> name <span className="hljs-keyword">in</span> names:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;x = name<br />
                &nbsp;&nbsp;print(x)
            </div></code></pre>

            <p>What does python print to the console in the example above?</p>

            <p>Believe it or not, it does not produce <code>None</code>, but it will print out <code>jimmy</code>! Even though <code>x</code> is outside of the <code>for</code> loop scope, python knows what it is. This is because in python, variables are scoped to their function.</p>

            <p>It's a little weird and not common among other programming languages. Try not to take advantage of this little quirk, you may form some bad habbits and have other programmers not care too much for your coding style.</p>



        </>
    )
}