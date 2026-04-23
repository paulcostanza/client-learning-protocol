import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function ExceptionHandling() {
    const quizImports = {
        cSharp: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    const tryCatch = `namespace HelloNerd
    {
        internal class Program
        {
            static void Main(string[] args)
            {
                try
                {
                    string number = "1234";
                    byte newNumber = Convert.ToByte(number);
    
                    Console.WriteLine(newNumber);
                } 
                catch (Exception)
                {
                    Console.WriteLine("Crash!!");
                }
                
               
            }
        }
    }`

    return (
        <>
            <h1>Exception Handling</h1>

            <h2 id="try--catch">Try / Catch</h2>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {tryCatch}
                </SyntaxHighlighter>
            </div>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="exception-handling"
            />
        </>
    )
}