import Latex from 'react-latex'
import ProceduralProgramming101 from '../../../assets/introToComp/programmingLanguages/procedural programming 101.png'
import MemoryExample from '../../../assets/introToComp/programmingLanguages/memory example.png'


export default function ProgrammingLanguages() {
    return (
        <div>
            <h1>Programming Languages</h1>

            <p>A programming language is a special language used to write programming programs. A computer's CPU can only process instructions that are written in machine language, which is made up of <strong>binary</strong> (1s and 0s). Here is some binary:</p>

            <div className="center">
                <p><Latex>$ 1011010000000101 $</Latex></p>
            </div>

            <p>Kind of hard to understand, huh? The binary numbers form machine language instructions, which the CPU interprets as commands. Each type of CPU has its own machine language and writing in it is very tedious and difficult. A program is written in a programming language that humans can read much easier than binary. It is then translated into machine language.</p>

            <br />

            <h2 id="algorithm">Algorithm</h2>

            <p>A set of well-defined steps for performing a task or solving a problem.</p>

            <br />

            <h2 id="what-is-a-program-made-of">What is a program made of?</h2>

            <p>There are some universal elements that take place in almost every programming languages:</p>

            <ul>
                <li><strong>Keywords:</strong> Words that have special meaning in the programming language. Also known as <em>reserved words</em>.</li>
                <li><strong>Operators:</strong> Symbols or words that perform operations on one or more operands. An operand is usually an item of data, such as a number.</li>
                <li><strong>Punctuation:</strong> Most languages require the use of punctuation characters. These characters serve specific purposes, such as making the beginning or ending of a statement, or separating items in a list.</li>
                <li><strong>Programmer Defined Names:</strong> Unlike keywords, these are words or names that are defined by the programmer. They are used to identify storage locations in memory and parts of the program that are created  by the programmer. Programmer-defined names are often called identifiers. They can be variable, function, method, className, object, constant, array, package, or enumeration names.</li>
                <li><strong>Syntax:</strong> These are the rules that must be followed when writing a program. Syntax dictates how keywords and operators may be used, and where punctuation symbols must appear.</li>
            </ul>

            <br />

            <h2 id="">Keywords</h2>

            <p>Part of learning a programming language is learning the commonly used keywords, what they mean, and how to use them. An important note about keywords is that they are reserved and cannot be used for anything other than their designated purpose. Do not worry about memorizing or even fully understanding them just yet. With time, you will learn what they mean and how to use them.</p>

            <h2 id="variables">Variables</h2>

            <p>The most fundamental way to store an item of data in memory. A variable is a named storage location in the computer's memory. Variables are symbolic names made up by the programmer that represent locations in the computer's RAM. So when data is stored in a variable, it is actually stored in RAM. Let's assume that a program has a variable named <code>age</code>. Here is an example of how the variable name represents a memory location. </p>

            <img className="img-in-reading" src={MemoryExample} alt="the address holds the int value of 21" />

            <p>Here we have the variable <code>age</code> is holding the value of 21. The number 21 is actually stored in RAM at address 7, but the name <code>age</code> symbolically represents this storage location. Think of a variable as a box that holds data. The number 21 is stored in the box named <code>age</code>. Only one item may be stored in the box at any given time. If the program stores another value in the box, it will take the place of the number 21.</p>

            <br />

            <h2 id="the-programming-process">The Programming Process</h2>

            <p>The general process for creating a program starts with planning. Start here if you are not sure on how to tackle a problem:</p>

            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-lg-6">
                        <ol>
                            <li>Clearly <strong>define</strong> what the program is going to do</li>
                            <li><strong>Visualize</strong> the program running on the computer</li>
                            <li>Use design tools to create a model of the program (<strong>pseudocode</strong> & diagrams)</li>
                            <li>Check the model for logical <strong>errors</strong></li>
                            <li>Enter the code and compile it</li>
                            <li>Correct any <strong>errors</strong> found during compilation.</li>
                            <li>Repeat steps 5-6 as many times as needed.</li>
                            <li>Run the program with test data for <strong>input</strong></li>
                            <li>Correct any runtime errors found while running the program.</li>
                            <li>Repeat steps 5-9 as many times as necessary</li>
                            <li><strong>Validate</strong> the results of the program</li>
                        </ol>
                    </div>
                    <div className="col"></div>
                </div>

            </div>

            <br />

            <h2 id="object-oriented-programming">Object-Oriented Programming</h2>

            <p>OOP is a method of software development that has its own practices, concepts, and vocabulary.</p>

            <p>There are two methods of programming: procedural and object-oriented. <strong>Procedual</strong> is a set or programming statements that perform a specific task. The typically operate on data items that are separate from the procedures. This separation of data and the code that operates on the data often leads to problems.</p>

            <img className="img-in-reading" src={ProceduralProgramming101} alt="procdures and data" />

            <p>The issues from procedural programs gave way to OOP. OOP became centered on creating objects. <strong>Objects</strong> are a self-contained unit consisting of data (<strong>attributes</strong>) and procedures (<strong>methods</strong>). Only the object's methods may directly access and make changes to the object's data. An object typically hides its data, but allows outside code to access the methods that operate on the data. </p>

            <p>OOP addresses the problem of code/data separation through data hiding, called encapsulation. <strong>Encapsulation</strong> refers to the combining of data and code into a single object. Data hiding refers to an object's ability to hide its data from code that is outside the object.</p>

            <p>When the object's internal data is hidden from outside code and access to that data is restricted to the object's methods, the data is protected from accidental corruption. In addition, the programming code outside the object does not need to know about the format or internal structure of the object's data. The code only needs to interact with the object's methods.</p>

            <p>When a programmer changes the structure of an object's internal data, he/she also modifies the object's methods so they may properly operate on the data. The way in which outside code interacts with the methods, however, does not change.</p>

            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-lg-8">
                        <ul>
                            <li><strong>Object:</strong> a software entity that contains data and procedures</li>
                            <li><strong>Attributes:</strong> the data contained in an object is known as the object's attributes</li>
                            <li><strong>Methods:</strong> the procedures or behaviors that an object performs are known as the object's methods</li>
                            <li><strong>Encapsulation:</strong> the combining of data and code into a single object</li>
                            <li><strong>Data Hiding:</strong> an object's ability to hide its data from code that is outside the object.</li>
                        </ul>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    )
}