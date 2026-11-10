import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function ClassesAndObjects() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const dogClass = `class Dog:
    def __init__(self, name):
        self.name = name
 
    def bark(self):
        print(f"{self.name} says Woof!")
 
buddy = Dog("Buddy")
buddy.bark()`

    const playerClass = `class Player:
    def __init__(self, name, score):
        self.name = name
        self.score = score`

    const callPlayerClass = `hero = Player("Alex", 100)`

    const bookClass = `class Book:
    def __init__(self, title):
        self.title = title
 
my_book = Book("The Anarchist Cookbook")
print(my_book.title)   # The Anarchist Cookbook
`

    const listClass = `class list:
    def __init__(self, items):
        # Memory allocation happens here to store your items
        self.data = items  
        
    def append(self, new_item):
        # 1. Finds 'self.data' in memory
        # 2. Sticks 'new_item' at the end of it
        pass 

    def sort(self):
        # 1. Rearranges 'self.data' in place
        pass
        
    ...`

    const rectangleClass = `class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
 
    def area(self):
        return self.width * self.height
 
rect = Rectangle(4, 5)
result = rect.area()
print(result)   # 20`

    const characterClass = `class Character:
    def __init__(self, name, health):
        self.name = name
        self.health = health
 
hero = Character("Aria", 100)
scout = Character("Blaze", 80)
 
hero.health = 70
print(hero.health)    # 70
print(scout.health)   # 80`

    const playlistClass = `class Playlist:
    def __init__(self, name):
        self.name = name
        self.songs = []  # Our internal data store

    def add_song(self, song_title):
        self.songs.append(song_title)

    # 1. The "Print" Hook
    def __str__(self):
        return f"Playlist: {self.name} ({len(self.songs)} songs)"

    # 2. The "Length" Hook
    def __len__(self):
        return len(self.songs)

    # 3. The "Square Bracket / Indexing" Hook
    def __getitem__(self, index):
        return self.songs[index]`

    const callingPlaylistClass = `# Create the instance
my_mix = Playlist("90s Hits")
my_mix.add_song("Smells Like Teen Spirit")
my_mix.add_song("Black Hole Sun")

# --- THE HOOKS IN ACTION ---

# 1. Printing the object
print(my_mix)  
# What you see: Playlist: 90s Hits (2 songs)
# What Python ran: Playlist.__str__(my_mix)

# 2. Getting the length
print(len(my_mix))  
# What you see: 2
# What Python ran: Playlist.__len__(my_mix)

# 3. Grabbing an item by index (Just like an array!)
print(my_mix[0])  
# What you see: Smells Like Teen Spirit
# What Python ran: Playlist.__getitem__(my_mix, 0)
`

    const builderAndDecorator = `python
# What you write:
acct = BankAccount("Alice", 100)

# What Python executes behind the scenes:
# Step 1: Allocate raw memory space
acct = BankAccount.__new__(BankAccount) 

# Step 2: Fill that memory space with data
BankAccount.__init__(acct, "Alice", 100)`

    const bankAccountInit = `def __init__(self, owner, balance):
    self.owner = owner
    self.balance = balance`

    const bankAccountInitInMemory = `.-------------------------------.
|  (OS MANAGED RAM)             |
|                               |
|   ADDRESS: 0x7f01 (Empty Slot)|
|                               |
'-------------------------------'
                |
                |
                V
acct = BankAccount.__new__(BankAccount)
                |
                V
.---------------------------------------.
| Raw Object (Self) at 0x7f01           |
|---------------------------------------|
|  [Empty]                              |
'---------------------------------------'
                |
                |
                V
BankAccount.__init__(acct, "Alice", 100)
                |
                |
                V
.---------------------------------------.
|      def __init__(self, owner, ...):  |
| (A)      self.owner = owner           |
| (B)      self.balance = balance       |
'---------------------------------------'
            |                |
            | (A)            | (B)
            V                V
        .--------.        .--------.
        | "Alice"|        |  100   |
        '--------'        '--------'
        (String          (Integer
        Object           Object
        in RAM)          in RAM)
            |                |
            V                V
.---------------------------------------.
| Raw Object (Self) at 0x7f01           |
|---------------------------------------|
|  __dict__ = {                         |
|    "owner":   [POINTER TO "Alice"],<--|
|    "balance": [POINTER TO 100]    <---|
|  }                                    |
'---------------------------------------'`

    return (
        <div className="container">
            <h1>Classes & Objects</h1>

            <p>We often need many things that share a similar shape: every dog has a name and can bark, every user has an email and can log in. Rather than rebuild that shape by hand each time, we define it once as a class, then stamp out as many objects from it as we want.</p>

            <p>A <code>class</code> is the blueprint. An <code>object</code>, also called an <em>instance</em>, is an entity built from an object with its own data. Here is a full class. Do not worry about every line yet, just notice the shape:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {dogClass}
                </SyntaxHighlighter>
            </div>

            <p><code>Dog</code> is the blueprint. Calling it like a function, <code>Dog("Buddy")</code>, builds one instance and stores it in the variable <code>buddy</code>. Then <code>buddy.bark()</code> makes that specific dog act, using its own name.</p>

            <p>The <code>__init__</code> line is how a class sets up each new object's data.</p>

            <blockquote>
                <p>A class is a blueprint, and we create an instance by calling the class like a function.</p>
            </blockquote>

            <h2><code>__init__</code></h2>

            <p>An empty class cannot do much. We need a way to set up each new object as it is created. Python calls <code>__init__</code> automatically whenever we make an instance. Think of it as the setup step:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {playerClass}
                </SyntaxHighlighter>
            </div>

            <p>The first parameter is always <code>self</code>, which refers to the new object being built. The rest are values we pass in when we call <code>Player(...)</code>:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {callPlayerClass}
                </SyntaxHighlighter>
            </div>

            <p>After that line runs, <code>hero.name</code> is <code>"Alex"</code> and <code>hero.score</code> is <code>100</code>.</p>

            <h2>Instance attributes</h2>

            <p>Writing <code>self.name = name</code> inside <code>__init__</code> stores data on the object itself. Each instance gets its own copy, and from outside the class we read those values with dot notation:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {bookClass}
                </SyntaxHighlighter>
            </div>

            <p><code>my_book.title</code> reaches into that one book object and returns its title attribute. If we forget to assign a value on <code>self</code>, the attribute never exists, and Python raises an error the moment we try to read it.</p>

            <h2>Instance methods</h2>

            <p><strong>Methods</strong> are functions that belong to a specific object or data type. You have seen python's built-in functions like <code>print()</code> and <code>len()</code> that can be called on their own. A method differs because it is tied directly to a piece of data, such as a string, dictionary, list, etc., and acts upon it.</p>

            <p>Ever wonder how methods such as <code>.append()</code> for any list you create, or <code>.lower()</code> will lowercase any string you make up will just magically work? Well behind the scenes, <em>everything</em> in python is powered by a class. Even a simple list like <code>nums = [1, 2]</code> is secretly translated into a formal object-oriented blueprint.</p>

            <p>When you create a basic data type, python initializes it using a built-in class. If you could peek at python's source code within your program (which is written in the C programming language btw) the blueprint for a simplified list class looks conceptually like this:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {listClass}
                </SyntaxHighlighter>
            </div>

            <p>Because of this blueprint, our example actually gets interpreted as <code>nums = list([1, 2])</code></p>

            <p>Withing the computer's RAM, imagine memory as two distinct sections of a <em>class section</em> and a <em>instance section</em>.</p>

            <p>When python starts up, it loads the <code>list</code> class blueprint only once into a single, permanent spot in memory. This class section contains the actual instructions for <code>.append()</code>, <code>.sort()</code>, <code>.pop()</code>, etc. Now every time you make a new list, you create a new <em>instance</em> in that section of memory. This instance is very lightweight because it only holds two things:</p>

            <ul>
                <li>Actual data values, in our example <code>[1, 2]</code></li>
                <li>A hidden pointer (a map) that points back to the class section.</li>
            </ul>

            <p>When you type <code>nums.append(3)</code>, the dot <code>.</code> is essentially telling python to...</p>

            <ul>
                <li>go look at <code>nums</code></li>
                <li>follow its hidden pointer to the <code>list</code> class blueprint</li>
                <li>pull out the instructions for <code>append</code></li>
            </ul>

            <p>Python then runs the instructions, but it needs to know which data to alter. This is why <code>self</code> exists in python. Python automatically rewrites your dot notation behind the scenes:</p>

            <ul>
                <li>What you type: <code>nums.append(3)</code></li>
                <li>What is actually happening: <code>list.append(nums, 3)</code></li>
                <ul>
                    <li>The variable <code>nums</code> is passed in as the first argument <code>self</code>. The method now has the exact memory address of your data and can safely update it without accidently touching any other lists.</li>
                </ul>
            </ul>

            <blockquote>
                <p>If you want to actually see what the class architecture is capable of, you can <code>print(dir(any_data_type))</code> to see a list print out of everything the class has predefined for you.</p>
            </blockquote>

            <p>Now back to instance methods...</p>

            <p>An <strong>instance method</strong> always takes <code>self</code> as its first parameter, which is how it reaches that object's own data:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {rectangleClass}
                </SyntaxHighlighter>
            </div>

            <p>Calling <code>rect.area()</code> runs the method with <code>self</code> <em>bound</em> to <code>rect</code>, so <code>self.width</code> and <code>self.height</code> are the values set in <code>__init__</code>. It returns the area, which we store and print.</p>

            <h3>Using methods</h3>

            <p>You always run a method using <em>dot notation</em>: <code>object.method()</code>. Think of the object as a noun and the method as a verb.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {characterClass}
                </SyntaxHighlighter>
            </div>

            <p>Here we have both <code>hero</code> and <code>scout</code> as instances of <code>Character</code>, each one with its own data (also called <strong>attributes</strong>). Changing <code>hero.health</code> will leave <code>scout</code> untouched because they are two separate objects.</p>

            <blockquote>
                <p>Every call to <code>ClassName(...)</code> builds a brand new object inside the instance's section of memory. Same blueprint with different data.</p>
            </blockquote>

            <h2>Dunder methods</h2>

            <blockquote>
                <p>What's up with the underscores for the <code>__init__</code> method?</p>
            </blockquote>

            <p><code>__init__</code> is part of the special built-in methods called <strong>dunder methods</strong>, short for <em><strong>d</strong>ouble <strong>under</strong>score</em> methods. They are hooks that connect your custom classes directly to python's internal mechanics.</p>

            <p>Whenever you use a built-in symbol, operator, functions like <code>+</code>, <code>==</code>, or <code>len()</code> python is secretly running a dunder method behind the scenes. Let's make a class with some dunder methods you have not seen yet:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {playlistClass}
                </SyntaxHighlighter>
            </div>

            <p>This class mimics a real python array list using dunders. Python translates dunder methods by mapping the normal, human-readable code we wrote to the backend dunder hooks:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {callingPlaylistClass}
                </SyntaxHighlighter>
            </div>

            <p>Without writing a custom <code>__len__</code> method, calling <code>len(my_mix)</code> would crash with a <code>TypeError</code>. Without <code>__getitem__</code> method, trying to use square brackets <code>my_mix[0]</code> would crash. Dunder methods allow you to write the rules for the custom class data types you are creating.</p>

            <h3>Common dunder categories</h3>

            <p>Python has dozens of dunder methods that allow your classes to hook into every corner of python. Here are a few examples:</p>

            <ul>
                <li><strong>Math operators:</strong> <code>__add__</code> which intercepts <code>+</code> and <code>__sub__</code> which intercepts <code>-</code></li>
                <li><strong>Comparisons:</strong> <code>__eq__</code> which intercepts <code>==</code> and <code>__lt__</code> which intercepts <code>&lt;</code></li>
                <li><strong>Context managers:</strong> <code>__enter__</code> and <code>__exit__</code> which are both used for <code>with open(...)</code> blocks</li>
                <li><strong>Iteration</strong> <code>__iter__</code> and <code>__next__</code> which allows your object to be used inside a <code>for item in object:</code> loop</li>
            </ul>

            <h2>Deep dive into <code>__init__</code></h2>

            <p>To understand exactly how <code>__init__</code> handles memory, you have to understand that <code>__init__</code> is not actually the creator of the object. In fact, by the time <code>__init__</code> runs, the object already exists in memory. The initial memory setup is actually a two-part process handled by two different dunder methods.</p>

            <p>When you execute a line such as <code>acct = BankAccount("Alice", 100)</code>, python performs two distinct steps behind the scenes:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {builderAndDecorator}
                </SyntaxHighlighter>
            </div>

            <ol>
                <li><code>__new__</code> is the actual <strong>constructor</strong></li>
                <ul>
                    <li>Python asks your operating system for a blank block of RAM.</li>
                    <li>It constructs a raw and empty object instance.</li>
                    <li>This raw object is given a unique memory address (and you can check it out with <code>id(acct)</code>).</li>
                    <li><code>__new__</code> then returns this empty object, which becomes the <code>self</code> that is handed off to <code>__init__</code>.</li>
                </ul>
                <li><code>__init__</code> populates the memory matrix</li>
            </ol>

            <p>Now that <code>__init__</code> has received the empty <code>self</code> object at its specific memory address, it acts as the <strong>initializer</strong>. Inside your object's raw memory block is a special hidden dictionary called <code>__dict__</code>. This dictionary is the actual blueprint grid where your object stores its specific properties. When you write this inside of your <code>BankAccount</code> class: </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {bankAccountInit}
                </SyntaxHighlighter>
            </div>

            <p>Python translates those assignments into memory grid operations inside the object's <code>dict</code>:</p>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {bankAccountInitInMemory}
                </SyntaxHighlighter>
            </div>

            <ul>
                <li><code>self.owner = "Alice"</code> tells python to go to the memory address of <code>self</code>, look at its dictionary and create a key called <code>"owner"</code>, and point it to the memory address where the string <code>"Alice"</code> lives.</li>
                <li><code>self.balance = 100</code> tells python in the same memory block, create a key called <code>"balance"</code> and point it to the integer <code>100</code></li>
            </ul>

            <p><code>"Alice"</code> is where all of your other strings are located in memory, while <code>100</code> is located where all of your other integers are in memory. The custom object's <code>__dict__</code> only contains the memory pointers.</p>

            <p>As you can see, <code>__init__</code> only modifies an existing memory block and does not return anything. If you did write a return such as <code>return self</code> or <code>return "curly cheese fries"</code> at the end of the <code>__init__</code> method then python will throw a <code>TypeError: __init__() should return None</code>.</p>

            <p><code>__init__</code>'s structural purpose is to mutate the empty chunk of RAM it was handed by <code>__new__</code>. Once <code>__init__</code> finishes populating <code>self.__dict__</code>, python automatically routes the fully configured object back to your variable. In our case, back to <code>acct</code>.</p>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="classes-and-objects"
            />
        </div>
    )
}