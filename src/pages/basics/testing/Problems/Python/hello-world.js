import Sk from 'skulpt'

const starterCode = `def helloWorld(): 
  # Write your code here




  
helloWorld()
`

const evaluateCode = (code) => {
    return new Promise((resolve) => {
        let outputBuffer = "";
        Sk.configure({
            output: function (text) {
                outputBuffer += text;
            },
            read: function (x) {
                if (
                    Sk.builtinFiles === undefined ||
                    Sk.builtinFiles["files"] === undefined ||
                    !Sk.builtinFiles["files"][x]
                ) {
                    throw "File not found: " + x;
                }
                return Sk.builtinFiles["files"][x];
            }
        });
        Sk.misceval.asyncToPromise(() => Sk.importMainWithBody("__main__", false, code, true))
            .then(() => {
                const expected = "Hello world!\n";
                const isCorrect = outputBuffer.trim() === expected.trim();
                const output = isCorrect
                    ? "✅ Test passed!\n" + outputBuffer
                    : "❌ Test failed!\nExpected:\n" + expected + "\nGot:\n" + outputBuffer;
                resolve({ output, correct: isCorrect });
            })
            .catch(err => resolve({ output: err.toString(), correct: false }));
    });
};

export const helloWorld = {
    id: "hello-world",
    title: "1. Hello World",
    problemStatement: `<p>Print the phrase <code>Hello world!</code> to the console.</p>`,
    constraints: `<li className='mt-2'>No <code>return</code> statement</li>
    <li className='mt-2'>No unnecessary spaces or extra characters</li>
    <li className='mt-2'>Watch for capital letter(s)</li>`,
    starterCode: starterCode,
    evaluateCode: evaluateCode,
    order: 1
}