import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function FunctionsAndMethods() {
    const quizImports = {
        go: () => import('../../../pages/quiz/database/GoQuestions.js')
    }

    const basicFunction = `func sub(x int, y int) int {
    return x * y
}`

    const mainFunction = `package main

import "fmt"

func concat(s1 string, s2 string) string {
	return s1 + s2
}

func main() {
	test("Hello ", " nerd.")
	test("My name is", " Paul!")
	test("Go", " is awesome!")
}

func test(s1 string, s2 string) {
	fmt.Println(concat(s1, s2))
}`

    const multipleParams = `func addToDatabase(hp, damage int) {}
// or...
func addToDatabase(hp, damage int, name string) {}
// or...
func addToDatabase(hp, damage, level int, name string) {}`

    const basicC = `int y;`

    const complexC = `int (*fp)(int (*ff)(int x, int y), int b)`

    const goDeclarations = `x int
p *int
a [3]int`

    const complexSignature = `f func(func(int, int) int, int) int`

    const passByVariables = `func main() {
	x := 5
	increment(x)

	fmt.Println(x)
	// still prints 5
	// because the increment function
	// received a *copy* of x
}

func increment(x int) {
	x++
	fmt.Println(x)
}`

    const ignoreReturnedValues = `func getPoint() (x int, y int) {
	return 3, 4
}

// ignore y value
x, _ := getPoint()`

    const nakedReturn = `func getCoords() (x, y int) {
	// x and y are initialized with zero values

	return // automatically returns x and y
}`

    const nonNakedVersion = `func getCoords() (x, y int) {
	var x int
	var y int
	return x, y
}`

    const namedReturn = `func calculator(a, b int) (mul, div int, err error) {
	if b == 0 {
		return 0, 0, errors.New("cannot divide by zero")
	}
	mul = a * b
	div = a / b
	return mul, div, nil
}`

    const nonNamedDifficultToUnderstandReturn = `fun calculator(a, b int) (int, int, error) {
	if b == 0 {
		return 0, 0, errors.New("cannot divide by zero")
	}
	mul := a * b
	div := a / b
	return mul, div, nil
}`

    const explicitValues = `func getCoords() (x, y int) {
	return x, y // this is explicit
}`

    const overwriteReturnValues = `func getCoords() (x, y int) {
	return 5, 6
}`

    const returnNakedReturnValues = `func getCoords() (x, y int) {
	return //implicitly returns x and y
}`

    const guardClause = `func divide(dividend, divisor int) (int, error) {
	if divisor == 0 {
		return 0, errors.New("cannot divide by zero")
	}
	return dividend/divisor, nil
}`

    const extremlyNested = `func getInsuranceamount(status insuranceStatus) int {
	amount := 0
	if !status.hasInsurance() {
		amount = 1
	} else {
		if status.isTotaled() {
			amount = 10000
		} else {
			if status.isDented() {
				amount = 160
				if status.isBigDent() {
					amount = 270
				}
			} else {
				amount = 0
			}
		}
	}
	return amount
}`

    const cleanedUpNestedStatementWithGuardClause = `func getInsuranceAmount(status insuranceStatus) int {
	if !status.hasInsurance() {
		return 1
	}
	if status.isTotaled() {
		return 10000
	}
	if !status.isDented() {
		return 0
	}
	if status.isBigDent() {
		return 270
	}
	return 160
}`

    const simpleFunction = `func add(x, y int) int {
	return x + y
}

func mul(x, y int) int {
	return x * y
}`

    const functionAsValue = `func aggregate(a, b, c int, arithmetic func(int, int) int) int {
	firstResult := arithmetic(a, b)
	secondResult := arithmetic(firstResult, c)
	return secondResult
}`

    const passingFunctionAsValue = `func main() {
	sum := aggregate(2, 3, 4, add)
	// sum is 9
	product := aggregate(2, 3, 4, mul)
	// product is 24
}`

    const notAnonymousFunction = `func conversions(converter func(int) int, x, y, z int) (int, int, int) {
	convertedX := converter(x)
	convertedY := converter(y)
	convertedZ := converter(z)
	return convertedX, convertedY, convertedZ
}`

    const anonymousFunction = `func double(a int) int {
	return a + a
}

func main() {
	// using a named function
	newX, newY, newZ := conversions(double, 1, 2, 3)
	// newX is 2, newY is 4, newZ is 6

	// using an anonymous function
	newX, newY, newZ = conversions(func(a int) int {
		return a + a
	}, 1, 2, 3)
	// newX is 2, newY is 4, newZ is 6
}`

    const defer = `func GetUsername(dstName, srcName string) (username string, err error) {
	// open a connection to a database
	conn, _ := db.Open(srcName)

	// close the connection *anywhere* the GetUsername function returns
	defer conn.Close()

	username, err := db.FetchUser()
	if err != nil {
		// the defer statement is auto-executed if we return here
		return "", err
	}

	// the defer statement is auto-executed if we return here
	return username, nil
}`

    const resultOfDefer = `// here
return "", err
// or here
return username, nil`

    const packages = `package main

// scoped to the entire "main" package (basically global)
var age = 19

func sendEmail() {
	// scoped to the "sendEmail" function
	name := "Jon Snow"

	for i := 0; i < 5; i++ {
		// scoped to the "for" body
		email := "snow@winterfell.net"
	}
}`

    const explicitBlock = `package main

import fmt

func main() {
	{
		age := 19
		// this is okay
		fmt.Println(age)
	}

	// this is not okay
	// the age variable is out of scope
	fmt.Println(age)
}`

    const closure = `func concatter() func(string) string {
	doc := ""
	return func(word string) string {
		doc += word + " "
		return doc
	}
}

func main() {
	harryPotterAggregator := concatter()
	harryPotterAggregator("Mr.")
	harryPotterAggregator("and")
	harryPotterAggregator("Mrs.")
	harryPotterAggregator("Dursley")
	harryPotterAggregator("of")
	harryPotterAggregator("number")
	harryPotterAggregator("four,")
	harryPotterAggregator("Privet")

	fmt.Println(harryPotterAggregator("Drive"))
	// Mr. and Mrs. Dursley of number four, Privet Drive
}`

    const currying = `func main() {
	squareFunc := selfMath(multiple)
	doubleFunc := selfMath(add)

	fmt.Println(squareFunc(5))
	// prints 25

	fmt.Println(doubleFunc(5))
	// prints 10
}

func multiple(x, y int) int {
	return x * y
}

func add(x, y int) int {
	return x + y
}

func selfMath(mathFunc func(int, int) int) func (int) int {
	return func(x int) int {
		return mathFunc(x, x)
	}
}`


    return (
        <div class="container">
            <h1>Functions</h1>

            <p>Functions in Go can take zero or more arguments.</p>

            <p>To make code easier to read, the variable type comes <em>after</em> the variable name.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {basicFunction}
                </SyntaxHighlighter>
            </div>

            <p>In the example above the function accepts two integer parameters and returns another integer.</p>

            <p>Here, <code>func sub(x int, y int) int</code> is known as the <strong>function signature</strong>.</p>

            <p>Any like many other language, our starting point into the program is the <code>main</code> function.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {mainFunction}
                </SyntaxHighlighter>
            </div>

            <h2>Multiple Parameters</h2>

            <p>When multiple arguments are of the same type, and are next to each other in the function signature, the type only needs to be declared after the last argument.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {multipleParams}
                </SyntaxHighlighter>
            </div>

            <h2>Declaration Syntax</h2>

            <p>Developers often wonder why the declaration syntax in Go is different from the tradition established in the C family of languages.</p>

            <h3>C-Style Syntax</h3>

            <p>The C Language describes types with an expression including the name to be declared, and states what type that expression will have.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {basicC}
                </SyntaxHighlighter>
            </div>

            <p>The code above declares <code>y</code> as an <code>int</code>. In general, the type goes on the left and the expression on the right.</p>

            <p>Interestingly, the creators of the Go language agreed that the C-style of declaring types in signatures gets confusing really fast - take a look at this nightmare.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {complexC}
                </SyntaxHighlighter>
            </div>

            <h3>Go-Style Syntax</h3>

            <p>Go's declarations are clear, you just read them left to right, just like you would in English.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {goDeclarations}
                </SyntaxHighlighter>
            </div>

            <p>It is nice for more complex signatures, it makes them easier to read.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {complexSignature}
                </SyntaxHighlighter>
            </div>

            <h2>Passing Variables by Value</h2>

            <p>Variables in Go are passed by value (except for a few data types we have not covered yet). <strong>Pass by value</strong> means that when a variable is passed into a function, that function receives a <em>copy</em> of the variable. The function is unable to mutate the caller's original data.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {passByVariables}
                </SyntaxHighlighter>
            </div>

            <h2>Ignoring Return Values</h2>

            <p>A function can return a value that the caller does not care about. We can explicitly ignore variables by using an underscore, which is known as the <strong>blank identifier</strong>.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {ignoreReturnedValues}
                </SyntaxHighlighter>
            </div>

            <p>Even though <code>getPoint()</code> returns two values, we can capture the first one and ignore the second. In Go, the blank identifier isn't just a convention, it is a real language feature that completely discards the value.</p>

            <p>You will use these more often than you think, mostly because the compiler in Go will throw errors when you have variables that are used. The blank identifier is a great way to get around it.</p>

            <p>Example: you have a function called <code>getCircle</code> that returns the center point and the radius, but you only use the radius for your calculations in the code. Go would throw an error if you created a <code>center</code> variable and never use it.</p>

            <h2>Named Return Values</h2>

            <p>Return values may be given names, and if they are, then they are treated the same as if they were new variables defined at the top of the function.</p>

            <p>Named return values are best thought of as a way to document the purpose of the returned values.</p>

            <blockquote cite="https://go.dev/tour/welcome/1">
                A return statement without arguments returns the named returns then named return values. This is known as a <em>naked</em> return. Naked return statements should be used only in short functions. They can harm readability in longer functions.
            </blockquote>

            <p>From: <cite><a href="https://go.dev/tour/welcome/1" target="_blank">Tour of Go</a></cite></p>

            <p>Use naked returns if it is obvious what the purpose of the returned values is. Otherwise, use named returns for clarity.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {nakedReturn}
                </SyntaxHighlighter>
            </div>

            <p>This is the same as:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {nonNakedVersion}
                </SyntaxHighlighter>
            </div>

            <p>In the first example, <code>x</code> and <code>y</code> are the return values. At the end of the function, we could simply write <code>return</code> to return the values of those two variables, rather than writing <code>return x, y</code>.</p>

            <h2>The Benefits of Named Returns</h2>

            <h3>Good for Documentation & Understanding</h3>

            <p>Named return parameters are great for documenting a function. We know what the function is returning directly from its signature, no need for a comment.</p>

            <p>Named return parameters are particularly important in longer functions with many return values.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {namedReturn}
                </SyntaxHighlighter>
            </div>

            <p>Which is easier to understand than:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {nonNamedDifficultToUnderstandReturn}
                </SyntaxHighlighter>
            </div>

            <p>We know the meaning of each return value just by looking at the function signature: <code>func calculator(a, b int) (mul, div int, err error)</code>.</p>

            <blockquote>
                <code>nil</code> is the zero value of an error. More on this later.
            </blockquote>

            <h3>Less Code (sometimes)</h3>

            <p>If there are multiple return statements in a function, you do not need to write all the return values each time, though you <em>probably</em> should.</p>

            <p>When you choose to omit return values, it is called a <em>naked return</em>. Naked returns should only be used in short and simple functions.</p>

            <h2>Explicit Returns</h2>

            <p>Even though a function has named return values, we can still explicitly return values if we want to.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {explicitValues}
                </SyntaxHighlighter>
            </div>

            <p>Using this explicit pattern we can even overwrite the return values:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {overwriteReturnValues}
                </SyntaxHighlighter>
            </div>

            <p>Otherwise, if we want to return the values defined in the function signature we can just use a naked <code>return</code> (blank return):</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {returnNakedReturnValues}
                </SyntaxHighlighter>
            </div>

            <h2>Early Returns</h2>

            <p>Go supports the ability to return early from a function. This is a powerful feature that can clean up code, especially when used as guard clauses.</p>

            <p><strong>Guard Clauses</strong> leverage the ability to <code>return</code> early from a function (or <code>continue</code> through a loop) to make nested conditionals one-dimensional. Instead of using if/else chains, we just return early from the function at the end of each conditional block.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {guardClause}
                </SyntaxHighlighter>
            </div>

            <p>Error handling in Go naturally encourages developers to make use of guard clauses. Let's take a look at an exaggerated example of nested conditional logic:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {extremlyNested}
                </SyntaxHighlighter>
            </div>

            <p>This could be written with guard clauses instead:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {cleanedUpNestedStatementWithGuardClause}
                </SyntaxHighlighter>
            </div>

            <p>The example above is <em>much</em> easier to read and understand. When writing code, it is important to try to reduce the cognitive load on the reader by reducing the number of entities they need to think about at any given time.</p>

            <p>In the first example, if the developer is trying to figure out when <code>270</code> is returned, they need to think about each branch in the logic tree and try to remember which cases matter and which cases do not. With the one-dimensional structure offered by guard clauses, it is as simple as stepping through each case in order.</p>

            <h2>Functions as values</h2>

            <p>Go supports <em>first-class</em> and higher-order functions, which are just fancy ways of saying <em>functions as values</em>. Functions are just another type, like <code>int</code>s, <code>string</code>s, and <code>bool</code>s.</p>

            <p>Let's assume we have two simple functions:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {simpleFunction}
                </SyntaxHighlighter>
            </div>

            <p>We can create a new <code>aggregate</code> function that accepts a function as its 4th argument:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {functionAsValue}
                </SyntaxHighlighter>
            </div>

            <p>It calls the given <code>arithmetic</code> function (which could be <code>add</code> or <code>mul</code>, or any other function that accepts two <code>int</code>s and returns an <code>int</code>) and applies it to three inputs instead of two. It can be used like this:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {passingFunctionAsValue}
                </SyntaxHighlighter>
            </div>

            <h2>Anonymous Functions</h2>

            <p>Anonymous functions are true to form in that they have <em>no name</em>. They are useful when defining a function that will only be used once or to create a quick <strong>closure</strong>.</p>

            <p>Let's say we have a function <code>conversions</code> that accepts another function, <code>converter</code> as input:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {notAnonymousFunction}
                </SyntaxHighlighter>
            </div>

            <p>We <em>could</em> define a function normally and then pass it in by name...but it is usually easier to just define it anonymously:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {anonymousFunction}
                </SyntaxHighlighter>
            </div>

            <h2>Defer</h2>

            <p>The <code>defer</code> keyword is a fairly unique feature of Go. It allows a function to be executed automatically <em>just</em> before its enclosing function returns. The deferred call's arguments are evaluated immediately, but the function call is not executed until the surrounding function returns.</p>

            <p>Deferred functions are typically used to clean up resources that are no longer being used. Often to close database connections, file handlers and the like.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {defer}
                </SyntaxHighlighter>
            </div>

            <p>In the above example, the <code>conn.Close()</code> function is <em>not</em> called at <code>defer conn.Close()</code>, but rather at either:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {resultOfDefer}
                </SyntaxHighlighter>
            </div>

            <p>Depending on whether the <code>FetchUser</code> function errored or not.</p>

            <p>Defer is a great way to make sure that something happens <em>before</em> a function exists, even if there are multiple return statements, a common occurrence in Go.</p>

            <h2>Block Scope</h2>

            <p>Unlike Python, Go is <em>not</em> function-scoped, it is <strong>block-scoped</strong>. Variables declared inside a block are only accessible within the block (and its nested blocks). There is also the package scope. For now, think of packages as the outermost and nearly global scope.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {packages}
                </SyntaxHighlighter>
            </div>

            <p>Blocks are defined by curly braces <code>&#123; &#125;</code>. New blocks are created for:</p>

            <ul>
                <li>functions</li>
                <li>loops</li>
                <li>if statements</li>
                <li>switch statements</li>
                <li>select statements</li>
                <li>explicit blocks</li>
            </ul>

            <p>It is a bit unusual, but occasionally you will see a plain old explicit block. It exists for no other reason than to create a new scope.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {explicitBlock} showLineNumbers
                </SyntaxHighlighter>
            </div>

            <h2>Closures</h2>

            <p>A <strong>closure</strong> is a function that references variables from outside its own function body. The function may access and assign to the referenced variables.</p>

            <p>In this example, the <code>concatter()</code> function returns a function that has reference to an <em>enclosed</em> <code>doc</code> value. Each successive call to <code>harryPotterAggregator</code> mutates that same <code>doc</code> variable.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {closure}
                </SyntaxHighlighter>
            </div>

            <h2>Currying</h2>

            <p>Function <strong>currying</strong> is a concept from functional programming and involves <em>partial application</em> of functions. It allows a function with multiple arguments to be transformed into a sequence of functions, each taking a single argument.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {currying}
                </SyntaxHighlighter>
            </div>

            <p>In the example above, the <code>selfMath</code> function takes in a function as its parameter and returns a function that itself returns the value of running that input function on its parameter.</p>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="functions-and-methods"
            />
        </div>
    );
}
