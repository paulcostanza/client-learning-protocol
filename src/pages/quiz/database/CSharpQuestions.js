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
        id: 6,
        type: 'radio',
        category: 'c#',
        subcategory: '',
        title: 'Reference to what?',
        question: 'Which of the following is a reference type in C#?',
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
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
        id: 15,
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
        description: `- Singleton: one instance for the entire application lifetime
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
    },
    {
        id: 16,
        type: 'input',
        category: 'c#',
        subcategory: 'apis-intro',
        title: 'Post triple',
        question: `What is the response if the client sends \`4\`? If error, write \`error\`.
        
~~~c#
app.MapPost("/triple", (int num) => num * 3);
~~~
`,
        options: [
            "",
        ],
        random: true,
        answer: '^\\s*12\\s*$',
        description: `Answer: \`12\``
    },
    {
        id: 17,
        type: 'input',
        category: 'c#',
        subcategory: 'apis-intro',
        title: 'Get Math',
        question: `What is the response? If error, write \`error\`.
        
~~~c#
app.MapGet("/math", () => new { result = 7 * 6 });
~~~
`,
        options: [
            "",
        ],
        random: true,
        answer: '^\\s*\\{\\s*"result"\\s*:\\s*42\\s*\\}\\s*$',
        description: `Answer: \`{"result": 42}\``
    },
    {
        id: 18,
        type: 'input',
        category: 'c#',
        subcategory: 'apis-intro',
        title: 'Get Index I',
        question: `What is the response? If error, write \`error\`.

Request:
~~~console
'/numbers/2'
~~~
   
API call:
~~~c#
var numbers = new List<int> { 3, 6, 9 };

app.MapGet("/numbers/{index}", (int index) => numbers[index]);
~~~
`,
        options: [
            "",
        ],
        random: true,
        answer: '^\\s*9\\s*$',
        description: `Answer: \`9\``
    },
    {
        id: 19,
        type: 'input',
        category: 'c#',
        subcategory: 'apis-intro',
        title: 'Get Index II',
        question: `What is the response? If error, write \`error\`.

Request:
~~~console
'/numbers/5'
~~~
   
API call:
~~~c#
var numbers = new List<int> { 3, 6, 9 };

app.MapGet("/numbers/{index}", (int index) => numbers[index]);
~~~
`,
        options: [
            "",
        ],
        random: true,
        answer: '^\\s*error\\s*$',
        description: `Answer: \`error\``
    },
    {
        id: 20,
        type: 'input',
        category: 'c#',
        subcategory: 'apis-intro',
        title: 'Post score',
        question: `What is the response? If error, write \`error\`.

Input:
~~~json
{
  "name": "Sam",
  "score": 80
}
~~~
   
API call:
~~~c#
app.MapPost("/d", (User user) => new { user.Score });
~~~
`,
        options: [
            "",
        ],
        random: true,
        answer: '^\\s*\\{\\s*"score"\\s*:\\s*80\\s*\\}\\s*$',
        description: `Answer: \`{"score": 80}\``
    },
    {
        id: 21,
        type: 'input',
        category: 'c#',
        subcategory: 'apis-intro',
        title: 'Post unpdate',
        question: `What is the response? If error, write \`error\`.

Input:
~~~json
{
  "name": "Sam",
  "score": 80
}
~~~

Request:
~~~console
'/increase/50'
~~~
   
API call:
~~~c#
app.MapPost("/increase/{amount}", (int amount, User user) =>
    new { updated = user.Score + amount }
);
~~~
`,
        options: [
            "",
        ],
        random: true,
        answer: '^\\s*\\{\\s*"updated"\\s*:\\s*130\\s*\\}\\s*$',
        description: `Answer: \`{"updated": 130}\``
    },
    {
        id: 22,
        type: 'input',
        category: 'c#',
        subcategory: 'apis-intro',
        title: 'Post rename',
        question: `What is the response? If error, write \`error\`.

Input:
~~~json
{
  "name": "John",
  "score": 10
}
~~~

Request:
~~~console
'/rename/Mr_'
~~~
   
API call:
~~~c#
app.MapPost("/rename/{prefix}", (string prefix, User user) =>
    new { name = prefix + user.Name }
);
~~~
`,
        options: [
            "",
        ],
        random: true,
        answer: '^\\s*\\{\\s*"name"\\s*:\\s*"Mr_John"\\s*\\}\\s*$',
        description: `Answer: \`{"name": "Mr_John"}\``
    },
    {
        id: 23,
        type: 'input',
        category: 'c#',
        subcategory: 'apis-intro',
        title: 'Post calc',
        question: `What is the response? If error, write \`error\`.

Input:
~~~json
10
~~~

Request:
~~~console
'/calc/5'
~~~
   
API call:
~~~c#
app.MapPost("/calc/{x}", (int x, int y) => x + y);
~~~
`,
        options: [
            "",
        ],
        random: true,
        answer: '^\\s*15\\s*$',
        description: `Answer: \`15\``
    },
]