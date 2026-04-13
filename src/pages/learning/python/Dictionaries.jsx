import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Latex from 'react-latex'
import Table from '@mui/joy/Table'
import Paper from "@mui/material/Paper"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import Box from "@mui/material/Box"

export default function Dictionaries() {

    const myDict = `survivors = {"Jack Shephard": 36, "Kate Austen": 27, "Jugo Reyes": 26, "John Locke": 48}

survivors_again = {
    "Jack Shephard": 36, 
    "Kate Austen": 27, 
    "Jugo Reyes": 26, 
    "John Locke": 48
}`

    const others = `others = {}

others["Benjamin Linus"] = 40
others["Ethan Rom"] = 30
others["Juliet Burke"] = 32
others["Tom Friendly"] = 42 `

    const noDuplicates = `my_dict = {"a": 1, "b": 2, "c": 3}
print(my_dict["a"])

my_dict["a"] = 4
print(my_dict["a"])`

    const noDuplicatesConsole = `1
4`

    const anyValue = `my_dict = {"a": [1, 2, 3], "b": {4, 5, 6}, "c": {"x": 7, "y": 8, "z": 9}}

print(my_dict["a"])
print(my_dict["b"])
print(my_dict["c"])`

    const anyValuesConsole = `[1, 2, 3]
{4, 5, 6}
{"x": 7, "y": 8, "z": 9}`

    const sameValues = `my_dict = {"a": 1, "b": 1, "c": 1} # this is valid`

    const keyInDict = `my_dict = {"a": 1, "b": 2, "c": 3}

print("a" in my_dict)
print("d" in my_dict)`

    const keyInDictConsole = `True
False`

    const findLength = `my_dict = {"a": 1, "b": 2, "c": 3}
print(len(my_dict))`

    const findLengthConsole = `3`

    const dictLooping = `my_dict = {"a": 1, "b": 2, "c": 3}

for key in my_dict:
    value = my_dict[key]
    print(key, value)`

    const items = `my_dict = {"a": 1, "b": 2, "c": 3}

for key, value in my_dict.items():
    print(key, value)`

    const keyValuePop = `my_dict = {"a": 1, "b": 2, "c": 3}
my_dict.pop("a")
print(my_dict)
my_dict.pop("d")`

    const keyValuePopConsole = `{'b': 2, 'c': 3}
Traceback (most recent call last):
  File ["/home/main.py", line 4, in <module>
    my_dict.pop("d") # Raises KeyError
    ~~~~~~~~~~~^^^^^
KeyError: 'd'
`

    const popIsSafe = `my_dict = {"a": 1, "b": 2, "c": 3}
value = my_dict.pop("d", 0)

print(f"my_dict: {my_dict}")
print(f"value:   {value}")`

    const popIsSafeConsole = `my_dict: {'a': 1, 'b': 2, 'c': 3}
value:   0`

    const delKeyword = `my_dict = {"a": 1, "b": 2, "c": 3}
del my_dict["a"]`

    const values = `my_dict = {"a": 1, "b": 2, "c": 3}

for value in my_dict.values():
    print(value)`

    const valuesConsole = `1
2
3`

    const addValuesToList = `my_dict = {"a": 1, "b": 2, "c": 3}
values = list(my_dict.values())
print(values)`

    const addValuesToListOutput = `[1, 2, 3]`

    return (
        <>
            <h1>Dictionaries</h1>

            <p><strong>Dictionaries</strong> are one of the most important data types available in Python. They are used to store key-value pairs. The simplest way of thinking about them is as a table with two columns. The first column is the <strong>key</strong> and the second column is the <strong>value</strong>.</p>

            <Paper elevation={9} sx={{ maxWidth: 400, margin: "auto" }} >
                <Box sx={{ width: '100%', overflowX: 'auto' }}>
                    <Table
                        borderAxis="none"
                        size="lg"
                        stickyFooter={false}
                        stickyHeader={false}
                        variant="outlined"
                        hoverRow
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    style={{ width: '150px', }}
                                >Key</TableCell>
                                <TableCell
                                    style={{ width: '100px', }}
                                >Value</TableCell>
                            </TableRow>
                        </TableHead>
                        <tbody>
                            <tr>
                                <td>Jack Shephard</td>
                                <td>36</td>

                            </tr>
                            <tr>
                                <td>Kate Austen</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>Jugo Reyes</td>
                                <td>26</td>

                            </tr>
                            <tr>
                                <td>John Locke</td>
                                <td>48</td>
                            </tr>
                        </tbody>
                    </Table>
                </Box>
            </Paper>

            <p>Above we have a dictionary with three key-value pairs. The keys are <em>Jack Shephard</em>, <em>Kate Austen</em>, <em>Jugo Reyes</em>, and <em>John Locke</em> representing names, while the values <em>36</em>, <em>27</em>, <em>26</em>, and <em>48</em> represent the age of each person. In this case, the pair <em>Jack Shepard</em> and <em>36</em> means that Jack is 36 years old. </p>

            <p>Another way of phrasing it is we are <em>mapping</em> a key to the value. This is why dictionaries are sometimes called <strong>maps</strong> or <strong>hashmaps</strong> in other programming languages.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {myDict}
                </SyntaxHighlighter>
            </div>

            <p>The above two dictionaries are equivalent, the second is just formatted differently. A dictionary is created using curly braces <code>&#123; &#125;</code> similar to a set. But dictionaries do not just store values, they store <em>key-value</em> pairs separated by commas. The key and value are separated by a colon <code>:</code>, with the key on the left and the value on the right. </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {others}
                </SyntaxHighlighter>
            </div>

            <p>As shown above, to declare an empty dictionary we can use empty curly braces <code>&#123; &#125;</code>. We can then add key-value pairs to the dictionary using square brackets <code>[]</code> and the assignment operator <code>=</code>. This is similar to lists, but keys do not have to be integers.</p>

            <h2>Operations</h2>

            <p>Dictionaries <em>cannot</em> contain duplicate keys, just like sets. </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {noDuplicates}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {noDuplicatesConsole}
                </SyntaxHighlighter>
            </div>

            <p>As shown above, if we assign the same key a new value, the old value is overwritten.</p>

            <p>The values within a dictionary can be of any type, including lists, sets, and even other dictionaries.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {anyValue}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {anyValuesConsole}
                </SyntaxHighlighter>
            </div>

            <p>The keys within a dictionary <em>must</em> be unique, but the values can be duplicated.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {sameValues}
                </SyntaxHighlighter>
            </div>

            <h3>Check if key exist</h3>

            <p>To check if a dictionary contains a key, you can use the <code>in</code> keyword.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {keyInDict}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {keyInDictConsole}
                </SyntaxHighlighter>
            </div>

            <h2>Looping</h2>

            <p>You can use <code>len()</code> to get the length of a dictionary. This will return the number of key-value pairs in the dictionary.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {findLength}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {findLengthConsole}
                </SyntaxHighlighter>
            </div>

            <p>But just like with sets, the length of a dict will not help us to loop over it. The good news is that looping over a dictionary is very similar to looping over a set.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {dictLooping}
                </SyntaxHighlighter>
            </div>

            <p>By using the <code>for</code> loop, we can iterate over the keys in the dictionary by using the <code>in</code> operator. We can then use the key to access the value associated with that key.</p>

            <p>We can also use the <code>items()</code> method to loop over both the keys and values at the same time.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {items}
                </SyntaxHighlighter>
            </div>

            <p>This is a bit more concise, but it is up to you which style you prefer. While we named the variables <code>key</code> and <code>value</code>, you can name them whatever you like. Just know that with <code>items()</code> you need to have two variables to unpack the key-value pair. The first will be the key, and the second will be the value.</p>

            <blockquote>
                <p>So we need to clearify something about looping dictionaries...</p>
                <p>As of Python version <Latex>$ 3.7 $</Latex> dictionaries are <em>ordered</em>. In Python <Latex>$ 3.6 $</Latex> and earlier, dictionaries were <em>unordered</em>. Because dictionaries are ordered, the items have a defined order, and that order will <em>not</em> change.</p>

                <p>Unordered means that the items do not have a defined order, so you couldn't refer to an item by using an index. The takeaway is that if you're on Python <Latex>$ 3.7 $</Latex> or later, you'll be able to iterate over dictionaries in the same order every time.</p>
            </blockquote>

            <h2><code>pop()</code> & <code>del</code></h2>

            <p>You can remove an item from a dictionary using the <code>pop()</code> function. This function takes a key as an argument and removes the key-value pair from the dictionary. If the key does not exist, it will raise a <code>KeyError</code>.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {keyValuePop}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {keyValuePopConsole}
                </SyntaxHighlighter>
            </div>

            <p>If you do not want to worry about handling the <code>KeyError</code>, you can use the second argument of the <code>pop()</code> function. This argument is the default value that will be returned if the key does not exist.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {popIsSafe}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {popIsSafeConsole}
                </SyntaxHighlighter>
            </div>

            <p>You can also use the <code>del</code> keyword to remove a key-value pair from a dictionary. This is a bit more concise than using the <code>pop()</code> function.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {delKeyword}
                </SyntaxHighlighter>
            </div>

            <blockquote>
                <p><code>del</code> will still throw an error if you try deleting a key that does not exist in the dictionary!</p>
            </blockquote>

            <h2><code>values()</code></h2>

            <p>Another way of iterating over a dictionary is by using the <code>values()</code> function. This function allows us to loop over the values in the dictionary without needing to access the keys.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {values}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {valuesConsole}
                </SyntaxHighlighter>
            </div>

            <p>A useful use case for this is when we want to convert the values fo a dictionary into a list. This can be done by using the <code>list()</code> function.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {addValuesToList}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {addValuesToListOutput}
                </SyntaxHighlighter>
            </div>
        </>
    )
}