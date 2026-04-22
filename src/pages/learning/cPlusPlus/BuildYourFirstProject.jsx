export default function BuildYourFirstProject() {
    return (
        <div>
            <h1>Build Your First Project</h1>

            <p>Before we can write our first program, we need to learn how to create new programs within our IDE. Let's explore this, as well as how to compile and execute your first program.</p>

            <h2>Projects</h2>

            <p>To write a C++ program inside an IDE, we typically start by creating a new project. A <strong>project</strong> is a container that holds all of your source code files, images, data files, etc... that are needed to produce an executable (or library, website, etc.) that you can run or use. The project also saves various IDE, compiler, and linker settings, as well as remembering where you left off, so that when you reopen the project later, the state of the IDE can be restored to wherever you left off. When you choose to compile your program, all of the <code>.cpp</code> files in the project will get compiled and linked.</p>

            <p>Each project corresponds to one program.</p>

            <h2>Console Projects</h2>

            <p>When you create a new project, you will generally be asked what type of project you want to create. One type is a console project. A <strong>console project</strong> means that we are going to create programs that can be run from the Windows, Linux, or Mac console.</p>

            <p>By default, console applications have no graphical user interface (GUI), they print text to the console, read input from the keyboard, and are compiled into stand-alone executable files. This is perfect for learning C++, because it keeps the complexity to a minimum, and ensures things work on a wide variety of systems.</p>

            <h2>Workspaces/solutions</h2>

            <p>When you create a new project for your program, many IDEs will automatically add your project to a <em>workspace</em> or a <em>solution</em> (the term varies by IDE). A workspace or solution is a container that can hold one or more related projects. For example, if you were writing a game and wanted to have a separate executable for single player and multiplayer, you would need to create two projects. It would not make sense for both of these projects to be completely independent. After all, they are part of the same game. Most likely, each would be configured as a separate project within a single workspace/solution.</p>

            <h2>
                Compile, build, rebuild, clean, and run/start
            </h2>

            <p>Remember how that if you want to produce an executable that can be run, each code file in a program is compiled into an object file, and then the object files are linked into an executable?</p>

            <p>Well, when a code file is compiled, your IDE may cache (save) the resulting object file on disk. A <strong>cache</strong> (pronounced <em>cash</em>) is storage location where frequently accessed data is stored for fast retrieval later. That way, if the program is compiled again in the future, any code file that has not been modified does not need to be recompiled. The cached object file from last time can be reused (rather than having to be regenerated). This can speed up compilation times significantly (at the cost of a little bit of disk space).</p>

            <p>With that in mind, here is what each of the options typically does:</p>

            <ul>
                <li><strong>build</strong> (compiles changed files + link) compiles all <em>modified</em> code files in the project or workspace/solution, and then links the object files into an executable. If no code files have been modified since the last build, this option does nothing.</li>

                <li><strong>clean</strong> (deletes all compiled files) removes all cached objects and executables so the next time the project is built, all files will be recompiled and a new executable is produced.</li>

                <li><strong>rebuild</strong> (build + clean) does a <em>clean</em>, followed by a <em>build</em></li>

                <li><strong>compile</strong> (compile one file only without linking) recompiles a single code file (regardless of whether it has been cached previously). This option does not invoke the linker or produce an executable.</li>

                <li><strong>run/start</strong> (executes program which may trigger a build) executes the executable from a prior build. Some IDEs (like Visual Studio) will invoke a <em>build</em> before doing a <em>run</em> to ensure you are running the latest version of your code. Otherwise run/start will just execute the prior executable.</li>
            </ul>

            <p>Although we talk informally about <em>compiling</em> our programs, to actually compile it you typically need to choose the <em>build</em> (or <em>run</em>) option in the IDE to do so.</p>

            <h2>Types of configurations</h2>

            <p>A <strong>build configuration</strong> (also called a <strong>build target</strong>) is a collection of project settings that determines how your IDE will build your project. The build configuration typically includes things like what the executable will be named, what directories the IDE will look in for other code and library files, whether to keep or strip out debugging information, how much to have the compiler optimize your program, etc... Generally, you will want to leave these settings at their default values unless you have a specific reason to change something.</p>

            <p>When you create a new project in your IDE, most IDEs will set up two different build configurations for you: <em>debug configuration</em> and <em>release configuration</em>.</p>

            <p>The <strong>debug configuration</strong> is designed to help you debug your program, and is generally the one you will use when writing your programs. This configuration turns off all optimizations, and includes debugging information, which makes your programs larger and slower, but much easier to debug. The debug configuration is usually selected as the active configuration by default.</p>

            <p>The <strong>release configuration</strong> is designed to be used when releasing your program to the public. This version is typically optimized for size and performance, and does not contain the extra debugging information. Because the release configuration includes all optimizations, this mode is also useful for testing the performance of your code.</p>

            <blockquote>
                <p>Best practice would be to use the debug build configuration when developing your programs. When you are ready to release your executable to others, or want to test performance, use the release build configuration.</p>
            </blockquote>

            <p>Some IDEs also create separate build configurations for different platforms. For example, Visual Studio creates build configurations for both the x86 (32-bit) and the x64 (64-bit) platforms.</p>

            <p>Whenever you update your project settings, make the change for all build configurations (unless it is not appropriate for some reason).</p>

        </div>
    )
}