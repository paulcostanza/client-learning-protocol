import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function TerminalIntro() {

    const commandLine = `dude@clp:~$`

    const commandWithParameters = `dude@clp~$ cat secret_file
hello nerd
dude@clp~$`

    const echo = `dude@clp~$ echo Hi Everybody!!
Hi Everybody!!
dude@clp~$`

    const echoWithN = `dude@clp~$ echo -n Hi Everybody!!
Hi Everybody!!dude@clp~$`

    const twoDashes = `dude@clp~$ date
Sun Aug 25 09:53:32 PM MST 2024
dude@clp~$ date --utc
Sun Aug 25 09:53:32 PM MST 2024
dude@clp~$`

    return (
        <div>
            <h1>Terminal Intro</h1>

            <p><em>What is the terminal and how to use the Linux command line interface</em></p>

            <p>
                The command line of the terminal allows you to execute commands. When you launch a terminal, it will execute a command line <em>shell</em> which will look similar to this:
            </p>

            <div className="">
                <SyntaxHighlighter language="terminal" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {commandLine}
                </SyntaxHighlighter>
            </div>

            <p>
                This is called a <strong>prompt</strong>, and it is prompting you to enter a command.
            </p>

            <ul>
                <li>
                    The <code>dude</code> in the prompt is the <em>username</em> of the current user.
                </li>
                <li>
                    The <code>clp</code> part of the prompt is the <em>hostname</em> of the machine the shell is on (this reminder can be useful if you are a system administrator who deals with many machines on a daily basis).
                </li>
                <li>
                    <code>~</code> represents the user's <em>home directory</em>. More on this later.
                </li>
                <li>
                    <code>$</code> at the end signifies that <code>dude</code> is not an administrative user. The prompt will print <code>#</code> for an administrative user.
                </li>
            </ul>

            <h2>The Command Line</h2>
            <p>
                The command line (aka <em>shell</em>) is a powerful interface to a computer. The basic idea:
            </p>
            <ul>
                <li>you type a command</li>
                <li>the system executes it and outputs the results</li>
            </ul>
            <p>
                Typically, a command will contain a program name and <strong>parameters</strong> (aka <em>arguments</em>) to that program, separated by spaces.
            </p>

            <div className="">
                <SyntaxHighlighter language="terminal" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {commandWithParameters}
                </SyntaxHighlighter>
            </div>

            <p>What is happening?</p>
            <ol>
                <li>
                    We told the shell to run the command <code>cat</code> with the argument <code>secret_file</code>
                </li>
                <li>
                    The shell found the <code>cat</code> program file and launched it into a <code>cat</code> <em>process</em> with a <code>secret_file</code> argument.
                </li>
                <li>
                    <code>cat</code> is a program that outputs files. It reads the <code>secret_file</code> argument and knows to output the <code>secret_file</code> file, which contains: <code>hello nerd</code>
                </li>
            </ol>

            <h4>Command Parameters / Arguments</h4>
            <p>
                Command parameters are also called <em>arguments</em>.
            </p>
            <p>
                For example, the <code>echo</code> command takes multiple arguments and just prints them back to the terminal.
            </p>

            <div className="">
                <SyntaxHighlighter language="terminal" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {echo}
                </SyntaxHighlighter>
            </div>
            <pre>
                <code>

                </code>
            </pre>
            <p>
                Now some arguments can change the functionality of commands. These are (usually) prepended with a dash (<code>-</code>) character. For example, the <code>-n</code> argument to <code>echo</code> prevents <code>echo</code> from printing a newline at the end.
            </p>

            <div className="">
                <SyntaxHighlighter language="terminal" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {echoWithN}
                </SyntaxHighlighter>
            </div>

            <p>
                Longer arguments (longer than one letter) are (usually) prepended with two dashes (<code>--</code>). For example, date displays the current time, but has other operating modes (in this case, switching the timezone to UTC):
            </p>

            <div className="">
                <SyntaxHighlighter language="terminal" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {twoDashes}
                </SyntaxHighlighter>
            </div>

            <h2>Intro to Commands</h2>
            <ul>
                <li><code>whoami</code> prints the username to the terminal.</li>
                <li>To scroll through your history, you can use the up and down arrows on your keyboard to view the most recent commands you have typed.</li>
            </ul>
        </div>
    )
}