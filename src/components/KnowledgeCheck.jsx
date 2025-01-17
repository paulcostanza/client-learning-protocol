export default function KnowledgeCheck() {
    return (
        <>
            <h2>Knowledge Check</h2>
            <div className="container accordion" id="knowledge-check">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#questionOne" aria-expanded="false" aria-controls="questionOne">
                            What two units are the CPU made up of?
                        </button>
                    </h2>
                    <div id="questionOne" className="accordion-collapse collapse" data-bs-parent="#knowledge-check">
                        <div className="accordion-body">
                            <strong>Control Unit:</strong> Manages the execution of instructions, controls the flow of
                            data, and
                            coordinates activities
                            within the CPU.
                            <br />
                            <strong>Arithmetic Logic Unit (ALU):</strong> Performs mathematical calculations
                            (arithmetic) and logical
                            operations
                            (comparisons) required for processing.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#questionTwo" aria-expanded="false" aria-controls="questionTwo">
                            What is a memory address and what is its purpose?
                        </button>
                    </h2>
                    <div id="questionTwo" className="accordion-collapse collapse" data-bs-parent="#knowledge-check">
                        <div className="accordion-body">
                            A <strong>memory address</strong> is a unique identifier that points to a specific location in
                            the computer's
                            memory (RAM).
                            Its purpose is to enable the CPU to access and manipulate data stored at that location. Memory
                            addresses are
                            used to read and write data during program execution.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#questionThree" aria-expanded="false" aria-controls="questionThree">
                            Why do computers have both main memory and secondary storage?
                        </button>
                    </h2>
                    <div id="questionThree" className="accordion-collapse collapse" data-bs-parent="#knowledge-check">
                        <div className="accordion-body">
                            <strong>Main Memory (RAM):</strong> Provides fast, temporary storage that holds data and
                            programs while they are
                            being
                            actively used by the CPU. It allows quick access and execution of instructions.
                            <br />
                            <strong>Secondary Storage:</strong> Offers larger, non-volatile storage capacity for data and
                            programs that need
                            to be
                            retained even when the computer is powered off. It is used for long-term storage and data
                            persistence.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#questionFour" aria-expanded="false" aria-controls="questionFour">
                            List the five major hardware components of a
                            computer system
                        </button>
                    </h2>
                    <div id="questionFour" className="accordion-collapse collapse" data-bs-parent="#knowledge-check">
                        <div className="accordion-body">
                            <ul>
                                <li>CPU</li>
                                <li>main memory</li>
                                <li>hard drive (storage device)</li>
                                <li>input devices</li>
                                <li>output devices</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#questionEight" aria-expanded="false" aria-controls="questionEight">
                            In procedural programming, what two
                            parts of a program are separated?
                        </button>
                    </h2>
                    <div id="questionEight" className="accordion-collapse collapse" data-bs-parent="#knowledge-check">
                        <div className="accordion-body">
                            Data and Procedures
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#questionNine" aria-expanded="false" aria-controls="questionNine">
                            What is encapsulation?
                        </button>
                    </h2>
                    <div id="questionNine" className="accordion-collapse collapse" data-bs-parent="#knowledge-check">
                        <div className="accordion-body">
                            <ul>
                                <li>The combining of data and code into a single object.</li>
                                <li>An object's ability to hide its data from code that is outside the object.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#questionTen" aria-expanded="false" aria-controls="questionTen">
                            This part of the computer fetches instructions, carries out the operations commanded by the
                            instructions, and
                            produces some outcome or resultant information.
                        </button>
                    </h2>
                    <div id="questionTen" className="accordion-collapse collapse" data-bs-parent="#knowledge-check">
                        <div className="accordion-body">
                            CPU
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#questionEleven" aria-expanded="false" aria-controls="questionEleven">
                            A byte is made up of eight...
                        </button>
                    </h2>
                    <div id="questionEleven" className="accordion-collapse collapse" data-bs-parent="#knowledge-check">
                        <div className="accordion-body">
                            bits
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#questionTwelve" aria-expanded="false" aria-controls="questionTwelve">
                            Each byte is assigned a unique...
                        </button>
                    </h2>
                    <div id="questionTwelve" className="accordion-collapse collapse" data-bs-parent="#knowledge-check">
                        <div className="accordion-body">
                            address
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#questionThirteen" aria-expanded="false" aria-controls="questionThirteen">
                            When looking at machine language, you would see...
                        </button>
                    </h2>
                    <div id="questionThirteen" className="accordion-collapse collapse" data-bs-parent="#knowledge-check">
                        <div className="accordion-body">
                            binary
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#questionFourteen" aria-expanded="false" aria-controls="questionFourteen">
                            The rules that mush be followed when
                            writing a program are called...
                        </button>
                    </h2>
                    <div id="questionFourteen" className="accordion-collapse collapse" data-bs-parent="#knowledge-check">
                        <div className="accordion-body">
                            syntax
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#questionFifteen" aria-expanded="false" aria-controls="questionFifteen">
                            The name for a storage lcoation in the
                            computer's memory is called...
                        </button>
                    </h2>
                    <div id="questionFifteen" className="accordion-collapse collapse" data-bs-parent="#knowledge-check">
                        <div className="accordion-body">
                            a variable
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

/*

<div className="container accordion" id="knowledge-check">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#questionOne" aria-expanded="false" aria-controls="questionOne">
                            What two units are the CPU made up of?
                        </button>
                    </h2>
                    <div id="questionOne" className="accordion-collapse collapse" data-bs-parent="#knowledge-check">
                        <div className="accordion-body">
                            <strong>Control Unit:</strong> Manages the execution of instructions, controls the flow of
                            data, and
                            coordinates activities
                            within the CPU.
                            <br />
                            <strong>Arithmetic Logic Unit (ALU):</strong> Performs mathematical calculations
                            (arithmetic) and logical
                            operations
                            (comparisons) required for processing.
                        </div>
                    </div>
                </div>







*/