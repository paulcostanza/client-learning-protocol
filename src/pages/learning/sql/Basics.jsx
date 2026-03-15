import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Basics() {
    const whereAndHavingClause = `SELECT department_id, COUNT(*)
FROM employees
WHERE salary > 50000
GROUP BY department_id
HAVING COUNT(*) > 5;`

    return (
        <div className="container">
            <h1>Intro to SQL</h1>

            <h2>Difference between <code>WHERE</code> and <code>HAVING</code> clause</h2>

            <p><code>WHERE</code> is run before grouping and it filters individual rows, whereas <code>HAVING</code> runs after <code>GROUP BY</code> and filters aggregated groups.</p>

            <p>Example:</p>

            <div className="">
                <SyntaxHighlighter language="sql" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {whereAndHavingClause}
                </SyntaxHighlighter>
            </div>

            <ul>
                <li><code>WHERE salary &gt; 50000</code>: filters <em>rows</em></li>
                <li><code>HAVING COUNT(*) &gt; 5</code>: filters <em>groups</em></li>
            </ul>

        </div>
    )
}