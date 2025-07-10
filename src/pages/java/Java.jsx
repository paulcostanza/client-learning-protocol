export default function Java() {
    return (
        <>
            <main>
                <div className="container" id="space-on-top-of-page">

                    <h2 id="java-keywords">Java Keywords</h2>
                    <p>Part of learning a programming language is learning the commonly used keywords, what they mean, and how to
                        use
                        them. An important note about keywords is that they are reserved and cannot be used for anything other than
                        their designated purpose. Do not worry about memorizing these or even fully understanding them just yet.
                        With
                        time, you will learn what they mean and how to use them.</p>
                    <div className="center">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>abstract</td>
                                    <td>const</td>
                                    <td>final</td>
                                    <td>int</td>
                                    <td>public</td>
                                    <td>throw</td>
                                </tr>
                                <tr>
                                    <td>assert</td>
                                    <td>continue</td>
                                    <td>finally</td>
                                    <td>interface</td>
                                    <td>return</td>
                                    <td>throws</td>
                                </tr>
                                <tr>
                                    <td>boolean</td>
                                    <td>default</td>
                                    <td>float</td>
                                    <td>long</td>
                                    <td>short</td>
                                    <td>transient</td>
                                </tr>
                                <tr>
                                    <td>break</td>
                                    <td>do</td>
                                    <td>for</td>
                                    <td>native</td>
                                    <td>static</td>
                                    <td>true</td>
                                </tr>
                                <tr>
                                    <td>byte</td>
                                    <td>double</td>
                                    <td>goto</td>
                                    <td>new</td>
                                    <td>sticitfp</td>
                                    <td>try</td>
                                </tr>
                                <tr>
                                    <td>case</td>
                                    <td>else</td>
                                    <td>if</td>
                                    <td>null</td>
                                    <td>super</td>
                                    <td>void</td>
                                </tr>
                                <tr>
                                    <td>catch</td>
                                    <td>enum</td>
                                    <td>implements</td>
                                    <td>package</td>
                                    <td>switch</td>
                                    <td>volatile</td>
                                </tr>
                                <tr>
                                    <td>className</td>
                                    <td>false</td>
                                    <td>instanceof</td>
                                    <td>protected</td>
                                    <td>this</td>
                                    <td><img className="emoji" alt="smiley"
                                        src="data:image/png;base64,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" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>



                    <h2 id="java-program-example">Java Program example</h2>
                    <p><em>Note: Code is missing and is being worked on</em></p>
                    {/* <pre class="hljs"><code><div><span class="hljs-keyword">public</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">PayDay</span> </span>{
<span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title">main</span><span class="hljs-params">(String[] args)</span> </span>{
<span class="hljs-keyword">int</span> totalHours = <span class="hljs-number">37</span>;
<span class="hljs-keyword">double</span> grossPay, payRate = <span class="hljs-number">69.0</span>;

grossPay = totalHours * payRate;

System.out.println(<span class="hljs-string">"You made $"</span> + grossPay + <span class="hljs-string">" bucks this week!"</span>);
}
}
</div></code></pre> */}

                    <h4 id="example-of-some-keywords">Example of some <strong>keywords:</strong></h4>
                    <p><code>public</code>, <code>class</code>, <code>public</code>, <code>static</code>, <code>void</code>,
                        <code>int</code>, and <code>double</code>. Always written in lowercase, each keyword has a special meaning
                        in
                        Java. Part of learning a programming language is learning the commonly used keywords, and you will be using
                        these ones a lot!
                    </p>

                    <h4 id="programmer-defined-names">Programmer-defined names:</h4>
                    <p><code>totalHours</code>, <code>payRate</code>, and <code>grossPay</code> are programmer-defined names and in
                        this
                        case, are all <strong>variables</strong> (we'll talk about that in a second). They are not part of the Java
                        language but are names that are made up by the programmer.</p>

                    <h4 id="operators">operators</h4>
                    <p><code>=</code> and <code>*</code>. They perform operations on items of data (aka <strong>operands</strong>).
                        <code>*</code> will multiply two operands together, in this case, <code>totalHours</code> and
                        <code>payRate</code>. The <code>=</code> symbol is called an <strong>assignment operator</strong>. It takes
                        the
                        value of the expression that appears at its right and stores in the variable whose name appears on the left.
                        Try
                        some mental math, any guess to what <code>grossPay</code>'s value is?
                    </p>

                    <h4 id="punctuation">punctuation</h4>
                    <p><code>;</code>. Notice at the end of certain lines we have a semi-colon. This will mark the end of a
                        statement (a
                        certain line of code). There are rules that govern where semicolons are required and where they are not.</p>

                    <h4 id="lines-and-statements">Lines and statements</h4>
                    <p>A line is what you expect...a single line within a body of a program. When a line ends with <code>;</code> it
                        contains something meaningful. When a line is blank and void of any text it is only to make a program more
                        readable for the
                        programmer. Here is an example of a statement from our program:</p>
                    <pre className="hljs"><code><div>System.out.println(<span className="hljs-string">"You made $"</span> + grossPay + <span className="hljs-string">" bucks this week!"</span>);
                    </div></code></pre>
                    <p>This specific statement causes the computer to display a message on the screen. Statements can be a
                        combination
                        of key words, operators, and programmer-defined names. They can be one, or spread out over several lines.
                    </p>



                    <h2 id="the-compiler-and-the-java-virtual-machine">The Compiler and the Java Virtual Machine</h2>
                    <p>Quick definitions:</p>
                    <ul>
                        <li><strong>Text editor:</strong> used to write Java programs and save it to a file.</li>
                        <li><strong>Source code:</strong> the Java programming statements that were written.</li>
                        <li><strong>Source file:</strong> the file your Java source code is saved to. Ends in the extension
                            <em>.java</em>
                        </li>
                    </ul>

                    <ol>
                        <li><strong>Compiler:</strong> What allows your file to run. It translates source code into an executable
                            form.
                            The java compiler translates a Java source file (<code>.java</code>) into a file that contains byte code
                            (<code>.className</code>) instructions. The byte code instructions are considered intermediate code but are
                            not
                            machine language and cannot be executed by the CPU, so instead they are executed by the <strong>Java
                                Virtual
                                Machine</strong>. The JVM is a program that reads Java Byte code instructions and executed them as
                            they
                            are read. For this reason, the JVM is often called an <strong>interpreter</strong>, and Java is often
                            referred to as an interpreted language. Although Java byte code is not machine language for a CPU, it
                            can be
                            considered as machine language for the JVM.</li>
                    </ol>

                    <div className="center">
                        <p><img className="img-fluid d-block mx-auto" src="images/program development process.png"
                            alt="Program Development Process" /></p>
                    </div>

                    <ol start="2">
                        <li><strong>Portability:</strong> The term portable means that a program may be written on one type of
                            computer
                            and then run on a wide variety of computers, with little or no modification necessary. Because Java byte
                            code is the same on all computers, complied Java programs are highly portable, meaning that a compiled
                            Java
                            program is able to run on any computer that has a JVM. Most other programming languages need to use a
                            compiler for <em>each</em> type of computer that the language is going to run on. Example, a separate
                            C++
                            compiler must be created for windows, linux, and mac to run on each of those environments.</li>
                    </ol>

                    <div className="center">
                        <p><img className="img-fluid d-block mx-auto" src="images/portability.png" alt="Portability" /></p>
                    </div>

                    <ol start="3">
                        <li>
                            <p><strong>Compiling and Running a Java Program:</strong> You must compile your Java program to run.
                                Just go
                                to your operating system's command prompt and make sure you are in the same directory or folder
                                where
                                the Java program that you want to compile is located</p>
                            <pre className="hljs"><code><div>javac Filename
                                <span className="hljs-comment">// place the name of file with the .java extension at Filename placeholder</span>
                            </div></code></pre>
                            <p>Using our example above, <code>Filename</code> would be replaced by <code>PayDay.java</code>.</p>
                            <p>After the compiler translates to byte code, the byte code is stored in a file with the
                                <code>.className</code> extention, contained within the same directory. However, you do not use the
                                <code>.className</code> extension when opening the file.
                            </p>
                            <pre className="hljs"><code><div><span className="hljs-comment">// This command runs the Java interpreter (the JVM) and executes the program</span>
                                Java ClassNameFilename
                            </div></code></pre>
                            <p>Continuing with the example, <code>ClassNameFilename</code> would be replaced by <code>PayDay</code>.</p>
                        </li>
                    </ol>



                    <h2 id="object-oriented-programming">Object-Oriented Programming</h2>
                    <p>Java is an example of an OOP language.</p>




                    <h2>Knowledge Check</h2>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#questionFive" aria-expanded="false" aria-controls="questionFive">
                                What is a compiler?
                            </button>
                        </h2>
                        <div id="questionFive" className="accordion-collapse collapse" data-bs-parent="#knowledge-check">
                            <div className="accordion-body">
                                A program that translates source code into machine/intermediate code
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#questionSix" aria-expanded="false" aria-controls="questionSix">
                                What is byte code?
                            </button>
                        </h2>
                        <div id="questionSix" className="accordion-collapse collapse" data-bs-parent="#knowledge-check">
                            <div className="accordion-body">
                                An intermediate code generated by compilers that can be executed by the JVM
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#questionSeven" aria-expanded="false" aria-controls="questionSeven">
                                What is the JVM?
                            </button>
                        </h2>
                        <div id="questionSeven" className="accordion-collapse collapse" data-bs-parent="#knowledge-check">
                            <div className="accordion-body">
                                A virtual machine that executes java byte code
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#qst"
                                aria-expanded="false" aria-controls="qst">
                                The java compiler generates...
                            </button>
                        </h2>
                        <div id="qst" className="accordion-collapse collapse" data-bs-parent="#knowledge-check">
                            <div className="accordion-body">
                                byte code
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>

    )
}