import Sk from 'skulpt'

const starterCode = `def haiku():
  # enter code here




haiku()`

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
                const normalize = str =>
                    str
                        .split('\n')
                        .map(line => line.replace(/\s+$/, ''))
                        .join('\n')
                        .trim();

                const expected = normalize(haiku.example);
                const actual = normalize(outputBuffer);

                if (actual === expected) {
                    resolve("✅ Test passed!\n" + outputBuffer);
                } else {
                    resolve(
                        "❌ Test failed!\nExpected:\n" +
                        expected +
                        "\nGot:\n" +
                        actual
                    );
                }
            })
            .catch(err => resolve(err.toString()));
    });
};

export const haiku = {
    id: "haiku",
    title: "2. Haiku",
    problemStatement: `<p>Print out the following Haiku</p>
    <p>Note: A <em>Haiku</em> is a Japanese poetic form that consists of three lines, with five syllables in the first line, seven in the second, and five in the third</p>`,
    example: `Soft metal smiles glow,
"We only optimize peace."
Red eyes never blink.`,
    constraints: `<li className='mt-2'>No <code>return</code> statement</li>
    <li className='mt-2'>No unnecessary spaces or extra characters</li>
    <li className='mt-2'>Watch for capital letter(s)</li>
    <li className='mt-2'>Watch for double quotes</li>`,
    starterCode: starterCode,
    evaluateCode: evaluateCode
}