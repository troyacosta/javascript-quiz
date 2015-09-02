var prompt = require('prompt-sync').prompt;
var correct = 0;

console.log('Let\'s take a short quiz to test your knowledge. What\'s your name?');
var name = prompt();
start = new Date();
console.log('Hi ' + name + ' \, let\'s get started!');
console.log('What should be the first tag at the top of your html file? head, html, or doctype?');
var answer = prompt();
if (answer.toLowerCase() === 'doctype') {
    correct++
    console.log('That\'s correct!');
} else {
    console.log('Sorry, that\'s incorrect. The correct answer is doctype.');
}
console.log('Which \'H\' tag will give you the biggest font? h1, h2, or h6?');
var answer = prompt();
if (answer.toLowerCase() === 'h1') {
    correct++
    console.log('That\'s correct!');
} else {
    console.log('Sorry, that\'s incorrect. The correct answer is h1.');
}
console.log('How many times should you use an ID? one, two, or three?');
var answer = prompt();
if (answer.toLowerCase() === 'one') {
    correct++
    console.log('That\'s correct!');
} else {
    console.log('Sorry, that\'s incorrect. The correct answer is one.');
}
console.log('What type of element is a \"span\"? Block, inline, or floated?');
var answer = prompt();
if (answer.toLowerCase() === 'inline') {
    correct++
    console.log('That\'s correct!')
} else {
    console.log('Sorry, that\'s incorrect. The correct answer is inline');
}
console.log('Can you style elements in your html? Yes or no.');
var answer = prompt();
if (answer.toLowerCase() === 'yes') {
    correct++
    console.log('That\'s correct, but you shouldn\'t!');
} else {
    console.log('Sorry, that\'s incorrect. The correct answer is yes.');
}
console.log('Would you use \"#pricing\", \"pricing\", \".pricing\" as a selector in your CSS if you were trying to target a class named \"pricing\"?');
var answer = prompt();
if (answer.toLowerCase() === '.pricing') {
    correct++
    console.log('That\'s correct!');
} else {
    console.log('Sorry, that\'s incorrect. The correct answer is .pricing.');
}
console.log('If you apply a style to an element in CSS but then apply an inline style to that element in the html file, which styling will win? CSS or inline?');
var answer = prompt();
if (answer.toLowerCase() === 'inline') {
    correct++
    console.log('That\'s correct! But again, dont do this.');
} else {
    console.log('Sorry, that\'s incorrect. The correct answer is inline.');
}
console.log('Can variables be used in CSS when working with SASS? Yes or no.');
var answer = prompt();
if (answer.toLowerCase() === 'yes') {
    correct++
    console.log('That\'s correct!');
} else {
    console.log('Sorry, that\'s incorrect. The correct answer is yes.');
}
console.log('When using a media quary that specifies a \"max-width of 768px\", does this mean that its styles will be applies \'below\' or \'above\' 768px?');
var answer = prompt();
if (answer.toLowerCase() === 'below') {
    correct++
    console.log('That\'s correct!');
} else {
    console.log('Sorry, that\'s incorrect. The correct answer is below.');
}
console.log('If you wanted an element to not be visable, but yet stay in the normal document flow, would you style it with \"display:none\" or \"visibility:hidden\"? You can answer none or hidden.');
var answer = prompt();
if (answer.toLowerCase() === 'hidden') {
    correct++
    console.log('That\'s correct!');
} else {
    console.log('Sorry, that\'s incorrect. The correct answer is hidden.');
}
console.log('Once a value has been assigned to a variable, can it be changed? Yes or no.');
var answer = prompt();
if (answer.toLowerCase() === 'yes') {
    correct++
    console.log('That\'s correct!');
} else {
    console.log('Sorry, that\'s incorrect. The correct answer is yes.');
}
console.log('What would \"!true || false\" evaluate to?');
var answer = prompt();
if (answer.toLowerCase() === 'false') {
    correct++
    console.log('That\'s correct!');
} else {
    console.log('Sorry, that\'s incorrect. The correct answer is false.');
}
console.log('Can a variable declared inside a function be used outside of the function? Yes or no.');
var answer = prompt();
if (answer.toLowerCase() === 'no') {
    correct++
    console.log('That\'s correct!');
} else {
    console.log('Sorry, that\'s incorrect. The correct answer is no.');
}
console.log('If you declare a variable but don\'t assign it a value, what will it return when called? Null, undefined, or NaN?');
var answer = prompt();
if (answer.toLowerCase() === 'undefined') {
    correct++
    console.log('That\'s correct!');
} else {
    console.log('Sorry, that\'s incorrect. The correct answer is undefined.');
}
console.log('Are \"null\" and \"undefined\" javascript data types? Yes or no.');
var answer = prompt();
if (answer.toLowerCase() === 'yes') {
    correct++
    console.log('That\'s correct!');
} else {
    console.log('Sorry, that\'s incorrect. The correct answer is yes.');
}
end = new Date();
var time = (end - start) * .001;
time = Math.floor(time);
var result = correct / 15 * 100;
result = Math.floor(result);
if (result >= 70) {
    console.log('Congrats ' + name +'! In '+time+' seconds you answered ' + correct + ' correctly and passed with a score of ' + result + '%. Now go have a beer.');
} else {
    console.log('Dammit ' + name + '. In '+time+' seconds you only answered ' + correct + ' correctly and failed with a score of ' + result + '%. Maybe you should look into being a car salesman.');
}



