import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import QuestionTableList from '../../components/QuestionTableList'
import ModalForQuestions from '../../pages/quiz/ModalForQuestions.jsx'

import ProgramDevelopmentProcess from '../../assets/java/javaIntro/program development process.png'
import Portability from '../../assets/java/javaIntro/portability.png'

export default function JavaIntro() {
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedQuestion, setSelectedQuestion] = useState(null)
    const [refresh, setRefresh] = useState(0)

    const quizImports = {
        java: () => import('../../pages/quiz/database/JavaQuestions.js')
    }

    function handleRowClick(question) {
        setSelectedQuestion(question)
        setModalOpen(true)
    }

    function handleAnswered() {
        setRefresh(r => r + 1)
        setModalOpen(false)
    }

    const javaProgramExample = `public class PayDay {
    public static void main(String[] args) {
        int totalHours = 30;
        double grossPay, payRate = 20.0;

        grossPay = totalHours * payRate;

        System.out.println("You made $" + grossPay + " bucks this week!");
    }
}`

    const grossPay = `System.out.println("You made $" + grossPay + " bucks this week!");`

    const translatePayDay = `dude@clp:/home/java_program$ javac PayDay.java`

    const runPayDay = `dude@clp:/home/java_program$ Java PayDay`

    return (
        <>
            <h1>Intro to Java</h1>

            <h2 id="java-program-example">Java Program example</h2>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {javaProgramExample}
                </SyntaxHighlighter>
            </div>

            <h4 id="example-of-some-keywords">Example of some <strong>keywords:</strong></h4>

            <p><code>public</code>, <code>class</code>, <code>public</code>, <code>static</code>, <code>void</code>, <code>int</code>, and <code>double</code>. Always written in lowercase, each keyword has a special meaning in Java. Part of learning a programming language is learning the commonly used keywords, and you will be using these ones a lot!
            </p>

            <h4 id="programmer-defined-names">Programmer-defined names:</h4>

            <p><code>totalHours</code>, <code>payRate</code>, and <code>grossPay</code> are programmer-defined names and in this case, are all <strong>variables</strong>. They are not part of the Java language but are names that are made up by the programmer.</p>

            <h4 id="operators">operators</h4>

            <p><code>=</code> and <code>*</code>. They perform operations on items of data (aka <strong>operands</strong>). <code>*</code> will multiply two operands together, in this case, <code>totalHours</code> and <code>payRate</code>. The <code>=</code> symbol is called an <strong>assignment operator</strong>. It takes the value of the expression that appears at its right and stores in the variable whose name appears on the left. Try some mental math, any guess to what <code>grossPay</code>'s value is?
            </p>

            <h4 id="punctuation">punctuation</h4>

            <p><code>;</code>. Notice at the end of certain lines we have a semi-colon. This will mark the end of a <strong>statement</strong> (a certain line of code). There are rules that govern where semicolons are required and where they are not.</p>

            <h4 id="lines-and-statements">Lines and statements</h4>

            <p>A line is what you expect...a single line within a body of a program. When a line ends with <code>;</code> it contains something meaningful. When a line is blank and void of any text it is only to make a program more readable for the programmer. Here is an example of a statement from our program:</p>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {grossPay}
                </SyntaxHighlighter>
            </div>

            <p>This specific statement causes the computer to display a message on the screen. Statements can be a  combination of key words, operators, and programmer-defined names. They can be one, or spread out over several lines.
            </p>

            <h2 id="the-compiler-and-the-java-virtual-machine">The Compiler and the Java Virtual Machine</h2>

            <p>Some quick definitions to understand this section:</p>

            <ul>
                <li><strong>Text editor:</strong> used to write Java programs and save it to a file.</li>
                <li><strong>Source code:</strong> the Java programming statements that were written.</li>
                <li><strong>Source file:</strong> the file your Java source code is saved to. Ends in the extension <code>.java</code>
                </li>
            </ul>

            <ol>
                <li>
                    <strong>Compiler:</strong> What allows your file to run. It translates source code into an executable form. The java compiler translates a Java source file (<code>.java</code>) into a file that contains byte code (<code>.className</code>) instructions. The byte code instructions are considered intermediate code but are not machine language and cannot be executed by the CPU, so instead they are executed by the <strong>Java Virtual Machine</strong>. The JVM is a program that reads Java Byte code instructions and executed them as they are read. For this reason, the JVM is often called an <strong>interpreter</strong>, and Java is often referred to as an <em>interpreted language</em>. Although Java byte code is not machine language for a CPU, it can be considered as machine language for the JVM.
                </li>
            </ol>

            <img src={ProgramDevelopmentProcess} alt="Program Development Process" className='center-img' />


            <ol start="2">
                <li>
                    <strong>Portability:</strong> The term portable means that a program may be written on one type of computer and then run on a wide variety of computers, with little or no modification necessary. Because Java byte code is the same on all computers, complied Java programs are highly portable, meaning that a compiled Java program is able to run on any computer that has a JVM. Most other programming languages need to use a  compiler for <em>each</em> type of computer that the language is going to run on. Example, a separate C++ compiler must be created for windows, linux, and mac to run on each of those environments.
                </li>
            </ol>

            <img src={Portability} alt="Portability" className='center-img' />


            <ol start="3">
                <li>
                    <p>
                        <strong>Compiling and Running a Java Program:</strong> You must compile your Java program to run. Just go to your operating system's command prompt and make sure you are in the same directory or folder where the Java program that you want to compile is located.
                    </p>

                    <div className="">
                        <SyntaxHighlighter language="terminal" style={tomorrow}
                            wrapLines={true} className=" code-snippet">
                            {translatePayDay}
                        </SyntaxHighlighter>
                    </div>

                    <p>Using our program from above, we are running the <code>PayDay</code> file in the terminal. Notice how we needed to add the <code>.java</code> extension?</p>

                    <p>
                        After the command is executed and the compiler translates our program into byte code, the byte code is stored in a file with the <code>.className</code> extension, contained within the same directory. However, you do not use the <code>.className</code> extension when opening the file. It's weird but hey, that's Java for ya!
                    </p>


                    <div className="">
                        <SyntaxHighlighter language="terminal" style={tomorrow}
                            wrapLines={true} className=" code-snippet">
                            {runPayDay}
                        </SyntaxHighlighter>
                    </div>

                    <p>This command runs the Java interpreter, the JVM, and executes (runs) the program.</p>
                </li>
            </ol>

            <h2>Review</h2>

            <QuestionTableList
                quizImports={quizImports}
                subcategory="intro"
                key={refresh}
                onRowClick={handleRowClick}
            />

            {/* when a user clicks on a question from table, this pops up */}
            <ModalForQuestions
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                question={selectedQuestion}
                onAnswered={handleAnswered}
            />
        </>
    )
}