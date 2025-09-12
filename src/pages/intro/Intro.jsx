import Latex from 'react-latex'
import OrganizationOfAComputerSystem from '../../assets/intro/organization-of-a-computer-system.png'
import CPUExample from '../../assets/intro/cpu example.png'
import RAMExample from '../../assets/intro/ram example.png'
import ProceduralProgramming101 from '../../assets/intro/procedural programming 101.png'
import MemoryExample from '../../assets/intro/memory example.png'

export default function Intro() {
    return (
        <>
            <main>
                <div className="container" id="space-on-top-of-page">
                    <h1 id="introduction-to-computers">Introduction to Computers</h1>
                    <p>The Versatility of the computer allows it do such a wide variety of task that it makes it one of the greatest
                        tools known in existence. It can accomplish this by being <strong>programmed</strong> to follow specifically
                        designed instructions.</p>
                    <p>Programming is considered both a science and an art. Here are a few things that must be designed for any <strong>real-world</strong> computer program:
                    </p>
                    <ul>
                        <li>the logical flow of the instructions</li>
                        <li>the mathematical procedures</li>
                        <li>the layout of the programming statements</li>
                        <li>the appearance of the screen</li>
                        <li>the way the information is presented to the user</li>
                        <li>the program's <strong><em>user friendliness</em></strong></li>
                        <li>manuals, help systems, and/or other forms of written documentation</li>
                    </ul>

                    <h2 id="hardware-and-software">Hardware and Software</h2>
                    <p>Hardware refers to the physical components that make up a computer. A typical computer consists of:</p>
                    <ul>
                        <li>central processing unit (CPU)</li>
                        <li>main memory</li>
                        <li>secondary storage devices</li>
                        <li>input devices</li>
                        <li>output devices</li>
                    </ul>

                    <img className="img-in-reading" src={OrganizationOfAComputerSystem} alt="hardware physical components" />

                    <br />

                    <h2 id="the-cpu">The CPU</h2>
                    <p>The <strong>Central Processing Unit</strong>'s job is to fetch instructions, follow instructions, and then
                        produce some resulting data. The CPU consists of two parts: the <em><strong>control unit</strong></em> and
                        the <em><strong>arithmetic and logic unit (ALC)</strong></em>. The control unit coordinates all of the
                        computer's
                        operations (where to get the next instruction and regulating the other major components of the computer with
                        control signals), while the arithmetic and logic unit performs all of the mathematical operations.
                    </p>

                    <img className="img-in-reading" src={CPUExample} alt="highlevel overview of a CPU" />

                    <p>A program is a sequence of instructions stored in the computer's memory. When a computer is running a
                        program,
                        the CPU is engaged in a process known as the <em><strong>fetch/decode/execute</strong></em> cycle. These
                        steps
                        are repeated as long as there are instructions to perform.</p>
                    <ol>
                        <li><strong>Fetch</strong>: The CPU control unit fetches (from main memory) the next instructions in the
                            sequence of programming instructions.</li>
                        <li><strong>Decode</strong>: The instructions are encoded as a series of numbers. The control unit decodes
                            the
                            instructions and generates an electronic signal.</li>
                        <li><strong>Execute</strong>: The signal is routed to the appropriate component of the computer. This signal
                            causes the component to perform an operation.</li>
                    </ol>

                    <br />

                    <h2 id="main-memory">Main Memory</h2>
                    <p>Random access memory, or <strong>RAM</strong>, is the computer's main memory and is a device that holds the
                        sequeneces of instructions of programs that are running and the data those programs are using. RAM is known
                        as a
                        volatile type of memory, used only for temporary storage. When the computer is turned off, the contents of
                        RAM
                        are erased.</p>
                    <ol>
                        <li>Memory is divided into sections that hold an equal amount of data.</li>
                        <li>Each section is made up of eight <strong>switches</strong> that may be either on or off. 1 if it is on,
                            0 if
                            it is off.</li>
                        <li>The computer stores data by setting the switches in the memory location to a pattern that represents a
                            number or a character. Each of these switches is known as a <strong>bit</strong>, which stands for
                            binary
                            digit.</li>
                        <li>Each section of memory, which is a collection of eight bits, is known as a <strong>byte</strong>.</li>
                        <li>Each byte is assigned an unique number known as an address. Addresses are ordered from lowest to
                            highest.
                        </li>
                    </ol>

                    <img className="img-in-reading" src={RAMExample} alt="highlevel overview of RAM" />

                    <br />

                    <h2 id="secondary-storage">Secondary Storage</h2>
                    <p>A type of memory that can hold data for long periods of time, even when there is no power to the computer.
                    </p>
                    <ol>
                        <li>The most common type of secondary storage is the disk drive. The best type of disk drive is the <strong>solid-state drive</strong>. A solid-state drive has no moving parts, and works much faster than
                            a
                            traditional disk drive. These types of storage are usually mounted within the computer.
                        </li>
                        <li>External secondary storage is used for creating backups of data, or moving said data to another
                            computer.
                            One popular type is a universal serial bus drive (usb). USBs do not contain a disk, but instead store
                            data
                            in a special type of memory known as flash memory.</li>
                    </ol>

                    <br />

                    <h2 id="input-devices">Input Devices</h2>
                    <p>Input is any data that a computer collects from the outside world: keyboard, mouse, scanner, camera, etc.</p>

                    <br />

                    <h2 id="output-devices">Output Devices</h2>
                    <p>Output is any data that the computer sends to the outside world: Monitors, printers, etc.</p>

                    <br />

                    <h2 id="software">Software</h2>
                    <p>Refers to the programs that run a computer. There are two types of software: operating systems and
                        application
                        software.</p>
                    <ul>
                        <li><strong>Operating Systems:</strong> A set of programs that manages the computer's hardware devices and
                            controls their processes. Most modern operating systems are multitasking, which means they are
                            compatible
                            with running multiple programs at once. Through a technique called <strong>time-sharing</strong>, a
                            multitasking system divides the allocation of hardware resources and the attention of the CPU among all
                            the
                            executing programs. Linux, Mac OS, Windows.</li>
                        <li><strong>Application software:</strong> What the user uses. These programs solve specific problems or
                            perform
                            general operations that satisfy the user's needs. Word processing, spreadsheets.</li>
                    </ul>

                    <br />


                    <h2 id="programming-languages">Programming Languages</h2>
                    <p>A programming language is a special language used to write programming programs. A computer's CPU can only
                        process instructions that are written in machine language, which is made up of <strong>binary</strong> (1s
                        and
                        0s). Here is some binary:</p>
                    <div className="center">
                        <p><Latex>$ 1011010000000101 $</Latex></p>
                    </div>
                    <p>Kind of hard to understand, huh? The binary numbers form machine language instructions, which the CPU interprets as
                        commands. Each type of CPU has its own machine language and writing in it is very tedious and difficult. A
                        program is written in a programming language that humans can read much easier than binary. It is then
                        translated
                        into machine language.</p>

                    <br />

                    <h2 id="algorithm">Algorithm</h2>
                    <p>A set of well-defined steps for performing a task or solving a problem.</p>

                    <br />

                    <h2 id="what-is-a-program-made-of">What is a program made of?</h2>
                    <p>There are some universal elements that take place in almost every programming languages:</p>
                    <ul>
                        <li><strong>Keywords:</strong> Words that have special meaning in the programming language. Also known as <em>reserved words</em>.
                        </li>
                        <li><strong>Operators:</strong> Symbols or words that perform operations on one or more operands. An operand
                            is
                            usually an item of data, such as a number.</li>
                        <li><strong>Punctuation:</strong> Most languages require the use of punctuation characters. These characters
                            serve specific purposes, such as making the beginning or ending of a statement, or separating items in a
                            list.</li>
                        <li><strong>Programmer Defined Names:</strong> Unlike keywords, these are words or names that are defined by
                            the
                            programmer. They are used to identify storage locations in memory and parts of the program that are
                            created
                            by the programmer. Programmer-defined names are often called identifiers. They can be variable,
                            function,
                            method, className, object, constant, array, package, or enumeration names.</li>
                        <li><strong>Syntax:</strong> These are the rules that must be followed when writing a program. Syntax
                            dictates
                            how keywords and operators may be used, and where punctuation symbols must appear.</li>
                    </ul>

                    <br />

                    <h2 id="">Keywords</h2>
                    <p>Part of learning a programming language is learning the commonly used keywords, what they mean, and how to use them. An important note about keywords is that they are reserved and cannot be used for anything other than their designated purpose. Do not worry about memorizing or even fully understanding them just yet. With time, you will learn what they mean and how to use them.</p>

                    <h2 id="variables">Variables</h2>
                    <p>The most fundamental way to store an item of data in memory. A variable is a named storage location in
                        the
                        computer's memory. Variables are symbolic names made up by the programmer that represent locations in the
                        computer's RAM. So when data is stored in a variable, it is actually stored in RAM. Let's assume that a
                        program
                        has a variable named <code>age</code>. Here is an example of how the variable name represents a memory
                        location.
                    </p>

                    <img className="img-in-reading" src={MemoryExample} alt="the address holds the int value of 21" />

                    <p>Here we have the variable <code>age</code> is holding the value of 21. The number 21 is actually stored in
                        RAM at
                        address 7, but the name <code>age</code> symbolically represents this storage location. Think of a variable
                        as a
                        box that holds data. The number 21 is stored in the box named <code>age</code>. Only one item may be stored
                        in
                        the box at any given time. If the program stores another value in the box, it will take the place of the
                        number
                        21.</p>

                    <br />

                    <h2 id="the-programming-process">The Programming Process</h2>
                    <p>The general process for creating a program starts with planning. Start here if you are not sure on how to
                        tackle
                        a problem:</p>
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
                    <p>OOP is a method of software development that has its own practices,
                        concepts, and vocabulary.</p>
                    <p>There are two methods of programming: procedural and object-oriented. <strong>Procedual</strong> is a set or
                        programming statements that perform a specific task. The typically operate on data items that are separate
                        from the procedures. This separation of data and the code that operates on the data often leads to problems.</p>

                    <img className="img-in-reading" src={ProceduralProgramming101} alt="procdures and data" />

                    <p>The issues from procedural programs gave way to OOP. OOP became centered on creating objects. <strong>Objects</strong> are a self-contained unit consisting of data (<strong>attributes</strong>) and
                        procedures (<strong>methods</strong>). Only the object's methods may directly access and make changes to the
                        object's data. An object typically hides its data, but allows outside code to access the methods that
                        operate on
                        the data.
                    </p>
                    <p>OOP addresses the problem of code/data separation through data hiding, called encapsulation. <strong>Encapsulation</strong> refers to the combining of data and code into a single object. Data hiding
                        refers
                        to an object's ability to hide its data from code that is outside the object.
                    </p>
                    <p>When the object's internal data is hidden from outside code and access to that data is restricted to the
                        object's
                        methods, the data is protected from accidental corruption. In addition, the programming code outside the
                        object
                        does not need to know about the format or internal structure of the object's data. The code only needs to
                        interact with the object's methods.</p>
                    <p>When a programmer changes the structure of an object's internal data, he/she also modifies the object's
                        methods
                        so they may properly operate on the data. The way in which outside code interacts with the methods, however,
                        does not change.</p>
                    <div className="container">
                        <div className="row">
                            <div className="col"></div>
                            <div className="col-lg-8">
                                <ul>
                                    <li><strong>Object:</strong> a software entity that contains data and procedures</li>
                                    <li><strong>Attributes:</strong> the data contained in an object is known as the object's attributes</li>
                                    <li><strong>Methods:</strong> the procedures or behaviors that an object performs are known as the object's
                                        methods</li>
                                    <li><strong>Encapsulation:</strong> the combining of data and code into a single object</li>
                                    <li><strong>Data Hiding:</strong> an object's ability to hide its data from code that is outside the object.</li>
                                </ul>
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}