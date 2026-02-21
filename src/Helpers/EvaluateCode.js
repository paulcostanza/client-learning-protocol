import Sk from 'skulpt'

export function evaluatePythonCodeForConsole(expectedOutput) {
    return function evaluateCode(code) {
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
                    const normalize = str =>
                        str
                            .split('\n')
                            .map(line => line.replace(/\s+$/, ''))
                            .join('\n')
                            .trim();

                    const expected = normalize(expectedOutput);
                    const isCorrect = normalize(outputBuffer) === expected;
                    const output = isCorrect
                        ? outputBuffer + "\n*********** PASS ***********"
                        : "> Expected:\n" + expected + "\n> Got:\n" + outputBuffer + "\n*********** FAIL ***********";
                    resolve({ output, correct: isCorrect });
                })
                .catch(err => resolve({ output: err.toString(), correct: false }));
        });
    };
}

export function evaluatePythonCodeForFunction(functionName, testCases) {
    return function evaluateCode(code) {
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

            // Build test code to append
            const testCode = testCases.map(
                ({ input, expected }, i) => `
try:
    result = ${functionName}(${input})
    if result == ${expected}:
        print("Test ${i + 1}: PASS")
    else:
        print("Test ${i + 1}: FAIL (got", result, "expected", ${expected}, ")")
except Exception as e:
    print("Test ${i + 1}: ERROR", e)
`
            ).join('\n');

            const fullCode = code + '\n' + testCode;

            Sk.misceval.asyncToPromise(() => Sk.importMainWithBody("__main__", false, fullCode, true))
                .then(() => {
                    resolve({ output: outputBuffer, correct: outputBuffer.includes("FAIL") === false && outputBuffer.includes("ERROR") === false });
                })
                .catch(err => resolve({ output: err.toString(), correct: false }));
        });
    };
}