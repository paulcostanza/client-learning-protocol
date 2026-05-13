import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

import SolutionConfigurations from '../../../assets/cPlusPlus/DevelopmentExamples/solution configurations.png'
import SolutionPlatform from '../../../assets/cPlusPlus/DevelopmentExamples/solution platform.png'
import CompilerAndDeclarationInteraction from '../../../assets/cPlusPlus/DevelopmentExamples/compiler and declaration interaction.png'

export default function DevelopmentExamples() {
    const quizImports = {
        cPlusPlus: () => import('../../../pages/quiz/database/CPlusPlusQuestions.js')
    }

    const simpleProgram = `#include <iostream>

int main()
{
	std::cout << "Hello world!" << std::endl;
	std::cin.get();
}`

    const secondExample = `#include <iostream>

void Log(const char* message)
{
    std::cout << message << std::endl;
}

int main()
{
    Log("Hello world!");
    std::cin.get();
}`

    const file1 = `// Log.cpp - file #1
#include <iostream>

void Log(const char* message)
{
    std::cout << message << std::endl;
}`

    const file2 = `// main.cpp - file #2
#include <iostream>

void Log(const char* message);

int main()
{
    Log("Hello world!");
    std::cin.get();
}`

    const declarationWithAndWithoutParameterName = `// either one will get the job done
void Log(const char*);
void Log(const char* message);
// I like adding it because it helps 
// the programmer understand the context`

    return (
        <div className="container">
            <h1>Development: Examples</h1>

            <p>Let's take what we learned from the previous lesson and apply it with some actual code to follow. In the following examples, we will be going from the source file(s) to an executable binary (a program a user can run).</p>

            <p><em>Review:</em> We take a source file, pass it into a compiler, the compiler compiles it into some kind of binary. That binary can be a library or an executable program. Here, we will talk about the executable.</p>

            <h2>Compiling a single file program</h2>

            <p>Let's start off with a simple program:</p>

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {simpleProgram}
                </SyntaxHighlighter>
            </div>

            <p>Anything that begins with a hashtag is a <strong>pre-processor statement</strong>. The first thing a compiler does when it receives a source file is that it pre-processes all of your pre-processor statements.</p>

            <h3><code>#include &lt;iostream&gt;</code></h3>

            <p><code>#include</code> will find a file, in this case a file called <code>iostream</code>. It will take all of the contents of that file and paste it into our current file. Includes are also referred to as <strong>header files</strong>.</p>

            <p>The reason we are including this specific header in our program is because we want to use the objects <code>cout</code> and <code>cin</code>.</p>

            <h3><code>main()</code></h3>

            <p>The <code>main</code> function is used in every C++ program as the entry point. The first thing our computer does when running this application is to run code that begins in this function.</p>

            <p>Notice how our function does not return anything? That is because our <code>main</code> function is a special case, if you choose not to return anything the compiler automatically returns 0. Remember, this is a unique condition and only applies to the main function!</p>

            <h3><code>std::cout &lt;&lt; "Hello world!" &lt;&lt; std::endl;</code></h3>

            <p>In this statement, we have &lt;&lt; which are <strong>overloaded operators</strong>. This might sound weird, but think of them as a function. That's all operators are! This will print <code>Hello world!</code> to the console, and <code>std::endl</code> will skip to the next line.</p>

            <h3><code>std::cin.get();</code></h3>

            <p>Our program's execution will pause on this line until we press enter on the keyboard. <code>get</code> will just wait for us. After this last line of code our program is over. This returns a zero to main.</p>

            <blockquote>
                <p>So how do we get from this text to an actual executable binary file?</p>
            </blockquote>

            <p>Once our preprocessor statements have been evaluated (copied and paste) our file gets compiled. The compiler transforms all of this C++ code into actual machine code. However, we have a few important steps that determine how this actually happens.</p>

            <p>If you are using Visual Studios, at the top of the application you should see two dropdown fields, one is <em>solution configurations</em> (Debug) and the other is <em>solution platform</em> (x64).</p>

            <p><img className="img-in-reading" src={SolutionConfigurations} alt="solution configurations" /></p>

            <p><img className="img-in-reading" src={SolutionPlatform} alt="solution platform" /></p>

            <p>A <strong>solution configuration</strong> is a set of rules which applies to the building of a project.</p>

            <blockquote>
                <p>Do we want this to run in debug mode, or release mode?</p>
            </blockquote>

            <p>A <strong>solution platform</strong> is what platform we are targeting with our current compilation.</p>

            <blockquote>
                <p>Do we want to create an executable for 32-bit windows or an android app?</p>
            </blockquote>

            <p><strong><em>Note</em></strong> We can change the rules by right clicking on your project in the solution explorer and selecting properties.</p>

            <p>Each <code>cpp</code> file in our project gets compiled. Header files <em>do not</em> get compiled because they are included (copied and pasted) into our files. Each <code>cpp</code> file in our project is compiled <em>individually</em>. Each of those files is compiled into an object file. In Visual Studio, the extension for these kinds of files is <code>obj</code>.</p>

            <p>Once we have all of those individual <code>obj</code> files, we need some way to put them together into one <code>exe</code> file. This is where a linker comes in.</p>

            <p>A <strong>linker</strong> takes all of the object files and puts them together into one exe file.</p>

            <h2>Compling a multiple file program</h2>

            <p>Let's use a new example:</p>

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {secondExample}
                </SyntaxHighlighter>
            </div>

            <p>Our <code>main</code> calls the function <code>Log</code>. For simplicity sake, <code>Log</code> takes in a string, and displays it to the console.</p>

            <p>Now let's split up the program into two files:</p>

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {file1}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {file2}
                </SyntaxHighlighter>
            </div>

            <p>We have moved the <code>Log</code> function into its own file. We compile each file separately. Both files need <code>#include &lt;iostream&gt;</code>. File #1 uses <code>std::cout</code> and file #2 uses <code>std::cin</code>.</p>

            <p>In <code>main.cpp</code>, our <code>main</code> function has no idea what <code>Log</code> is, so we need to include a declaration. The <strong>declaration</strong> is a statement that tells the compiler that something exist. The compiler will believe the declaration, because the compiler <em>does not</em> care about resolving where the function actually exist.</p>

            <p><img className="img-in-reading" src={CompilerAndDeclarationInteraction} alt="goofy cartoon where compiler and declaration interact with each other" /></p>

            <p>You can write the declaration with or without the parameter name:</p>

            <p className='focus-text'><strong>Declaration</strong>: a promise that the function exist.</p>
            <p className='focus-text'><strong>Definition</strong>: this is what the function is.</p>

            <blockquote>
                <p>So after all of this, how does the compiler know we actually have a log function in another file if we just compile each file seperatly?</p>
            </blockquote>

            <p>It doesn't lmao.</p>

            <p>When we build our entire project, the <em>linker</em> will find the definition of that <code>Log</code> function and connect it to the <code>Log</code> function that we call in <code>main</code>. If it cannot find the definition then that is when we get a <strong>linker error</strong>.</p>

            <p>If the linker is able to link everything together properly, the outcome is an <code>exe</code> file.</p>
            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="development-examples"
            />
        </div>
    )
}