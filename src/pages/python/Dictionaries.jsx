export default function Dictionaries() {
    return (
        <>
            <h1>Dictionaries</h1>

            <h2 id="updating-dictionary-values">Updating Dictionary Values</h2>

            <pre class="hljs"><code><div>full_names = [<span class="hljs-string">"jack bronson"</span>, <span class="hljs-string">"james mcarty"</span>, <span class="hljs-string">"jack denver"</span>]

                names_dict = { }
                <span class="hljs-keyword">for</span> full_name <span class="hljs-keyword">in</span> full_names:
                <span class="hljs-comment"># .split() returns a list of strings</span>
                <span class="hljs-comment"># where each string is a single word from the original</span>
                names = full_name.split()
                first_name = names[<span class="hljs-number">0</span>]
                last_name = names[<span class="hljs-number">1</span>]
                names_dict[first_name] = last_name

                print(names_dict)
                <span class="hljs-comment"># {'{'}</span>
                <span class="hljs-comment">#   'jack': 'denver',</span>
                <span class="hljs-comment">#   'james': 'mcarty'</span>
                <span class="hljs-comment"># {'}'}</span>
            </div></code></pre>

            <h2 id="deleting-dictionary-values">Deleting Dictionary Values</h2>

            <p>You can delete existing keys using the <code>del</code> keyword.</p>

            <pre class="hljs"><code><div>names_dict = {'{'}
                <span class="hljs-string">"jack"</span>: <span class="hljs-string">"bronson"</span>,
                <span class="hljs-string">"jill"</span>: <span class="hljs-string">"mcarty"</span>,
                <span class="hljs-string">"joe"</span>: <span class="hljs-string">"denver"</span>
                {'}'}

                <span class="hljs-keyword">del</span> names_dict[<span class="hljs-string">"joe"</span>]

                print(names_dict)
                <span class="hljs-comment"># Prints: {'{'}'jack': 'bronson', 'jill': 'mcarty'{'}'}</span>
            </div></code></pre>

            <p>However, if you try to delete a key that doesn't exist, you'll get an <em>error</em>.</p>

            <pre class="hljs"><code><div>names_dict = {'{'}
                <span class="hljs-string">"jack"</span>: <span class="hljs-string">"bronson"</span>,
                <span class="hljs-string">"jill"</span>: <span class="hljs-string">"mcarty"</span>,
                <span class="hljs-string">"joe"</span>: <span class="hljs-string">"denver"</span>
                {'}'}

                <span class="hljs-keyword">del</span> names_dict[<span class="hljs-string">"unknown"</span>]
                <span class="hljs-comment"># ERROR HERE, key doesn't exist</span>
            </div></code></pre>

            <h2 id="check-for-key">Check for key</h2>

            <p>If you are unsure whether or not a key exists in a dictionary, use the <code>in</code> keyword.</p>

            <pre class="hljs"><code><div>cars = {'{'}
                <span class="hljs-string">"ford"</span>: <span class="hljs-string">"f150"</span>,
                <span class="hljs-string">"tesla"</span>: <span class="hljs-string">"3"</span>
                {'}'}

                print(<span class="hljs-string">"ford"</span> <span class="hljs-keyword">in</span> cars)
                <span class="hljs-comment"># Prints: True</span>

                print(<span class="hljs-string">"gmc"</span> <span class="hljs-keyword">in</span> cars)
                <span class="hljs-comment"># Prints: False</span>
            </div></code></pre>

            <h2 id="ordered-or-unordered">Ordered or Unordered?</h2>

            <p>As of Python version $ 3.7 $ dictionaries are <em>ordered</em>. In Python $ 3.6 $ and earlier, dictionaries were <em>unordered</em>.</p>

            <p>Because dictionaries are ordered, the items have a defined order, and that order will <em>not</em> change.</p>

            <p>Unordered means that the items do not have a defined order, so you couldn't refer to an item by using an index. The takeaway is that if you're on Python $ 3.7 $ or later, you'll be able to iterate over dictionaires in the same order every time.</p>

            <h2 id="convert-dictionary-of-characters-into-a-list-and-sort-by-value">Convert dictionary of characters into a list and sort by value</h2>

            <p>Convert your dictionary of characters into a list of dictionaries and then use the <code>.sort()</code> method to sort by the number of occurrences. Here is an example:</p>

            <pre class="hljs"><code><div><span class="hljs-comment"># A function that takes a dictionary and returns the value of the "num" key</span>
                <span class="hljs-comment"># This is how the `.sort()` method knows how to sort the list of dictionaries</span>
                <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">sort_on</span><span class="hljs-params">(dict)</span>:</span>
                <span class="hljs-keyword">return</span> dict[<span class="hljs-string">"num"</span>]

                vehicles = [
                {'{'}<span class="hljs-string">"name"</span>: <span class="hljs-string">"car"</span>, <span class="hljs-string">"num"</span>: <span class="hljs-number">7</span>{'}'},
                {'{'}<span class="hljs-string">"name"</span>: <span class="hljs-string">"plane"</span>, <span class="hljs-string">"num"</span>: <span class="hljs-number">10</span>{'}'},
                {'{'}<span class="hljs-string">"name"</span>: <span class="hljs-string">"boat"</span>, <span class="hljs-string">"num"</span>: <span class="hljs-number">2</span>{'}'}
                ]
                vehicles.sort(reverse=<span class="hljs-literal">True</span>, key=sort_on)
                print(vehicles)
                <span class="hljs-comment"># [{'{'}'name': 'plane', 'num': 10{'}'}, {'{'}'name': 'car', 'num': 7{'}'}, {'{'}'name': 'boat', 'num': 2{'}'}]</span>
            </div></code></pre>

            <p>You can use a string's <code>isalpha()</code> method to check if a string only contains characters from the alphabet.</p>

        </>
    )
}