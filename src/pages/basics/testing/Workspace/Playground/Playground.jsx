import CodeMirror from '@uiw/react-codemirror'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { javascript } from '@codemirror/lang-javascript'
import Split from 'react-split'

export default function Playground() {
    const boilerPlate = `function twoSum(nums, target) {
  // Write your code here
}`

    return (
        <div>
            <Split className='testing-space' sizes={[67, 33]} direction='vertical'>
                {/* Where user codes */}
                <div>
                    <CodeMirror
                        value={boilerPlate}
                        theme={vscodeDark}
                        extensions={[javascript()]}
                        style={{ fontSize: 16 }}
                    />
                </div>

                {/* Test cases */}
                <div>
                    <h1>Test cases</h1>
                </div>
            </Split>
        </div>

    )
}