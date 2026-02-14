import { useState, useEffect } from 'react'
import Sk from 'skulpt'
import CodeMirror from '@uiw/react-codemirror'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { python } from '@codemirror/lang-python'
import Split from 'react-split'
import PlaygroundNav from './PlaygroundNav'
import OutputHeader from './PlaygroundFooter/OutputHeader'
import Output from './PlaygroundFooter/Output'

export default function Playground() {
    const boilerPlate = `def helloWorld(): 
  # Write your code here

helloWorld()
`

    const [code, setCode] = useState(boilerPlate)
    const [output, setOutput] = useState('')

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

    const handleSubmit = () => {
        let outputBuffer = "";
        Sk.configure({
            output: function (text) {
                outputBuffer += text;
            },
            read: function (x) {
                if (Sk.builtinFiles === undefined ||
                    Sk.builtinFiles["files"] === undefined ||
                    !Sk.builtinFiles["files"][x]) {
                    throw "File not found: " + x;
                }
                return Sk.builtinFiles["files"][x];
            }
        });
        Sk.misceval.asyncToPromise(() => Sk.importMainWithBody("__main__", false, code, true))
            .then(() => {
                // Example test: check if output matches expected
                const expected = "Hello world!\n";
                if (outputBuffer.trim() === expected.trim()) {
                    setOutput("✅ Test passed!\n" + outputBuffer);
                } else {
                    setOutput("❌ Test failed!\nExpected:\n" + expected + "\nGot:\n" + outputBuffer);
                }
            })
            .catch(err => setOutput(err.toString()));
    };

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
                    <OutputHeader onRun={runCode} onSubmit={handleSubmit} />
                    <Output output={output} />
                </div>
            </Split>
        </div>
    )
}
