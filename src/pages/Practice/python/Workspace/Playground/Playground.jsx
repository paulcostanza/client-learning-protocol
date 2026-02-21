import { useState, useEffect } from 'react'
import Sk from 'skulpt'
import CodeMirror from '@uiw/react-codemirror'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { python } from '@codemirror/lang-python'
import Split from 'react-split'
import PlaygroundNav from './PlaygroundNav'
import OutputHeader from './PlaygroundFooter/OutputHeader'
import Output from './PlaygroundFooter/Output'

export default function Playground({ problem, nextProblem }) {
    const [code, setCode] = useState(problem.starterCode)
    const [output, setOutput] = useState('')
    const [correct, setCorrect] = useState(false)
    const [mainCode, setMainCode] = useState(problem.starterCode)
    const [testCode, setTestCode] = useState(problem.testCode || '# no test file needed for this challenge')
    const [activeTab, setActiveTab] = useState('main')

    const runCode = () => {
        setOutput("")
        let outputBuffer = ""
        Sk.configure({
            output: function (text) {
                outputBuffer += text
                setOutput(prev => prev + text)
            },
            read: function (x) {
                if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"] === undefined || !Sk.builtinFiles["files"][x]) {
                    throw "File not found: " + x
                }
                return Sk.builtinFiles["files"][x]
            }
        })

        // Append test code to user code
        const fullCode = mainCode + '\n' + testCode

        Sk.misceval.asyncToPromise(() => Sk.importMainWithBody("__main__", false, fullCode, true))
            .then(() => {
                const isCorrect = !outputBuffer.includes("FAIL") && !outputBuffer.includes("ERROR")
                setCorrect(isCorrect)
            })
            .catch(err => {
                setOutput(err.toString())
                setCorrect(false)
            })
    }

    useEffect(() => {
        setMainCode(problem.starterCode)
        setTestCode(problem.testCode || '# no test file needed for this challenge')
        // setOutput('')
        // setCorrect(false)
    }, [problem])

    const handleSwitchFile = (newCode) => {
        if (activeTab === 'main') {
            setMainCode(newCode)
        } else {
            setTestCode(newCode)
        }
    }

    const handleSubmit = async () => {
        setOutput("")
        let outputBuffer = ""
        Sk.configure({
            output: function (text) {
                outputBuffer += text
            },
            read: function (x) {
                if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"] === undefined || !Sk.builtinFiles["files"][x]) {
                    throw "File not found: " + x
                }
                return Sk.builtinFiles["files"][x]
            }
        })

        const fullCode = mainCode + '\n' + testCode

        try {
            await Sk.misceval.asyncToPromise(() => Sk.importMainWithBody("__main__", false, fullCode, true))
            const isCorrect = !outputBuffer.includes("F A I L") && !outputBuffer.includes("ERROR")
            setCorrect(isCorrect)
            setOutput(outputBuffer)
            window.alert(isCorrect ? "Congratulations! All tests passed." : "Some tests failed. Try again!")
            return isCorrect
        } catch (err) {
            setOutput(err.toString())
            setCorrect(false)
            window.alert("Submission failed due to an error.")
            return false
        }
    }

    return (
        <div>
            <PlaygroundNav activeTab={activeTab} setActiveTab={setActiveTab} />
            <Split className='testing-space' sizes={[63, 37]} direction='vertical'>
                <div className='split-child'>
                    <CodeMirror
                        value={activeTab === 'main' ? mainCode : testCode}
                        theme={vscodeDark}
                        extensions={[python()]}
                        style={{ fontSize: 16 }}
                        onChange={handleSwitchFile}
                    />
                </div>

                <div className='split-child'>
                    <OutputHeader
                        onRun={runCode}
                        onSubmit={handleSubmit}
                        onNextProblem={nextProblem}
                        correct={correct}
                    />
                    <Output output={output} />
                </div>
            </Split>
        </div>
    )
}