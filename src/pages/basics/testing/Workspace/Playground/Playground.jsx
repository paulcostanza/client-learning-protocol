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

    const runCode = () => {
        setOutput("");
        try {
            Sk.configure({
                output: function (text) {
                    setOutput(prev => prev + text);
                },
                read: function (x) {
                    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"] === undefined || !Sk.builtinFiles["files"][x]) {
                        throw "File not found: " + x;
                    }
                    return Sk.builtinFiles["files"][x];
                }
            });
            Sk.misceval.asyncToPromise(() => Sk.importMainWithBody("__main__", false, code, true))
                .catch(err => setOutput(err.toString()));
        } catch (err) {
            setOutput(err.toString());
        }
    }

    const handleSubmit = async () => {
        const result = await problem.evaluateCode(code);
        setOutput(result.output);
        setCorrect(result.correct);
        console.log('output foo: ', result.output, 'correct:', result.correct);
    };

    // when user hits next problem after submit it correct
    useEffect(() => {
        setCode(problem.starterCode)
        setOutput('')
        setCorrect(false)
    }, [problem])

    return (
        <div>
            <PlaygroundNav />
            <Split className='testing-space' sizes={[63, 37]} direction='vertical'>
                <div>
                    <CodeMirror
                        value={code}
                        theme={vscodeDark}
                        extensions={[python()]}
                        style={{ fontSize: 16 }}
                        onChange={value => setCode(value)}
                    />
                </div>

                <div>
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
