export default function Computing() {
    return (
        <>
            <h1>Computing</h1>

            <h2 id="scientific-notation">Scientific Notation</h2>

            <p><em>Scientific notation</em> is a way of expressing numbers that are too large or too small to conveniently write normally.</p>

            <p>You can add the letter <code>e</code> followed by a positive or negative integer to specify that you're using scientific notation.</p>

            <pre class="hljs"><code><div>print(<span class="hljs-number">16e3</span>)<br />
                <span class="hljs-comment"># prints 16000.0</span><br /><br />

                print(<span class="hljs-number">7.1e-2</span>)<br />
                <span class="hljs-comment"># prints 0.071</span>
            </div></code></pre>

            <h2 id="underscores-for-readability">Underscores for Readability</h2>

            <p>Python also allows you to represent large numbers in the decimal format using underscores as the delimiter instead of commas to make it easier to read.</p>

            <pre class="hljs"><code><div>num = <span class="hljs-number">69</span>_000
                print(num)<br />
                <span class="hljs-comment"># 69000</span><br /><br />

                num2 = <span class="hljs-number">789</span>_012_345<span class="hljs-number">.67</span><br />
                print(num2)<br />
                <span class="hljs-comment"># 789012345.67</span>
            </div></code></pre>

            <h2 id="binary-in-python">Binary in Python</h2>

            <p>You can write an integer in Python using binary syntax using the <code>0b</code> prefix:</p>

            <pre class="hljs"><code><div>print(<span class="hljs-number">0b0001</span>)<br />
                <span class="hljs-comment"># Prints 1</span><br /><br />

                print(<span class="hljs-number">0b0101</span>)<br />
                <span class="hljs-comment"># Prints 5</span>
            </div></code></pre>

            <p><em>Note</em> leading <code>0</code>s are often added for visual consistency but do not change the value of a binary number.</p>

            <h2 id="bitwise-codecode-operator">Bitwise <code>&amp;</code> Operator</h2>

            <p>Similar to logical operators, but instead of operating on boolean values, bitwise operators apply the same logic to all the bits in a value by column. Example, the numbers 5 and 7 represented in binary would result in 5.</p>

            <div class="center">
                <pre class="hljs"><code><div>  0101<br />
                    &amp; 0111<br />
                    ------<br />
                    0101<br />
                </div></code></pre>
            </div>

            <p>A $ 1 $ in binary is the same as <code>True</code>, while $ 0 $ is <code>False</code>. So really a bitwise operation is just a bunch of logical operations that are completed in tandem by column.</p>

            <div class="center">
                <pre class="hljs"><code><div>0 &amp; 0 = 0<br />
                    1 &amp; 1 = 1<br />
                    1 &amp; 0 = 0<br />
                </div></code></pre>
            </div>

            <p>The binary <code>&amp;</code> (ampersand) will always produce the same or less amount of $1 $s. It is also referred to as masking or filtering.</p>

            <h2 id="bitwise-codecode-operator">Bitwise <code>|</code> Operator</h2>

            <p>The bitwise <em>or</em> operator is similar to the bitwise <em>and</em> operator in that it works on binary rather than boolean values. However, the bitwise <em>or</em> operator <em>or</em>s the bits together.</p>

            <h2 id="binary-notation">Binary Notation</h2>

            <p>Remember that when writing a number in binary, the prefix <code>0b</code> is used to indicate that what follows is a binary number. <code>0b10</code> is two in binary, but <code>10</code> without the <code>0b</code> prefix is simply ten.</p>

            <pre class="hljs"><code><div><span class="hljs-number">0b0101</span> &amp; <span class="hljs-number">0b0111</span><br />
                <span class="hljs-comment"># equals 5</span><br /><br />

                binary_five = <span class="hljs-number">0b0101</span><br />
                binary_seven = <span class="hljs-number">0b0111</span><br />
                binary_five &amp; binary_seven<br />
                <span class="hljs-comment"># equals 5</span>
            </div></code></pre>

            <h2 id="convert-binary">Convert Binary</h2>

            <pre class="hljs"><code><div><span class="hljs-comment"># this is a binary string</span><br />
                binary_string = <span class="hljs-string">"100"</span><br /><br />

                <span class="hljs-comment"># convert binary string to integer</span><br />
                num = int(binary_string, <span class="hljs-number">2</span>)
            </div></code></pre>

            <p>The first parameter in <code>int()</code> has to be a string of a binary number.</p>

        </>
    )
}