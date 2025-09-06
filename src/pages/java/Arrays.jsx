import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Arrays() {

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

    return (
        <div>
            <h1>Arrays</h1>

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
        </div>
    )
}