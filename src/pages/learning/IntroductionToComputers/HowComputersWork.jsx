import CPUExample from '../../../assets/introToComp/howCompWorks/cpu example.png'
import RAMExample from '../../../assets/introToComp/howCompWorks/ram example.png'
import Hardware from '../../../assets/introToComp/howCompWorks/hardware.png'

export default function HowComputersWork() {
    return (
        <>
            <main>
                <div className="container">
                    <h1 id="introduction-to-computers">How Computers Work</h1>

                    <p>The Versatility of the computer allows it do such a wide variety of task that it makes it one of the greatest tools known in existence. It can accomplish this by being <strong>programmed</strong> to follow specifically designed instructions.</p>

                    <p>Programming is considered both a science and an art. Here are a few things that must be designed for any <strong>real-world</strong> computer program:</p>

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

                    <p>Hardware refers to the physical components that make up a computer. As a developer, it is important to understand the basic inner workings of a computer. A typical computer consists of:</p>

                    <ul>
                        <li>central processing unit (CPU)</li>
                        <li>main memory (RAM)</li>
                        <li>secondary storage devices (hard drive)</li>
                        <li>graphic processing unit (GPU)</li>
                        <li>network card</li>
                        <li>power supply unit</li>
                        <li>motherboard</li>
                        <li>input devices</li>
                        <li>output devices</li>
                    </ul>

                    <img className="img-in-reading" src={Hardware} alt="hardware physical components" />

                    {/* Text List of Components (Left → Right, Top → Bottom)

                        CPU – Top left
                        RAM – Top middle
                        Hard Drive – Top right
                        GPU (Graphics Card) – Middle left
                        Network Card – Middle middle
                        Another Expansion Card (I/O or network style) – Middle right
                        Motherboard – Bottom left
                        Mouse (Input Device) – Bottom middle
                        Power Supply Unit (PSU) – Bottom right
                        Keyboard (Input Device) – Very bottom center */}

                    <br />

                    <h2 id="the-cpu">The CPU</h2>

                    <p>The <strong>Central Processing Unit</strong> is responsible for executing instructions and performing calculations. It is sometimes referred to as the brain of the computer.</p>

                    <p>The CPU will fetch instructions, follow instructions, and then produce some resulting data. The CPU consists of two parts: the <em><strong>control unit</strong></em> and the <em><strong>arithmetic and logic unit (ALC)</strong></em>. The control unit coordinates all of the computer's operations (where to get the next instruction and regulating the other major components of the computer with control signals), while the arithmetic and logic unit performs all of the mathematical operations.</p>

                    <p>This small square's processing speeds measured in <strong>gigahertz</strong> (<em>GHz</em>: a billion cycles per second) and <strong>megahertz</strong> (<em>MHz</em>: a million cycles per second).</p>

                    <img className="img-in-reading" src={CPUExample} alt="highlevel overview of a CPU" />

                    <p>A program is a sequence of instructions stored in the computer's memory. When a computer is running a program, the CPU is engaged in a process known as the <em><strong>fetch/decode/execute</strong></em> cycle. These steps are repeated as long as there are instructions to perform.</p>

                    <ol>
                        <li><strong>Fetch</strong>: The CPU control unit fetches (from main memory) the next instructions in the sequence of programming instructions.</li>
                        <li><strong>Decode</strong>: The instructions are encoded as a series of numbers. The control unit decodes the instructions and generates an electronic signal.</li>
                        <li><strong>Execute</strong>: The signal is routed to the appropriate component of the computer. This signal causes the component to perform an operation.</li>
                    </ol>

                    <br />

                    <h2 id="main-memory">Main Memory</h2>

                    <p>Random access memory, or <strong>RAM</strong>, is the computer's main memory and is a device that holds the sequences of instructions of programs that are running and the data those programs are using. RAM is known as a volatile type of memory, used only for temporary storage for the computer's CPU. When the computer is turned off, the contents of RAM are erased.</p>

                    <ol>
                        <li>Memory is divided into sections that hold an equal amount of data.</li>
                        <li>Each section is made up of eight <strong>switches</strong> that may be either on or off. 1 if it is on, 0 if it is off.</li>
                        <li>The computer stores data by setting the switches in the memory location to a pattern that represents a number or a character. Each of these switches is known as a <strong>bit</strong>, which stands for binary digit.</li>
                        <li>Each section of memory, which is a collection of eight bits, is known as a <strong>byte</strong>.</li>
                        <li>Each byte is assigned an unique number known as an address. Addresses are ordered from lowest to highest.
                        </li>
                    </ol>

                    <img className="img-in-reading" src={RAMExample} alt="highlevel overview of RAM" />

                    <p>The more RAM you have on your computer, the faster it will run and the more programs you can run at the same time. If you are running low on RAM, your computer will run slower and you will notice the difference in perfromance.</p>

                    <br />

                    <h2 id="secondary-storage">Secondary Storage</h2>

                    <p>A type of memory that can hold data for long periods of time, even when there is no power to the computer.</p>

                    <p>The most common type of secondary storage is the disk drive, or sometimes called a hard drive. The <strong>hard drive</strong> is a permanent storage location that is used to store data, even when the computer is turned off. This is where all your files and software are stored.</p>

                    <p>Old-school hard drives (hard disk) are made up of a spinning platter and an arm. The platter is where the data is stored and the arm is used to read and write data to the platter.</p>

                    <p>The newer and much better kind of hard drive is the <strong>solid-state drive</strong>. A solid-state drive is non-volatile flash memory. It has no moving parts, and works much faster than a traditional hard drive. When you have a faster hard drive, your computer will boot up faster and your programs will run faster. Regardless of which ever one you are working with, these types of storage are usually mounted within the computer.</p>

                    <p><strong>External secondary storage</strong> is used for creating backups of data, or moving said data to another computer. One popular type is a universal serial bus drive (usb). USBs do not contain a disk, but instead store data in a special type of memory known as flash memory (just like solid-state drives).</p>

                    <br />

                    <h2 id="the-gpu">The GPU</h2>

                    <p>The video card, aka <strong>Graphics Processing Unit</strong>, is responsible for rendering visuals on the computer screen.</p>

                    <h2 id="network-card">The Network Card</h2>

                    <p>The network card is responsible for connecting the computer to the internet.</p>

                    <h2 id="power-supply-unit">The Power Supply Unit</h2>

                    <p>The <strong>Power Supply Unit</strong> is responsible for converting the electricity from the wall outlet into a form that the computer can use. It sends the power from the outlet to the motherboard, CPU, and other components of the computer.</p>

                    <h2 id="the-motherboard">The Motherboard</h2>

                    <p>The <strong>motherboard</strong> holds all the memory and connectors that are needed to run the computer. It serves as the main circuit board for the computer, and is where the CPU is located, going right inside the CPU socket.</p>

                    <h2 id="input-devices">Input Devices</h2>

                    <p>Input is any data that a computer collects from the outside world: keyboard, mouse, scanner, camera, etc.</p>

                    <br />

                    <h2 id="output-devices">Output Devices</h2>

                    <p>Output is any data that the computer sends to the outside world: Monitors, printers, etc.</p>

                </div>
            </main>
        </>
    )
}