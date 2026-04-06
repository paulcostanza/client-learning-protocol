## 1. Introduction

- What is Python?
- History and uses
- Setting up the development environment (IDLE, VS Code, Anaconda, et## c.)

## 2. Python Basics

- Your first Python program: Hello World
- Structure of a Python script
- Variables and data types
- Constants
- Operators and expressions
- Input and output
- Comments

## 2.5 Math 101

- Basics Maths

## 3. Control Flow

- Conditional statements (if, elif, else)
- Loops (for, while)
- Loop control statements (break, continue, pass)

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