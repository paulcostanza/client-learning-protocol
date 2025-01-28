export default function Lists() {
    return (
        <>
            <h1>Lists</h1>

            <h2 id="quick-methods-reference-sheet">Quick methods reference sheet</h2>

            <ul>
                <li><code>.append(element)</code> add to the end of a list</li>
                <li><code>.pop()</code> removes last item from list. Can return it to a variable if assigned</li>
                <li><code>.pop(idx)</code> removes at specific index. Can return it to a variable if assigned</li>
                <li><code>.lower()</code> takes a string and lower cases it</li>
            </ul>

            <h2 id="quick-tricks">Quick Tricks</h2>

            <p>The built-in <code>float()</code> function can create a numeric floating point of negative infinity. Because every value will be greater than negative infinity, we can use it to help us accomplish our goal of finding the max value.</p>

            <p>We also have positive infinity!</p>

            <pre class="hljs"><code><div>negative_infinity = float(<span class="hljs-string">"-inf"</span>)<br />
                positive_infinity = float(<span class="hljs-string">"inf"</span>)
            </div></code></pre>

            <h2 id="slicing-lists">Slicing Lists</h2>

            <p>To grab the sections from a list of only the elements you want, you can use the slicing operator (<code>:</code>). Slice <strong>does not</strong> change the original list</p>

            <pre class="hljs"><code><div>my_list[start : stop : step]<br /><br />

                scores = [<span class="hljs-number">50</span>, <span class="hljs-number">70</span>, <span class="hljs-number">30</span>, <span class="hljs-number">20</span>, <span class="hljs-number">90</span>, <span class="hljs-number">10</span>, <span class="hljs-number">50</span>]<br />
                <span class="hljs-comment"># Display list</span><br />
                print(scores[<span class="hljs-number">1</span>:<span class="hljs-number">5</span>:<span class="hljs-number">2</span>])<br />
                <span class="hljs-comment"># Prints [70, 20]</span><br />
                <span class="hljs-comment"># give me a slice of the scores list </span><br />
                <span class="hljs-comment"># from idx 1, up to but not including </span><br />
                <span class="hljs-comment"># 5, skipping every 2nd value</span><br /><br />

                <span class="hljs-comment"># Omitting Sections</span><br />
                numbers = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>]<br />
                numbers[:<span class="hljs-number">3</span>] <span class="hljs-comment"># Gives [0, 1, 2]</span><br />
                numbers[<span class="hljs-number">3</span>:] <span class="hljs-comment"># Gives [3, 4, 5, 6, 7, 8, 9]</span><br /><br />

                <span class="hljs-comment"># Using Only the step section</span><br />
                numbers = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>]<br />
                numbers[::<span class="hljs-number">2</span>] <span class="hljs-comment"># Gives [0, 2, 4, 6, 8]</span><br />
                numbers[<span class="hljs-number">1</span>::<span class="hljs-number">2</span>] <span class="hljs-comment"># Gives [1, 3, 5, 7, 9]</span><br /><br />

                <span class="hljs-comment"># Negative Indices</span><br />
                numbers = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>]<br />
                numbers[<span class="hljs-number">-3</span>:] <span class="hljs-comment"># Gives [7, 8, 9]</span><br />
            </div></code></pre>

            <h4 id="reverse-a-list">Reverse a list</h4>

            <p>Using only the step section you can reverse a list quite easily:</p>

            <pre class="hljs"><code><div><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">reverse_array</span><span class="hljs-params">(items)</span>:</span><br />
                <span class="hljs-keyword">return</span> items[::<span class="hljs-number">-1</span>]
            </div></code></pre>

            {/* List Operations */}

            <h2 id="list-operations---concatenate">List Operations</h2>

            <h4 id="concatenate">Concatenate</h4>

            <pre class="hljs"><code><div>total = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>] + [<span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>]<br />
                print(total)<br />
                <span class="hljs-comment"># Prints: [1, 2, 3, 4, 5, 6]</span>
            </div></code></pre>

            <h4 id="contains">Contains</h4>

            <pre class="hljs"><code><div>fruits = [<span class="hljs-string">"apple"</span>, <span class="hljs-string">"orange"</span>, <span class="hljs-string">"banana"</span>]<br />
                print(<span class="hljs-string">"banana"</span> <span class="hljs-keyword">in</span> fruits)<br />
                <span class="hljs-comment"># Prints: True</span>
            </div></code></pre>

            <h4 id="deletion">Deletion</h4>

            <pre class="hljs"><code><div>nums = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>]<br /><br />

                <span class="hljs-comment"># delete the fourth item</span><br />
                <span class="hljs-keyword">del</span> nums[<span class="hljs-number">3</span>]<br />
                print(nums)<br />
                <span class="hljs-comment"># Output: [1, 2, 3, 5, 6, 7, 8, 9]</span><br /><br />

                <span class="hljs-comment"># delete the second item up to (but not including) the fourth item</span><br />
                nums = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>]<br />
                <span class="hljs-keyword">del</span> nums[<span class="hljs-number">1</span>:<span class="hljs-number">3</span>]<br />
                print(nums)<br />
                <span class="hljs-comment"># Output: [1, 4, 5, 6, 7, 8, 9]</span><br /><br />

                <span class="hljs-comment"># delete all elements</span><br />
                nums = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>]<br />
                <span class="hljs-keyword">del</span> nums[:]<br />
                print(nums)<br />
                <span class="hljs-comment"># Output: []</span><br />
            </div></code></pre>

            <h2 id="split-a-string-into-a-list-of-words">Split a String Into a List of Words</h2>

            <p>The <code>.split()</code> method in Python is called on a string and returns a list by splitting the string based on a given <em>delimiter</em>. If no delimiter is provided, it will split the string on whitespace.</p>

            <pre class="hljs"><code><div>message = <span class="hljs-string">"hello there sam"</span><br />
                words = message.split()<br /><br />
                print(words)<br />
                <span class="hljs-comment"># Prints: ["hello", "there", "sam"]</span>
            </div></code></pre>

            <h2 id="join-a-list-of-strings-into-a-single-string">Join a List of Strings Into a Single String</h2>

            <p>The <code>.join()</code> method is called on a <strong>delimiter</strong> (what goes between all the words in the list), and takes a list of strings as input</p>

            <pre class="hljs"><code><div>list_of_words = [<span class="hljs-string">"hello"</span>, <span class="hljs-string">"there"</span>, <span class="hljs-string">"sam"</span>]<br />
                sentence = <span class="hljs-string">" "</span>.join(list_of_words)<br /><br />
                print(sentence)<br />
                <span class="hljs-comment"># Prints: "hello there sam"</span><br />
            </div></code></pre>

            <h2 id="tuples">Tuples</h2>

            <p><strong>Tuples</strong> are collections of data that are ordered and unchangeable. You can think of a tuple as a <em>List</em> with a fixed size. They are created with round brackets.</p>

            <pre class="hljs"><code><div>my_tuple = (<span class="hljs-string">"this is a tuple"</span>, <span class="hljs-number">45</span>, <span class="hljs-literal">True</span>)<br /><br />
                print(my_tuple[<span class="hljs-number">0</span>])<br />
                <span class="hljs-comment"># this is a tuple</span><br /><br />
                print(my_tuple[<span class="hljs-number">1</span>])<br />
                <span class="hljs-comment"># 45</span><br /><br />
                print(my_tuple[<span class="hljs-number">2</span>])<br />
                <span class="hljs-comment"># True</span>
            </div></code></pre>

            <p>While it's typically considered bad practice to store items of different types in a <em>List</em>, it is not a problem with Tuples. Because they have a fixed size, it's easy to keep track of which indicies store with types of data.</p>

            <p>Tuples are often used to store very small groups (like 2 or 3 items) of data. For example, you might use a tuple to store a dog's name and age.</p>

            <pre class="hljs"><code><div>dog = (<span class="hljs-string">"Fido"</span>, <span class="hljs-number">4</span>)
            </div></code></pre>

            <p><em>Note</em> There is a special case for creating single-item tuples. You must include a comma so Python knows it's a tuple and not regular parentheses.</p>

            <pre class="hljs"><code><div>dog = (<span class="hljs-string">"Fido"</span>,)
            </div></code></pre>

            <p>Here is an example of combining list and tuples:</p>

            <pre class="hljs"><code><div><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">get_heroes</span><span class="hljs-params">()</span>:</span><br />
                &nbsp;&nbsp;heroes = [<br />
                &nbsp;&nbsp;&nbsp;&nbsp;(<span class="hljs-string">"Glorfindel"</span>, <span class="hljs-number">2093</span>, <span class="hljs-literal">True</span>),<br />
                &nbsp;&nbsp;&nbsp;&nbsp;(<span class="hljs-string">"Gandalf"</span>, <span class="hljs-number">1054</span>, <span class="hljs-literal">False</span>),<br />
                &nbsp;&nbsp;&nbsp;&nbsp;(<span class="hljs-string">"Gimli"</span>, <span class="hljs-number">389</span>, <span class="hljs-literal">False</span>),<br />
                &nbsp;&nbsp;&nbsp;&nbsp;(<span class="hljs-string">"Aragorn"</span>, <span class="hljs-number">87</span>, <span class="hljs-literal">False</span>),<br />
                &nbsp;&nbsp;]<br />
                <br />
                &nbsp;&nbsp;<span class="hljs-keyword">return</span> heroes
            </div></code></pre>

            <h2 id="tuple-unpacking">Tuple Unpacking</h2>

            <p>You can easily assign the values of a tuple to variables using <em>unpacking</em>.</p>

            <pre class="hljs"><code><div>dog = (<span class="hljs-string">"Fido"</span>, <span class="hljs-number">4</span>)<br />
                dog_name, dog_age = dog<br /><br />
                print(dog_name)<br />
                <span class="hljs-comment"># Fido</span><br /><br />
                print(dog_age)<br />
                <span class="hljs-comment"># 4</span>
            </div></code></pre>

        </>
    )
}