// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "jjjSteved"
let lastName = "Jibola"
let country = "Kenya"
let city = "Lagos"
let age = 46
let isMarried = true

// Check if type of '10' is equal to 10
console.log(typeof '10' == 10);

// Check if parseInt('9.8') is equal to 10
console.log(typeof '9.8' == 10);

// Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
2<1
20>2
4>2
// Write three JavaScript statement which provide falsy value.
console.log(8<1);
// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log(4 > 4)
console.log(4 >= 4)
console.log(4 < 4)
console.log(4 <= 4)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

// Find the length of python and jargon and make a falsy comparison statement.
let string1 = "python" 
let string2 = "jargon"
string1.length*2 == string2.length*4500

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

// There is no 'on' in both dragon and python
string1 = "dragon"
string2 = "python"
console.log(string1.includes("on"));
console.log(string2.includes("on"));

// Use the Date object to do the following activities
let date = new Date()
// What is the year today?
let year = date.getFullYear();
// What is the month today as a number?
let month = date.getMonth();
// What is the date today?
date.getDate()
// What is the day today as a number?
date.getDay()
// What is the hours now?
date.getHours()
// What is the minutes now?
date.getMinutes()
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(Math.round(Date.now() / 1000))


// Exercises: Level 2
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// area = 0.5 x b x h
let base = prompt("Enter the base of the triangle")
let height = prompt("Enter the height of the triangle")
area = base * height

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
let a = prompt("Enter a number")
let b = prompt("Enter a number")
let c = prompt("Enter a number")
perimeter = a + b + c

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// Calculate the slope, x-intercept and y-intercept of y = 2x -2

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// Compare the slope of above two questions.

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
// If the length of your name is greater than 7 say, your name is long else say your name is short.

// Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of years you live: 100
// You lived 3153600000 seconds.
// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
// Exercises: Level 3
// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05