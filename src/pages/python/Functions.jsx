export default function Functions() {
    return (
        <>
            <h1>Functions</h1>

            <h2 id="dynamic-typing">Dynamic Typing</h2>

            <p>Python is <em>dynamically typed</em> which means a variable can store any type, and that type can <em>change</em>.</p>
            <p>For example, if we make a number a variable, we can later change that variable to a string:</p>

            {/* Code */}
            <pre className="hljs"><code><div>speed = <span className="hljs-number">7</span><br />
                speed = <span className="hljs-string">"seven"</span>
            </div></code></pre>

            <p>In most circumstances, it is bad to change the type of a variable. The proper thing to do is to just create a new variable with the different data type.</p>

            <h2 id="what-is-non-dynamic-typing">What is non-dynamic typing?</h2>

            <p>Languages that aren't dynamically typed are <strong>statically typed</strong>. In a statically typed langaguage, if you try to assign a value to a variable of the wrong type, an error would crash the program.</p>

            <h2 id="order-of-functions">Order of functions</h2>

            <p>All functions <em>must</em> be defined before they are used.</p>

            <p>Most Python developers solve the issue of ordering there functions correctly by defining <em>all</em> the functions in their program first, then they call an <strong>entry point</strong> funtion <em>last</em>. That way all of the functions have been read by the Python interpreter before the first one is called.</p>

            <p><em>Note</em> conventionally this <em>entry point</em> function is usually called <code>main</code> to keep things simple and consistent.</p>

            {/* Code */}
            <pre className="hljs"><code className="line-numbers"><div><span className="hljs-function"><span className="hljs-keyword">def</span> <span className="hljs-title">main</span><span className="hljs-params">()</span>:</span><br />
                &nbsp;&nbsp;health = <span className="hljs-number">10</span><br />
                &nbsp;&nbsp;armor = <span className="hljs-number">5</span><br />
                &nbsp;&nbsp;add_armor(health, armor)<br /><br />

                <span className="hljs-function"><span className="hljs-keyword">def</span> <span className="hljs-title">add_armor</span><span className="hljs-params">(h, a)</span>:</span><br />
                &nbsp;&nbsp;new_health = h + a<br />
                &nbsp;&nbsp;print_health(new_health)<br /><br />

                <span className="hljs-function"><span className="hljs-keyword">def</span> <span className="hljs-title">print_health</span><span className="hljs-params">(new_health)</span>:</span><br />
                &nbsp;&nbsp;print(<span className="hljs-string">f"The player now has <span className="hljs-subst">{"{new_health}"}</span> health"</span>)<br /><br />

                <span className="hljs-comment"># call entrypoint last</span><br />
                main()
            </div></code></pre>


            <h2 id="none-return">None Return</h2>

            <p>When no return value is specified in a function, it will automatically return <code>None</code>.</p>

            <h2 id="parameters-vs-arguments">Parameters vs Arguments</h2>

            <p><strong>Parameters</strong> are the names used for inputs when <em>defining</em> a function. <strong>Arguments</strong> are the <em>values</em> of inputs supplied when a function is called.</p>

            <p>So this means that arguments are the <em>actual values</em> that go into the funtion, like <code>69.0</code>, <code>True</code>, or <code>&quot;asian assassins&quot;</code>. Parameters are the names we use in the funtion definition to refer to those values (think of it as the placeholder).</p>


            {/* accordion */}
            <div className="container accordion" id="this-question">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse"
                            data-bs-target="#questionOne" aria-expanded="false" aria-controls="questionOne">
                            _____ are the inputs specified by the function definition.
                        </button>
                    </h2>
                    <div id="questionOne" className="accordion-collapse collapse" data-bs-parent="#this-question">
                        <div className="accordion-body">
                            parameters
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}