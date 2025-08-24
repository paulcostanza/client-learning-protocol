import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Table from '@mui/joy/Table'
import Sheet from '@mui/joy/Sheet'
import InTheComputer from '../../assets/cybersecurity/filesystem/in the computer.gif'
import FilesAndDirectories from '../../assets/cybersecurity/filesystem/files and directories.png'
import FilesAndMoreDirectories from '../../assets/cybersecurity/filesystem/files and more directories.png'

export default function FileSystem() {

    const pathExample = `/UserData/PaulsData/Personal/Cooking?applePieRecipe`

    const currentWorkingDirectory = `paul@mylaptop:~$ cd /
paul@mylaptop:/$ cd home
paul@mylaptop:/home$ pwd
/home
paul@mylaptop:/home$ cd hacker
paul@mylaptop:/home/hacker$ pwd
/home/hacker
paul@mylaptop:/home/hacker$`

    const lsCommand = `paul@mylaptop:/$ ls
bin boot challenge dev etc flag home lib lib32 lib 64 libx32 media mnt nix opt proc root run sbin srv sys tmp usr var
paul@mylaptop:/$ ls /home
hacker
paul@mylaptop:/$`

    const exampleOne = `/challenge
/challenge/.
/challenge/./././././././././
/./././challenge/././`

    const exampleTwo = `paul@mylaptop:~$ cd /challenge
paul@mylaptop:/challenge$ run`

    const exampleTwoError = `bash: run: command not found`

    const homeDirectory = `paul@laptop:~$`

    const playingWithTilde = `paul@laptop:~$ echo LOOK: ~
LOOK: /home/paul
paul@laptop:~$ cd /
paul@laptop:/$ cd ~
paul@laptop:~$ cd ~/asdf
paul@laptop:~/asdf$ cd ~/asdf
paul@laptop:~/asdf$ cd ~
paul@laptop:~$ cd /home/paul/asdf
paul@laptop:~/asdf$`

    const defaultCd = `paul@laptop:~$ cd /tmp
paul@laptop:/tmp$ cd
paul@laptop:~$`

    return (
        <div>

            <h1>The File System</h1>
            <p>
                The <em>file system</em> is a complex storage structure that enables a computer to store your files. Computers store data in the files.
            </p>

            <img src={InTheComputer} alt="In the computer" className='center-img' />

            <p><em>Files live inside of <strong>directories</strong>.</em></p>

            <p>
                The Linux filesystem is a <em>tree</em> and it has a root (written as <code>/</code>). The root of the filesystem is a directory, and every directory can contain other directories and files. You refer to files and directories by their <em>path</em>. A path from the root of the filesystem starts with <code>/</code> (the root), and describes the set of directories that must be descended into to find the file. Every piece of the path is demarcated with another <code>/</code>.
            </p>

            <p>
                You cannot just have files laying around randomly because you would never be able to find anything. Computers store files in <strong>directories</strong> in the filesystem. Each directory can contain many files, like a box. And then for better organization, directories can be stored in other directories.
            </p>

            <img src={FilesAndDirectories} alt="files and directories" className='center-img' />

            <h2>
                The <code>root</code> Directory
            </h2>
            <p>
                <em>There's always a bigger box..</em> until there isn't.
            </p>
            <p>
                In Linux, directories are stored in other directories, which are in turn stored in other directories. This cannot go on forever. The <em>outermost</em> box is the <strong>root</strong> directory (<code>/</code>).
            </p>

            <img src={FilesAndMoreDirectories} alt="files and more directories" className='center-img' />

            <p>
                With all these directories and files mixed in with each other, how would you target or grab a specific file?
            </p>

            <h2>A Path</h2>
            <p>
                The path through these nested directories that the computer should take to find your file or directory is called a <strong>path</strong>. For example:
            </p>

            <div className="">
                <SyntaxHighlighter language="bash" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {pathExample}
                </SyntaxHighlighter>
            </div>

            <p>
                Of course, on Linux, typical names of directories are not so descriptive.
            </p>

            <h2>The Typical File System Layout</h2>

            <p><em>Linux has a standardized file system layout</em></p>

            <Sheet>
                <Table
                    borderAxis="none"
                    color="neutral"
                    size="lg"
                    stickyFooter={false}
                    stickyHeader={false}
                    stripe="odd"
                    variant="outlined"
                    hoverRow
                >
                    <thead>
                        <tr>
                            <th style={{ width: '25%' }}>Directory</th>
                            <th style={{ width: '75%' }}>Description</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><code>/</code></td><td>The <em>anchor</em> of the filesystem. Pronounced "root".</td></tr>
                        <tr><td><code>/usr</code></td><td>The Unix System Resource. Contains all the system files.</td></tr>
                        <tr><td><code>/usr/bin</code></td><td>Executable files for programs installed on the computer.</td></tr>
                        <tr><td><code>/usr/lib</code></td><td>Shared libraries for use by programs on the computer.</td></tr>
                        <tr><td><code>/usr/share</code></td><td>Program resources (icons, art assets, etc).</td></tr>
                        <tr><td><code>/etc</code></td><td>System configurations.</td></tr>
                        <tr><td><code>/var</code></td><td>Logs, caches, etc.</td></tr>
                        <tr><td><code>/home</code></td><td>User-owned data.</td></tr>
                        <tr><td><code>/proc</code></td><td>Runtime process data.</td></tr>
                        <tr><td><code>/tmp</code></td><td>Temporary data storage.</td></tr>
                    </tbody>

                </Table>
            </Sheet>

            <br />

            <p>
                Now if you are used to Windows (which traditionally has different file systems at different anchor points like <code>C:\</code>, <code>D:\</code>, <code>E:\</code>, etc), this can be a bit of an adjustment.
            </p>

            <h2>Navigating the System</h2>
            <p>
                Each process has a <em>current working directory</em>: the directory it is looking into at the moment. You can view it with the <code>pwd</code> command (and it usually shows in your prompt) and change it with the <code>cd</code> (<strong>c</strong>hange <strong>d</strong>irectory) command.
            </p>

            <div className="">
                <SyntaxHighlighter language="bash" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {currentWorkingDirectory}
                </SyntaxHighlighter>
            </div>

            <p>
                You can list the files in a directory using the <code>ls</code> command. With no arguments, it will list the files in the current directory
            </p>

            <div className="">
                <SyntaxHighlighter language="bash" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {lsCommand}
                </SyntaxHighlighter>
            </div>

            <h2>Specifying paths</h2>

            <p>
                There are two ways to specify paths:
            </p>
            <p>
                <strong>Absolute Paths</strong> start with <code>/</code>, such as <code>/usr</code>, <code>/home/paul/flags/TOPSECRET</code>, etc.
            </p>
            <p>
                <strong>Relative Paths</strong> <em>do not</em> start with <code>/</code>, and are relative to the current working directory. The relative path is interpreted <em>relative</em> to your <strong>c</strong>urrent <strong>w</strong>orking <strong>d</strong>irectory (cwd), and your cwd is the directory that your prompt is currently located at. You specify a particular file depending on where the terminal prompt is located.
            </p>

            <p>
                A <em>path</em> contains:
                <ul>
                    <li>possible leading <code>/</code> to specify that the path is absolute (starts at the root)</li>
                    <li>directory names, followed by <code>/</code> to reference resources <em>inside</em> a directory.</li>
                    <li><code>.</code> (one dot) signifying <em>current directory</em></li>
                    <li><code>..</code> (two dots) signifying <em>the directory that the current directory lives in</em></li>
                    <li>a file name at the end of the path, referencing a file with that name</li>
                </ul>
            </p>

            <h2>Path examples</h2>

            <strong>Example #1</strong>
            <p>The following paths lead to the exact same place:</p>

            <div className="">
                <SyntaxHighlighter language="bash" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {exampleOne}
                </SyntaxHighlighter>
            </div>

            <strong>Example #2</strong>

            <p>
                Linux will explicitly avoid automatically looking in the current directory when you provide a <em>naked</em> path. Consider the following:
            </p>

            <div className="">
                <SyntaxHighlighter language="bash" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {exampleTwo}
                </SyntaxHighlighter>
            </div>
            <p>
                This will not invoke <code>/challenge/run</code>.
                This is actually a safety measure: if Linux searched the current directory for programs every time you entered a naked path, you could accidentally execute programs in your current directory that happened to have the same names as core system utilities!
            </p>
            <p>
                As a result, the above commands will yield an error:
            </p>
            <div className="">
                <SyntaxHighlighter language="bash" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {exampleTwoError}
                </SyntaxHighlighter>
            </div>
            <pre>
                <code>

                </code>
            </pre>
            <p>
                This is why we need <code>./</code>
            </p>

            <h2>Challenges</h2>
            <h4>The Root</h4>
            <p>
                The <code>~</code> shows the current path that your shell is located at.
            </p>

            <h4>Home Sweet Home</h4>
            <p>
                Every user has a <code>home directory</code>, typically under <code>/home</code> in the filesystem. Depending on your username, your home directory is <code>/home/username</code>. The home directory is typically where users store most of their personal files. Typically, your shell session will start with your home directory as your current working directory. Consider the initial prompt with the username of <code>Paul</code>:
            </p>

            <div className="">
                <SyntaxHighlighter language="bash" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {homeDirectory}
                </SyntaxHighlighter>
            </div>

            <p>
                The <code>~</code> in this prompt is the current working directory, with <code>~</code> being shorthand for <code>/home/paul</code>.
                Bash provides and uses this shorthand because most of your time will be spent in your home directory.
                Thus, whenever bash sees <code>~</code> provided as the start of an argument in a way consistent with a path, it will expand it to your home directory. Consider:
            </p>

            <div className="">
                <SyntaxHighlighter language="bash" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {playingWithTilde}
                </SyntaxHighlighter>
            </div>

            <p>
                Note that the expansion of <code>~</code> is an <em>absolute path</em>, and only the leading <code>~</code> is expanded.
                This means, for example, that <code>~/~</code> will be expanded to <code>/home/paul/~</code> rather than <code>/home/paul/home/paul</code>.
            </p>
            <p>
                Note: <code>cd</code> will use your home directory as the default destination when used with no arguments.
            </p>

            <div className="">
                <SyntaxHighlighter language="bash" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {defaultCd}
                </SyntaxHighlighter>
            </div>
            <pre>
                <code>

                </code>
            </pre>
        </div>
    )
}
