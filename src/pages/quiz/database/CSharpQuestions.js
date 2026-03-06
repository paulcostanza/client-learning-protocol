export default [
    {
        id: 1,
        type: 'radio',
        category: 'c#',
        subcategory: '',
        title: '',
        question: 'What is the primary purpose of the CLR in the .NET framework?',
        options: [
            'to compile C# code directly to machine code',
            'to manage memory allocation only',
            'to convert IL code into machine code at runtime',
            'to provide a graphical user interface'
        ],
        random: true,
        answer: 'to convert IL code into machine code at runtime',
        description: 'The Common Language Runtime (CLR) is the virtual machine component of .NET. It manages the execution of .NET programs by converting Intermediate Language (IL) code into machine code at runtime, handling memory management, security, and exception handling.'
    },
    {
        id: 2,
        type: 'radio',
        category: 'c#',
        subcategory: '',
        title: '',
        question: 'Which of the following is a valid identifier in C#?',
        options: [
            '\`1route\`',
            '\`int\`',
            '\`@int\`',
            '\`first name\`'
        ],
        random: true,
        answer: '\`@int\`',
    },
    {
        id: 3,
        type: 'radio',
        category: 'c#',
        subcategory: '',
        title: '',
        question: 'Which type is the default for real numbers in C#?',
        options: [
            'float',
            'double',
            'decimal',
            'int'
        ],
        random: true,
        answer: 'double'
    },
    {
        id: 4,
        type: 'radio',
        category: 'c#',
        subcategory: '',
        title: '',
        question: 'What is the range of a byte in C#?',
        options: [
            '0 to 127',
            '0 to 255',
            '-128 to 127',
            '-255 to 255'
        ],
        random: true,
        answer: '0 to 255'
    },
    {
        id: 5,
        type: 'radio',
        category: 'c#',
        subcategory: '',
        title: '',
        question: 'What happens if you overflow a byte variable in C# without using the `checked` keyword?',
        options: [
            'the program crashes',
            'the value wraps around',
            'an exception is thrown',
            'the value becomes null'
        ],
        random: true,
        answer: 'the value wraps around'
    },
    {
        id: 6,
        type: 'radio',
        category: 'c#',
        subcategory: '',
        title: '',
        question: 'Which operator is used for bitwise AND in C#?',
        options: [
            '\`&&\`',
            '\`&\`',
            '\`|\`',
            '\`*\`',
            '\`^\`'
        ],
        random: true,
        answer: '\`&\`'
    },
    {
        id: 7,
        type: 'radio',
        category: 'c#',
        subcategory: '',
        title: '',
        question: 'Which of the following is NOT a primitive type in C#?',
        options: [
            'int',
            'float',
            'string',
            'bool'
        ],
        random: true,
        answer: 'string'
    },
    {
        id: 8,
        type: 'radio',
        category: 'c#',
        subcategory: '',
        title: '',
        question: 'What does the `~` operator do in C#?',
        options: [
            'Bitwise AND',
            'Bitwise OR',
            'Bitwise NOT (flips all bits)',
            'Bitwise XOR'
        ],
        random: true,
        answer: 'Bitwise NOT (flips all bits)'
    },
    {
        id: 9,
        type: 'radio',
        category: 'c#',
        subcategory: '',
        title: '',
        question: 'What is the result of the expression `a << 2`?',
        options: [
            'shifts all bits in `a` right by 2 positions',
            'shifts all bits in `a` left by 2 positions',
            'adds 2 to `a`',
            'divides `a` by 2'
        ],
        random: true,
        answer: 'shifts all bits in `a` left by 2 positions'
    },
    {
        id: 10,
        type: 'radio',
        category: 'c#',
        subcategory: 'asp.net-core-web-api',
        title: 'Controller for what',
        question: 'What is the primary purpose of a Controller?',
        options: [
            'to store application configuration',
            'to handle HTTP requests and HTTP responses',
            'to manage database connections directly',
            'to compile razor views into HTML'
        ],
        random: true,
        answer: 'to handle HTTP requests and HTTP responses',
        description: `The controller in an ASP.NET Core Web API:

- recieves HTTP requests
- executes application logic (via services)
- returns HTTP responses (JSON, status codes)`
    },
    {
        id: 11,
        type: 'radio',
        category: 'c#',
        subcategory: 'asp.net-core-web-api',
        title: 'Bind that model!',
        question: 'What does model binding do?',
        options: [
            'converts database records into C# objects',
            'maps incoming HTTP request data to action method parameters',
            'serializes responses into JSON',
            'validates authentication tokens'
        ],
        random: true,
        answer: 'maps incoming HTTP request data to action method parameters',
        description: `Model binding takes data from an HTTP request and automatically converts it into C# objects or parameters.`
    },
    {
        id: 12,
        type: 'radio',
        category: 'c#',
        subcategory: 'asp.net-core-web-api',
        title: 'Controller services',
        question: 'In ASP.NET Core, how are services typically provided to a controller?',
        options: [
            'static classes',
            'constructor injection',
            'global variables',
            'manual object creation using new'
        ],
        random: true,
        answer: 'constructor injection',
        description: `It uses constructor injection for Dependency Injection.`
    },
    {
        id: 13,
        type: 'radio',
        category: 'c#',
        subcategory: 'asp.net-core-web-api',
        title: 'Api control',
        question: 'What does the \`[ApiController]\` attribute primarily enable?',
        options: [
            'automatic model validation and improved API behaviors',
            'database migration',
            'authentication middleware',
            'automatic routing to Razor pages'
        ],
        random: true,
        answer: 'automatic model validation and improved API behaviors'
    },
    {
        id: 14,
        type: 'radio',
        category: 'c#',
        subcategory: 'asp.net-core-web-api',
        title: 'Take ActionResult',
        question: 'Why is \`ActionResult<T>\` often preferred over returning just \`T\` from an API action?',
        options: [
            'improves database performance',
            'allows returning both data and different HTTP status codes',
            'automatically caches responses',
            'prevents serialization'
        ],
        random: true,
        answer: 'allows returning both data and different HTTP status codes'
    },
    {
        id: 15,
        type: 'radio',
        category: 'c#',
        subcategory: 'asp.net-core-web-api',
        title: '.NET middleware',
        question: 'Where in the ASP.NET Core request pipeline does middleware execute?',
        options: [
            'after controller actions finish',
            'before and/or after requests reach controllers',
            'only during database operations',
            'only for authentication endpoints'
        ],
        random: true,
        answer: 'before and/or after requests reach controllers',
        description: `How it fits into the request flow: 

~~~code
HTTP Request
    ↓
Middleware(logging, auth, exception handling, etc.)
    ↓
Routing
    ↓
Controller Action
    ↓
Middleware(response processing on the way back)
    ↓
HTTP Response
~~~

MIddleware forms a pipeline where each component can...
- inspect the request
- modify it
- short-circuit the pipeline
- call the next middleware
- modify the response on the way back out`
    },
    {
        id: 16,
        type: 'radio',
        category: 'c#',
        subcategory: 'asp.net-core-web-api',
        title: 'Instance pattern',
        question: 'Which service lifetime creates one instance per HTTP request?',
        options: [
            'singleton',
            'scoped',
            'transient',
            'static'
        ],
        random: true,
        answer: 'scoped',
        description: `- Singleton: one instance for th entire application lifetime
- Scoped: one instance per HTTP request
- Transient: a new instance every time it is requested

Example request flow with scoped: 

~~~code
Request 1
 ├─ Controller
 ├─ Service instance A
 └─ Repository instance A

Request 2
 ├─ Controller
 ├─ Service instance B
 └─ Repository instance B
~~~

Each request gets its own instance, but components within that request share it. 
`
    }
]