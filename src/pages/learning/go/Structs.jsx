import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import StatsStruct from '../../../assets/go/structs/stats struct.png'
import BadStatsStruct from '../../../assets/go/structs/bad stats struct.png'
import MemoryUsage from '../../../assets/go/structs/memory usage.png'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Structs() {
    const quizImports = {
        go: () => import('../../../pages/quiz/database/GoQuestions.js')
    }

    const basicStruct = `type car struct {
    brand   string
    model   string
    doors   int
    mileage int
}`

    const nestedStructs = `type car struct {
    brand      string
    model      string
    doors      int
    mileage    int
    frontWheel wheel
    backWheel  wheel
}

type wheel struct {
    radius   int
    material string
}`

    const accessAField = `myCar := car{}
myCar.frontWheel.radius = 5`

    const anonymousStructs = `myCar := struct {
    brand string
    model string
} {
    brand: "Toyota",
    model: "Camry",
}`

    const nestedAnonymousStructs = `type car struct {
    brand string
    model string
    doors int
    mileage int
    // wheel is a field containing an anonymous struct
    wheel struct {
        radius int
        material string
    }
}

var myCar = car {
    brand: "Rezvani",
    model: "Vengeance",
    doors: 4,
    mileage: 35000,
    wheel: struct {
        radius int
        material string
    } {
        radius: 35,
        material: "alloy",
    },
}`

    const embeddedStructs = `type car struct {
    brand string
    model string
}

type truck struct {
    // "car" is embedded, so the definition of a 
    // "truck" now also additionally contains all
    // of the fields of the car struct
    car 
    bedSize int
}`

    const embeddedVsNested = `lanesTruck := truck {
    bedSize: 10,
    car: car {
        brand: "Toyota",
        model: "Tundra",
    },
}

fmt.Println(lanesTruck.brand) // Toyota
fmt.Println(lanesTruck.model) // Tundra`

    const structMethods = `type rect struct {
    width int 
    height int
}

// area has a receiver of (r rect)
// rect is the struct
// r is the placeholder
func (r rect) area() int {
    return r.width * r.height
}

var r = rect {
    width: 5,
    height: 10
}

fmt.Println(r.area())   // 50`

    const statsStruct = `type stats struct {
    Reach    uint16
    NumPosts uint8
    NumLikes uint8
}`

    const badStatsStruct = `type stats struct {
    NumPosts uint8
    Reach    uint16
    NumLikes uint8
}`

    const emptyStruct = `// anonymous empty struct type
empty := struct{}{}

// named empty struct type
type emptyStruct struct{}
empty := emptyStruct{}`

    return (
        <div>
            <h1>Structs in Go</h1>

            <p>We use structs in Go to represent structured data. It is often convenient to group different types of variables together. For example, if we want to represent a car we could do the following:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {basicStruct}
                </SyntaxHighlighter>
            </div>

            <p>This creates a new struct called <code>car</code>. All cars have a <code>brand</code>, <code>model</code>, <code>doors</code>, and <code>mileage</code>.</p>

            <p>Structs in Go are often used to represent data that you might use a dictionary or object for in other languages.</p>

            <h2>Nested Structs in Go</h2>

            <p>Structs can be nested to represent more complex entities:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {nestedStructs}
                </SyntaxHighlighter>
            </div>

            <p>The field of a struct can be accessed using the dot <code>.</code> operator</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {accessAField}
                </SyntaxHighlighter>
            </div>

            <h2>Anonymous structs in Go</h2>

            <p>An <strong>anonymous</strong> struct is just like a normal struct, but it is defined without a name and therefore cannot be referenced elsewhere in the code.</p>

            <p>To create an anonymous struct, just instantiate the instance immediately using a second pair of brackets after declaring the type:</p>


            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {anonymousStructs}
                </SyntaxHighlighter>
            </div>

            <p>You can even nest anonymous structs as fields within other structs:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {nestedAnonymousStructs}
                </SyntaxHighlighter>
            </div>

            <blockquote>
                When should I use an anonymous struct?<br />
            </blockquote>

            <p> In general, <em>prefer named structs</em>. Named structs make it easier to read and understand your code, and they have the nice side-effect of being reusable. I sometimes use anonymous structs when I <em>know</em> I will never need to use a struct again. For example, sometimes I will use one to create the shape of some JSON data in HTTP handlers.</p>

            <p>If a struct is only meant to be used once, then it makes sense to declare it in such a way that developers down the road will not be tempted to accidentally use it again.</p>

            <h2>Embedded Structs</h2>

            <p>Go is <em>not</em> an <strong>object-oriented</strong> language. However, embedded structs provide a kind of <em>data-only</em> inheritance that can be useful at times. Keep in mind, Go does not support classes or inheritance in the <em>complete sense</em>, but embedded structs are a way to elevate the <strong>share fields between struct definitions</strong>.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {embeddedStructs}
                </SyntaxHighlighter>
            </div>

            <h3>Embedded vs. Nested</h3>

            <ul>
                <li>Unlike nested structs, an embedded struct's fields are accessed at the top level like normal fields.</li>
                <li>Like nested structs, you assign the promoted fields with the embedded struct in a <em>composite literal</em>.</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {embeddedVsNested}
                </SyntaxHighlighter>
            </div>

            <p>You can see that both <code>brand</code> and <code>model</code> are accessible from the top-level, while the nested equivalent to this object would require you to access these fields via a nested <code>car</code> struct: <code>lanesTruck.car.brand</code> or <code>lanesTruck.car.model</code>.</p>

            <h2>Struct Methods in Go</h2>

            <p>While Go is not object-oriented, it does support methods that can be defined on structs. Methods are just functions that have a receiver. A receiver is a special parameter that syntactically goes before the name of the function.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {structMethods}
                </SyntaxHighlighter>
            </div>

            <p>A receiver is just a special kind of function parameter. In the example above, the <code>r</code> in <code>(r rect)</code> could just as easily have been <code>rec</code> or even <code>x</code>, <code>y</code>, or <code>z</code>. By convention, Go code will often use the first letter of the struct's name.</p>

            <p>Receivers are important because they will, as you will learn, allow us to define interfaces that our structs (and other types) can implement.</p>

            <h2>Memory layout</h2>

            <p>In Go, structs sit in memory in a contiguous block, with fields placed one after another as defined in the struct. For example, this struct:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {statsStruct}
                </SyntaxHighlighter>
            </div>

            <p>Looks like this in memory:</p>

            <img src={StatsStruct} class="img-in-reading" alt="what the stats struct looks like in memory" />

            <h3>Field ordering...Matters?</h3>

            <p>The order of fields in a struct can have a big impact on memory usage. This is the same struct as above, but <em>poorly</em> designed:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {badStatsStruct}
                </SyntaxHighlighter>
            </div>

            <p>Looks like this in memory:</p>

            <img src={BadStatsStruct} class="img-in-reading" alt="what the stats struct looks like in memory when not ordered from greatest to least" />

            <p>Notice that Go has <em>aligned</em> the fields, meaning that it has added some padding (wasted space) to make up for the size difference between the <code>uint16</code> and <code>uint8</code> types. It is done for execution speed, but it can lead to increased memory usage.</p>

            <p>To be honest though... you should not stress about memory layout. However, if you have a specific reason to be concerned about memory usage, aligning the fields by size (largest to smallest) can help.</p>

            <h2>Empty struct</h2>

            <p><strong>Empty structs</strong> are used in Go as a unary value.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {emptyStruct}
                </SyntaxHighlighter>
            </div>

            <p>The cool thing about empty structs is that they are the smallest possible type in Go: they take up <strong>zero bytes of memory</strong>.</p>

            <img src={MemoryUsage} class="img-in-reading" alt="basic types in Go and their sizes in memory" />

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="structs"
            />
        </div>
    );
}
