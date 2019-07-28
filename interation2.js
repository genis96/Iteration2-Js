
/* Write a function called "getStringLength".

Given a string, "getStringLength" returns the length of the given string.

Notes:

Do NOT use any native 'length' methods.
You might consider using 'substring' or 'slice' as alternatives.
var output = getStringLength('hello');
console.log(output); // --> 5
*/
/* Pseudo
I need to keep track of the string count w/o using length.. 
I also need to be able to have the index start at 0
I need to determine the conditions of the loop iterating over the string
    - if the value is undefined then the loop should stop
I need to count inside the loop, use the count variable and index variable

1. create count variable
2. Create index variable 
3. Using a while loop: while, string @ index is NOT !== undefined -->  count++, index++
4. return count 

*/
function getStringLength(string) {
    // your code here
    let count = 0;
    let index = 0;

    while(string[index] !== undefined) {
        count ++;
        index++;
    }
    return count;
  }

var output = getStringLength('hello');
console.log(output); // --> 5

//Another Way
function getStringLength(string) {
    var count = 0;

    while(string[count] !== undefined) {
        count++;
    }
    return count;
}

var output = getStringLength('hello');
console.log(output); // --> 5


//Another Way

function getStringLength(string) {
    var count = 0;
    for(var i in string) {
        count++;
    }
    return count;
}
var output = getStringLength('hello');
console.log(output); // --> 5


































































