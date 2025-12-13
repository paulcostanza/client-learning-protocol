import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Hooks() {
    const quizImports = {
        react: () => import('../../../pages/quiz/database/ReactQuestions.js')
    }

    const useState = `const [count, setCount] = useState(0)
<button onClick={() => setCount(prev => prev + 1)}>
    {count}
</button>`

    const useEffect = `useEffect(() => {
    fetch("/api/data")
        .then(res => res.json())
        .then(setData)
}, [])`

    const useContext = `const ThemeContext = createContext("light")
const theme = useContext(ThemeContext)
return <div className={theme}>Hello</div>`

    const useReducer = `function reducer(state, action) {
    switch(action.type) {
        case 'increment':
            return { count: state.count + 1 }
        default:
            return state
    }
}

const [state, dispatch] = useReducer(reducer, { count: 0 })`

    const useCallback = `const memoizedFn = useCallback(() => {
    console.log("Expensive function")
}, [dependency])`

    const useMemo = `const result = useMemo(() => heavyCalc(data), [data])`

    const useRef = `const inputRef = useRef()

<input ref={inputRef} />

<button onClick={() => inputRef.current.focus()}>
    Focus
</button>`

    return (
        <div>
            <h1>Essential Hooks Review</h1>

            <p><strong>Quick breakdown:</strong></p>

            <ol>
                <li>
                    <strong>Basic hooks</strong>
                    <ul>
                        <li>useState: local state without the boilerplate</li>
                        <li>useEffect: side effects made declarative</li>
                    </ul>
                </li>
                <li>
                    <strong>Intermediate hooks</strong>
                    <ul>
                        <li>useContext: no more prop drilling</li>
                        <li>useReducer: structured state logic</li>
                    </ul>
                </li>
                <li>
                    <strong>Advanced hooks</strong>
                    <ul>
                        <li>useCallback: memoize functions like a pro</li>
                        <li>useMemo: optimize those heavy computations</li>
                        <li>useRef: direct DOM access &amp; persistent values</li>
                    </ul>
                </li>
            </ol>

            <blockquote>
                How do I know if I am good with hooks?
            </blockquote>

            <ul>
                <li>understand why they exist</li>
                <li>when to apply them</li>
                <li>when not to over-engineer</li>
            </ul>

            <hr />

            <h2><code>useState</code></h2>

            <ul>
                <li>manages local state in functional components</li>
                <li>ideal for toggles, form inputs, &amp; counters</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers className="code-snippet" wrapLines={true}>
                    {useState}
                </SyntaxHighlighter>
            </div>

            <hr />

            <h2><code>useEffect</code></h2>

            <ul>
                <li>runs side-effects after render</li>
                <li>useful for API calls, subscriptions, &amp; timers</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers className="code-snippet" wrapLines={true}>
                    {useEffect}
                </SyntaxHighlighter>
            </div>

            <hr />

            <h2><code>useContext</code></h2>

            <ul>
                <li>shares state globally without prop drilling</li>
                <li>great for themes, auth, or user data</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers className="code-snippet" wrapLines={true}>
                    {useContext}
                </SyntaxHighlighter>
            </div>

            <hr />

            <h2><code>useReducer</code></h2>

            <ul>
                <li>manages complex state transitions</li>
                <li>preferred when state logic grows beyond useState</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers className="code-snippet" wrapLines={true}>
                    {useReducer}
                </SyntaxHighlighter>
            </div>

            <hr />

            <h2><code>useCallback</code></h2>

            <ul>
                <li>memoizes functions between renders</li>
                <li>prevents unnecessary child re-renders</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers className="code-snippet" wrapLines={true}>
                    {useCallback}
                </SyntaxHighlighter>
            </div>

            <hr />

            <h2><code>useMemo</code></h2>

            <ul>
                <li>memoizes computed values</li>
                <li>optimizes expensive calculations</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers className="code-snippet" wrapLines={true}>
                    {useMemo}
                </SyntaxHighlighter>
            </div>

            <hr />

            <h2><code>useRef</code></h2>

            <ul>
                <li>accesses DOM elements directly</li>
                <li>stores mutable values without re-render</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers className="code-snippet" wrapLines={true}>
                    {useRef}
                </SyntaxHighlighter>
            </div>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="interfaces"
            />
        </div>
    );
}
