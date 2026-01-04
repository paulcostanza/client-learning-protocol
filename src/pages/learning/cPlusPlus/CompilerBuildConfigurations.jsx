export default function CompilerBuildConfigurations() {
    return (
        <div>
            <h1>Compiler Build Configurations</h1>

            <p><strong><em>Compiling your compiler's build configurations</em></strong></p>

            <p>A <strong>build configuration</strong> (also called a <strong>build target</strong>) is a collection of project settings that determines how your IDE will build your project. The build configuration typically includes things like what the executable will be named, what directories the IDE will look in for other code and library files, whether to keep or strip out debugging information, how much to have the compiler optimize your program, etc... Generally, you will want to leave these settings at their default values unless you have a specific reason to change something.</p>

            <p>When you create a new project in your IDE, most IDEs will set up two different build configurations for you: a release configuration, and a debug configuration.</p>

            <p>The <strong>debug configuration</strong> is designed to help you debug your program, and is generally the one you will use when writing your programs. This configuration turns off all optimizations, and includes debugging information, which makes your programs larger and slower, but much easier to debug. The debug configuration is usually selected as the active configuration by default.</p>

            <p>The <strong>release configuration</strong> is designed to be used when releasing your program to the public. This version is typically optimized for size and performance, and does not contain the extra debugging information. Because the release configuration includes all optimizations, this mode is also useful for testing the performance of your code.</p>

            <blockquote>
                <strong>Best practice</strong> would be to use the <em>debug</em> build configuration when developing your programs. When you are ready to release your executable to others, or want to test performance, use the <em>release</em> build configuration.
            </blockquote>

            <p>Some IDEs also create separate build configurations for different platforms. For example, Visual Studio creates build configurations for both the x86 (32-bit) and the x64 (64-bit) platforms.</p>

            <p>Whenever you update your project settings, make the change for all build configurations (unless it is not appropriate for some reason).</p>
        </div>
    );
}