//SAMPLE1 - convert the following to Camel Case notation:
let someMonth
function theMonth() {
    let currentMonth
    let summerMonth
    let myLibraryFunction
}

//SAMPLE2 - Provide an example of a numeric literal expression, a string literal expression, a boolean literal expression and a null literal expression.
42        // numeric literal
"hello"   // string literal
true      // boolean literal
null      // null literal

//SAMPLE3 - Provide two examples of complex / variable expressions.
let x = 5 + 10; // complex expression
let y = x * 2; // variable expression

//SAMPLE4 - Declare (but do not assign) 9 variables for the followign identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You.
let firstName;
let lastName;
let address;
let city;
let state;
let zipCode;
let yourAge;
let referralSource;
let mayWeContactYou;

//SAMPLE5 - Declare and assign 3 of the 9 variables from SAMPLE4 and demostrate three ways for declaring and assigning values to those variables.
let firstName = "John"; // declaration and assignment with let
const lastName = "Doe"; // declaration and assignment with const
var zipCode = 92139;  // declaration and assignment for zipCode   

//SAMPLE6 - Create a variable.  Add a number and a string and display the coerced results in the browser console.
let result = 5 + " days a week"; // coerced to string
console.log(result); // Output: "5 days a week"

//SAMPLE7 - Create two variables.  For the first variable, add a Boolean and a string and display the coerced results in the browser console.  For the second variable, add a Boolean and a number and display the coerced results in the browser console.
//For the second variable, add a number and a Boolean and display the coerced results.
let firstVariable = true + " is the answer"; // coerced to string
console.log(firstVariable); // Output: "true is the answer"
let secondVariable = false + 5; // coerced to number
console.log(secondVariable); // Output: 5

//SAMPLE 8 - The sample string literal is not valid because the ' in I'm is not escamped.  Below is the correct string literal:
let something = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
console.log(something);  // Output: Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."

//SAMPLE9 - Create a variable that produces a null value in the console window.  Then, create a variable that produces an undefined value in the console window.
let nullVariable = null;
console.log(nullVariable); // Output: null
let undefinedVariable;
console.log(undefinedVariable); // Output: undefined

//SAMPLE10 - Use the unary tyeof operator on various literals to return the following types within the console window:  string, number, Boolean, object, and undefined.
console.log(typeof "Hello"); // Output: string
console.log(typeof 5); // Output: number
console.log(typeof true); // Output: Boolean
console.log(typeof null); // Output: object
console.log(typeof undefined); // Output: undefined

//SAMPLE11 - Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:
alert("Hello " + "Ridder Manzanet" + ", welcome to the JavaScript class");

//SAMPLE12 - Declare a variable called name and set it equal to your name.  Substitute your name in the previous alert string with a variable instead.
let name = "Ridder Manzanet";
alert("Hello " + name + ", welcome to the JavaScript class");

//SAMPLE13 - Declare a variable called course and set it equal to "JavaScript".  Rework the alert string so that it displays the string of text but using the variables course instead of hard coded text.
let course = "JavaScript";
let name = "Hello Ridder Manzanet, ";
let welcome = "welcome to the ";
let classText = " class";
alert(name + welcome + course + classText);

//SAMPLE14 - Rework the above string so that a line break is added right before the word "Welcome".  Your alert box should display as follows:
Hello Zak Ruvalcaba.
Welcome to the JavaScript class!
let name = "Zak Ruvalcaba.";
let course = '\n' + "Welcome to the JavaScript class!";
alert(name + course);

//SAMPLE15 - Replace the hardcoded string of your name with a prompt that asks the user for their name.  The prompt's response will be captured in the name variable.
let name = prompt("Please enter your name");
let course = '\n' + "Welcome to the JavaScript class!";
alert("Hello " + name + course);

//SAMPLE16 - Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking.  The prompt's response will be captured in the course variable.
let name = prompt("Please enter your name");
let course = prompt("Please enter the class you are taking");
let welcome = '\n' + "Welcome to the ";
let classText = " class!";
alert("Hello " + name + welcome + course + classText);

//SAMPLE17 - Declare a variable called x and assign it a value of 10.
//Declare a variable called y and assign it a value of 20.
//Display the sum of those two numbers in the console window.
let x = 10;
let y = 20;
console.log(x + y); // Output: 30

//SAMPLE18 - Declare a variable called x and assign it a value of 20.
//Add and assign 20 to that variable and display the result in the console window.
//The result should be 40.
let x = 20;
x += 20;
console.log(x); // Output: 40

//SAMPLE19 - Declare a variable called x and assign it a value of 20.
//Multiply and assign 5 to that variable and display the result in the console window.
//The result should be 100.
let x = 20;
x *= 5;
console.log(x); // Output: 100

//SAMPLE20 - Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
//Divide and assign 1 to that variable and display the result in the console window.
//The result should be 2.  If you get 6.66 try again.
let x = 20 % 3;
x /= 1;
console.log(x); // Output: 2

//SAMPLE21 - Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
let a = 3;
let b = 20;
let c = 35;
console.log(a < b && b < c); // Output: true

//SAMPLE22 - Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window.  The application cannot use the same operators used in the previous application.
let d = 10;
let e = 2;
let f = 5;
console.log(d < e || e > f); // Output: false