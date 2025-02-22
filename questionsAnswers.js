const cardsData = [

    // Short Answer
    {
        // #1
        question: 'Explain the difference between an object and a class in Java. Provide examples for better understanding.',
        answer: 'A class is the blueprint for an object’s behavior and properties, while an object is an instance of a class. \nAn example would be if I had a class named Dog and an object named Sparky.  The class (Dog) defines properties of color and hasFourLegs, and the object (Sparky) values for those properties are “Yellow” and true.'
    },
    {
        // #2
        question: 'Describe the concept of inheritance in Java. Provide an example of how inheritance can be used to model a real-world scenario.',
        answer: 'Allows a class to inherit the properties and behaviors of another class, which helps with creating and organizing reusable code. In a real world model, you could implement “Animal” as a parent class, and “Dog” as a child class.'
    },
    {
        // #3
        question: 'What is polymorphism in Java? How is it achieved through inheritance? Provide an example illustrating polymorphism.',
        answer: `Same object behaving differently in different situations. This is achieved through inheritance by an object referencing another object that is related to it (is-a relationship). For example, if Holiday is the superclass of Christmas, then a Holiday reference could be used to refer to a Christmas object.\nHoliday day = new Christmas();`
    },
    {
        // #4
        question: 'Discuss the importance of encapsulation in class design. Explain how encapsulation can improve the robustness of a Java class.',
        answer: 'Encapsulation involves restricting access to the state of an object and requiring all interactions to occur through well-defined methods. Encapsulation is achieved through the use of access modifiers (private, public, protected) to control the visibility of class members.'
    },
    {
        // #5
        question: 'Differentiate between primitive types and reference types in Java. Give examples of each and explain when to use them. ',
        answer: 'Primitive types contain the value itself, but a reference type contains the address of the object in memory. Primitive types include int, float, char, or other data types that are not objects. Reference types represent objects. You use primitive types with simple data types that do not require additional functionalities. You use reference types when you need to create complex data structures or use methods on that data. '
    },
    {
        // #6
        question: 'What is exception handling in Java? Explain the difference between checked and unchecked exceptions, providing examples for each.',
        answer: 'The way errors and situations are handled in a program. Checked exceptions are checked at compile time while unchecked exceptions happen at runtime. Checked exceptions include: illegalAccessException, NoSuchMethodException, ClassNotFoundException. Unchecked Exceptions include: ArithmeticException, IndexOutOfBoundsException, NullPointerException.'
    },
    {
        // #7
        question: 'Describe the role of the static keyword in Java. Provide examples of both static variables and static methods.',
        answer: `Used to declare variables and methods that belong to the class rather than to instances of the class. A good use case would be for a class called Math: <br><br>
        static double pi = 3.14; <br><br>
        
        static void add(double num1, double num2) { <br>
            &nbsp;&nbsp;System.out.println(num1 + num2); <br>
        } <br><br>
        
        And then use them in your main method: <br><br>
        
        double areaOne = Math.pi * 5; <br>
        double areaTwo = Math.pi * 3; <br>
        Math.add(areaOne, areaTwo); <br>
        `
    },
    {
        // #8
        question: 'Define what UML diagrams are and discuss the purpose of two UML diagrams commonly used in software design.',
        answer: 'Unified Modeling Language diagrams are a visual representation of software systems and processes. One example is a class diagram: displays attributes, methods, and relationships between classes, Another is use case diagram: illustrates interactions between actors and use cases. '
    },
    {
        // #9
        question: 'Explain the principles of good class design. Discuss the significance of refactoring and the "Five C\'s" in class design.',
        answer: 'Refactoring is the process of restructuring code without changing its behavior. It is important for maintainability, readability, and performance. The five C’s of class design include cohesion (how close the classes are related to each other), coupling (the degree of dependencies between classes, low coupling is better), consistency (same convention/style for reading/maintainability), completeness (all features meet the requirements and are used effectively), and clarity (clear, understandable code).'
    },
    {
        // #10.0
        question: 'What are the different class relationships in object-oriented design?',
        answer: 'Association, inheritance, dependency, and aggregation'
    },
    {
        // #10.1
        question: 'Describe association, add an example.',
        answer: 'Association represents a relationship between classes where the objects of one class are connected to objects of another class. Example: Student class associates with a "Course class.'
    },
    {
        // #10.2
        question: 'Describe inheritance, add an example.',
        answer: 'Inheritance is a relationship where one class inherits attribute and behaviors from another class. Example: a parent class called Shape and a child class called Cirlce.'
    },
    {
        // #10.3
        question: 'Describe dependency, add an example.',
        answer: 'Dependency occurs when one class relies on another class. Example, a Car class may have a dependency on an Engine class.'
    },
    {
        // #10.4
        question: 'Describe aggregation, add an example',
        answer: 'Aggregation is a form of association representing a "whole-art" relationship, where a whole class contains parts, but the parts can exist independently of the whole. Example: a Library class may be composed of Book classes. Books can exist independently but they are part of the Library\'s collection.'
    },
    {
        // #11
        question: 'What is exception propagation in Java? Describe how exceptions are propagated through method calls. Provide examples. ',
        answer: `Exception propagation refers to the process by which an exception that occurs in a method is transferred, or "propagated," up the call stack to the calling method. This continues until an exception handler is found or until the exception reaches the top level of the program, resulting in termination.
        
        <code> <br>
        public static int getLastIndex(int[] nums) { <br>
            &nbsp; &nbsp;return nums[nums.length]	// out of bounds, should be nums.length - 1 <br>
        } <br><br>
        
        // Inside the main method: <br>
        int[] nums = {1,2,3}; <br>
        int num = getLastIndex(nums); <br>
        <code> <br>
        When running the getLastIndex method, we get an error that transfers (propagates) up through the call stack, resulting in an error.
        `
    },
    {
        // #12
        question: 'Explain what Design Patterns are and why they are important in software development. ',
        answer: 'Design patterns are general, reusable solutions to common problems that occur during software design. They act as templates that provide a standard way to solve particular design problems in a way that promotes code reuse, flexibility, and maintainability. Design patterns capture best practices and proven solutions to recurring challenges in software development.'
    },
    {
        // #13
        question: 'List and briefly describe the three main categories of Design Patterns.',
        answer: 'Creational, structural, and behavioral patterns. Creational patterns focus on the process of object creation. They provide ways for creating objects in a manner suitable to the situation. Structural patterns are concerned with passing one object to another. Behavioral patterns focus on the interaction and communication between objects. They combine two different objects without changing them.'
    },
    {
        // #14
        question: 'Explain the Singleton Design Pattern. When and why is it used in software design? ',
        answer: 'The Singleton Design Pattern is a creational pattern that makes a class have only one instance and provides a global point of access to that instance.You use it when you only need one instance, and to prevent more from being created. '
    },
    {
        // #15
        question: 'Explain the Adapter Design Pattern. When and why is it used in software design?',
        answer: 'The Adapter Design Pattern is a structural design pattern that allows objects with incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces, making them compatible without altering their source code. (Example, a phone adapter)'
    },



    // Code Snippets
    {
        // #1
        question: 'Define a class called "Person" with two instance variables, "name" (a String) and "age" (an int). Create an object of this class with the name "person1" and set its name to "Alice" and age to 25',
        answer: `
        <code>
        Class Person {<br>
            &nbsp;&nbsp;String name; <br>
            &nbsp;&nbsp;int age; <br><br>
        
            &nbsp;&nbsp;public static void main(String[] args) { <br>
                &nbsp;&nbsp;&nbsp;&nbsp;Person person1 = new Person(); <br>
                &nbsp;&nbsp;&nbsp;&nbsp;person1.name = "Alice"; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;person1.age = 25; <br>
                &nbsp;&nbsp;} <br>
        }
        </code>
        `
    },
    {
        // #2
        question: 'Declare an integer variable "x" and create an array of integers "arr" with two elements. Assign the value 10 to "x" and assign the array "arr" to another array variable "arr2." ',
        answer: `
        <code> 
        int x; <br>
        int[] arr = new int[2]; <br><br>
        
        x = 10; <br>
        int[] arr2 = arr; <br>
        </code>`
    },
    {
        // #3
        question: 'Create a class "Animal" with a method "makeSound" that prints "Animal sound." Create a subclass "Dog" that inherits from "Animal" and overrides the "makeSound" method to print "Bark." ',
        answer: `
        <code>
        class Animal { <br>
            &nbsp;public void makeSound() { <br>
                &nbsp;&nbsp;System.out.println("Animal sound"); <br>
                &nbsp;} <br>
        } <br><br>
        
        class Dog extends Animal { <br>
            &nbsp;public void makeSound() { <br>
                &nbsp;&nbsp;System.out.println("Bark"); <br>
                &nbsp;} <br>
        } <br>
        </code>`
    },
    {
        // #4
        question: 'Declare an ArrayList of integers named "numbers." Add three integer values (1, 2, 3) to the ArrayList using the "add" method.',
        answer: `
        <code> 
        ArrayList<Integer> numbers = new ArrayList<>(); <br>
        numbers.add(1); <br>
        numbers.add(2); <br>
        numbers.add(3); <br>
        </code>`
    },
    {
        // #5
        question: 'Create an interface "Comparable" with a method "compareTo" that takes an object of the same type as a parameter and returns an integer. Implement the "Comparable" interface in a class "Person" to compare two persons based on their ages.',
        answer: `
        <code> <br>
        // Person class implementing Comparable interface <br>
        class Person implements Comparable<Person> { <br>
            &nbsp;&nbsp;private String name; <br>
            &nbsp;&nbsp;private int age; <br><br>

            &nbsp;&nbsp;public Person(String name, int age) { <br>
                &nbsp;&nbsp;&nbsp;&nbsp;this.name = name; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;this.age = age; <br>
                &nbsp;&nbsp;} <br><br>

                &nbsp;&nbsp;public int getAge() { <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;return age; <br>
                    &nbsp;&nbsp;} <br><br>

            &nbsp;&nbsp;// compareTo method compares persons based on their ages <br>
            &nbsp;&nbsp;public int compareTo(Person other) { <br>
                &nbsp;&nbsp;&nbsp;&nbsp;return Integer.compare(this.age, other.age); <br>
            &nbsp;&nbsp;} <br>
        } <br><br>

        public class ComparableExample { <br>
            &nbsp;&nbsp;public static void main(String[] args) { <br>
                &nbsp;&nbsp;&nbsp;&nbsp;Person person1 = new Person("Alice", 25); <br>
                &nbsp;&nbsp;&nbsp;&nbsp;Person person2 = new Person("Bob", 30);<br><br>

                &nbsp;&nbsp;&nbsp;&nbsp;int result = person1.compareTo(person2); <br>
            &nbsp;&nbsp;} <br>
        }
        </code>`
    },
    {
        // #6
        question: 'Create a class "Student" with attributes name and age. Instantiate two student objects and display their information.',
        answer: `
        <code>
        class Student { <br>
            &nbsp;&nbsp;String name; <br>
            &nbsp;&nbsp;int age; <br><br>

            &nbsp;&nbsp;public Student(String name, int age) { <br>
                &nbsp;&nbsp;&nbsp;&nbsp;this.name = name; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;this.age = age; <br>
            &nbsp;&nbsp;} <br><br>

            &nbsp;&nbsp;public String toString() { <br>
                &nbsp;&nbsp;&nbsp;&nbsp;String str = "Name: " + name; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;str += "\nAge: " + age; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;str += "\n"; <br><br>

                &nbsp;&nbsp;&nbsp;&nbsp;return str <br>
            &nbsp;&nbsp;} <br><br>

            &nbsp;&nbsp;public static void main(String[] args) { <br>
                &nbsp;&nbsp;&nbsp;&nbsp;Student timmy = new Student("Timmy", 17); <br>
                &nbsp;&nbsp;&nbsp;&nbsp;Student tommy = new Student("Tommy", 18); <br><br>

                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(timmy); <br>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(tommy); <br>
            &nbsp;&nbsp;} <br>
        }
        </code>`
    },
    {
        // # 8
        question: 'Use case: model an order food online system. ',
        answer: `
        User Registration: New users add name, contact information, and delivery address. <br>
        Browse Menu: Users browse through the online menu of restaurants, displaying details like price, ingredients, and user ratings. <br>
        Search and Filters: Users finding specific food, dietary preferences, or restaurants within a certain distance. <br>
        Place Order: Users select items and add them to their virtual shopping cart. They review the order, make modifications, and proceed to place the order. <br>
        Customization: Users have the option to customize their orders, specifying preferences, special instructions, or additional toppings as needed.<br>
        Payment Processing: Users provide payment details securely through the online system. The system processes the payment. <br>
        Real-time Tracking: Users receive real-time updates on the status of their order, confirmation and estimated delivery time. <br>
        Notifications: Users receive notifications via email or text, informing them about the order confirmation, payment success, and the delivery status. <br> 
        Order History: Users can view their order history, allowing them to reorder favorite items or track spending patterns. <br>
        Feedback and Ratings: After delivery, users provide feedback and ratings for both the food and delivery service. <br>
        `
    },

    // Fill in the blank
    {
        // #1
        question: 'In Java, ______________ variables and methods belong to the class itself, rather than to individual instances of the class. ',
        answer: 'Static'
    },
    {
        // #2
        question: 'To access a static variable or method, you use the _____________ notation.',
        answer: 'class name'
    },
    {
        // #3
        question: 'Static variables are also known as _____________ and are shared among all instances of a class.',
        answer: 'Class variables'
    },
    {
        // #4
        question: 'In class relationships, ______________ represents the "is-a" relationship between classes, where one class inherits from another.',
        answer: 'Inheritance'
    },
    {
        // #5
        question: '______________ represents a "has-a" relationship, where one class is composed of another class as part of its attributes.',
        answer: 'Aggregation'
    },
    {
        // #6
        question: ' _______________ represents a relationship between classes where one class is related to another, but it may not necessarily imply ownership or a specific dependency.',
        answer: 'Association'
    },
    {
        // #7
        question: 'UML stands for Unified Modeling Language, which is used to create ___________ that visually represent the structure and behavior of a system.',
        answer: 'Diagrams'
    },
    {
        // #8
        question: 'In a UML class diagram, an association between two classes is typically represented by a _________ connecting the classes.',
        answer: 'Line'
    },
    {
        // #9
        question: 'A UML ______________is used to represent the interactions between a system and its external actors.',
        answer: 'Use case diagram'
    },
    {
        // #10
        question: 'An abstract class in Java can have ____________ methods.',
        answer: 'Abstract'
    },
    {
        // #11
        question: 'In Java, you can declare an abstract class using the ________ keyword.',
        answer: 'Abstract'
    },
    {
        // #12
        question: 'An interface in Java can declare ____________ methods.',
        answer: 'Abstract'
    },
    {
        // #13
        question: 'To implement an interface in a class, you use the ________ keyword.',
        answer: 'Implements'
    },
    {
        // #14
        question: 'The ____________ method is used to compare objects in Java and is often implemented in classes that want to provide natural ordering.  ',
        answer: 'compareTo'
    },
    {
        // #15
        question: 'An interface can extend multiple interfaces in Java using the ________ keyword.',
        answer: 'Extends'
    },
    {
        // #16
        question: 'An abstract class can have both abstract methods and ________ methods.',
        answer: 'Concrete'
    },
    {
        // #17
        question: 'Java supports ________ inheritance for classes, but ________ inheritance for interfaces.',
        answer: 'Single, multiple '
    },
    {
        // #18
        question: 'Polymorphism via interfaces allows objects of different classes to be treated as objects of a common ________ type.',
        answer: 'interface'
    },
    {
        // #19
        question: '________ is one of the fundamental principles of object-oriented programming, where the internal details of an object are hidden from the outside world.',
        answer: 'Encapsulation '
    },
    {
        // #20
        question: 'Encapsulation helps in achieving data ________ by allowing controlled access to an object\'s attributes.',
        answer: 'Security'
    },
    {
        // #21
        question: '________ is the process of improving the existing code without changing its external behavior.',
        answer: 'Refactoring '
    },
    {
        // #22
        question: 'One of the benefits of refactoring is to enhance ________ by making the code easier to understand and maintain.',
        answer: 'Readability'
    },
    {
        // #23
        question: 'The Five C\'s of class design are: Cohesion, Coupling, ________, Consistency, and Completeness.',
        answer: 'Compatibility'
    },
    {
        // #24
        question: '________ refers to the degree to which the responsibilities of a class are related and focused.',
        answer: 'Cohesion '
    },
    {
        // #25
        question: '________ refers to the level of dependence between classes or modules in a system.',
        answer: 'Coupling '
    },
    {
        // #26
        question: 'In class design, ________ ensures that a class\'s methods and attributes are logically organized and follow a naming convention.',
        answer: 'Consistency'
    },
    {
        // #27
        question: 'A ________ class is one that provides all the necessary methods and attributes to fulfill its intended purpose.',
        answer: 'Complete'
    },


    // Multiple Choice Questions
    {
        // #1
        question: 'What is a class in Java?',
        answer: 'a blueprint for creating objects'
    },
    {
        // #2
        question: 'Which keyword is used to create an object in Java?',
        answer: 'new'
    },
    {
        // #3
        question: 'Which of the following is a primitive data type in Java? String, int, ArrayList, Object',
        answer: 'int'
    },
    {
        // #4
        question: 'Reference types n Java are used to store: ',
        answer: 'references to objects'
    },
    {
        // #5
        question: 'Inheritance allows a class to inherit properties and methods from...',
        answer: 'its parent class'
    },
    {
        // #6
        question: 'Which keyword is used to establish inheritance in Java?',
        answer: 'extends'
    },
    {
        // #7
        question: 'Method overriding in Java is based on...',
        answer: 'dynamic binding'
    },
    {
        // #8
        question: 'In method overriding, a subclass provides a specific implementation for a method that is already defined in its ____________ class.',
        answer: 'Answer: b) Parent '
    },
    {
        // #9
        question: 'Polymorphism allows objects of different classes to be treated as objects of a common __________ class.',
        answer: 'Answer: b) Superclass '
    },
    {
        // #10
        question: '10.  Which principle of object-oriented programming is closely related to polymorphism?',
        answer: 'Answer: b) Inheritance '
    },
    {
        // #11
        question: '11.  What is the main advantage of using generic classes like ArrayList<T> in Java?',
        answer: ' Answer: b) They provide type safety at compile-time. '
    },
    {
        // #12
        question: ' Which symbol is used to specify a generic type parameter when declaring an ArrayList?',
        answer: 'Answer: a) <>'
    },
    {
        // #13
        question: 'What is the first step in the Object-Oriented Design Process?',
        answer: 'Answer: B) Identifying classes and responsibilities'
    },
    {
        // #14
        question: 'What is the purpose of Use Cases in the design process?',
        answer: 'Answer: C) To describe interactions between the system and users'
    },
    {
        // #15
        question: 'What does CRC stand for in CRC Cards?',
        answer: 'Answer: A) Class, Responsibility, and Collaboration'
    },
    {
        // #16
        question: 'Which diagram is used to show the dynamic interactions between objects over time?',
        answer: 'Answer: C) Sequence Diagram'
    },
    {
        // #17
        question: 'In UML Class Diagrams, what symbol represents a class?',
        answer: 'Answer: B) Rectangle'
    },
    {
        // #18
        question: 'State Diagrams are typically used to model:',
        answer: 'Answer: C) Dynamic behavior of objects'
    },
    {
        // #19
        question: 'What is the purpose of identifying classes and responsibilities in the design process?',
        answer: 'Answer: D) To define the building blocks of the system'
    },
    {
        // #20
        question: 'In the context of Object-Oriented Design, what does "Relationships Between Classes" refer to?',
        answer: 'Answer: B) How classes interact with each other'
    }

]


export default cardsData