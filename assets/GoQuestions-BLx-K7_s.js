const e=[{id:1,type:"radio",category:"go",subcategory:"introduction",title:"Speed comparison",question:"Go code generally runs _____ than interpreted languages and compiles _____ than other compiled languages.",options:["slower, slower","slower, faster","faster, slower","faster, faster"],random:!0,answer:"faster, faster",description:"Go runs faster than interpreted languages like Python because it compiles to machine code, and compiles faster than languages like C++ due to its simpler compilation model."},{id:2,type:"radio",category:"go",subcategory:"introduction",title:"Default types",question:"When should you elect to NOT use a 'default type'?",options:["when writing quick prototypes","when performance and memory are the primary concern","when learning Go for the first time","when writing simple applications","when following Go best practices"],random:!0,answer:"when performance and memory are the primary concern",description:"When performance and memory are the primary concern, you should choose specific types (like `int32` vs `int`) for precise control over memory usage and execution speed."},{id:3,type:"radio",category:"go",subcategory:"introduction",title:"Type size",question:"What does the size of a type indicate?",options:["nibbles","bits","bytes","kilobytes","characters"],random:!0,answer:"bytes",description:"Type size in Go indicates how many bytes the type occupies in memory. For example, int32 uses 4 bytes, int64 uses 8 bytes."},{id:4,type:"radio",category:"go",subcategory:"introduction",title:"Running programs",question:"To run a compiled program, users need...",options:["source code","a compiler","the compiled executable","development environment"],random:!0,answer:"the compiled executable",description:"Compiled programs are self-contained executables that can run without the original source code or compiler being present on the target machine."},{id:5,type:"radio",category:"go",subcategory:"introduction",title:"Memory usage",question:"Generally speaking, which of these languages use the most memory?",options:["Rust","Java","Go","C"],random:!0,answer:"Java",description:"Java typically uses the most memory due to JVM overhead and garbage collection. The order is generally: Java > Go > Rust ≈ C (lowest)."},{id:6,type:"radio",category:"go",subcategory:"introduction",title:"Go runtime purpose",question:"What is one of the purposes of the Go runtime?",options:["styles Go code into a format to make it easier to read","to compile Go code","to cleanup unused memory","to debug Go programs","to manage package dependencies"],random:!0,answer:"to cleanup unused memory",description:"The Go runtime includes a garbage collector that automatically manages memory by cleaning up unused memory, among other runtime services like goroutine scheduling."},{id:7,type:"radio",category:"go",subcategory:"functions-and-methods",title:"Clear",question:"Which of the following is the shortest and clearest way to write a valid function signature?",options:["`func createUser(firstName, lastName string, age int)`","`func createUser(firstName, age, lastName string int)`","`func createUser(firstName string, lastName string, age int)`","`func createUser(firstName string, age int, lastName string)`"],random:!0,answer:"`func createUser(firstName, lastName string, age int)`"},{id:8,type:"radio",category:"go",subcategory:"functions-and-methods",title:"What the f",question:`Given the following, what is \`f\`?
        
~~~go
var f func(fuc(int, int) int, int) int
~~~
`,options:["a function named `f` that takes an int as the argument and returns an int","a function named `f` that takes a function as the argument and returns an int","a function named `f` that takes a function and an int as arguments and returns an int","a function named `f` that takes a function and an int as arguments and returns a function"],random:!0,answer:"a function named `f` that takes a function and an int as arguments and returns an int"},{id:9,type:"radio",category:"go",subcategory:"functions-and-methods",title:"Guard",question:"What is a guard clause?",options:["an early return from a function when a given condition is met","an AND operation in boolean logic","a bitwise OR operation"],random:!0,answer:"an early return from a function when a given condition is met"},{id:10,type:"radio",category:"go",subcategory:"structs",title:"Anonymous structs",question:"What is a good reason to use an anonymous struct?",options:["privacy","speed","single-use"],random:!0,answer:"single-use"},{id:11,type:"radio",category:"go",subcategory:"structs",title:"",question:"What is one advantage of advantage of using anonymous structs?",options:["prevents you from re-using a struct definition you never intended to re-use","makes your code run faster","compiles more quickly"],random:!0,answer:"prevents you from re-using a struct definition you never intended to re-use"},{id:12,type:"radio",category:"go",subcategory:"structs",title:"Two braces please",question:`Why does the empty anonymous struct have two pairs of braces?
~~~go
struct{}{}
~~~
`,options:["it does not, this is a syntax error","`struct{}` is the type and `{}` is the value"],random:!0,answer:"`struct{}` is the type and `{}` is the value",description:"`struct{}` is the type (empty struct) and `{}` is the value (empty struct literal)"},{id:13,type:"radio",category:"go",subcategory:"structs",title:"Least to most",question:"Which is ordered from least to most memory usage?",options:["`uint`, `bool`, `int64`, `struct{}`","`struct{}`, `uint16`, `bool`, `int64`","`struct{}`, `bool`, `int16`, `int64`","`bool`, `struct{}`, `uint16`, `int64`"],random:!0,answer:"`struct{}`, `bool`, `int16`, `int64`",description:"- `struct{}` is the empty struct in Go and uses 0 bytes of memory.\n- `bool` typically uses 1 byte.\n- `int16` uses 2 bytes.\n- `int64` uses 8 bytes."},{id:14,type:"radio",category:"go",subcategory:"interfaces",title:"",question:"How is an interface fulfilled?",options:["a type has all the required interface's methods defined on it","a struct embeds the interface in its definition"],random:!0,answer:"a type has all the required interface's methods defined on it"},{id:15,type:"radio",category:"go",subcategory:"interfaces",title:"",question:"Can a type fulfill multiple interfaces?",options:["yes","no"],random:!1,answer:"yes"},{id:16,type:"radio",category:"go",subcategory:"interfaces",title:"",question:"Go uses the _____ keyword to show that a type implements an interface",options:["`inherits`","`implements`","`fulfills`","there is no keyword in Go"],random:!0,answer:"there is no keyword in Go"},{id:17,type:"radio",category:"go",subcategory:"interfaces",title:"",question:`In this example, the _____ type implements the _____ interface.
        
~~~go
type shape interface {
    area() float64
}

type circle struct {
    radius float64
}

func (c circle) area() float64 {
    return 3.14 * c.radius * c.radius
}
~~~
`,options:["shape, circle","shape, area","circle, shape","circle, area","area, circle","area, shape"],random:!0,answer:"circle, shape",description:"Shape is an *interface*, as it defines a contract that says *any type that has an* `area()` *method returning a* `float64` *implements me*. \n\nWe then have the `circle` struct and the `area` function. Because `circle` has an `area()` method with the exact signature that the `shape` interface requires (no parameters, returns `float64`), the `circle` type automatically implements the `shape` interface. \n\nWhat is important is how Go's implicit interface implementation:\n- `circle` is the concrete type (the thing doing the implementing)\n- `shape` is the interface (the contract being fulfilled)\n- you do not need to explicitly declare that `circle` implements `shape` - Go figures it out automatically based on the method signaure"},{id:18,type:"radio",category:"go",subcategory:"interfaces",title:"",question:"True or False: You are required to name the arguments of an interface in order for your code to compile properly.",options:["true","false"],random:!1,answer:"false"},{id:19,type:"radio",category:"go",subcategory:"interfaces",title:"",question:"Interfaces allow you to define a method's behavior once and use it for many different types",options:["true","false"],random:!1,answer:"false",description:`In Go, interfaces only define *what must exist*, and not how it works. 

- an interface lists method signatures (such as names, parameters, return types)
- each concrete type that satisfies the interface must still *implement its own version of those methods*`},{id:20,type:"radio",category:"go",subcategory:"errors",title:"",question:"What is the underlying type of an error?",options:["struct","interface","string"],random:!0,answer:"interface",description:`The built in \`error\` type in Go is defined as \`interface\` and looks like this in the standard library:
~~~go
type error interface {
    Error() string
}
~~~
        `},{id:21,type:"radio",category:"go",subcategory:"errors",title:"",question:"A type can be an error and also fulfill another interface.",options:["true","false"],random:!1,answer:"true",description:`An \`error\` in Go is just any value whose type has a method.
~~~go
type error interface {
    Error() string
}
~~~

So if you define a type like:

~~~go
type MyErr struct {
    Code int
}

func (e MyErr) Error() string {
    return "something went wrong"
}
~~~

\`MyErr\` now implements \`error\`. However, it can also implement other interfaces like so:

~~~go
type Coded interface {
    CodeValue() int
}

func (e MyErr) CodeValue() int {
    return e.Code
}
~~~
Now \`MyErr\` is both an \`error\` and a \`Coded\`. 
        `}];export{e as default};
