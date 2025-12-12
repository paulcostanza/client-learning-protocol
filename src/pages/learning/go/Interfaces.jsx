import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Interfaces() {
    const quizImports = {
        go: () => import('../../../pages/quiz/database/GoQuestions.js')
    }

    const shapeInterface = `type shape interface {
  area() float64
  perimeter() float64
}

type rect struct {
    width, height float64
}
func (r rect) area() float64 {
    return r.width * r.height
}
func (r rect) perimeter() float64 {
    return 2 * r.width + 2 * r.height
}

type circle struct {
    radius float64
}
func (c circle) area() float64 {
    return math.Pi * c.radius * c.radius
}
func (c circle) perimeter() float64 {
    return 2 * math.Pi * c.radius
}`

    const printShapeData = `func printShapeData(s shape) {
	fmt.Printf("Area: %v - Perimeter: %v\\n", s.area(), s.perimeter())
}`

    const emptyInterface = `interface{}`

    const shapeInterfaceAgain = `type shape interface {
    area() float64
}`

    const circleStruct = `type circle struct {
    radius float64
}

func (c circle) area() float64 {
    return 3.14 * c.radius * c.radius
}`

    const javaExample = `class Circle implements Shape`

    const copierInterface = `type Copier interface {
    Copy(string, string) int
}`

    const betterCopierInterface = `type Copier interface {
    Cop(sourceFile string, destinationFile string) (bytesCopied int)
}`

    const typeAssertions = `type shape interface {
    area() float64
}

type circle struct {
    radius float64
}

c, ok := s.(circle)
if !ok {
    // log an error if s is not a circle
    log.Fatal("s is not a circle")
}

radius := c.radius`

    const typeSwitching = `func printNumericValue(num interface{}) {
    switch v := num.(type) {
        case int:
            fmt.Printf("%T\n", v)
        case string:
            fmt.Printf("%T\n", v)
        default: 
            fmt.Printf("%T\n", v)
    }
}

func main() {
    printNumericValue(1)
    // prints "int"

    printNumericValue("1")
    // prints "string"

    printNumericValue(struct{}{})
    // prints "struct {}"
}`

    const fileInterface = `type File interface {
    io.Closer
    io.Reader
    io.Seeker
    Readdir(count int) ([]os.FileInfo, error)
    Stat() (os.FileInfo, error)
}`

    const carInterface = `type car interface {
    Color() string
    Speed() int
    IsFiretruck() bool
}`

    const truckInterface = `type firestruck interface {
    car 
    HoseLength() int
}`

    return (
        <div>
            <h1>Interfaces in Go</h1>

            <p><strong>Interfaces</strong> allow you to focus on what a type does rather than how it is built. They can help you write more flexible and reusable code by defining behaviors (like methods) that different types can share. This makes it easy to swap out or update parts of your code without changing everything else.</p>

            <p>Interfaces are just collections of method signatures. A type <em>implements</em> an interface if it has methods that match the interface's method signatures.</p>

            <p>In the following example, a <code>shape</code> must be able to return its area and perimeter. Both <code>rect</code> and <code>circle</code> fulfill the interface.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {shapeInterface}
                </SyntaxHighlighter>
            </div>

            <p>When a type implements an interface, it can then be used as that interface type.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {printShapeData}
                </SyntaxHighlighter>
            </div>

            <p>Because we say the input is of type <code>shape</code>, we know that any argument must implement the <code>.area()</code> and <code>.perimeter()</code> methods.</p>

            <p>As an example, because the empty interface does not require a type to have any methods at all, every type automatically implements the empty interface, written as:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {emptyInterface}
                </SyntaxHighlighter>
            </div>

            <h2>Interface Implementation</h2>

            <p>Interfaces are implemented <em>implicitly</em>. A type never declares that it implements a given interface. If an interface exists and a type has the proper methods defined, then the type automatically fulfills that interface.</p>

            <blockquote>
                A quick way of checking whether a struct implements an interface is to declare a function that takes an interface as an argument. If the function can take the struct as an argument, then the struct implements the interface.
            </blockquote>

            <p>A type implements an interface by implementing its methods. Unlike in many other languages, there is no explicit declaration of intent, there is no <em>implements</em> keyword.</p>

            <p>Implicit interfaces <em>decouple</em> the definition of an interface from its implementation. You may add methods to a type and in the process by unknowingly implementing various interfaces, and that's okay.</p>

            <h2>Interfaces are method signatures</h2>

            <p>Remember, interfaces are collections of method signatures. A type <em>implements</em> an interface if it has all of the methods of the given interface defined on it.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {shapeInterfaceAgain}
                </SyntaxHighlighter>
            </div>

            <p>If a type in your code implements an <code>area</code> method, with the same signature (if it accepts nothing and returns a <code>float64</code>), then that object is said to <em>implement</em> the <code>shape</code> interface.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {circleStruct}
                </SyntaxHighlighter>
            </div>

            <p>This is different from most other languages, where you have to explicitly assign an interface type to an object, like with Java:</p>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {javaExample}
                </SyntaxHighlighter>
            </div>

            <h2>Name your interface parameters</h2>

            <p>Consider the following interface:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {copierInterface}
                </SyntaxHighlighter>
            </div>

            <p>This is a valid interface, but based on the code alone, can you deduce what <em>kinds</em> of strings you should pass into the <code>Copy</code> function?</p>

            <p>We know the function signature expects 2 strings types, but what are they? Filenames? URLs? Raw string data? For that matter, what the heck is that <code>int</code> that is being returned?</p>

            <p>Let's add some named parameters and return data to make it more clear</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {betterCopierInterface}
                </SyntaxHighlighter>
            </div>

            <p>Much better! We can see what the expectations are now. The first parameter is the <code>sourceFile</code>, the second parameter is the <code>destinationFile</code>, and <code>bytesCopied</code>, an integer, is returned.</p>

            <h2>Type Assertions in Go</h2>

            <p>When working with interfaces in Go, every once-in-awhile you will need access to the underlying type of an interface value. You can cast an interface to its underlying type using a type assertion.</p>

            <p>The example below shows how to safely access the <code>radius</code> field of <code>s</code> when <code>s</code> is an unknown type:</p>

            <ul>
                <li>we want to check if <code>s</code> is a <code>circle</code> in order to cast it into its underlying concrete type</li>
                <li>we know <code>s</code> is an instance of the <code>shape</code> interface, but we do not know if it is also a <code>circle</code></li>
                <li><code>c</code> is a new <code>circle</code> struct cast from <code>s</code></li>
                <li><code>ok</code> is <code>true</code> if <code>s</code> is indeed a <code>circle</code>, or <code>false</code> if <code>s</code> is <em>not</em> a <code>circle</code></li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {typeAssertions}
                </SyntaxHighlighter>
            </div>

            <h2>Type switches</h2>

            <p>A <strong>type switch</strong> makes it easy to do several type assertions in a series.</p>

            <p>A type switch is similar to a regular switch statement, but the cases specify <em>types</em> instead of <em>values</em>.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {typeSwitching}
                </SyntaxHighlighter>
            </div>

            <p><code>fmt.Printf("%T\n", v)</code> prints the <em>type</em> of a variable.</p>

            <h2>Clean interfaces</h2>

            <p>Writing clean interfaces is <em>hard</em>. Frankly, any time you are dealing with abstractions in code, the simple can become complex very quickly if you are not careful. Let's go over some rules of thumb for keeping interfaces clean.</p>

            <ol>
                <li>
                    <strong>Keep interfaces small</strong><br />

                    <p>Interfaces are meant to define the minimal behavior necessary to accurately represent an idea or concept. Here is an example from the standard HTTP package of a larger interface that is a good example of defining minimal behavior:</p>

                    <div className="">
                        <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {fileInterface}
                        </SyntaxHighlighter>
                    </div>

                    <p>Any type that satisfies the interface's behaviors can be considered by the HTTP package as a <em>File</em>. This is convenient because the HTTP package does not need to know if it is dealing with a file on disk, a network buffer, or a simple <code>[]byte</code>.</p>
                </li>
                <li>
                    <strong>Interfaces should have no knowledge of satisfying types</strong><br />

                    <p>An interface should define what is necessary for other types to classify as a member of that interface. They should not be aware of any types that happen to satisfy the interface at design time.</p>

                    <p>For example, let's assume we are building an interface to describe the components necessary to define a car.</p>

                    <div className="">
                        <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {carInterface}
                        </SyntaxHighlighter>
                    </div>

                    <p><code>Color()</code> and <code>Speed()</code> make perfect sense. They are methods confined to the scope of a car. <code>IsFiretruck()</code> is an anti-pattern. We are forcing all cars to declare whether or not they are firetrucks. In order for this pattern to make any amount of sense, we would need a whole list of possible subtypes. <code>IsPickup()</code>, <code>IsSedan()</code>, <code>IsTank()</code>, ... where does it end?</p>

                    <p>Instead, the developer should have relied on the native functionality of type assertion to derive the underlying type when given an instance of the car interface. Or, if a sub-interface is needed, it can be defined as:</p>
                    <div className="">
                        <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {truckInterface}
                        </SyntaxHighlighter>
                    </div>

                    <p>Which inherits the required method from <code>car</code> as an embedded interface and adds one additional required method to make the <code>car</code> a <code>firetruck</code>.</p>
                </li>
                <li>
                    <strong>Interfaces are NOT classes</strong>
                    <ul>
                        <li>interfaces are not classes, they are slimmer</li>
                        <li>interfaces do not have constructors or deconstructors that require that data is created or destroyed</li>
                        <li>interfaces are not hierarchical by nature<br />though there is syntactic sugar to create interfaces that happen to be supersets of other interfaces</li>
                        <li>interfaces define functions signatures, but not underlying behavior. Making an interface often won't <em>DRY</em> up your code in regards to struct methods. Example, if five types satisfy the <code>fmt.Stringer</code> interface, they all need their own version of the <code>String()</code> function.</li>
                    </ul>
                </li>
            </ol>

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="interfaces"
            />
        </div>
    );
}
