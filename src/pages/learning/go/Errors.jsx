import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function ErrorsNotes() {
    const quizImports = {
        go: () => import('../../../pages/quiz/database/GoQuestions.js')
    }

    const errorInterface = `type error interface {
    Error() string
}`

    const jsTryCatch = `function getUser() {
    //...
}

try {
    const user = getUser()
    // use user here
} catch (err) {
    console.log("cannot find the user: ", err)
}`

    const errorsAreValues = `user, err := getUser()
if err != nil {
    fmt.Println(err)
    return
}

profile, err := getUserProfile(user.Id)
if err != nil {
    fmt.Println(err)
    return
}
// use user profile here`

    const atoiFunctionSignature = `// function signature for Atoi
func Atoi(s string) (int, error)`

    const atoiInAction = `// Atoi converts a stringified number to an integer
i, err := strconv.Atoi("42b")
if err != nil {
    fmt.Println("could not convert: ", err)
    // this runs because "42b" is not a valid integer
    return
}
// if your program makes it here, then
// the variable i was created successfully`

    const customType = `type userError struct {
    name string
}

func (e userError) Error() string {
    return fmt.Sprintf("%v has a problem with their account", e.name)
}`

    const usingCustomType = `func sendSMS(msg, userName string) error {
    if !canSendToUser(userName) {
        return userError(name: userName)
    }
    // ...
}`

    const errorPackageSimple = `// simple example
var err error = errors.New("something went wrong")`

    const errorPackagePracticalApplication = `// practical application
package main

import "errors"

func divide(x, y float64) (float64, error) {
	if y == 0 {
		return 0, errors.New("no dividing by 0")
	}
	return x / y, nil
}`

    const enrichUser = `func enrichUser(userId string) (User, error) {
    user, err := getUser(userId)
    if err != nil {
        // fmt.Errorf: wraps an error with additional context
        return User{}, fmt.Errorf("failed to get user: %w", err)
    }
    return user, nil
}`

    const panic = `func enrichUser(userId string) User {
    user, err := getUser(userId)
    if err != nil {
        panic(err)
    }
    return user
}

func main() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("recovered from panic:", r)
        }
    }()

    // this panics, but the defer/recover block catches it
    // a truly astonishingly bad way to handle errors
    enrichUser("123")
}`

    return (
        <div>
            <h1>The Error Interface</h1>

            <p>Go programs express errors with <code>error</code> values. An <strong>Error</strong> is any type that implements the simple built-in error interface:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {errorInterface}
                </SyntaxHighlighter>
            </div>

            <p>Go <em>does not</em> handle errors the same way other programs handle them. For example, JavaScript uses the <code>try...catch</code> paradigm.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {jsTryCatch}
                </SyntaxHighlighter>
            </div>

            <p>We wrap the <code>getUser</code> functions inside of a <code>try</code> block because it is a function that might throw an error. For example, if the user does not exist the <code>catch</code> block will run.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {errorsAreValues}
                </SyntaxHighlighter>
            </div>

            <p>Go <em>does not</em> have <code>try...catch</code> blocks. Instead it will return errors like they are any other value. If everything is good, the error is <code>nil</code> and our code continues. In the example above, if something goes wrong the <code>err</code> variable will <em>not</em> be <code>nil</code>, so we handle the error in a conditional statement.</p>

            <p>However, if everything does go well then the error will be <code>nil</code>, meaning we will continue to the next lines of code.</p>

            <p>Functions that can fail will return an error value as their last return value. The developer as the caller of the function is expected to check it.</p>

            <p>There are two nice reasons why Go's error return handling are nicer than <code>try...catch</code>:</p>

            <ol>
                <li><strong>Straightforward control flow:</strong> there is no magic that drops us out of a block we are in like the <code>throw</code> keyword does. Code just executes line by line, even when things go wrong.</li>
                <li><strong>It's explicit:</strong> you can see if a function might return an error just by looking at its return type. In JavaScript, the function does not tell you if the function might throw an error or not, you just kind of have to know.</li>
            </ol>

            <p>When something can go wrong in a function, that function should return an <code>error</code> as its last return value. Any code that calls a function that can return an <code>error</code> should handle errors by testing whether the error is <code>nil</code>.</p>

            <h2>Atoi</h2>

            <p>Let's look at how the <code>strconv.Atoi</code> function uses this pattern.</p>

            <blockquote>
                <code>strconv.Atoi</code> converts a numeric string like <code>"123"</code> into an integer <code>123</code>, returning the integer and an <code>error</code> if the string is not a valid base-10 number.
            </blockquote>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {atoiFunctionSignature}
                </SyntaxHighlighter>
            </div>

            <p>This means <code>Atoi</code> takes a string argument and returns two values: an integer and an <code>error</code>. If the string can be successfully converted to an integer, <code>Atoi</code> returns the integer and a <code>nil</code> error. If the conversion fails, it returns zero and a non-nil error.</p>

            <p>Here is how you would safely use <code>Atoi</code>:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {atoiInAction}
                </SyntaxHighlighter>
            </div>

            <p>A <code>nil</code> error denotes success while a non-nil error denotes failure.</p>

            <h2>The Error Interface</h2>

            <p>Because errors are just interfaces, you can build your own custom types that implement the <code>error</code> interface. Here is an example of a <code>userError</code> struct that implements the <code>error</code> interface:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {customType}
                </SyntaxHighlighter>
            </div>

            <p>It can then be used as an error:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {usingCustomType}
                </SyntaxHighlighter>
            </div>


            <h2>The Errors Package</h2>

            <p>The Go standard library provides an <em>errors</em> package that makes it easy to deal with errors.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {errorPackageSimple}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {errorPackagePracticalApplication}
                </SyntaxHighlighter>
            </div>

            <h2>Panic</h2>

            <p>As we have seen, the proper way to handle errors in Go is to make use of the <em>error</em> interface. Pass errors up the call stack, treating them as normal values:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {enrichUser}
                </SyntaxHighlighter>
            </div>

            <p>However, there is another way to deal with errors in Go: <strong>panic</strong> function. When a function calls <code>panic</code>, the program crashes and prints a stack trace.</p>

            <blockquote>As a general rule, don't panic!</blockquote>

            <p>The <code>panic</code> function yeets control out of the current function and up the call stack until it reaches a function that defers a recover. If no function calls <code>recover</code> the goroutine (often the entire program) crashes.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {panic}
                </SyntaxHighlighter>
            </div>

            <p>Sometimes new Go developers look at <code>panic</code> or <code>recover</code> and think <em>this is like try/catch! I can do this!</em>... don't be like them.</p>

            <p>Just use error values for all <em>normal</em> error handling, and if you have a truly unrecoverable error, use <code>log Fatal</code> to print a message and exit the program.</p>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="errors"
            />
        </div>
    );
}
