# Current layout: All three levels of headers - not including review section, last updated 8-18-26

- Introduction to Python
    - What is Code?
- Basics
    - Declaring a variable
    - How to print
    - Printing a Line Break
    - Escape characters in strings
    - f-strings
    - Dynamic Typing
    - Integer type
    - Float type
        - Underscore for readability
    - None type
- Control Flow
    - The if-else statement
    - Multiple if statements
    - The and statement
    - The or statement
    - The for loop
        - continue
    - The while loop
- Functions
    - The return statement
    - Order of functions
    - None Return
    - Parameters vs Arguments
    - Default values
- Type Hints
    - Basic types
    - Function parameters
    - Return types
    - List and set hints
    - Dictionary hints
    - Tuple hints
    - Nested types
    - Optional values
- Recursion
    - Single branch recursion
        - Why this is difficult to do
        - Test your understanding
        - Single branch time and space complexity
    - Recursion and iteration
    - Multi-branch recursion
        - Multi-branch time and space complexity
    - Common shapes of recursion
    - How low can you go
    - Have a little faith
    - Recursion limits
    - That's a lot of repeated work
- Backtracking
    - What is backtracking?
- Mutable default arguments
    - Why?
    - What the memory looks like
- Math 101
    - Exponent Operator
    - Remainder in Programming
    - Floor division operator
    - Rounding Numerical Values
    - Finding absolute values
    - Max
    - Converting values into an integer
    - Convert integer to a float
    - Convert a number to a string
    - Boolean conversion
- Scope
    - Weird python scope issue
- Testing & Debugging
    - Unit Tests
    - Stack Trace
- Errors & Exceptions
    - Syntax Errors
    - Exceptions
    - Raise an exception
    - Different types of exceptions
    - Don't catch your own exceptions
    - Alias Exception Messages
    - Raising exceptions
    - Bugs vs Errors
- Computing
    - Scientific Notation
    - Binary in Python
    - Bitwise & Operator
    - Bitwise | Operator
    - Binary Notation
    - Convert Binary
- Strings
    - Quick methods reference sheet
    - Quick tricks
- Lists
    - Quick methods reference
    - Quick functions reference
    - What's a list?
    - List Operations
        - With Conditionals
        - Contains
        - Concatenate
    - List Looping
    - List Append
    - List Pop
    - Find the index of an element
    - Slicing Lists
        - Reverse a list
    - Deletion
    - Sort a list
        - sort
        - sorted
        - key parameter
    - List Functions
        - Math
    - List Methods
        - Split a String Into a List of Words
        - Join a List of Strings Into a Single String
- List Comprehension
    - Even more fun
- Tuples
    - What's a tuple?
    - Go ahead, mix those data types
    - Tuple Unpacking
- Sets
    - Set operations
    - Set subtraction    
- Dictionaries
    - Operations
        - Check if key exist
    - Looping
    - pop() & del
    - values()
    - Dictionary unpacking
- Regular expressions
    - Basic Patterns
    - Basic rules
        - Leftmost & Largest
    - Square brackets
- Built-in Functions
    - sum()
        - sum() vs iterating
    - isinstance()
        - Use cases
        - Under the hood
    - zip()
        - Zip Dict
- Ram 101
    - Conclusion
- Algorithms: Problem Solving Patterns
- Two Pointers & Sliding Window
    - Core concept
    - Framework
    - Two-Pointer Technique in action

# How I want the layout to look

## Basics
- Intro
    - What is Python?
    - History and uses
    - Setting up the development environment (IDLE, VS Code, Anaconda, et## c.)
- Basics
    - Your first Python program: Hello World
    - Structure of a Python script
    - Variables and data types
    - Constants
    - Operators and expressions
    - Input and output
    - Comments
    - differences between versions
## Control Flow
- Conditional statements (if, elif, else)
- Loops (for, while)
- Loop control statements (break, continue, pass)
## Functions
- Parameters vs arguments
- Positional and keyword arguments
- Default arguments
- *args and **kwargs
- Lambda functions
- First-class functions
- Closures
- Mutable default arguments (gotcha)
## Math 101
## Scope
## Testing & Debugging
## Computing
## Strings
## Lists
## List Comprehension
## Tuples
## Sets
## Dictionaries
## Regular Expressions
## Built-In Functions
- len()
- type()
- range()
- enumerate()
- zip()
- sorted()
- sum()
- any() / all()
## RAM 101
## Algorithms: Problem-Solving Patterns


I don't know where I am putting this stuff yet:

## 4. Functions

- Defining and calling functions
- Function parameters and return values
- Default and keyword arguments

*Maybe another function section?* (I don't even know this shit for python yet)
- Variable-length arguments (*args, **kwargs)
- Lambda functions
- Recursion

## 5. Data Structures

- Lists
- Tuples
- Sets
- Dictionaries
- List comprehensions
- Dictionary and set comprehensions

## 6. Object-Oriented Programming

- Classes and objects
- Attributes and methods
- Constructors (__init__)
- Inheritance
- Polymorphism
- Encapsulation
- Special methods (__str__, __repr__, et## c.)
- Static and class methods

## 7. Modules and Packages

- Importing modules
- Creating modules
- Standard library overview
- Virtual environments and pip

## 8. Exception Handling

- try-except-finally
- Raising exceptions
- Custom exceptions

## 9. File I/O

- Reading and writing files
- Working with CSV, JSON, and XML
- Context managers (with statement)

## 10. Advanced Topics

- Iterators and generators
- Decorators
- Context managers
- Regular expressions
- Type hints and annotations

## 11. Functional Programming

- Map, filter, reduce
- Lambda expressions
- List comprehensions

## 12. Testing and Debugging

- Unit testing (unittest, pytest)
- Debugging tools and techniques

## 13. Best Practices and Design Patterns

- Coding conventions (PEP 8)
- Common design patterns (Singleton, Factory, e## tc.)

## 14. Popular Libraries and Frameworks

- NumPy, pandas (data analysis)
- Matplotlib, seaborn (visualization)
- Requests (HTTP)
- Flask, Django (web development)
- Pytest (testing)
- Others as needed

## 15. Asynchronous Programming

- Asyncio basics
- Coroutines and tasks

## 16. Deployment and Packaging

- Packaging Python projects
- Distributing with pip
- Virtual environments

## 17. Interoperability

- Calling C/C++ code
- Using Python with other languages

## 18. Miscellaneous

- Working with dates and times
- Logging
- Multithreading and multiprocessing


---

Things to add for HackerRank practice

- data structures: a strong understanding of Python's built-in data types like strings, lists, dictionaries, sets, and tuples
- built-in functions: <code>map</code>, <code>filter</code>, <code>zip</code>, <code>enumerate</code>, and <code>lambda</code>
- standard libraries: <code>collections</code>, <code>Counter</code>, <code>itertools</code>, and <code>datetime</code>,
- OOP: when to use classes and how to initialize and modify class attributes

---

The matrix rotation quesiton I got from HackerRank

```python
def print_matrix(m):
    for row in m:
        print(row)
    print('- - - - -')

matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ]

# rotate 90 degrees clockwise
matrix_90 = zip(*matrix[::-1])

# rotate 180 degrees clockwise
matrix_180 = [row[::-1] for row in matrix[::-1]]

# rotate 270 degrees clockwise
matrix_270 = [list(row) for row in zip(*matrix)][::-1]

# flip vertical
matrix_v_flip = matrix[::-1]

# flip horizontal
matrix_h_flip = [row[::-1] for row in matrix]
    
print_matrix(matrix)
print_matrix(matrix_90)
print_matrix(matrix_180)
print_matrix(matrix_270)
# print_matrix(matrix_v_flip)
# print_matrix(matrix_h_flip)
```

---

What does the map function do?
What are lambda's?