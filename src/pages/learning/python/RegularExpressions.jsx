import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function RegularExpressions() {
    const regExInAction = `match = re.search(pat, str)`

    const findWord = `str = 'an example word:cat!!'
match = re.search(r'word:\\w\\w\\w', str)

if match:
    print('found', match.group())
else:
    print('did not find')`

    const wordFound = `found word:cat`

    const examples = `  ## i+ = one or more i's, as many as possible.
  match = re.search(r'pi+', 'piiig') # found, match.group() == "piii"

  ## Finds the first/leftmost solution, and within it drives the +
  ## as far as possible (aka 'leftmost and largest').
  ## In this example, note that it does not get to the second set of i's.
  match = re.search(r'i+', 'piigiiii') # found, match.group() == "ii"

  ## \\s* = zero or more whitespace chars
  ## Here look for 3 digits, possibly separated by whitespace.
  match = re.search(r'\\d\\s*\\d\\s*\\d', 'xx1 2   3xx') # found, match.group() == "1 2   3"
  match = re.search(r'\\d\\s*\\d\\s*\\d', 'xx12  3xx') # found, match.group() == "12  3"
  match = re.search(r'\\d\\s*\\d\\s*\\d', 'xx123xx') # found, match.group() == "123"

  ## ^ = matches the start of string, so this fails:
  match = re.search(r'^b\\w+', 'foobar') # not found, match == None
  ## but without the ^ it succeeds:
  match = re.search(r'b\\w+', 'foobar') # found, match.group() == "bar"`

    return (
        <div className='container'>
            <h1>Regular Expressions</h1>

            <p>Regular expressions are used for matching text patterns. In python, we use the <code>re</code> module.</p>

            <p>The <code>re.search(pat, str)</code> functions searches for a single pattern in a string and returns a matching object if found. If not, it returns <code>None</code>.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {regExInAction}
                </SyntaxHighlighter>
            </div>

            <p>It's common for the search to be immediately followed by an if-statement to test if the search succeeded, as shown below where the example searches for the pattern <em>word:</em>, followed by a 3 letter word:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {findWord}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {wordFound}
                </SyntaxHighlighter>
            </div>

            <p>The <code>r</code> at the start of the pattern string designates a python *raw* string which passes through backslashes without change. This comes in handy for regEx. It's recommended that you always write pattern strings with the <code>r</code> just as a habit.</p>

            <h2>Basic Patterns</h2>

            <p>RegEx is great because they can specify patterns, and not just find fixed characters. Some of the most basic patterns which match single characters:</p>

            <ul>
                <li><code>a</code>, <code>Z</code>, <code>6</code> - ordinary characters that can just match themselves exactly. Watch out for meta-characters, they do not match themselves because they have special means (some are listed below).</li>
                <li><code>.</code> - matches any single character except newline (<code>\n</code>)</li>
                <li><code>\w</code> - (lowercase w) matches a *word* character: a letter or digit or underbar <code>[a-zA-Z0-0]</code>. Note that although *word* is the mnemonic for this, it only matches a single *word character*, not a whole word.</li>
                <li><code>\W</code> - (uppercase W) matches any non-word character</li>
                <li><code>\b</code> - boundary between word and non-word</li>
                <li><code>\s</code> - (lowercase s) matches a single whitespace character - space, newline, return, tab, form <code>[\n\r\t\f]</code></li>
                <li><code>\S</code> - (uppercase S) matches any non-whitespace character</li>
                <li>, <code>\t</code>, <code>\r</code>, <code>\n</code> - tab, newline, return</li>
                <li><code>\d</code> - a decimal digit <code>[0-9]</code></li>
                <li><code>^</code> = match the start, <code>$</code> = match the end of a string</li>
                <li><code>\</code> - inhibit the *specialness* of a character. Example: <code>\.</code> matches a period, <code>\\</code> matches a slash</li>
                <li><code>+</code> one or more occurrences of the pattern to its left. Example: <code>i+</code> = one or more i's</li>
                <li><code>*</code> zero or more occurences of the pattern to its left</li>
                <li><code>?</code> zero or one occurences of the pattern to its left</li>
            </ul>

            <h2>Basic rules</h2>

            <ol>
                <li>The search proceeds throught the string from start to end, stopping at the first match found</li>
                <li>All of the pattern must be matched, but not all of the string</li>
                <li>If <code>match = re.search(pat, str)</code> is successful, match is not <code>None</code> and <code>match.group()</code> is the matching text</li>
            </ol>

            <h3>Leftmost & Largest</h3>

            <p>First the search finds the leftmost match for the pattern, and second it tries to use up as much of the string as possilbe. Basically, <code>+</code> and <code>*</code> go as far as possible. Hence why you will hear regEx patterns be referred to as *greedy*. </p>

            <p>The <code>re.findall(pat, str)</code> function finds all matches of a pattern in a string and returns them as a list of strings or tuples, depending on whether the pattern contains capturing groups.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {examples}
                </SyntaxHighlighter>
            </div>

            <h2>Square brackets</h2>

            <p>Square brackets can be used to indicate a set of characters, so <code>[abc]</code> matches <code>a</code>, <code>b</code>, or <code>c</code>.</p>

        </div>
    )
}