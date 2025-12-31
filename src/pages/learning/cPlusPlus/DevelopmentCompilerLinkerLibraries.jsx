import DevelopmentCycle from '../../../assets/cPlusPlus/developmentCompilerLinkerLibraries/development cycle.png'
import ObjectFiles from '../../../assets/cPlusPlus/developmentCompilerLinkerLibraries/object files.png'
import Linker from '../../../assets/cPlusPlus/developmentCompilerLinkerLibraries/linker.png'

export default function DevelopmentCompilerLinkerLibraries() {
    return (
        <div>
            <h1>C++ Development, Compiler, Linker, & Libraires</h1>

            <p>Before we can write and execute our first C++ program, we need to understand in more detail how C++ programs get developed. Here is a graphic outlining a simplistic approach:</p>

            <p><img className="img-in-reading" src={DevelopmentCycle} alt="7 basic steps to creating and developing a C++ program" /></p>

            <h2>Step #1: Define the problem that you would like to solve</h2>

            <p>This is the <em>what</em> step, where you figure out what problem you are intending to solve. Coming up with the initial idea for what you would like to program can be the easiest step, or the hardest. But conceptually, it is the simplest. All you need is an idea that can be well defined, and you are ready for the next step.</p>

            <h2>Step #2: Determine how you are going to solve the problem</h2>

            <p>This is the <em>how</em> step, where you determine how you are going to solve the problem you came up with in step 1. It is also the step that is most neglected in software development. The crux of the issue is that there are many ways to solve a problem. However, some of these solutions are good and some of them are bad. Too often, a programmer will get an idea, sit down, and immediately start coding a solution. This often generates a solution that falls into the <em>bad category</em>.</p>

            <p>Typically, good solutions have the following characteristics. They are...</p>

            <ul>
                <li><strong>straightforward</strong> and not overly complicated or confusing</li>
                <li><strong>well documented</strong>, especially around any assumptions being made or limitations</li>
                <li><strong>built modularly</strong> so parts can be reused or changed later without impacting other parts of the program</li>
                <li>able to <strong>recover gracefully</strong> or give useful error messages when something unexpected happens</li>
            </ul>

            <p>When you sit down and start coding right away, you are typically thinking <em>I want to do {'<something>'}</em>, so you implement the solution that gets you there the fastest. This can lead to programs that are fragile, hard to change or extend later, or have lots of bugs.</p>

            <p>A <strong>bug</strong> is any kind of programming error that prevents the program from operating correctly.</p>

            <p>On complex software systems, only <em>some</em> of the programmer's time is spent writing the initial program. <em>Most</em> of the time is spent on maintenance, which can consist of <strong>debugging</strong> (removing bugs), updates to cope with changes in the environment (like getting it to run on a new OS version), enhancements (minor changes to improve usability or capability), or internal improvements to increase reliability or maintainability.</p>

            <p>Consequently, it is worth it to spend a little extra time before you start coding to think about the best way to tackle a problem, what assumptions you are making, and how you might plan for the future, in order to save yourself a lot of time and trouble down the road.</p>

            <h2>Step #3: Write the program</h2>

            <p>In order to write the program, we need two things:</p>

            <ol>
                <li>Knowledge of a programming language</li>
                <li>A text editor to write and save the program</li>
            </ol>

            <p>The set of programming instructions that we input into the text editor is called the program's <strong>source code</strong> (often shortened to just <strong>code</strong>).</p>

            <p>Many simple C++ programs only have one source code file, but complex C++ programs can have hundreds or even thousands of source code files.</p>

            <p>Each source code file in your program will need to be saved to disk, which means each source code file needs a filename. C++ does not have any requirements for naming files. However, the de-facto standard is to name the first/primary source file created for a program <code>main.cpp</code>. The filename (<code>main</code>) makes it easy to determine which is the primary source code file, and the <code>.cpp</code> extension indicates that the file is a C++ source code file.</p>

            <p>You may occasionally see the first/primary source code file named after the name of the program instead (like <code>calculator.cpp</code>, <code>poker.cpp</code>). You may also occasionally see other extensions used (<code>.cc</code> or <code>.cxx</code>).</p>

            <p>Once you have written your program, the next steps are to convert the source code into something that can be run, and then see whether it works!</p>

            <h2>Step #4: Compiling your source code</h2>

            <p>In order to compile C++ source code files, we use a C++ compiler. The C++ compiler sequentially goes through each source code file in you program and does two important task:</p>

            <ol>
                <li>The compiler checks your C++ code to make sure it follows the rules of the C++ language. If it does not, the compiler will give you an error (and the corresponding line number) to help pinpoint what needs fixing. The compilation process will also be aborted until the error is fixed.</li>

                <li>The compiler translates your C++ code into machine language instructions. These instructions are stored in an intermediate file called an <strong>object file</strong>. The object file also contains other data that is required or useful in subsequent steps (including data needed by the linker in step 5, and for debugging in step 7).</li>
            </ol>

            <p>Object files are typically named <code>name.o</code> or <code>name.obj</code>, where <em>name</em> is the same name as the <code>.cpp</code> file it was produced from.</p>

            <p>For example, if your program had 3 <code>.cpp</code> files, the compiler would generate 3 object files:</p>

            <p><img className="img-in-reading" src={ObjectFiles} alt="How object files are created during compilation" /></p>

            <blockquote>
                C++ compilers are available for many different operating systems. We will discuss this in a little bit.
            </blockquote>

            <h2>Step #5: Linking object files and libraries and creating the desired output file</h2>

            <p>After the compiler has successfully finished, another program called the <strong>linker</strong> kicks in. The linker's job is to combine all of the object files and produce the desired output file (such as an executable file that you can run). This process is called <strong>linking</strong>. If any step in the linking process fails, the linker will generate an error message describing the issue and then abort.</p>

            <p>Linker steps:</p>

            <ol>
                <li>The linker reads in each of the object files generated by the compiler and makes sure they are valid.</li>

                <li>The linker ensures all cross-file dependencies are resolved properly. Example, if you define something in one <code>.cpp</code> file and then use it in a different <code>.cpp</code> file, the linker connects the two together. If the linker is unable to connect a reference to something with its definition, you will get a linker error, and the linking process will abort.</li>

                <li>The linker typically links in one or more <strong>library files</strong>, which are collections of precompiled code that have been <em>packaged up</em> for reuse in other programs.</li>

                <li>The linker outputs the desired output file. Typically, this will be an executable file that can be launched (but it could be a library file if that is how you have set up your project).</li>
            </ol>

            <p><img className="img-in-reading" src={Linker} alt="How object files and libraries are pulled together by the linker to create an executable file" /></p>

            <h3>The standard library</h3>

            <p>C++ comes with an extensive library called the <strong>C++ Standard Library</strong> that provides a set of useful capabilities for use in your programs. One of the most commonly used parts of the C++ standard library is the input/ouput library (called <code>iostream</code>), which contains functionality for printing text on a monitor and getting keyboard input from a user.</p>

            <p>Almost every C++ program written utilizes the standard library in some way, so it is extremely common to have the C++ standard library linked into your programs. Most C++ linkers are configured to link in the standard library by default, so this generally is not something you need to worry about.</p>

            <h3>3rd party libraries</h3>

            <p>You can optionally link <strong>third party libraries</strong>, which are libraries that are created and distributed by independent entities (rather than as part of the C++ standard). Example, say you wanted to write a program that played sounds. The C++ standard library contains no such functionality. While you would write your own code to read in the sound files from disk, check to ensure they were valid, or figure out how to route the sound data to the operating system or hardware to play through the speaker... that would be a lot of work! Instead, you would be more likely to find some existing software project that has a library that already implements all of these things for you.</p>

            <h3>Building</h3>

            <p>Because there are multiple steps involved, the term <strong>building</strong> is often used to refer to the full process of converting source code files into an executable that can be run. A specific executable produced as a result of building is sometimes called a <strong>build</strong>.</p>

            <h2>Steps #6 &amp; #7: Testing and debugging</h2>

            <p>This is the fun part! You are now able to run your executable and see what it does!</p>

            <p>Once you can run your program, then you can test it. <strong>Testing</strong> is the process of assessing whether your software is working as expected. Basic testing typically involves trying different input combinations to ensure the software behaves correctly in different cases.</p>

            <p>If the program does not behave as expected, then you will have to do some <strong>debugging</strong>, which is the process of finding and fixing programming errors.</p>
        </div>
    )
}