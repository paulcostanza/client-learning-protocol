export default [
    {
        id: 1,
        type: 'radio',
        title: 'Tilde',
        question: "What does the \`~\` symbol in the terminal prompt represent?",
        options: [
            'the root directory',
            'the user\'s home directory',
            'the current working directory',
            'the system hostname',
            'this symbol is not valid'
        ],
        answer: 'the user\'s home directory'
    },
    {
        id: 2,
        type: 'radio',
        title: 'Cash money',
        question: "What does the \`$\` at the end of the prompt indicate?",
        options: [
            'the user is an administrator',
            'the user is a guest',
            'the user is not an administrative user',
            'the shell is in safe mode'
        ],
        answer: 'the user is not an administrative user'
    },
    {
        id: 3,
        type: 'radio',
        title: 'Kitty cat',
        question: "In the command \`cat secret_file\`, what does \`secret file\` represent?",
        options: [
            'the program name',
            'a command option',
            'an argument to the program',
            'the shell type'
        ],
        answer: 'an argument to the program',
        description: 'It represents the argument, or parameter, to the program'
    },
    {
        id: 4,
        type: 'radio',
        title: '-not sure',
        question: "What does the \`-n\` argument do in the command \`echo -n Hi Everybody!!\`?",
        options: [
            'prints the output in bold',
            'adds a newline',
            'prevents echo from printing a newline at the end',
            'prints the output in uppercase',
            'prints the output twice'
        ],
        answer: 'prevents echo from printing a newline at the end'
    },
    {
        id: 5,
        type: 'radio',
        title: 'Who am I?',
        question: "What does the command \`whoami\` do?",
        options: [
            'prints the hostname',
            'prints the current directory',
            'prints the username',
            'prints the shell type'
        ],
        answer: 'prints the username',
    },
    {
        id: 6,
        type: 'radio',
        title: 'Slash of the Titans',
        question: "What does the \`/\` symbol in the terminal prompt represent?",
        options: [
            'the root directory',
            'the user\'s home directory',
            'the current working directory',
            'the system hostname',
            'this symbol is not valid'
        ],
        answer: 'the root directory',
    },
    {
        id: 7,
        type: 'radio',
        title: 'Back, back, back...',
        question: "What does the \`\\\` symbol in the terminal prompt represent?",
        options: [
            'the root directory',
            'the user\'s home directory',
            'the current working directory',
            'the system hostname',
            'this symbol is not valid'
        ],
        answer: 'this symbol is not valid'
    },
    // start of The File System section
    {
        id: 8,
        type: 'radio',
        title: 'Root awakening',
        question: "What is the root directory in Linux?",
        options: [
            '\`/root\`',
            '\`/home\`',
            '\`/\`',
            '\`C:\\\`'
        ],
        answer: '\`/\`',
        description: `If you chose \`C:\\\` in the Linux section just leave my friend, you ain't gonna make it. `
    },
    {
        id: 9,
        type: 'radio',
        title: 'Temporary question',
        question: "Which directory contains temporary data storage?",
        options: [
            '\`/\`',
            '\`/usr\`',
            '\`/usr/bin\`',
            '\`/usr/lib\`',
            '\`/usr/share\`',
            '\`/etc\`',
            '\`/var\`',
            '\`/home\`',
            '\`/proc\`',
            '\`/tmp\`',

        ],
        answer: '\`/tmp\`',
    },
    {
        id: 10,
        type: 'radio',
        title: 'Hidden files',
        question: "In Linux, which character at the beginning of a filename makes the file hidden by default?",
        options: [
            '\`~\`',
            '\`.\`',
            '\`/\`',
            '\`#\`',
            '\`-\`',
            '\`@\`',
        ],
        answer: '\`.\`',
        description: "Files and directories that start with a dot \`.\` are hidden by default in Linux. You can view them with the \`ls -a\` command."
    },
    {
        id: 11,
        type: 'radio',
        title: 'Biblioteca',
        question: "Which directory contains shared libraries for use by programs on the computer?",
        options: [
            '\`/\`',
            '\`/usr\`',
            '\`/usr/bin\`',
            '\`/usr/lib\`',
            '\`/usr/share\`',
            '\`/etc\`',
            '\`/var\`',
            '\`/home\`',
            '\`/proc\`',
            '\`/tmp\`',

        ],
        answer: '\`/usr/lib\`'
    },
    {
        id: 12,
        type: 'radio',
        title: 'Where am I?',
        question: "Which command shows your current working directory?",
        options: [
            '\`ls\`',
            '\`cd\`',
            '\`pwd\`',
            '\`whoami\`',
        ],
        answer: '\`pwd\`',
        description: '\`pwd\` - present working directory'
    },
    {
        id: 13,
        type: 'radio',
        title: 'All system files',
        question: "Which directory contains all the system files?",
        options: [
            '\`/\`',
            '\`/usr\`',
            '\`/usr/bin\`',
            '\`/usr/lib\`',
            '\`/usr/share\`',
            '\`/etc\`',
            '\`/var\`',
            '\`/home\`',
            '\`/proc\`',
            '\`/tmp\`',

        ],
        answer: '\`/usr\`',
        description: '\`usr\` - unix system resource'
    },
    {
        id: 14,
        type: 'radio',
        title: 'Los Santos',
        question: "What is the purpose of the \`ls\` command?",
        options: [
            'change directories',
            'list files in a directory',
            'show system processes',
            'display user information',
        ],
        answer: 'list files in a directory'
    },
    {
        id: 15,
        type: 'radio',
        title: 'No relativity',
        question: "Which of the following is an absolute path?",
        options: [
            '\`usr/bin\`',
            '\`/home/username\`',
            '\`./flags\`',
            '\`../tmp\`',

        ],
        answer: '\`/home/username\`',
    },
    {
        id: 16,
        type: 'radio',
        title: 'User data',
        question: "Which directory contains user-owned data?",
        options: [
            '\`/\`',
            '\`/usr\`',
            '\`/usr/bin\`',
            '\`/usr/lib\`',
            '\`/usr/share\`',
            '\`/etc\`',
            '\`/var\`',
            '\`/home\`',
            '\`/proc\`',
            '\`/tmp\`',

        ],
        answer: '\`/home\`',
    },
    {
        id: 17,
        type: 'radio',
        title: 'Where to?',
        question: "What does the command \`cd\` do when used with no arguments?",
        options: [
            'changes to the root directory',
            'changes to the previous directory',
            'changes to the user\'s home directory',
            'does nothing',

        ],
        answer: 'changes to the user\'s home directory'
    },
    {
        id: 18,
        type: 'radio',
        title: 'Here or there',
        question: "What does the \`..\` symbol mean in a file path?",
        options: [
            'current directory',
            'home directory',
            'parent directory',
            'root directory',
        ],
        answer: 'parent directory'
    },
    {
        id: 19,
        type: 'radio',
        title: 'Log Hard',
        question: "Which directory contains logs and caches?",
        options: [
            '\`/\`',
            '\`/usr\`',
            '\`/usr/bin\`',
            '\`/usr/lib\`',
            '\`/usr/share\`',
            '\`/etc\`',
            '\`/var\`',
            '\`/home\`',
            '\`/proc\`',
            '\`/tmp\`',

        ],
        answer: '\`/var\`',
    },
    {
        id: 20,
        type: 'radio',
        title: 'program_name',
        question: "Why do you need to type `\./program_name\` to run a program in the current directory on Linux, instead of just typing `\program_name\`?",
        options: [
            'for security',
            'to list files',
            'to change directories',
            'to show hidden files',
        ],
        answer: 'for security',
        description: `By default, when you type a command in Linux, the shell searches for the command in directories listed in your \`PATH\` environment variable (usually system directories like \`/bin\`). It *does not* search the current directory for executables unless you explicitly specify it with \`./\`.

This prevents accidental execution of a program in your current directory that might have the same name as a trusted system command.

For example, if you downloaded a file named \`ls\` and run \`ls\`, you would just list whatever was in the directory. To actually run it would require \`./ls\`.

To run a program in your current directory, you must use \`./\`.`
    },
    {
        id: 21,
        type: 'radio',
        title: 'Process: Impossible',
        question: "Which directory contains runtime process data?",
        options: [
            '\`/\`',
            '\`/usr\`',
            '\`/usr/bin\`',
            '\`/usr/lib\`',
            '\`/usr/share\`',
            '\`/etc\`',
            '\`/var\`',
            '\`/home\`',
            '\`/proc\`',
            '\`/tmp\`',

        ],
        answer: '\`/proc\`',
    },
    {
        id: 22,
        type: 'radio',
        title: 'Execution time',
        question: "Which directory contains executable files for programs installed on the computer?",
        options: [
            '\`/\`',
            '\`/usr\`',
            '\`/usr/bin\`',
            '\`/usr/lib\`',
            '\`/usr/share\`',
            '\`/etc\`',
            '\`/var\`',
            '\`/home\`',
            '\`/proc\`',
            '\`/tmp\`',

        ],
        answer: '\`/usr/bin\`'
    },
    {
        id: 23,
        type: 'radio',
        title: 'Art attack',
        question: "Which directory contains program resources such as icons and art assets?",
        options: [
            '\`/\`',
            '\`/usr\`',
            '\`/usr/bin\`',
            '\`/usr/lib\`',
            '\`/usr/share\`',
            '\`/etc\`',
            '\`/var\`',
            '\`/home\`',
            '\`/proc\`',
            '\`/tmp\`',
        ],
        answer: '\`/usr/share\`',
    },
    {
        id: 24,
        type: 'radio',
        title: 'Configuration Wars',
        question: "Which directory contains system configurations?",
        options: [
            '\`/\`',
            '\`/usr\`',
            '\`/usr/bin\`',
            '\`/usr/lib\`',
            '\`/usr/share\`',
            '\`/etc\`',
            '\`/var\`',
            '\`/home\`',
            '\`/proc\`',
            '\`/tmp\`',
        ],
        answer: '\`/etc\`',
    },
]