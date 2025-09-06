import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function HashMaps() {

    const hashMapExample = `import java.util.HashMap;

public class Maps {
    public static void main(String[] args) {
        HashMap<String, Integer> employIds = new HashMap<>();

        employIds.put("Paul", 123456);
        employIds.put("Carl", 456789);
        employIds.put("Jerry", 8675309);

        System.out.println(employIds);
        // {Car=456789, Jerry=8675309, Paul=123456}

        System.out.println(employIds.get("Paul"));
        // 123456

        System.out.println(employIds.containsKey("Carly"));
        // false

        System.out.println(employIds.containsValue(8675309));
        // true

        employIds.put("Paul", 666554);
        System.out.println(employIds);
        // can replace or add

        employIds.replace("Kramer", 777889);
        System.out.println(employIds);
        // only replaces, cannot add

        employIds.putIfAbsent("Ryan", 1122337);
        System.out.println(employIds);
        // only adds, cannot replace

        employIds.remove("Ryan");
        System.out.println(employIds);

    }
}`
    return (
        <div>
            <h1>HashMaps</h1>

            <h2>HashMaps</h2>

            <p>What is a map? A key-value pair.</p>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {hashMapExample}
                </SyntaxHighlighter>
            </div>

            <p>Notice in various print statements, such as line 12, how what was added and what is being printed does not match up with the Hashmap. HashMaps do not guarantee an order.</p>

            <p>Don't confuse a <code>Map</code> with a <code>HashMap</code>! A <code>Map</code> is actually a Java interface. The <code>Map</code> interface specifies what kind of methods a real map implementation has to support. There are different types of implementations of that map interface. A <code>HashMap</code> is one kind of these interfaces.</p>
        </div>
    )
}