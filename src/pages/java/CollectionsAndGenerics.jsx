import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function CollectionsAndGenerics() {

    const simpleArray = `public class Main {
    public static void main(String[] args) {
        String[] cars = new String[3];

        cars[0] = "Camaro";
        cars[1] = "Corvette";
        cars[2] = "Tesla";

        for (int i = 0; i < cars.length; i++) {
            System.out.println(cars[i]);
        }
    }
}`

    const arraysVsArrayList = `import java.util.ArrayList;
import java.util.Arrays;

public class ArrayVsArrayList {
    public static void main(String[] args) {
        String[] friends = new String[4];

        String[] friends2 = { "Jimmy", "Johnny", "Jennifer", "Jeffery" };

        ArrayList<String> friendsArrayList = new ArrayList<>();

        ArrayList<String> friendsAgain2 = 
            new ArrayList<>(Arrays.asList("Tim", "Jim", "Jill"));

        // getting an index
        String name = friends2[1];
        friendsAgain2.get(1);

        // getting the length
        int arrLength = friends2.length; // a field
        friendsAgain2.size(); // a method

        // add an element to the end
        // can't do it with an array!
        friendsAgain2.add("Bill");

        // set an element
        friends2[0] = "Timmy";
        friendsAgain2.set(0, "Kim"); // (idx, element)

        // remove element
        // can't do it with an array!
        friendsAgain2.remove("Tim");

        // printing
        System.out.println(friends);
        System.out.println(friendsAgain2);
    }
}`

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
            <h1>Testing collections & generics foo!</h1>

            <h2>Arrays & ArrayList</h2>

            <p>An <strong>array</strong> is used to store multiple values in a single variable. In Java, arrays have a fixed size, meaning once an array's size is set they can never grow or shrink. </p>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {simpleArray}
                </SyntaxHighlighter>
            </div>

            <p>ArrayLists do not have a fixed sized and can grow or shrink automatically. Also, they cannot hold primitive data types. However, you can use wrapper type for primitives.</p>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {arraysVsArrayList}
                </SyntaxHighlighter>
            </div>

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