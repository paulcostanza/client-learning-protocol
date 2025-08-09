// images
import compile_c_or_cplusplus from '../../assets/cSharp/compile-c-or-c++.png'
import compile_into_intermediate_language from '../../assets/cSharp/compile into intermediate language.png'
import il_code_into_native_code from '../../assets/cSharp/il-code-into-native-code.png'

export default function Introduction() {
    return (
        <>
            <h1 id="intro">Intro</h1>
            <p>What you will learn:</p>

            <ul>
                <li>difference between C# and .NET</li>
                <li>Common Language Runtime</li>
                <li>classes</li>
                <li>assemblies</li>
                <li>namespaces</li>
                <li>Intermediate Language code</li>
                <li>primitive vs nonprimitive types</li>
            </ul>

            <h2 id="difference-between-c-and-net">Difference between C# and .NET</h2>

            <ul>
                <li>C# is a programming language</li>
                <li>.NET is a framework for building applications on Windows</li>
            </ul>

            <p>What is the .NET framework?</p>
            <ul>
                <li>Common Language Runtime CLR</li>
                <li>Class Library</li>
            </ul>

            <h4 id="clr">CLR</h4>

            <p>Before C#, we had two languages in the C family: C and C++. When compiling the application that uses either language, the compiler translated our code into the <strong>native code</strong> for the machine it was running on.</p>

            <p><img className="img-in-reading" src={compile_c_or_cplusplus} alt="compiling c or c++" /></p>

            <p>If you wrote an application in C++ on a Windows machine with 8086 processor architecture, the compiler would translate the code into the native code for that machine. An issue arises when you have different operating systems and different hardwares. If you took that compiled application on the computer with a different architecture it would not run! Hence, Microsoft created C# and .NET...basiclly they stole Java's concept.</p>

            <p>When compiling code in Java, the code is not translated directly into the machine code, but translated into an
                intermediate language called <strong>bytecode</strong>. We have the exact same concept in C#, with C# using <strong>Intermediate Language</strong>.
            </p>

            <p><img className="img-in-reading" src={compile_into_intermediate_language} alt="compile into intermediate language" /></p>

            <p>Intermediate language code is what your C# program compiles to, and is independent of the computer on which it is
                running. Our next step is to compile the IL Code into the native code or the machine that is running the
                application. This is now the job of CLR (<strong>Common Language Runtime</strong>). CLR is an application that is
                sitting in the memory, whose job it is to translate the IL code into the machine code. This process is called <strong>Just-in-time Compilation (JIT)</strong>.
            </p>

            <blockquote>
                <p><em><strong>Intermediate Language</strong></em> <em>is like a universal assembly language that .NET uses before
                    translating to machine code.</em></p>
            </blockquote>

            <p><img className="img-in-reading" src={il_code_into_native_code} alt="il code into native codes" /></p>

            <p>With this architecture you can write an application in C# and do not need to worry about compiling it into the native
                code for different machines. As long as the machine has CLR, it can run your application.</p>

            <div className="container accordion">
                {/* Question #1 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse"
                            data-bs-target="#questionOne" aria-expanded="false" aria-controls="questionOne">
                            What is the primary purpose of the CLR (common language runtime) in the .NET framework?
                        </button>
                    </h2>
                    <div id="questionOne" className="accordion-collapse collapse" data-bs-parent="#this-question">
                        <div className="accordion-body">
                            Convert IL (<em>intermediate language</em>) code into machine code at runtime.
                        </div>
                    </div>
                </div>

                {/* Question #7 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse"
                            data-bs-target="#questionSeven" aria-expanded="false" aria-controls="questionSeven">
                            Why does C# use IL (intermediate language) instead of compliling directly into machine code?
                        </button>
                    </h2>
                    <div id="questionSeven" className="accordion-collapse collapse" data-bs-parent="#this-question">
                        <div className="accordion-body">
                            So that the code can work on different types of computers. Instead of turning the code into machine code for just one computer when you compile it, it turns into IL first. Then, at runtime, the computer's JIT (<em>just-in-time</em>) compiler turns that IL into machine code that it can run. This lets the same code run on different computers without needing to be recompiled each time.
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}