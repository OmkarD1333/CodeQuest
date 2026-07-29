export const MASTER_CONTENT =  
    'python': {
        1: {
            title: '1. Introduction to Python',
            description: 'Variables, data types, and basic I/O.',
            content: `<h2>Welcome to Python!</h2>
                        <p>Python is a high-level, interpreted programming language that emphasizes simplicity and readability. Its syntax is designed to be clear and intuitive, allowing programmers to express ideas in fewer lines of code compared to many other languages. This makes Python an excellent choice for beginners who are learning programming for the first time.</p>
                        <p>The <code>print()</code> function in Python is used to display output on the screen. It can print text, numbers, variables, or the results of expressions, allowing programmers to communicate information from their program to the user. For beginners, <code>print()</code> is often the first function they learn, as it provides a simple way to see the program’s behavior.</p>
                        <p><strong>Your Task:</strong> Use the <code>print()</code> function to display the message <code>"Hello, World!"</code>.</p>
`,
            starterCode: '# Your task: print the exact phrase "Hello, World!"\n',
            expected_output: 'Hello, World!'
        },
        2: {
            title: '2. Variables & Data Types',
            description: 'Learn to store and manage different kinds of data.',
            content: `<h2>Python Data Types</h2>



<p>In Python, f-strings (formatted string literals) start with f before the string and use {} to include variables or expressions, and for floats you can control decimal places with a format specifier like <code>f"{variable:.2f}"</code></p>



<hr>

<h3>Your Tasks</h3>
<p><strong>1. String:</strong> Create a variable <code>learn</code> and <code>language</code>and concatenate both string into <code>concat</code> variable and display using the <code>print()</code> function showing, <code>"I am learning Python!"</code>.</p>
<p><strong>2. Integer:</strong> Create two integer variables and print their sum using <code>print()</code>.</p>
<p><strong>3. Float:</strong> Create two float variables and print their product using <code>print()</code>.</p>
<p><strong>4. Boolean:</strong> Use the <code>print()</code> function to display the result of <code>10 > 3</code>.</p>

`,
            starterCode: '# Your task: Create a variable named learn, assign it the value "I am learning", create another variable language, assign it "Python", create another variable concat and concatenate both strings and print it.\n#Sum should be 15\n#Sum should be 20.000\n#True or False according to the given task\n',
            expected_output: 'I am learning Python\n15\n20.000\nTrue'
        },
        3: {
            title: '3. Operators & Expressions',
            description: 'Arithmetic, comparison, and logical operators.',
            content: `<h2>Python Operators and Expressions</h2>

<p><strong>Operators:</strong> Operators in Python are special symbols that perform operations on values or variables. Python supports several types of operators:</p>

<ul>
<li><strong>Arithmetic Operators:</strong> Used for mathematical operations. Examples: <code>+</code> (addition), <code>-</code> (subtraction), <code>*</code> (multiplication), <code>/</code> (division), <code>%</code> (modulus), <code>**</code> (exponent), <code>//</code> (floor division).<br>


<li><strong>Logical Operators:</strong> Used to combine Boolean values. Examples: <code>and</code>, <code>or</code>, <code>not</code>.<br>


<p><strong>Expressions:</strong> An expression is a combination of values, variables, and operators that Python evaluates to produce a result. Expressions can use arithmetic, comparison, logical, and bitwise operators. Examples help understand how expressions work:</p>

<ul>
</ul>

<hr>

<h3>Your Tasks</h3>
<p><strong>1. Arithmetic Expression:</strong> Create two numbers, add them, subtract one from the other, multiply, divide, find modulus, exponent, and floor division, then print all results.</p>
<p><strong>3. Logical Expression:</strong> Use <code>and</code>, <code>or</code>, and <code>not</code> operators on Boolean variables and print the results.</p>

<h3>Expected Output</h3>
<p><strong>1. Arithmetic Expression:</strong> 7, 3, 10, 2.5, 1, 25, 2</p>
<p><strong>2. Comparison Expression:</strong> False, True, False, True, False, True</p>
<p><strong>3. Logical Expression:</strong> False, True, False</p>
<p><strong>4. Assignment Expression:</strong> 10, 15, 10, 20, 5.0</p>
`,
            expected_output: '7\n3\n10\n2.5\n1\n25\n2\nFalse\nTrue\nFalse\nTrue\nFalse\nTrue\nFalse\nTrue\nFalse\n10\n15\n10\n20\n5.0'
        },
        4: {
            title: '4. Control Flow: Conditionals',
            description: 'Mastering if, elif, and else statements.',
            content: `<h2>Python Conditional Flow</h2>

<p>Conditional statements in Python allow your program to make decisions and execute certain blocks of code based on whether a condition is <code>True</code> or <code>False</code>. This is also called <strong>decision making</strong> in programming. Python provides <code>if</code>, <code>elif</code>, and <code>else</code> statements for conditional flow.</p>

<p><strong>1. If Statement:</strong> Executes a block of code only if the condition is <code>True</code>.</p>
<p>Example:</p>
    print("You are an adult.")</code></pre>
<p>Output: <code>You are an adult.</code></p>

<p><strong>2. Else Statement:</strong> Executes a block of code if the <code>if</code> condition is <code>False</code>.</p>
<p>Example:</p>
    print("You are an adult.")
else:
    print("You are a minor.")</code></pre>
<p>Output: <code>You are a minor.</code></p>

<p><strong>3. Elif Statement:</strong> Stands for "else if" and checks additional conditions if the previous <code>if</code> or <code>elif</code> conditions were <code>False</code>.</p>
<p><strong>Example:</strong> Categorize a person based on age.</p>

if age &lt; 13:
    print("Child")
elif age &lt; 20:
    print("Teenager")
elif age &lt; 60:
    print("Adult")
else:
    print("Senior")</code></pre>
<p>Output: <code>Adult</code></p>


<p>Conditional statements can also be combined with logical operators like <code>and</code>, <code>or</code>, and <code>not</code> to form complex conditions.</p>
<p><strong>Example:</strong> Check if a student has passed both Mathematics and English to pass overall.</p>

    print("Student has passed both subjects.")
else:
    print("Student has failed in one or both subjects.")</code></pre>
<p>Output: <code>Student has passed both subjects.</code></p>

<hr>

<h3>Your Tasks</h3>
<p><strong>1. If Statement:</strong> Check if a number is positive and print a message.</p>
<p><strong>2. Else Statement:</strong> Check if a number is negative, else print it is positive or zero.</p>
<p><strong>3. Elif Statement:</strong> Assign marks to a variable and print the grade using <code>if-elif-else</code>.</p>
<p><strong>4. Logical Conditions:</strong> Use <code>and</code>, <code>or</code> to check two conditions together and print a message.</p>

<h3>Expected Output</h3>
<p><strong>1. If Statement:</strong> Number is positive</p>
<p><strong>2. Else Statement:</strong> Number is positive or zero</p>
<p><strong>3. Elif Statement:</strong> Grade: B</p>
<p><strong>4. Logical Conditions:</strong> Weather is pleasant</p>
`,
            starterCode: '#Using if statement get expected output\n#Using if-else statement get expected output\n#Using if-elif-else statement get expected output\n#Take two variables "temp" and "humidity" and use logical condition to get expected value\n',
            expected_output: 'Number is positive\nNumber is positive or zero\nGrade: B\nWeather is pleasant'
        },
        5: {
            title: '5. Data Structures: Lists',
            description: 'Creating and manipulating ordered lists.',
            badge: '🏆 Iron Badge',
            content: `<h2>Python Lists</h2>

<p><strong>List:</strong> A list in Python is an ordered, mutable collection that can hold multiple items of any data type, such as integers, strings, floats, or even other lists. Lists are written using square brackets <code>[ ]</code>. You can access elements using their index, add new elements, remove elements, and perform various operations on lists. Lists are very flexible and widely used in Python programming.</p>

<p>Example of creating a list:</p>
print(fruits)</code></pre>
<p>Output: <code>['apple', 'banana', 'cherry']</code></p>

<p>Accessing elements using index (index starts from 0):</p>
<pre><code>print(fruits[0])  # first element
print(fruits[-1]) # last element</code></pre>
<p>Output:</p>
<pre><code>apple
cherry</code></pre>

<p>Adding elements to a list using <code>append()</code> or <code>insert()</code>:</p>
<pre><code>fruits.append("orange")       # add at the end
fruits.insert(1, "kiwi")        # add at index 1
print(fruits)</code></pre>
<p>Output: <code>['apple', 'kiwi', 'banana', 'cherry', 'orange']</code></p>

<p>Removing elements from a list using <code>remove()</code> or <code>pop()</code>:</p>
<pre><code>fruits.remove("banana")  # remove by value
print(fruits)
print("Popped item:", popped_item)</code></pre>
<p>Output:</p>
<pre><code>['apple', 'kiwi', 'cherry']
Popped item: orange</code></pre>

<p>Other useful operations:</p>
<ul>
<li>Length of a list: <code>len(fruits)</code></li>
<li>Sorting a list: <code>fruits.sort()</code></li>
<li>Reversing a list: <code>fruits.reverse()</code></li>
<li>Checking membership: <code>'apple' in fruits</code></li>
</ul>

<hr>

<h3>Your Tasks</h3>
<p><strong>1. Create a list:</strong> Make a list of fruits (apple, banana, cherry) and print it.</p>
<p><strong>2. Access elements:</strong> Print the first and last fruit from your list.</p>
<p><strong>3. Add elements:</strong> Add a new fruit to your list and print the updated list (orange).</p>
<p><strong>4. Remove elements:</strong> Remove the fruit at index "1" from your list and print the updated list.</p>

<h3>Expected Output</h3>
<p><strong>1. Create a list:</strong> ['apple', 'banana', 'cherry']</p>
<p><strong>2. Access elements:</strong> apple, cherry</p>
<p><strong>3. Add elements:</strong> ['apple', 'banana', 'cherry', 'orange']</p>
<p><strong>4. Remove elements:</strong> ['apple', 'cherry', 'orange']</p>
`,
            starterCode: '#Take fruits variable to create a list\n',
            expected_output: '[\'apple\', \'banana\', \'cherry\']\napple, cherry\n[\'apple\', \'banana\', \'cherry\', \'orange\']\n[\'apple\', \'cherry\', \'orange\']'
        },
        6: {
            title: '6. Data Structures: Tuples & Sets',
            description: 'Understanding immutable collections.',
            content: `<h2>Collections of Data</h2><p>A list is an ordered collection of items, created with square brackets <code>[]</code>. You can access items by their index, starting from 0.</p><p><strong>Your Task:</strong> Access and print the second element from the <code>colors</code> list.</p>`,
            expected_output: 'green'
        },
        7: {
            title: '7. Control Flow: Loops',
            description: 'Using for and while loops for iteration.',
            content: `<h2>Repeating Actions</h2><p>A <code>for</code> loop is used to iterate over a sequence (like a list).</p><p><strong>Your Task:</strong> Use a for loop to print each number from the <code>numbers</code> list on a new line.</p>`,
            expected_output: '1\n2\n3'
        },
        8: {
            title: '8. Functions',
            description: 'Defining and calling reusable blocks of code.',
            content: `<h2>Looping with a Condition</h2><p>A <code>while</code> loop repeats code as long as a condition is true.</p><p><strong>Your Task:</strong> Write a while loop that prints a countdown from 3 to 1. Each number should be on a new line.</p>`,
            expected_output: '3\n2\n1'
        },
        9: {
            title: '9. Advanced Functions',
            description: 'Arguments, scope, and lambda functions.',
            content: `<h2>Reusable Code</h2><p>Functions are blocks of code defined with <code>def</code> that perform a specific task when called.</p><p><strong>Your Task:</strong> Call the <code>say_hello</code> function to print its message.</p>`,
            starterCode: 'def say_hello():\n    print("Function called!")\n\n# Your task: Call the say_hello function.\n',
            expected_output: 'Function called!'
        },
        10: {
            title: '10. String Manipulation',
            description: 'Slicing, formatting, and common methods.',
            badge: '🏆 Iron+ Badge',
            content: `<h2>Passing Data to Functions</h2><p>You can pass data into functions through arguments.</p><p><strong>Your Task:</strong> Call the <code>greet</code> function, passing the name "Alice" as the argument.</p>`,
            starterCode: 'def greet(name):\n    print(f"Hello, {name}")\n\n# Your task: Call the greet function with the name "Alice".\n',
            expected_output: 'Hello, Alice'
        },
        11: {
            title: '11. File I/O',
            description: 'Reading from and writing to files.',
            content: `<h2>Getting Data from Functions</h2><p>Functions can send a result back using the <code>return</code> statement.</p><p><strong>Your Task:</strong> The function <code>add</code> is supposed to return the sum of two numbers. Complete it and print the returned value.</p>`,
            expected_output: '9'
        },
        12: {
            title: '12. Introduction to OOP',
            description: 'Understanding classes and objects.',
            content: `<h2>Key-Value Pairs</h2><p>A dictionary stores data in <code>key: value</code> pairs. You access values by their key.</p><p><strong>Your Task:</strong> Access and print the <code>"city"</code> from the <code>user</code> dictionary.</p>`,
            expected_output: 'New York'
        },
        13: {
            title: '13. OOP: Inheritance',
            description: 'Creating specialized classes.',
            content: `<h2>Working with Text</h2><p>Strings have built-in methods. The <code>.upper()</code> method converts a string to uppercase.</p><p><strong>Your Task:</strong> Convert the <code>message</code> to uppercase and print it.</p>`,
            expected_output: 'QUEST'
        },
        14: {
            title: '14. OOP: Polymorphism',
            description: 'Using common interfaces for different objects.',
            content: `<h2>Extracting Substrings</h2><p>Slicing lets you get a portion of a string using the syntax <code>[start:stop]</code>.</p><p><strong>Your Task:</strong> Get the first 4 characters of the <code>alphabet</code> string and print them.</p>`,
            expected_output: 'abcd'
        },
        15: {
            title: '15. Modules & Packages',
            description: 'Organizing and reusing your code.',
            badge: '🏆 Bronze Badge',
            content: `<h2>Importing Code</h2><p>You can use the <code>import</code> statement to use code from other modules, like the <code>math</code> module for math functions.</p><p><strong>Your Task:</strong> Import the <code>math</code> module and print the square root of 81 using <code>math.sqrt()</code>.</p>`,
            starterCode: '# Your task: Import the math module and print the square root of 81.\n',
            expected_output: '9.0'
        },
        16: {
            title: '16. Exception Handling',
            description: 'Managing errors with try-except blocks.',
            content: `<h2>Immutable Lists</h2><p>A tuple is like a list, but its items cannot be changed. They are created with parentheses <code>()</code>.</p><p><strong>Your Task:</strong> Create a tuple named <code>coords</code> with the values 10 and 20. Then print the first element.</p>`,
            starterCode: '# Your task: Create a tuple named coords with values 10 and 20, then print the first element.\n',
            expected_output: '10'
        },
        17: {
            title: '17. Standard Library',
            description: 'Exploring useful built-in modules.',
            content: `<h2>Modern String Formatting</h2><p>F-strings (formatted string literals) provide a concise way to embed expressions inside strings.</p><p><strong>Your Task:</strong> Use an f-string to print "The item is a Potion".</p>`,
            expected_output: 'The item is a Potion'
        },
        18: {
            title: '18. List Comprehensions',
            description: 'Writing concise and readable list creations.',
            content: `<h2>Manipulating Lists</h2><p>Lists have useful methods. <code>.append()</code> adds an item to the end of a list.</p><p><strong>Your Task:</strong> Add the number 4 to the <code>items</code> list and then print the entire list.</p>`,
            expected_output: '[1, 2, 3, 4]'
        },
        19: {
            title: '19. Generators & Iterators',
            description: 'Efficiently working with large datasets.',
            content: `<h2>Handling Exceptions</h2><p>The <code>try...except</code> block lets you handle errors gracefully. The <code>try</code> block contains code that might fail, and <code>except</code> runs if it does.</p><p><strong>Your Task:</strong> The code tries to divide by zero. Add a <code>try...except</code> block to catch the <code>ZeroDivisionError</code> and print "Cannot divide by zero."</p>`,
            expected_output: 'Cannot divide by zero.'
        },
        20: {
            title: '20. Final Project',
            description: 'Build a complete console application.',
            badge: '🏆 Bronze+ Badge',
            content: `<h2>Congratulations!</h2><p>You've reached the end of the Python basics. This final task is a review of functions.</p><p><strong>Your Task:</strong> Complete the <code>finalize</code> function to return the string "Quest Complete". Then call it and print the result.</p>`,
            starterCode: 'def finalize():\n    # Your task: Return the string "Quest Complete".\n\n# Your task: Call the function and print its return value.\n',
            expected_output: 'Quest Complete'
        }
    },
    'c': {
        1: {
            title: '1. Hello, World!',
            description: 'Your first C program and compilation.',
            content: `<h2>Introduction to C</h2>

<p><strong>C:</strong> C is a high-level, general-purpose programming language developed in the early 1970s by Dennis Ritchie. It is widely used for system programming, developing operating systems, embedded systems, and efficient applications. C provides low-level access to memory, simple syntax, and powerful operators, making it suitable for both hardware-level and application-level programming. Programs written in C are compiled into machine code using a compiler before execution, which makes them fast and efficient.</p>

<p><strong>Example Program Structure in C:</strong></p>
<pre><code>#include &lt;stdio.h&gt;  // Preprocessor directive to include standard input/output library

int main() {            // Main function: entry point of the program
    // Your printf statement here
    return 0;           // Return 0 indicates the program executed successfully
}</code></pre>

<p>Explanation of the code:</p>
<ul>
<li><code>#include &lt;stdio.h&gt;</code>: This line tells the compiler to include the Standard Input Output library, which contains functions like <code>printf()</code> to print output.</li>
<li><code>int main()</code>: The main function is where program execution begins. Every C program must have one <code>main()</code> function.</li>
<li><code>return 0;</code>: Indicates the program has finished successfully and returns 0 to the operating system.</li>
<li><code>printf()</code>: A standard function in <code>stdio.h</code> used to display output on the screen.</li>
</ul>

<hr>

<h3>Your Task</h3>
<p>Complete the program to print the exact phrase <code>"Hello, World!"</code> using the <code>printf()</code> function.</p>


<h3>Expected Output</h3>
<p><code>Hello, World!</code></p>
`,
            starterCode: '#include <stdio.h>\n\nint main() {\n // Your code goes here ;\n    return 0;\n}',
            expected_output: 'Hello, World!\n'
        },
        2: {
            title: '2. Variables & Data Types',
            description: 'Understanding int, char, float, etc.',
            content: `<h2>Variables and Data Types in C</h2>

<p><strong>Variables:</strong> A variable is a named storage location in memory that holds a value. In C, you must declare a variable with a specific data type before using it. Variables can store numbers, characters, or other types of data. The name of a variable should start with a letter or underscore and can contain letters, numbers, and underscores.</p>

<p>Example of variable declaration and initialization:</p>
printf("Age: %d, Price: %.2f, Grade: %c", age, price, grade);</code></pre>
<p>Output: <code>Age: 20, Price: 99.99, Grade: A</code></p>

<p><strong>Data Types:</strong> C has several basic data types:</p>

<ul>
<li><strong>_Bool (or bool in C99):</strong> Stores Boolean values <code>0</code> (false) or <code>1</code> (true).</li>
</ul>

<p>Each data type has a specific size in memory, and choosing the correct type ensures efficient memory usage and correct calculations.</p>

<hr>

<h3>Your Tasks</h3>
<p><strong>1. Declare Variables:</strong> Declare an integer variable for age, a float variable for price, and a char variable for grade, then print them using <code>printf()</code>.</p>
<p><strong>2. Assign Values:</strong> Change the values of the variables and print them again.</p>
<p><strong>3. Experiment:</strong> Declare a double variable for pi and a boolean variable to represent true/false, and print them.</p>

<h3>Expected Output</h3>
<p><strong>1. Initial Values:</strong> Age: 20, Price: 99.99, Grade: A</p>
<p><strong>2. Updated Values:</strong> Age: 25, Price: 49.95, Grade: B</p>
<p><strong>3. Double and Boolean:</strong> Pi: 3.141592, Flag: 1</p>
`,
            starterCode: '',
            expected_output: '100'
        },
        3: {
            title: '3. Operators & Expressions',
            description: 'Performing calculations and comparisons.',
            content: `<h2>Character Data Type</h2><p>The <code>char</code> data type stores a single character. They are enclosed in single quotes, like <code>'A'</code>.</p><p><strong>Your Task:</strong> Create a <code>char</code> variable named <code>grade</code>, assign it the value <code>'A'</code>, and print it using the <code>%c</code> format specifier.</p>`,
            starterCode: '#include <stdio.h>\n\nint main() {\n    // Create and assign the char variable\n\n    // Print the grade\n    return 0;\n}',
            expected_output: 'A'
        },
        4: {
            title: '4. Control Structures: Conditionals',
            description: 'Mastering if-else statements.',
            content: `<h2>Calculations in C</h2><p>C supports standard arithmetic operators.</p><p><strong>Your Task:</strong> Subtract <code>50</code> from <code>120</code> and print the result.</p>`,
            expected_output: '70'
        },
        5: {
            title: '5. Control Structures: Loops',
            description: 'Using for, while, and do-while loops.',
            badge: '🏆 Iron Badge',
            content: `<h2>Making Decisions</h2><p>The <code>if-else</code> statement lets you run different code based on a condition.</p><p><strong>Your Task:</strong> Check if the number <code>15</code> is greater than <code>10</code>. If it is, print "Greater". Otherwise, print "Smaller".</p>`,
            expected_output: 'Greater'
        },
        6: {
            title: '6. Functions',
            description: 'Creating modular and reusable code.',
            content: `<h2>Repeating Code</h2><p>A <code>for</code> loop repeats code a specific number of times. It has three parts: initialization, condition, and increment.</p><p><strong>Your Task:</strong> Use a for loop to print the numbers 1, 2, and 3, each on a new line.</p>`,
            starterCode: '#include <stdio.h>\n\nint main() {\n    // Write your for loop here\n    return 0;\n}',
            expected_output: '1\n2\n3'
        },
        7: {
            title: '7. Scope & Storage Classes',
            description: 'Understanding variable lifetime.',
            content: `<h2>Storing Multiple Values</h2><p>An array is a collection of items of the same data type. You access elements by their index, starting from 0.</p><p><strong>Your Task:</strong> Access and print the third element from the <code>scores</code> array.</p>`,
            expected_output: '100'
        },
        8: {
            title: '8. Arrays & Strings',
            description: 'Handling collections of data.',
            content: `<h2>Modularizing Code</h2><p>Functions are blocks of code that perform a task. In C, you must declare a function before you use it in <code>main()</code>.</p><p><strong>Your Task:</strong> Call the <code>print_message</code> function from <code>main</code>.</p>`,
            starterCode: '#include <stdio.h>\n\nvoid print_message() {\n    printf("Function was called");\n}\n\nint main() {\n    // Call the function here\n    return 0;\n}',
            expected_output: 'Function was called'
        },
        9: {
            title: '9. Introduction to Pointers',
            description: 'Variables that store memory addresses.',
            content: `<h2>Condition-Based Looping</h2><p>A <code>while</code> loop executes as long as its condition is true.</p><p><strong>Your Task:</strong> Use a while loop to print a countdown from 2 to 1. Each number should be on a new line.</p>`,
            expected_output: '2\n1'
        },
        10: {
            title: '10. Pointers & Arrays',
            description: 'The relationship between pointers and arrays.',
            badge: '🏆 Iron+ Badge',
            content: `<h2>Memory Addresses</h2><p>A pointer is a variable that stores the memory address of another variable. The <code>&</code> operator gets the address.</p><p><strong>Your Task:</strong> Print the value of <code>num</code> (which is 42) using the pointer <code>ptr</code>. You'll need to dereference the pointer with <code>*</code>.</p>`,
            expected_output: '42'
        },
        11: {
            title: '11. Advanced Pointers',
            description: 'Pointers to pointers and function pointers.',
            content: `<h2>Working with Text</h2><p>In C, a string is an array of characters ending with a null character <code>\'\\0\'</code>.</p><p><strong>Your Task:</strong> Print the string <code>"C is powerful"</code> using the <code>%s</code> format specifier.</p>`,
            expected_output: 'C is powerful'
        },
        12: {
            title: '12. Structs & Unions',
            description: 'Creating custom data types.',
            content: `<h2>Custom Data Types</h2><p>A <code>struct</code> groups different data types. It\'s a blueprint for a custom data structure.</p><p><strong>Your Task:</strong> Access and print the <code>y</code> coordinate of the <code>p1</code> point.</p>`,
            expected_output: '20'
        },
        13: {
            title: '13. Dynamic Memory Allocation',
            description: 'Using malloc() and free().',
            content: `<h2>Function Parameters</h2><p>Functions can accept arguments to work with different data.</p><p><strong>Your Task:</strong> Call the <code>add</code> function with the numbers 5 and 7, and print the result.</p>`,
            starterCode: '#include <stdio.h>\n\nvoid add(int a, int b) {\n    printf("%d", a + b);\n}\n\nint main() {\n    // Call the add function\n    return 0;\n}',
            expected_output: '12'
        },
        14: {
            title: '14. File I/O',
            description: 'Reading from and writing to files.',
            content: `<h2>Return Values</h2><p>Functions can return a value. The function signature defines the return type (e.g., <code>int</code>).</p><p><strong>Your Task:</strong> Complete the <code>multiply</code> function to return the product of <code>a</code> and <code>b</code>. Then print the result in <code>main</code>.</p>`,
            expected_output: '32'
        },
        15: {
            title: '15. The C Preprocessor',
            description: 'Macros and conditional compilation.',
            badge: '🏆 Bronze Badge',
            content: `<h2>Header Files</h2><p>Header files (<code>.h</code>) are used to declare functions that can be shared across multiple source files. We have been using <code>stdio.h</code> all along.</p><p><strong>Your Task:</strong> This level is conceptual. Simply print the message "Headers are useful".</p>`,
            starterCode: '#include <stdio.h>\n\nint main() {\n    // Print the required message\n    return 0;\n}',
            expected_output: 'Headers are useful'
        },
        16: {
            title: '16. Header Files',
            description: 'Organizing large projects.',
            content: `<h2>Alternative to if-else</h2><p>A <code>switch</code> statement is a clean way to control flow based on the value of a variable.</p><p><strong>Your Task:</strong> Use a switch statement to print "Start" for a command value of 1.</p>`,
            expected_output: 'Start'
        },
        17: {
            title: '17. Bitwise Operations',
            description: 'Manipulating data at the bit level.',
            content: `<h2>Converting Data Types</h2><p>Type casting lets you convert a value from one type to another. To get a floating-point result from integer division, you must cast one operand to a <code>float</code>.</p><p><strong>Your Task:</strong> Divide 5 by 2 to get a floating-point result and print it using <code>%f</code>.</p>`,
            expected_output: '2.500000'
        },
        18: {
            title: '18. Command Line Arguments',
            description: 'Passing data to your program on startup.',
            expected_output: '1000'
        },
        19: {
            title: '19. Error Handling',
            description: 'Using errno and perror.',
            content: `<h2>A Function That Calls Itself</h2><p>Recursion is a technique where a function calls itself. It must have a base case to stop.</p><p><strong>Your Task:</strong> Call the provided recursive <code>countdown</code> function with the starting number 2.</p>`,
            starterCode: '#include <stdio.h>\n\nvoid countdown(int n) {\n    if (n < 1) return;\n    printf("%d\\n", n);\n    countdown(n - 1);\n}\n\nint main() {\n    // Call countdown with the number 2\n    return 0;\n}',
            expected_output: '2\n1'
        },
        20: {
            title: '20. Final Project',
            description: 'Build a command-line utility.',
            badge: '🏆 Bronze+ Badge',
            content: `<h2>Congratulations!</h2><p>You\'ve reached the end of the C basics. This is a final review of functions.</p><p><strong>Your Task:</strong> Complete the <code>get_final_message</code> function to return the string "C Quest Complete". Print the result in main.</p>`,
            expected_output: 'C Quest Complete'
        }
    },
    'java': {
        1: {
            title: '1. Introduction to Java',
            description: 'First Java program.',
            content: `<h2>Introduction to Java</h2>

<p><strong>Java:</strong> Java is a high-level, object-oriented, and platform-independent programming language developed by Sun Microsystems (now owned by Oracle). Java programs are compiled into bytecode, which can run on any device that has a Java Virtual Machine (JVM), making it "write once, run anywhere." Java is widely used for building web applications, mobile apps, desktop applications, and large-scale enterprise software. Its syntax is influenced by C and C++, making it familiar to programmers with experience in those languages.</p>

<p><strong>Example Java Program:</strong> The following program prints "Hello, World!" to the screen.</p>

<pre><code>public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}</code></pre>

<p>Explanation of the code:</p>
<ul>
<li><code>public class Main</code>: Defines a class named Main. In Java, every program must have at least one class.</li>
<li><code>public static void main(String[] args)</code>: This is the main method where program execution begins. The JVM looks for this method to start running the program.</li>
<li><code>System.out.println("Hello, World!");</code>: Prints the specified message to the console followed by a newline.</li>
<li>Curly braces <code>{ }</code> define the beginning and end of blocks of code for the class and method.</li>
</ul>

<hr>

<h3>Your Task</h3>
<p>Complete the program to print the exact phrase <code>"Hello, World!"</code> using <code>System.out.println()</code>.</p>

<pre><code>public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}</code></pre>

<h3>Expected Output</h3>
<p><code>Hello, World!</code></p>
`,
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
            expected_output: 'Hello, Java!'
        },
        2: {
            title: '2. Java Syntax Basics',
            description: 'Variables, data types, and operators.',
            content: `<h2>Java Variables, Data Types, and Operators</h2>

<p><strong>Variables:</strong> A variable in Java is a named storage location in memory used to store data. Every variable must be declared with a specific data type before it can be used. Variables are used to store numbers, text, or other types of data that can change during program execution.</p>

<p>Example of variable declaration and initialization:</p>
System.out.println("Name: " + name + ", Age: " + age);</code></pre>
<p>Output: <code>Name: Alice, Age: 25</code></p>

<p><strong>Data Types:</strong> Java has several data types:</p>
<ul>
</ul>

<p><strong>Operators:</strong> Operators in Java are symbols that perform operations on variables and values. Types of operators include:</p>
<ul>
<li><strong>Arithmetic Operators:</strong> <code>+</code> (addition), <code>-</code> (subtraction), <code>*</code> (multiplication), <code>/</code> (division), <code>%</code> (modulus).<br>


<li><strong>Logical Operators:</strong> <code>&&</code> (and), <code>||</code> (or), <code>!</code> (not).<br>

</ul>

<hr>

<h3>Your Tasks</h3>
<p><strong>1. Variables:</strong> Declare an int, double, char, boolean, and String variable, assign values, and print them using <code>System.out.println()</code>.</p>
<p><strong>2. Arithmetic Operators:</strong> Create two integer variables and print their sum, difference, product, division, and remainder.</p>
<p><strong>4. Logical Operators:</strong> Use <code>&&</code>, <code>||</code>, and <code>!</code> with boolean expressions and print the results.</p>

<h3>Expected Output</h3>
<p><strong>1. Variables:</strong> Name: Alice, Age: 25, Price: 99.99, Grade: A, Passed: true</p>
<p><strong>2. Arithmetic Operators:</strong> 15, 5, 50, 2, 0</p>
<p><strong>3. Comparison Operators:</strong> true, false, false</p>
<p><strong>4. Logical Operators:</strong> true, true, false</p>
<p><strong>5. Assignment Operators:</strong> 15, 10, 20</p>
`,
            expected_output: 'Java\n17'
        },
        3: {
            title: '3. Control Flow: Conditionals',
            description: 'Using if-else and switch statements.',
            content: `<h2>The Boolean Type</h2><p>The <code>boolean</code> data type can only have two values: <code>true</code> or <code>false</code>. It is essential for conditional logic.</p><p><strong>Your Task:</strong> A boolean variable <code>isComplete</code> is set to true. Print this variable.</p>`,
            expected_output: 'true'
        },
        4: {
            title: '4. Control Flow: Loops',
            description: 'Mastering for, while, and do-while loops.',
            content: `<h2>Performing Calculations</h2><p>Java uses standard arithmetic operators.</p><p><strong>Your Task:</strong> Multiply <code>12</code> by <code>12</code> and print the result.</p>`,
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Calculate and print the result\n    }\n}',
            expected_output: '144'
        },
        5: {
            title: '5. Object-Oriented Programming I',
            description: 'Understanding Classes and Objects.',
            badge: '🏆 Iron Badge',
            content: `<h2>Making Decisions</h2><p>The <code>if-else</code> statement controls which block of code is executed based on a boolean condition.</p><p><strong>Your Task:</strong> If <code>temp</code> is greater than 30, print "Hot". Otherwise, print "Cool".</p>`,
            expected_output: 'Cool'
        },
        6: {
            title: '6. Object-Oriented Programming II',
            description: 'Inheritance and Polymorphism.',
            content: `<h2>Storing Collections</h2><p>An array holds a fixed number of values of a single type. You access elements by index, starting at 0.</p><p><strong>Your Task:</strong> Access and print the first element of the <code>tools</code> array.</p>`,
            expected_output: 'Hammer'
        },
        7: {
            title: '7. Object-Oriented Programming III',
            description: 'Encapsulation and Abstraction.',
            content: `<h2>Looping a Specific Number of Times</h2><p>The "enhanced" for loop provides a simple way to iterate through all elements of an array or collection.</p><p><strong>Your Task:</strong> Use an enhanced for loop to print each element of the <code>letters</code> array, each on a new line.</p>`,
            expected_output: 'a\nb\nc'
        },
        8: {
            title: '8. Arrays & Strings',
            description: 'Working with data collections.',
            content: `<h2>Reusable Code Blocks</h2><p>A method is a block of code which only runs when it is called. All our code so far has been in the <code>main</code> method.</p><p><strong>Your Task:</strong> Call the <code>showAlert</code> method from inside <code>main</code>.</p>`,
            starterCode: 'public class Main {\n    public static void showAlert() {\n        System.out.println("Method executed!");\n    }\n\n    public static void main(String[] args) {\n        // Call the showAlert method\n    }\n}',
            expected_output: 'Method executed!'
        },
        9: {
            title: '9. The Collections Framework I',
            description: 'Using ArrayLists and LinkedLists.',
            content: `<h2>Getting Values from Methods</h2><p>Methods can return a value. The data type of the return value must match the method\'s declared return type.</p><p><strong>Your Task:</strong> Complete the <code>getScore</code> method to return the number 500. Then print the returned value in <code>main</code>.</p>`,
            starterCode: 'public class Main {\n    public static int getScore() {\n        // Return the integer 500\n    }\n\n    public static void main(String[] args) {\n        System.out.println(getScore());\n    }\n}',
            expected_output: '500'
        },
        10: {
            title: '10. The Collections Framework II',
            description: 'Using HashMaps and HashSets.',
            badge: '🏆 Iron+ Badge',
            content: `<h2>Introduction to OOP</h2><p>A class is a blueprint for objects. An object is an instance of a class.</p><p><strong>Your Task:</strong> Create a new <code>Dog</code> object from the <code>Dog</code> class and call its <code>bark</code> method.</p>`,
            starterCode: 'class Dog {\n    public void bark() {\n        System.out.println("Woof!");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Create a Dog object and call its bark method\n    }\n}',
            expected_output: 'Woof!'
        },
        11: {
            title: '11. Exception Handling',
            description: 'Managing runtime errors with try-catch-finally.',
            expected_output: 'Tesla'
        },
        12: {
            title: '12. Interfaces & Abstract Classes',
            description: 'Designing flexible and extensible code.',
            content: `<h2>String Concatenation</h2><p>You can join strings together using the <code>+</code> operator.</p><p><strong>Your Task:</strong> Concatenate the two strings <code>part1</code> and <code>part2</code> to form "CodeQuest" and print the result.</p>`,
            expected_output: 'CodeQuest'
        },
        13: {
            title: '13. Generics',
            description: 'Creating type-safe collections and classes.',
            content: `<h2>Method Parameters</h2><p>You can pass data into methods as parameters. This makes them more flexible.</p><p><strong>Your Task:</strong> Call the <code>welcome</code> method, passing "Hero" as the argument.</p>`,
            starterCode: 'public class Main {\n    public static void welcome(String name) {\n        System.out.println("Welcome, " + name);\n    }\n\n    public static void main(String[] args) {\n        // Call the welcome method\n    }\n}',
            expected_output: 'Welcome, Hero'
        },
        14: {
            title: '14. File I/O',
            description: 'Reading and writing files with Java.',
            content: `<h2>String Length</h2><p>The <code>.length()</code> method returns the number of characters in a string.</p><p><strong>Your Task:</strong> Find and print the length of the string "Java".</p>`,
            expected_output: '4'
        },
        15: {
            title: '15. Introduction to Threads',
            description: 'Understanding concurrent programming.',
            badge: '🏆 Bronze Badge',
            content: `<h2>Math Class</h2><p>The <code>Math</code> class provides many useful mathematical functions, such as <code>Math.max()</code> to find the highest of two values.</p><p><strong>Your Task:</strong> Use <code>Math.max()</code> to find the larger of <code>77</code> and <code>88</code>, and print the result.</p>`,
            starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // Find and print the max value\n    }\n}',
            expected_output: '88'
        },
        16: {
            title: '16. Lambda Expressions',
            description: 'Writing functional and concise code.',
            expected_output: '2025'
        },
        17: {
            title: '17. The Stream API',
            description: 'Processing collections in a functional style.',
            content: `<h2>Dynamic Arrays</h2><p>An <code>ArrayList</code> is a resizable array. You must import it from <code>java.util</code>. You use the <code>.add()</code> method to add elements.</p><p><strong>Your Task:</strong> Add the string "Sword" to the <code>inventory</code> ArrayList and print the list.</p>`,
            expected_output: '[Shield, Sword]'
        },
        18: {
            title: '18. Java Packages & JARs',
            description: 'Organizing and distributing your code.',
            content: `<h2>Key-Value Pairs</h2><p>A <code>HashMap</code> stores items in "key/value" pairs. You use <code>.put()</code> to add an item and <code>.get()</code> to retrieve one.</p><p><strong>Your Task:</strong> Get and print the capital of "England" from the <code>capitals</code> HashMap.</p>`,
            expected_output: 'London'
        },
        19: {
            title: '19. Introduction to Maven',
            description: 'Managing project dependencies.',
            content: `<h2>Handling Errors</h2><p>The <code>try...catch</code> statement allows you to handle errors gracefully. The <code>try</code> block contains code that might fail.</p><p><strong>Your Task:</strong> The code tries to access an array index that doesn\'t exist. Wrap it in a <code>try...catch</code> block to catch the exception and print "Index does not exist.".</p>`,
            expected_output: 'Index does not exist.'
        },
        20: {
            title: '20. Final Project',
            description: 'Create a simple console application.',
            badge: '🏆 Bronze+ Badge',
            content: `<h2>Congratulations!</h2><p>You\'ve reached the end of the Java basics. This is a final review of methods.</p><p><strong>Your Task:</strong> Complete the <code>getCompletedMessage</code> method to return the string "Java Quest Complete", then call it and print the result.</p>`,
            starterCode: 'public class Main {\n    public static String getCompletedMessage(){\n        // Return the correct string\n    }\n\n    public static void main(String[] args) {\n        // Call the method and print the result\n    }\n}',
            expected_output: 'Java Quest Complete'
        }
    },
    'rust': {
        1: {
            title: '1. Hello, Rust!',
            description: 'Your first Rust program using cargo.',
            content: `<h2>Welcome to Rust!</h2><p>The <code>println!</code> macro is used to print text to the console. All Rust programs start in the <code>main</code> function.</p><p><strong>Your Task:</strong> Modify the code to print the exact phrase "Hello, Rust!".</p>`,
            starterCode: 'fn main() {\n    println!("Hello, World!");\n}',
            expected_output: 'Hello, Rust!'
        },
        2: {
            title: '2. Variables & Mutability',
            description: 'Understanding let and mut.',
            content: `<h2>Variables and Mutability</h2><p>Variables are immutable by default in Rust. Use the <code>mut</code> keyword to make them changeable.</p><p><strong>Your Task:</strong> Create a mutable variable <code>x</code>, assign it the value <code>5</code>, then change its value to <code>10</code> and print it.</p>`,
            starterCode: 'fn main() {\n    // Create a mutable variable, change it, and print it\n}',
            expected_output: '10'
        },
        3: {
            title: '3. Scalar & Compound Types',
            description: 'Integers, floats, tuples, and arrays.',
            content: `<h2>Scalar Types</h2><p>Rust has several built-in data types. <code>i32</code> is the default integer type.</p><p><strong>Your Task:</strong> Declare a variable <code>year</code> with the explicit type <code>i32</code> and the value <code>2025</code>, then print it.</p>`,
            starterCode: 'fn main() {\n    // Declare a variable with an explicit type and print it\n}',
            expected_output: '2025'
        },
        4: {
            title: '4. Functions',
            description: 'Defining and calling functions with arguments.',
            content: `<h2>Defining Functions</h2><p>Functions are defined with the <code>fn</code> keyword. They can return a value by using the <code>-></code> syntax.</p><p><strong>Your Task:</strong> Call the <code>get_magic_number</code> function and print its return value.</p>`,
            starterCode: 'fn get_magic_number() -> i32 {\n    42\n}\n\nfn main() {\n    // Call the function and print its result\n}',
            expected_output: '42'
        },
        5: {
            title: '5. Ownership & Borrowing',
            description: 'Grasping Rust\'s core memory safety principles.',
            badge: '🏆 Iron Badge',
            content: `<h2>Understanding Ownership</h2><p>When a variable goes out of scope, Rust frees the memory. When you pass a String to a function, ownership moves.</p><p><strong>Your Task:</strong> The code has an ownership error. Fix it by cloning the string so that you can still use it after calling the function.</p>`,
            expected_output: 'hello'
        },
        6: {
            title: '6. Control Flow',
            description: 'Using if, else, and loops.',
            content: `<h2>Conditional Logic</h2><p>Use <code>if</code>, <code>else if</code>, and <code>else</code> to control the flow of your program based on conditions.</p><p><strong>Your Task:</strong> Check if the number <code>7</code> is odd or even and print "Odd".</p>`,
            expected_output: 'Odd'
        },
        7: {
            title: '7. Slices',
            description: 'Referencing a contiguous sequence of elements.',
            content: `<h2>Repeating Actions</h2><p>Rust has several loop types. A <code>for</code> loop is great for iterating over a range.</p><p><strong>Your Task:</strong> Use a for loop to print the numbers from 1 to 3, each on a new line.</p>`,
            starterCode: 'fn main() {\n    // Use a for loop to print numbers 1, 2, and 3\n}',
            expected_output: '1\n2\n3'
        },
        8: {
            title: '8. Structs',
            description: 'Creating custom data types.',
            content: `<h2>Custom Data Types</h2><p>A <code>struct</code> is a custom data type that lets you package together and name multiple related values.</p><p><strong>Your Task:</strong> Create an instance of the <code>User</code> struct and print its <code>username</code>.</p>`,
            starterCode: 'struct User {\n    username: String,\n    active: bool,\n}\n\nfn main() {\n    // Create a User instance and print the username "admin"\n}',
            expected_output: 'admin'
        },
        9: {
            title: '9. Enums & Pattern Matching',
            description: 'Defining a type with a few definite values.',
            content: `<h2>Enumerations</h2><p>Enums allow you to define a type by enumerating its possible variants.</p><p><strong>Your Task:</strong> The <code>Direction</code> enum has four variants. Create a variable with the <code>South</code> variant and print "South".</p>`,
            expected_output: 'South'
        },
        10: {
            title: '10. The String Type',
            description: 'Working with growable, mutable, owned, UTF-8 encoded strings.',
            badge: '🏆 Iron+ Badge',
            content: `<h2>String Manipulation</h2><p>The <code>String</code> type is a growable, heap-allocated data structure. You can use methods like <code>.push_str()</code> to modify it.</p><p><strong>Your Task:</strong> Append " World" to the string 's' and print the result.</p>`,
            expected_output: 'Hello World'
        },
        11: {
            title: '11. Vectors',
            description: 'Storing a variable number of values next to each other.',
            content: `<h2>Collections with Vectors</h2><p>Vectors allow you to store a variable number of values next to each other.</p><p><strong>Your Task:</strong> Access and print the second element (index 1) of the vector.</p>`,
            expected_output: '20'
        },
        12: {
            title: '12. Hash Maps',
            description: 'Storing data with key-value pairs.',
            content: `<h2>Key-Value Storage</h2><p>Hash maps store data by mapping a key to a value.</p><p><strong>Your Task:</strong> Get and print the score for the "Blue" team from the hash map.</p>`,
            expected_output: '10'
        },
        13: {
            title: '13. Error Handling',
            description: 'Using Result and Option enums for robust code.',
            content: `<h2>Handling Potential Failures</h2><p>The <code>Result</code> enum is used for operations that can fail. It has two variants: <code>Ok</code> and <code>Err</code>.</p><p><strong>Your Task:</strong> Use a <code>match</code> statement to handle the <code>Result</code> and print the value inside the <code>Ok</code> variant.</p>`,
            expected_output: '100'
        },
        14: {
            title: '14. Generics',
            description: 'Writing code that works for multiple types.',
            content: `<h2>Handling Nullability</h2><p>The <code>Option</code> enum expresses that a value could be something or it could be nothing.</p><p><strong>Your Task:</strong> The function returns an <code>Option</code>. Use <code>.unwrap()</code> to get the value inside and print it. </p>`,
            expected_output: '5'
        },
        15: {
            title: '15. Traits',
            description: 'Defining shared behavior across different types.',
            badge: '🏆 Bronze Badge',
            content: `<h2>Shared Behavior</h2><p>A trait defines functionality a particular type has and can share with other types.</p><p><strong>Your Task:</strong> Call the 'summarize' method on the 'tweet' instance and print its summary.</p>`,
            expected_output: '1 new tweet from horse_ebooks'
        },
        16: {
            title: '16. Lifetimes',
            description: 'Ensuring references are valid for as long as needed.',
            content: `<h2>Organizing Code</h2><p>Modules let you organize code within a crate for readability and easy reuse.</p><p><strong>Your Task:</strong> Call the public function 'print_message' from the 'greetings' module.</p>`,
            starterCode: 'mod greetings {\n    pub fn print_message() {\n        println!("Module called!");\n    }\n}\n\nfn main() {\n    // Call the function from the module\n}',
            expected_output: 'Module called!'
        },
        17: {
            title: '17. Closures',
            description: 'Anonymous functions you can save in a variable.',
            content: `<h2>Anonymous Functions</h2><p>Closures are anonymous functions you can save in a variable or pass as arguments to other functions.</p><p><strong>Your Task:</strong> Call the closure 'add_one' with the value '5' and print the result.</p>`,
            expected_output: '6'
        },
        18: {
            title: '18. Iterators',
            description: 'Processing a sequence of items.',
            content: `<h2>Using External Code</h2><p>Cargo is Rust\'s build system and package manager. While we can\'t use it here, understanding its role is key.</p><p><strong>Your Task:</strong> This level is conceptual. Simply print the message "Cargo is awesome".</p>`,
            starterCode: 'fn main() {\n    // Print the required message\n}',
            expected_output: 'Cargo is awesome'
        },
        19: {
            title: '19. Smart Pointers',
            description: 'Understanding Box, Rc, and RefCell.',
            content: `<h2>Ensuring References are Valid</h2><p>Lifetimes ensure that references are valid for as long as we need them to be, preventing dangling references.</p><p><strong>Your Task:</strong> Call the 'longest' function and print the longest of the two string slices.</p>`,
            expected_output: 'The longest string is long string'
        },
        20: {
            title: '20. Final Project',
            description: 'Build a basic command-line tool.',
            badge: '🏆 Bronze+ Badge',
            content: `<h2>Congratulations!</h2><p>You\'ve finished the Rust basics! This is a final review of functions and strings.</p><p><strong>Your Task:</strong> Complete the 'final_message' function to return a 'String' with the value "Rust Quest Complete".</p>`,
            starterCode: 'fn final_message() -> String {\n    // Return the correct String\n}\n\nfn main() {\n    println!("{}", final_message());\n}',
            expected_output: 'Rust Quest Complete'
        }
    },
    'mysql': {
        1: {
            title: '1. SELECT Statement',
            description: 'Retrieving all data from a table.',
            content: `<h2>Introduction to SQL SELECT Statement</h2>

<p><strong>SELECT Statement:</strong> The <code>SELECT</code> statement in SQL is used to query and retrieve data from a database table. It allows you to choose which columns to view, filter rows, and organize data. When you want to retrieve all columns from a table, you can use the asterisk (*) symbol.</p>

<p><strong>Example:</strong> Select all columns from the <code>employees</code> table.</p>
<pre><code>SELECT * FROM employees;</code></pre>

<p>Explanation:</p>
<ul>
<li><code>SELECT *</code>: Retrieves all columns from the table.</li>
<li><code>FROM employees</code>: Specifies that we are querying the <code>employees</code> table.</li>
</ul>

<hr>

<h3>Your Task</h3>
<p>Write a query to select all columns from the <code>sample_users</code> table.</p>
`,
            starterCode: '-- Your task: Select all columns from the sample_users table.\n',
            expected_output: '[{"id":1,"name":"John","country":"USA"},{"id":2,"name":"Anna","country":"Germany"},{"id":3,"name":"Peter","country":"Canada"},{"id":4,"name":"Maria","country":"UK"},{"id":5,"name":"David","country":"USA"},{"id":6,"name":"Sophie","country":"France"},{"id":7,"name":"Carlos","country":"Mexico"},{"id":8,"name":"Mei","country":"China"},{"id":9,"name":"Ahmed","country":"Egypt"},{"id":10,"name":"Olga","country":"Russia"}]'
        },
        2: {
            title: '2. WHERE Clause',
            description: 'Filtering records based on a condition.',
            content: `<h2>SQL SELECT with WHERE Clause</h2>

<p><strong>WHERE Clause:</strong> The <code>WHERE</code> clause in SQL is used to filter records based on specific conditions. It allows you to retrieve only the rows that meet the criteria you specify. This is useful when you want to find a particular record or subset of records from a table.</p>

<p><strong>Example:</strong> Select employees from the <code>employees</code> table who work in the "HR" department.</p>
<pre><code>SELECT * 
FROM employees
<p>Explanation:</p>
<ul>
<li>This is useful for filtering records based on specific criteria, like departments, cities, or roles.</li>
</ul>

<hr>

<h3>Your Task</h3>
<p>Select the user with the <code>id</code> of 5 from the <code>sample_users</code> table.</p>


`,
            starterCode: '-- Your task: Select the user with the id of 5 from the sample_users table.\n',
            expected_output: '[{"id":5,"name":"David","country":"USA"}]'
        },
        3: {
            title: '3. AND, OR, NOT Operators',
            description: 'Combining multiple conditions.',
            content: `<h2>SQL Logical Operators: AND, OR, NOT</h2>

<p><strong>Logical Operators:</strong> In SQL, <code>AND</code>, <code>OR</code>, and <code>NOT</code> are used to combine or modify conditions in the <code>WHERE</code> clause. They help filter data based on multiple criteria.</p>

<ul>
<li><strong>AND:</strong> Returns rows only if all conditions are true.</li>
<li><strong>OR:</strong> Returns rows if at least one of the conditions is true.</li>
<li><strong>NOT:</strong> Negates a condition, returning rows where the condition is false.</li>
</ul>

<p><strong>Example Table:</strong> Consider a table <code>employees</code> with columns <code>id</code>, <code>name</code>, <code>department</code>, and <code>country</code>.</p>

<p><strong>Example Using AND:</strong> Select employees who work in the "IT" department and are from "USA".</p>
<pre><code>SELECT * 
FROM employees

<p><strong>Example Using OR:</strong> Select employees who are either in "Finance" or from "HR".</p>
<pre><code>SELECT * 
FROM employees


<p><strong>Example Using NOT:</strong> Select employees who are NOT in the "IT" department.</p>
<pre><code>SELECT * 
FROM employees


<hr>

<h3>Your Task</h3>
<p>Write a query to select a user named <code>"John"</code> who is also from <code>"USA"</code> using the <code>AND</code> operator.</p>

<pre><code>SELECT * 
FROM employees

<h3>Expected Output</h3>
<pre><code>id | name  | department | country
2  | John  | IT         | USA</code></pre>
`,
            starterCode: '-- Your task: Select a user where the name is \'John\' AND the country is \'USA\'.\n',
            expected_output: '[{"id":1,"name":"John","country":"USA"}]'
        },
        4: {
            title: '4. ORDER BY Clause',
            description: 'Sorting the result set.',
            content: `<h2>Sorting Results</h2><p>The <code>ORDER BY</code> keyword is used to sort the result-set in ascending (<code>ASC</code>) or descending (<code>DESC</code>) order.</p><p><strong>Your Task:</strong> Write a query to select all users, sorted by their name in ascending order.</p>`,
            starterCode: '-- Your task: Select all users and order them by name in ascending order.\n',
            expected_output: '[{"id":9,"name":"Ahmed","country":"Egypt"},{"id":2,"name":"Anna","country":"Germany"},{"id":7,"name":"Carlos","country":"Mexico"},{"id":5,"name":"David","country":"USA"},{"id":1,"name":"John","country":"USA"},{"id":4,"name":"Maria","country":"UK"},{"id":8,"name":"Mei","country":"China"},{"id":10,"name":"Olga","country":"Russia"},{"id":3,"name":"Peter","country":"Canada"},{"id":6,"name":"Sophie","country":"France"}]'
        },
        5: {
            title: '5. INSERT INTO',
            description: 'Adding new records to a table.',
            badge: '🏆 Iron Badge',
            content: `<h2>Adding Data</h2><p>The <code>INSERT INTO</code> statement is used to insert new records in a table.</p><p><strong>Your Task:</strong> Write a query to insert a new user named 'Test User' from 'Brazil' into the <code>sample_users</code> table.</p>`,
            starterCode: "-- Your task: Insert a new user with the name 'Test User' and country 'Brazil'.\n",
            expected_output: '[{"id":1,"name":"John","country":"USA"},{"id":2,"name":"Anna","country":"Germany"},{"id":3,"name":"Peter","country":"Canada"},{"id":4,"name":"Maria","country":"UK"},{"id":5,"name":"David","country":"USA"},{"id":6,"name":"Sophie","country":"France"},{"id":7,"name":"Carlos","country":"Mexico"},{"id":8,"name":"Mei","country":"China"},{"id":9,"name":"Ahmed","country":"Egypt"},{"id":10,"name":"Olga","country":"Russia"},{"id":11,"name":"Test User","country":"Brazil"}]'
        },
        6: {
            title: '6. NULL Values',
            description: 'Understanding how to handle NULLs.',
            content: `<h2>Modifying Data</h2><p>The <code>UPDATE</code> statement is used to modify the existing records in a table.</p><p><strong>Your Task:</strong> Write a query to update the country to "Canada" for the user with id 3 (Peter).</p>`,
            starterCode: '-- Your task: Update the user with id 3 to set their country to \'Canada\'.\n',
            expected_output: '[{"id":1,"name":"John","country":"USA"},{"id":2,"name":"Anna","country":"Germany"},{"id":3,"name":"Peter","country":"Canada"},{"id":4,"name":"Maria","country":"UK"},{"id":5,"name":"David","country":"USA"},{"id":6,"name":"Sophie","country":"France"},{"id":7,"name":"Carlos","country":"Mexico"},{"id":8,"name":"Mei","country":"China"},{"id":9,"name":"Ahmed","country":"Egypt"},{"id":10,"name":"Olga","country":"Russia"}]'
        },
        7: {
            title: '7. UPDATE Statement',
            description: 'Modifying existing records in a table.',
            content: `<h2>Removing Data</h2><p>The <code>DELETE</code> statement is used to delete existing records in a table.</p><p><strong>Your Task:</strong> Write a query to delete the user with id 10 (Olga) from the <code>sample_users</code> table.</p>`,
            starterCode: '-- Your task: Delete the user with id 10.\n',
            expected_output: '[{"id":1,"name":"John","country":"USA"},{"id":2,"name":"Anna","country":"Germany"},{"id":3,"name":"Peter","country":"Canada"},{"id":4,"name":"Maria","country":"UK"},{"id":5,"name":"David","country":"USA"},{"id":6,"name":"Sophie","country":"France"},{"id":7,"name":"Carlos","country":"Mexico"},{"id":8,"name":"Mei","country":"China"},{"id":9,"name":"Ahmed","country":"Egypt"}]'
        },
        8: {
            title: '8. DELETE Statement',
            description: 'Removing records from a table.',
            content: `<h2>Restricting Results</h2><p>The <code>LIMIT</code> clause is used to specify the number of records to return.</p><p><strong>Your Task:</strong> Write a query to select the first 5 users from the table.</p>`,
            starterCode: '-- Your task: Select all users but limit the result to 5 rows.\n',
            expected_output: '[{"id":1,"name":"John","country":"USA"},{"id":2,"name":"Anna","country":"Germany"},{"id":3,"name":"Peter","country":"Canada"},{"id":4,"name":"Maria","country":"UK"},{"id":5,"name":"David","country":"USA"}]'
        },
        9: {
            title: '9. LIMIT Clause',
            description: 'Restricting the number of rows returned.',
            content: `<h2>Aggregate Functions</h2><p>The <code>COUNT()</code> function returns the number of rows that matches a specified criterion.</p><p><strong>Your Task:</strong> Write a query to count the total number of users in the <code>sample_users</code> table.</p>`,
            starterCode: '-- Your task: Count the total number of users.\n',
            expected_output: '[{"count":10}]'
        },
        10: {
            title: '10. Aggregate Functions',
            description: 'Using MIN, MAX, COUNT, AVG, and SUM.',
            badge: '🏆 Iron+ Badge',
            content: `<h2>Pattern Matching</h2><p>The <code>LIKE</code> operator is used in a WHERE clause to search for a specified pattern in a column. The percent sign (%) represents zero, one, or multiple characters.</p><p><strong>Your Task:</strong> Write a query to find any user whose name starts with "A".</p>`,
            starterCode: '-- Your task: Find any user whose name starts with the letter \'A\'.\n',
            expected_output: '[{"id":2,"name":"Anna","country":"Germany"},{"id":9,"name":"Ahmed","country":"Egypt"}]'
        },
        11: {
            title: '11. LIKE Operator',
            description: 'Searching for a specified pattern in a column.',
            content: `<h2>Multiple Values</h2><p>The <code>IN</code> operator allows you to specify multiple values in a WHERE clause.</p><p><strong>Your Task:</strong> Write a query to select all users located in "USA" or "UK".</p>`,
            starterCode: '-- Your task: Select all users who are from the \'USA\' or the \'UK\'.\n',
            expected_output: '[{"id":1,"name":"John","country":"USA"},{"id":4,"name":"Maria","country":"UK"},{"id":5,"name":"David","country":"USA"}]'
        },
        12: {
            title: '12. Wildcards',
            description: 'Using % and _ with the LIKE operator.',
            content: `<h2>Selecting a Range</h2><p>The <code>BETWEEN</code> operator selects values within a given range. The values can be numbers, text, or dates.</p><p><strong>Your Task:</strong> Write a query to select users with an ID between 3 and 7 (inclusive).</p>`,
            starterCode: '-- Your task: Select users with an id BETWEEN 3 AND 7.\n',
            expected_output: '[{"id":3,"name":"Peter","country":"Canada"},{"id":4,"name":"Maria","country":"UK"},{"id":5,"name":"David","country":"USA"},{"id":6,"name":"Sophie","country":"France"},{"id":7,"name":"Carlos","country":"Mexico"}]'
        },
        13: {
            title: '13. IN & BETWEEN Operators',
            description: 'Specifying multiple values or a range.',
            content: `<h2>Renaming Columns</h2><p>SQL aliases are used to give a table, or a column in a table, a temporary name using the <code>AS</code> keyword.</p><p><strong>Your Task:</strong> Write a query that selects the name column but displays it as "UserName".</p>`,
            starterCode: '-- Your task: Select the name column and give it an alias of "UserName".\n',
            expected_output: '[{"UserName":"John"},{"UserName":"Anna"},{"UserName":"Peter"},{"UserName":"Maria"},{"UserName":"David"},{"UserName":"Sophie"},{"UserName":"Carlos"},{"UserName":"Mei"},{"UserName":"Ahmed"},{"UserName":"Olga"}]'
        },
        14: {
            title: '14. Aliases',
            description: 'Giving a table or column a temporary name.',
            content: `<h2>The AVG() Function</h2><p>The <code>AVG()</code> function returns the average value of a numeric column.</p><p><strong>Your Task:</strong> Write a query to calculate the average price of all products in the <code>sample_products</code> table.</p>`,
            starterCode: '-- Your task: Calculate the average price of all products.\n',
            expected_output: '[{"avg":"400.3125000000000000"}]'
        },
        15: {
            title: '15. INNER JOIN',
            description: 'Combining rows from two or more tables.',
            badge: '🏆 Bronze Badge',
            content: `<h2>The SUM() Function</h2><p>The <code>SUM()</code> function returns the total sum of a numeric column.</p><p><strong>Your Task:</strong> Write a query to calculate the total price of all products in the <code>sample_products</code> table.</p>`,
            starterCode: '-- Your task: Calculate the sum of all product prices.\n',
            expected_output: '[{"sum":"1601.25"}]'
        },
        16: {
            title: '16. LEFT & RIGHT JOIN',
            description: 'Returning all rows from one table and matched from another.',
            content: `<h2>Grouping Results</h2><p>The <code>GROUP BY</code> statement groups rows that have the same values into summary rows. It is often used with aggregate functions.</p><p><strong>Your Task:</strong> Write a query to count the number of users in each country.</p>`,
            starterCode: '-- Your task: Count the number of users for each country and group the results by country.\n',
            expected_output: '[{"count":1,"country":"Canada"},{"count":1,"country":"China"},{"count":1,"country":"Egypt"},{"count":1,"country":"France"},{"count":1,"country":"Germany"},{"count":1,"country":"Mexico"},{"count":1,"country":"Russia"},{"count":1,"country":"UK"},{"count":2,"country":"USA"}]'
        },
        17: {
            title: '17. GROUP BY Clause',
            description: 'Grouping rows that have the same values.',
            content: `<h2>Filtering Groups</h2><p>The <code>HAVING</code> clause was added to SQL because the WHERE keyword could not be used with aggregate functions.</p><p><strong>Your Task:</strong> Write a query that counts users per country, but only shows countries with more than 1 user.</p>`,
            starterCode: '-- Your task: Count users per country, but only show countries HAVING a count greater than 1.\n',
            expected_output: '[{"count":2,"country":"USA"}]'
        },
        18: {
            title: '18. HAVING Clause',
            description: 'Filtering groups based on a condition.',
            content: `<h2>Congratulations!</h2><p>This is a review of what you have learned.</p><p><strong>Your Task:</strong> Select the names of users from 'USA' and sort them in descending order.</p>`,
            starterCode: '-- Your task: Select names of users from USA, sorted descending.\n',
            expected_output: '[{"name":"John"},{"name":"David"}]'
        },
        19: {
            title: '19. Subqueries',
            description: 'Nesting a SELECT statement inside another statement.',
            content: `<h2>Congratulations!</h2><p>This is a review of what you have learned.</p><p><strong>Your Task:</strong> Find the most expensive product in the <code>sample_products</code> table.</p>`,
            starterCode: '-- Your task: Find the most expensive product.\n',
            expected_output: '[{"product_id":1,"product_name":"Laptop","price":"1200.00"}]'
        },
        20: {
            title: '20. Final Project',
            description: 'Write a query to join multiple tables and filter results.',
            badge: '🏆 Bronze+ Badge',
            content: `<h2>Congratulations!</h2><p>You\'ve finished the MySQL basics! This is a final review query.</p><p><strong>Your Task:</strong> Print the phrase "MySQL Quest Complete".</p>`,
            starterCode: '-- Your task: Select the string "MySQL Quest Complete".\n',
            expected_output: '[{"?column?":"MySQL Quest Complete"}]'
        }
    }
};

