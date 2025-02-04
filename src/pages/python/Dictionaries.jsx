import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Dictionaries() {

    const dictionary_example = `full_names = ["jack bronson", "james mcarty", "jack denver"]

names_dict = {}
for full_name in full_names:
    # .split() returns a list of strings
    # where each string is a single word from the original
    names = full_name.split()
    first_name = names[0]
    last_name = names[1]
    names_dict[first_name] = last_name

print(names_dict)
# {
#   'jack': 'denver',
#   'james': 'mcarty'
# }`

    const delDictValues = `names_dict = {
    "jack": "bronson",
    "jill": "mcarty",
    "joe": "denver"
}

del names_dict["joe"]

print(names_dict)
# Prints: {'jack': 'bronson', 'jill': 'mcarty'}`

    const delDictValuesError = `names_dict = {
    "jack": "bronson",
    "jill": "mcarty",
    "joe": "denver"
}

del names_dict["unknown"]
# ERROR HERE, key doesn't exist`

    const checkForKey = `cars = {
    "ford": "f150",
    "tesla": "3"
}

print("ford" in cars)
# Prints: True

print("gmc" in cars)
# Prints: False`

    const convertDictToList = `# A function that takes a dictionary and returns the value of the "num" key
# This is how the .sort() method knows how to sort the list of dictionaries
def sort_on(dict):
    return dict["num"]

vehicles = [
    {"name": "car", "num": 7},
    {"name": "plane", "num": 10},
    {"name": "boat", "num": 2}
]
vehicles.sort(reverse=True, key=sort_on)
print(vehicles)
# [{'name': 'plane', 'num': 10}, {'name': 'car', 'num': 7}, {'name': 'boat', 'num': 2}]`

    return (
        <>
            <h1>Dictionaries</h1>

            <h2 id="updating-dictionary-values">Updating Dictionary Values</h2>

            <div className="center">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="center">
                    {dictionary_example}
                </SyntaxHighlighter>
            </div>

            <h2 id="deleting-dictionary-values">Deleting Dictionary Values</h2>

            <p>You can delete existing keys using the <code>del</code> keyword.</p>

            <div className="center">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="center">
                    {delDictValues}
                </SyntaxHighlighter>
            </div>

            <p>However, if you try to delete a key that doesn't exist, you'll get an <em>error</em>.</p>

            <div className="center">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="center">
                    {delDictValuesError}
                </SyntaxHighlighter>
            </div>

            <h2 id="check-for-key">Check for key</h2>

            <p>If you are unsure whether or not a key exists in a dictionary, use the <code>in</code> keyword.</p>

            <div className="center">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="center">
                    {checkForKey}
                </SyntaxHighlighter>
            </div>


            <h2 id="ordered-or-unordered">Ordered or Unordered?</h2>

            <p>As of Python version $ 3.7 $ dictionaries are <em>ordered</em>. In Python $ 3.6 $ and earlier, dictionaries were <em>unordered</em>.</p>

            <p>Because dictionaries are ordered, the items have a defined order, and that order will <em>not</em> change.</p>

            <p>Unordered means that the items do not have a defined order, so you couldn't refer to an item by using an index. The takeaway is that if you're on Python $ 3.7 $ or later, you'll be able to iterate over dictionaires in the same order every time.</p>

            <h2 id="convert-dictionary-of-characters-into-a-list-and-sort-by-value">Convert dictionary of characters into a list and sort by value</h2>

            <p>Convert your dictionary of characters into a list of dictionaries and then use the <code>.sort()</code> method to sort by the number of occurrences. Here is an example:</p>

            <div className="center">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="center">
                    {convertDictToList}
                </SyntaxHighlighter>
            </div>

            <p>You can use a string's <code>isalpha()</code> method to check if a string only contains characters from the alphabet.</p>

        </>
    )
}