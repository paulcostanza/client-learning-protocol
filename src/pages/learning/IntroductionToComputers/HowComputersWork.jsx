import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import CPUExample from '../../../assets/introToComp/howCompWorks/cpu example.png'
import RAMExample from '../../../assets/introToComp/howCompWorks/ram example.png'
import Hardware from '../../../assets/introToComp/howCompWorks/hardware.png'
import Harddrive from '../../../assets/introToComp/howCompWorks/harddrive.png'
import Ssd from '../../../assets/introToComp/howCompWorks/ssd.png'
import CpuHardware from '../../../assets/introToComp/howCompWorks/cpu hardware.png'

export default function HowComputersWork() {
    const quizImports = {
        introtocomp: () => import('../../../pages/quiz/database/IntroToCompQuestions.js')
    }

    return (
        <>
            <main>
                <div className="container">
                    <h1 id="introduction-to-computers">How Computers Work</h1>



                    <h2 id="hardware-and-software">Hardware and Software</h2>

                    <p>Programs are executed on the computer's <strong>hardware</strong>, which consists of the physical components that make up a computer. As a developer, it is important to understand the basic inner workings of a computer.</p>

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

                    <h3 id="the-cpu">The CPU</h3>

                    <p>The <strong>Central Processing Unit</strong>, sometimes just called the <em>processor</em> is responsible for executing instructions and performing calculations. Think of it as the brain of the computer.</p>

                    <p>The CPU will fetch instructions, follow instructions, and then produce some resulting data. The CPU consists of two parts: the <em><strong>control unit</strong></em> and the <em><strong>arithmetic logic unit (ALU)</strong></em>. The control unit coordinates all of the computer's operations (where to get the next instruction and regulating the other major components of the computer with control signals), while the arithmetic logic unit performs all of the mathematical operations.</p>

                    <img className="img-in-reading" src={CPUExample} alt="highlevel overview of a CPU" />

                    <p>This small square's processing speeds measured in <strong>gigahertz</strong> (<em>GHz</em>: a billion cycles per second) and <strong>megahertz</strong> (<em>MHz</em>: a million cycles per second).</p>

                    <blockquote>
                        <p>Well... technically GHz and MHz measures <strong>clock frequency</strong> and not overall performance, but we will get more into that later. Clock speed is only one factor affecting CPU performance.</p>
                    </blockquote>

                    <p>The CPU contains <em>registers</em> and <em>cache</em>, which are very small but extremely fast storage locations. The CPU uses registers for immediate working data, the data that it is actively working with, while cache helps keep frequently needed data close to the CPU.</p>

                    <img className="img-in-reading" src={CpuHardware} alt="CPU hardware image" />

                    <p>A program is a sequence of instructions stored in the computer's memory. When a computer is running a program, the CPU is engaged in a process known as the <em><strong>fetch/decode/execute</strong></em> cycle. These steps are repeated as long as there are instructions to perform.</p>

                    <ol>
                        <li><strong>Fetch</strong>: The CPU control unit fetches (from main memory) the next instructions in the sequence of programming instructions.</li>
                        <li><strong>Decode</strong>: The instructions are encoded as a series of numbers. The control unit decodes the instructions and generates an electronic signal.</li>
                        <li><strong>Execute</strong>: Adding two numbers, loading data, storing data, comparing values, or jumping to another instruction are all examples of what can be executed. The CPU performs the operation specified by the instruction.</li>
                    </ol>

                    <br />

                    <h3 id="secondary-storage">Secondary Storage</h3>

                    <p>A type of memory that can hold data for long periods of time, even when there is no power to the computer.</p>

                    <h4>Hard drive</h4>

                    <p>The most common type of secondary storage is the disk drive, or sometimes called a hard drive. The <strong>hard drive</strong> is a permanent storage location that is used to store data, even when the computer is turned off.</p>

                    <p>Old-school hard drives (hard disk) are made up of a spinning platter and an arm. The platter is where the data is stored and the arm is used to read and write data to the platter.</p>

                    <img className="img-in-reading" src={Harddrive} alt="old-school hard drive, the hard drive" />

                    <blockquote>
                        <p>When your computer tells you it is low on space, it is talking about how your hard drive is almost full!</p>
                    </blockquote>

                    <h4>SSD</h4>

                    <p>The newer and better kind of hard drive is the <strong>solid-state drive</strong>. A solid-state drive is non-volatile flash memory. It has no moving parts, works much faster and is more durable than a traditional hard drive. When you have a faster hard drive, your computer will boot up faster and your programs will run faster. Regardless of which ever one you are working with (sometimes both), these types of storage are usually mounted within the computer.</p>

                    <img className="img-in-reading" src={Ssd} alt="new-school hard drive, the solid-state drive" />

                    <h4>Outside of the computer</h4>

                    <p><strong>External secondary storage</strong> is used for creating backups of data, or moving said data to another computer. One popular type is a universal serial bus drive (usb). USBs do not contain a disk, but instead store data in a special type of memory known as flash memory (just like solid-state drives).</p>

                    <br />

                    <p>Secondary storage is great at storing a lot of data, but they are very slow at accessing it. This means it will not always be able to give the data it needs to the CPU. To avoid this problem we use RAM.</p>

                    <h3 id="main-memory">Main Memory</h3>

                    <p>Random access memory, or <strong>RAM</strong>, is the computer's main memory and is a device that holds the sequences of instructions of programs that are running and the data those programs are using. This is where computer programs are loaded prior to execution. RAM is known as a volatile type of memory, used only for temporary storage for the computer's CPU. When the computer is turned off, the contents of RAM are erased.</p>

                    <ol>
                        <li>Memory is divided into sections that hold an equal amount of data.</li>
                        <li>Each section is made up of eight values that may be either on or off. 1 if it is on, 0 if it is off. The underlying hardware represents these values using electricl states.</li>
                        <li>The computer stores data by setting the switches in the memory location to a pattern that represents a number or a character. Each of these switches is known as a <strong>bit</strong>, which stands for binary digit.</li>
                        <li>Each section of memory, which is a collection of eight bits, is known as a <strong>byte</strong>.</li>
                        <li>Each byte is assigned an unique number known as an address. Addresses are ordered from lowest to highest.
                        </li>
                    </ol>

                    <img className="img-in-reading" src={RAMExample} alt="highlevel overview of RAM" />

                    <p>RAM accesses your data, fast. This feature makes it the CPU's best friend. When a program starts, the operating system loads the program's needed data and instructions from secondary storage into RAM. RAM provides much faster access to this working data than secondary storage.</p>

                    <p>Desktop computers typically install RAM on long, removable moduels called <strong>DIMMs</strong>, which plug directly into slots on the motherboard.</p>

                    <p>Having more RAM allows your computer to run more programs and handle larger amounts of data without running out of available memory. If you are running low on RAM, your computer will run slower and you will notice the difference in perfromance.</p>

                    <blockquote>
                        <p>Remember: you cannot permanently store data on the RAM. It is a short memory system. Every time you turn off your computer the data gets wiped!</p>
                    </blockquote>

                    <h3 id="the-gpu">The GPU</h3>

                    <p>The <strong>Graphics Processing Unit</strong> is a specialized processor designed to perform large numbers of calculations in parallel, making it particularly useful for rendering graphics.</p>

                    <p>A <strong>graphics card</strong> is a physical component that contains a GPU along with graphics memory and other hardware needed to connect the GPU to the rest of the computer and display.</p>

                    <p>To create 3d shapes and images from complex calculations, your computer needs to do a massived amount of work. An even more difficult part comes in when you need to show these on your screen.</p>

                    <p>This is where the graphics card comes in. It is basically an entire standalone computer dedicated to showing you the right things on your screen, deciding which pixels need to light up in which color.</p>

                    <blockquote>
                        <p>Some CPUs already come with an integrated graphics card, but they are usually less powerful than a normal single graphics card.</p>
                    </blockquote>

                    <h3 id="network-card">The Network Interface</h3>

                    <p>The <strong>network interface</strong> allows the computer to communicate with other devices over a network. Ethernet and Wi-Fi are two common types of network connections.</p>

                    <p>If your computer supports WiFi, which gives you access to the internet without using ethernet cables, that means it uses a wireless card.</p>

                    <h3 id="power-supply-unit">The Power Supply Unit</h3>

                    <p>The <strong>Power Supply Unit</strong> is responsible for converting the electricity from the wall outlet into a form that the computer can use. It sends the power from the outlet to the motherboard, CPU, and other components of the computer.</p>

                    <h3 id="the-motherboard">The Motherboard</h3>

                    <p>The <strong>motherboard</strong> holds all the memory and connectors that are needed to run the computer. Think of it as the heart of the computer. It serves as the main circuit board for the computer, and is where the CPU is located, going right inside the CPU socket.</p>

                    <p>A wide and flat circuit board, the motherboard is considered the main component of the computer since this is where every other component gets connected... conceptually. Its goal is to provide pathways to make the other parts of the computer communicate with each other.</p>

                    <h3>Case</h3>

                    <p>A case is simply a box of plasitic where every part goes. The popular formats are a mini tower (14 inches - 16 inches), mid tower (17 inches - 21 inches), and full tower (22 inches - 27 inches).</p>

                    <p>Your choice of case should come after deciding the sizes of the other components to make sure everything fits in it.</p>

                    <h3>Cooling System</h3>

                    <p>Some areas of the computer such as the CPU and graphics card generate a lot of heat and would fry every other component and themselves if they didn't chill.</p>

                    <p>A computer can have air colling or liquid cooling, each having their own pros and cons.</p>

                    <h3 id="input-devices">Input Devices</h3>

                    <p>Input is any data that a computer collects from the outside world: keyboard, mouse, scanner, camera, touch screen, etc.</p>

                    <h3>Output Devices</h3>

                    <p>Output is any data that the computer sends to the outside world: Monitors, printers, etc.</p>

                    <hr />

                    <h2>Review</h2>

                    <p>When you open a program, the program is stored on secondary storage such as an SSD. The operating system loads the instructions and data the program needs into RAM. The CPU then fetches instructions from memory, decodes them, and executes them. If the program needs to display graphics, the GPU may perform graphics calculations and send the resulting image to the display. Network hardware allows the computer to communicate with other computers and devices.</p>

                    <ReviewQuiz
                        quizImports={quizImports}
                        subcategory={"how-comp-work"}
                    />
                </div>
            </main>
        </>
    )
}