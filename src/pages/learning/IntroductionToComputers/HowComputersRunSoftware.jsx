import CompilingProcess from '../../../assets/introToComp/howComputersRunSoftware/compiling process.png'
import InterpretationProcess from '../../../assets/introToComp/howComputersRunSoftware/interpretation process.png'
import CrossPlatform from '../../../assets/introToComp/howComputersRunSoftware/cross platform.png'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function HowComputersRunSoftware() {
    const quizImports = {
        go: () => import('../../../pages/quiz/database/IntroToCompQuestions.js')
    }

    return (
        <div>
            <h1>How Computers Run Software</h1>

            <h2>Machine Language</h2>

            <p>A computer&apos;s CPU is incapable of understanding C++, Java, Python, or any other typical language you write in. Instead, CPUs are only capable of processing instructions written in <strong>machine language</strong> (or <strong>machine code</strong>). The set of all possible machine language instructions that a given CPU can understand is called an <strong>instruction set</strong>.</p>

            <p>Here is a sample machine language instruction: <code>10110000 01100001</code>.</p>

            <p>
                Each instruction is understood by the CPU as a command to do a very specific job, such as <em>compare these two numbers</em>, or <em>copy this number into that memory location</em>. Back when computers were first invented, programmers had to write programs directly in machine language, which was a very difficult and time-consuming thing to do.</p>

            <ol>
                <li>
                    <p>Each instruction is composed of a sequence of <code>1</code>s and <code>0</code>s.</p>

                    <p>Each individual <code>0</code> or <code>1</code> is called a <strong>binary digit</strong>, or <strong>bit</strong> for short. The number of bits in a machine language instruction varies depending on the CPU architecture.</p>
                </li>
                <li>
                    <p>Each family of compatible CPUs (x86, Arm64, etc.) has its own machine language, and these machine languages are not compatible.</p>

                    <p>Machine language programs written for one CPU family <em>cannot</em> run on another.</p>
                </li>
            </ol>


            <h2>Assembly Languages</h2>

            <p>Machine language instructions (like <code>10110000 01100001</code>) are ideal for a CPU, but are difficult for humans to understand. Since programs (at least historically) have been written and maintained by humans, it makes sense that programming languages should be designed with human needs in mind.</p>

            <p>An <strong>assembly language</strong> (often called <strong>assembly</strong> for short) is a programming language that essentially functions as a more human-readable machine language. Here is the same instruction as above in x86 assembly language: <code>mov al, 0x61</code>.</p>

            <p>This instruction illustrates many of the capabilities that make assembly more readable than machine language.</p>

            <ul>
                <li>the operation (what the instruction does) is identified by a short mnemonic (typically a 3-5 letter name). <code>mov</code> is easily understood to be a mnemonic for <em>move</em>, which is an operation that copies bits from one location to another.</li>
                <li>registers (fast memory locations that are part of the CPU itself) are accessed by a name. <code>al</code> is the name of a specific register on an x86 CPU</li>
                <li>numbers can be specified in a more convenient format. Assembly languages typically support both decimal numbers (ex: <code>97</code>) and hexadecimal numbers (ex: <code>0x61</code>).</li>
            </ul>

            <p>It is fairly easy to understand that the assembly instruction{" "}<code>mov al, 0x61</code> copies hexadecimal number <code>0x61</code> into the <code>al</code> CPU register.</p>

            <p>Since CPUs do not understand assembly language, assembly programs must be translated into machine language before they can be executed. This translation is done by a program called an <strong>assembler</strong>. Because each assembly language instruction is typically designed to mirror an equivalent machine language instruction, the translation process is typically straightforward.</p>

            <p>Just like each CPU family has its own machine language, each CPU family also has its own assembly language (which is designed to be assembled into machine language for that same CPU family). This means there are many different assembly languages. Although conceptually similar, different assembly languages support different instructions, use different naming conventions, etc.</p>

            <h2>Introduction to low-level languages</h2>

            <p>Machine languages and assembly languages are considered low-level languages, as these languages provide minimal abstraction from the architecture of the machine. In other words, the programming language itself is tailored to the specific instruction set architecture it will be run on.</p>

            <p>Low-level languages have a number of notable downsides:</p>

            <ul>
                <li>Programs written in a low-level language are not portable. Since a low-level language is tailored to a specific instruction set architecture, the programs written in the language are too. Porting such programs to other architecutres is typically quite difficult.</li>
                <li>Writing a program in a low-level language requires detailed knowledge of the architecture itself. For instance, the instruction <code>move al, 061h</code> requires knowing that <code>al</code> refers to a CPU register available on this specific platform, and understanding how to work with that register. On a different architecture, this register might be named something different, have different limitations, or not exist at all.</li>
                <li>Low-level programs are hard to understand. While individual assembly instructions can be quite understandable, it can still be hard to deduce what a section of assembly code is actually doing. And since assembly programs require many instructions to do even simple tasks, they tend to be quite long.</li>
                <li>It is hard to write assembly programs of significant complexity because the language only provides primitive capabilities. The programmer is left to implement everything they need themselves.</li>
            </ul>

            <p>The primary benefit of low-level languages is that they are fast. Assembly is still used today when there are sections of code that are performance critical. And it is also used in a few other cases, more on this later...</p>

            <h2>Introduction to high-level languages</h2>

            <p>To address many of the downsides, new <em>high-level</em> programming languages such as C, C++ (and later, languages such as Java, JavaScript, and Python) were developed.</p>

            <p>Here is the same instruction as above in C/C++: <code>a = 97;</code>.</p>

            <p>Much like assembly programs (which must be assembled to machine language), programs written in a high-level language must be translated into machine language before they can be run. There are two primary ways this is done: compiling and interpreting.</p>

            <h3>Compiler</h3>

            <p>A <strong>compiler</strong> is a program (or collection of programs) that reads the source code of one language (usually a high-level language) and translates it into another language (usually a low-level language). For example, a C++ compiler translates C++ source code into machine code.</p>

            <p>Most compilers can also be configured to generate assembly code. This is useful when a programmer wants to see what specific instructions the compiler is generating for a section of the program.</p>

            <p>The machine code output by the compiler can then be packaged into an <strong>executable file</strong> (containing machine language instructions) that can distributed to others and can be launched by the operating system. Notably, running the executable file does not require the compiler to be installed (since the executable has already been compiled).</p>

            <p>In the beginning, compilers were primitive and produced slow, unoptimized assembly or machine code. However, over the years, compilers have become very good at producing fast, optimized code, and in some cases can do a better job than humans can!</p>

            <p><img className="img-in-reading" src={CompilingProcess} alt="overview of how a compilter interacts with the code you wrote" /></p>

            <h3>Interpreter</h3>

            <p>Alternatively, an <strong>interpreter</strong> is a program that directly executes the instructions in the source code without requiring them to be compiled first. Interpreters tend to be more flexible than compilers, but are less efficient when running programs because the interpreting process needs to be done every time the program is run. This also means the interpreter must be installed on every machine where an interpreted program will be run.</p>

            <p><img className="img-in-reading" src={InterpretationProcess} alt="overview of how a compilter interacts with the code you wrote" /></p>

            <h3>Compiled vs interpreted</h3>

            <p>Both compiled and interpreted languages have relative strengths and weakness. Neither approach has a clear advantage over the other, since if one approach was clearly always better then it would be used everywhere.</p>

            <h4>Compiler advantages</h4>

            <ol>
                <li>Because they can see all the code up-front, they can perform a number of analyses and optimizations when generating code that makes the final version of the code executed faster than just interpreting each line individually.</li>

                <li>Compilers can often generate low-level code that performs the equivalent of a high-level ideas like <em>dynamic dispatch</em> or <em>inheritance</em> in terms of memory lookups inside of tables. This means that the resulting programs need to remember less information about the original code, lowering the memory usage of the generated program.</li>

                <li>Compiled code is generally faster than interpreted code because the instructions executed are usually just for the program itself, rather than the program itself plus overhead from an interpreter.</li>

                <li>Distributing a compiled program does not require distributing the source code. In a non-open-source environment, this is important for intellectual property protection purposes.</li>
            </ol>

            <h4>Compiler disadvantages</h4>

            <ol>
                <li>Some language features, such as dynamic typing, are difficult to compile efficiently because the compiler cannot predict what is going to happen until the program is actually running. This means that the compiler might not generate very good code.</li>

                <li>Compilers generally have a long <em>start-up</em> time because of the cost of doing all the analysis that they do. This means that in settings like web browsers where it is important to load code fast, compilers might be slower because they optimize short code that won't be run many times.</li>
            </ol>

            <h4>Interpreter advantages</h4>

            <ol>
                <li>Because they can read the code as written and do not have to do expensive operations to generate or optimize code, they tend to start up faster than compilers.</li>

                <li>Because interpreters can see what the program does as its running, interpreters can use a number of dynamic optimizations that compilers might not be able to see.</li>
            </ol>

            <h4>Interpreter disadvantages</h4>

            <ol>
                <li>Interpreters typically have higher memory usage than compilers because the interpreter needs to keep more information about the program available at runtime.</li>

                <li>Interpreters typically spend some CPU time inside of the code for the interpreter, which can slow down the program being run.</li>
            </ol>

            <h4>Compiler vs Interpreter summary</h4>

            <p>Because interpreters and compilers have complementary strengths and weaknesses, it is becoming incresingly commmon for language runtimes to combine elements of both. Java's JVM is a good example of this - the Java code itself is compiled, and initially it is interpreted. The JVM can then find code that is run many, many times and compile it directly to machine code, meaning that <em>hot</em> code gets the benefits of compilation while <em>cold</em> code does not. The JVM can also perform a number of dynamic optimizations like inline caching to speed up performance in ways that compilers typically do not.</p>

            <p>Many modern JavaScript implementations use similar tricks. Most JavaScript code is short and does not do all that much, so they typically start off using an interpreter. However, if it becomes clear that the code is being run repeatedly, many JS engines will compile the code, or at least, compile bits and pieces of it, and optimize it using standard techniques. The net result is that the code is fast at startup (useful for loading web pages quickly) but gets faster the more that it runs.</p>

            <p>Most high-level languages can be either compiled or interpreted. Traditionally, high-level languages like C, C++, and Pascal are compiled, wheras <em>scripting</em> languages like Perl and JavaScript tend to be interpreted. Some languages, like Java, use a mix of the two. This brings up an important idea, <em>languages are not inheriently compiled or interpreted</em>, let me explain....</p>

            <p>Usually, C code is compiled, but there are C interpreters available that make it easier to debug or visualize the code that is being run. JavaScript used to be thought of as an interpreted language until some JS enginers started compiling it. Some Python implementations are purely interpreters, but you can get Python compilers that generate native code. Now, some languages are <em>easier</em> to compile or interpret than others, but there is nothing stopping you from making a compier or interpreter for any particular programming language.</p>

            <h2>The benefits of high-level languages</h2>

            <p>High-level languages are named as such because they provide a high level of abstraction from the underlying architecture.</p>

            <p>Consider the instruciton <code>a = 97</code>. This instruction lets us store the value <code>97</code> somewhere in memory, without needing to know exactly where the value will be placed, or what specific machine code instruction is needed by the CPU. In fact, there is nothing platform-specific about this instruction at all. The compiler does all the work to figure out how your program's instruction translates into platform-specific machine code.</p>

            <p>High-level languages allow programmers to write programs without knowing much about the platform it will be run on. This not only makes programs easier to wirte, it also makes them significantly more portable. If we are careful, we can write a single program that will compile on every platform that has your program's compiler! A program that is designed to run on muliple platforms is said to be <strong>cross-platform</strong>.</p>

            <p><img className="img-in-reading" src={CrossPlatform} alt="high-level code that can be used across multiple hardware configurations" /></p>

            <p>The following is a partial list of things that can inhibit the portability of your high-level code:</p>

            <ul>
                <li>Many operating systems, like Windows, offer platform-specific capabilities that you can use in your code. These can make it much easier to write a program for a specific operating system, or provide deeper integration with that operating system than would otherwise be possible.</li>

                <li>Many third-party libraries are only available on certain platforms. If you use one of these, you will be limited to the platforms for which that library is supported.</li>

                <li>Some compilers support compiler-specific extensions, which are capabilities that are only available in that compiler. If you use these, your programs will not be able to be compiled by other compilers that do not support the same extensions without modification.</li>

                <li>In certain cases, specific language features allow the compiler to determine how something should behave. More on this later.</li>
            </ul>

            <p>If you are only targeting a single platform, then portability may not matter that much. But many applications these days target multiple platforms in order to widen their reach. For example, a mobile app will probably want to target both iOS and Android.</p>

            <blockquote>
                Even if portability does not seem useful initially, many applications that initially targeted a single platform (like just targeting PC) decided to port to other platforms (Mac, linux) after seeing some level of success and interest. If you do not start with portability in mind, it will be more work to port your application later.
            </blockquote>

            <p>Other high-level language benefits:</p>

            <ul>
                <li>Programs written in a high-level language are easier to read, write, and learn because their instructions resemble natural language and mathematics that we use every day. In many cases, high-level languages require fewer instructions to perform the same tasks as low-level languages. For example, in C++ you can write <code>a = b * 2 + 5;</code> in one line. In assembly, this would take <em>4 to 6 different instructions</em>. This makes programs written using high-level languages more concise, which makes them easier to understand.</li>

                <li>High-level languages typically include additional capabilities that make it easier to perform common programming tasks, such as requesting a block of memory or manipulating text. For example, it only takes a single instruction to determine whether the characters <em>abc</em> exist within a large block of text (and if so, how many charactrers has to be examined until <em>abc</em> was found). This can dramatically reduce complexity and development times.</li>
            </ul>

            <blockquote>
                Although languages like Rust, C, & C++ are <em>technically</em> considered a high-level language, newer programming languages (scripting languages) provide an even higher level of abstraction. As such, Rust, C, & C++ are sometimes inaccurately called a <em>low-level language</em> in comparison.
            </blockquote>

            <blockquote>
                Today, Rust, C, & C++ would probably be more accurately described as a mid-level language. However, this also highlights one of Rust, C, & C++'s key strengths: if often provides the ability to work at different levels of abstraction. You can choose to operate at a lower level for better performance and precision, or at a higher level for greater convenience and simplicity.
            </blockquote>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="how-computers-run-software"
            />
        </div>
    )
}