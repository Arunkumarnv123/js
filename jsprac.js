1) This code does not execute properly. Try to figure out why.
Ans:- 
function multiply(a, b){
  return a * b;
}


2)The function is not returning the correct values. Can you figure out why?
Example (Input --> Output ):
3 --> "Earth"

Ans:- 

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
  }
  
  return name;
}

3) Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

Ans:- 

function solution(str){
p='';
for (i=0;i<str.length;i++){
  p+=str[str.length-i-1];
}
  return p;
}



4) Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
Ans:- 

function evenOrOdd(number) {
  if (number%2==0)
  
    return "Even";
 
  return "Odd";
 
}


5) Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
Ans:- 

function countSheeps(sheep) {
  // TODO
 var  c=0;
    for(var i of sheep)
        if (i==true)
            c+=1;
    return c;
}


6) Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

Ans:- 

function getCount(str) {
  var c=0;
  for (var i of str){

    if ((i=='a') ||(i=='e') ||(i=='i') ||(i=='o') ||(i=='u') ||(i=='A') ||(i=='E') ||(i=='I') ||(i=='O') ||(i=='U') )
{
c+=1;
  
}  }
  return c;
}

7)Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
Ans:- 

function greet(name){
  if(name === "Johnny")
    return "Hello, my love!";
  return "Hello, " + name + "!";

}



8)   Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
REFACTORING

Ans:- 

function isDivisible(n, x, y) {
if ((n%x==0 )&& (n%y==0))
  return true;
  return false;
}


9)In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

Ans:- 

function makeNegative(num) {
  // Code?
if (num<=0) return num;
return -num
}



10)
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
Ans:- 

class SmallestIntegerFinder {
  findSmallestInt(args) {
    var s=99999999;
    for (var i of args){
      if (i<s) s=i;
    }
return s;
  }
}


11) Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

Ans:- 

var summation = function (num) {
  // Code here
return (num*(num+1)/2)
}


12)It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
Ans:- 

function getAverage(marks){
s=0;
  for (var i of marks)
    s+=i;
  return Math.floor(s/marks.length)
}


13) Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

Ans:- 

const rps = (p1, p2) => {
if (p1==p2) return "Draw!";

  let dicto={"scissors":"paper","rock":"scissors","paper":"rock" };
  if (p1==dicto[p2])
    return "Player 2 won!";
    return "Player 1 won!";
};


14)  It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

Ans:- 

 function removeChar(str){
 //You got this!
return(str.slice(1,str.length-1));
};


14) Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

Ans:- 

 function basicOp(operation, value1, value2)
{
 if (operation=='+')
return value1+ value2;
  if( operation=='-')
return value1- value2;
  if (operation=='*')
return value1* value2;
  if (operation=='/')
return value1/ value2;
  
}


15)  Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

Ans:- 

 function repeatStr (n, s) {
  let t='';
  for (let i=0;i<n;i++)
    t+=s;
  return t;
}


16) Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they"]

Ans:- 

function stringToArray(string){
return string.split(" ");
}


17) Write a function that removes the spaces from the string, then return the resultant string.

Examples:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"
Ans:- 

function noSpace(x){
var ar=x.split(" ");
  t=""
  for (var a of ar)
  t+=a;
  return t;
}


18)  Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
Ans:- 

function maps(x){
return x.map(num=>num*2)
}


19) A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)

Ans:- 

function hero(bullets, dragons){
return (bullets>=dragons*2);
}


20) I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

Ans:- 

function arrayPlusArray(arr1, arr2) {
  s=0
  for(var i of arr1)
    s+=i;
  for(var i of arr2)
    s+=i;
  return s; //something went wrong
}


21)Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

Ans:-
 
function moveZeros(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {

      [arr[i], arr[i - count]] = [arr[i - count], arr[i]];
    } 
else {
      
      count++;
    }
  }
return arr;
}


22)  Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

Ans:- 

var humanYearsCatYearsDogYears = function(humanYears) {
  let ca;
  let da;
  if(humanYears===1){
    return [humanYears,15,15];
  }
  if(humanYears===2){
    return [humanYears,24,24];
  }
  let ex=humanYears-2;
  let ecy=ex*4;
  let edy=ex*5;
  return [humanYears,24+ecy,24+edy];
}



23)Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
Example 1:
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]
Example 2:
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []
Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: In some languages r must be without duplicates.

Ans:-

function inArraySorted(a1, a2) {
  a1.sort();
  const r = [];
  for (const s of a1) {
    if (inArray(s, a2)) {
      r.push(s);
    }
  }
  return r;
}
 

24)  Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

Ans:- 

function points(games) {
  s=0
  for (var i of games){
    p=i.split(":");
    if (p[0]>p[1])
    s+=3;
    if (p[0]==p[1])
    s+=1;
    
  }
  return s
}



25)The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

Ans:- 
function century(year) {
  return Math.ceil(year/100);
}
