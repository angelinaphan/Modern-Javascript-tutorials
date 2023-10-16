// tutorial #2

/* let age = 25;
let year = 2019;

console.log(age, year);

age = 30;
console.log(age);

const points = 100;
points = 50;
console.long(points);

var score = 75;
console.log(score); */

/*
// strings
console.log('hello, world');

let email = 'user@gmail.com';
console.log(email);

// string concatenation
let firstName = 'Angelina';
let lastName = 'Phan';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[0]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index); */

/*
// common string methods
let email = 'angelina@gmail.com';

// let result = email.lastIndexOf('n');

// let result = email.slice(0,5);

// let result = email.substr(2,10);

// let result = email.replace('e', 'i');

let result = email.replace('g', 'i');

console.log(result); */

// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

// math operators +, -, *, /, **, %

// console.log(10 / 2);
// let result = radius % 3;
// let result = pi * radius**2;

// order of operation - B I D M A S

// let result = 5 * (10 - 3)**2;

// console.log(result);

// let likes = 10;

// likes = likes + 1;
// likes++;
// likes--;

// likes += 10;
// likes -= 5;
// likes *= 2;
// likes /= 2;

// console.log(likes);

// NaN - not a number

// console.log(5 / 'hello');
// console.log(5 * 'hello');

// let result = 'the blog has ' + likes + ' likes';
// console.log(result);


/* // template strings
const title = 'best reads of 2019';
const author = 'mario';
const likes = 30;

// concatenation way 
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

// template string way
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;

console.log(html); */


// let ninjas = ['shaun', 'rya', 'chun-li'];

// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// console.log(ninjas.length);

// array methods

// let result = ninjas.join(',');
// let result = ninjas.indexOf('chun-li');
// let result = ninjas.concat(['ken', 'crystal']);
// let result = ninjas.push('ken');
// result = ninjas.pop();

// console.log(result);

// let age = null;

// console.log(age, age + 3, `the age is ${age}`);


// booleans & comparisons
// console.log(true, false, "true", "false");

// methods can return booleans
// l et email = 'angelina@gmail.com';
// let names = ['mario', 'luigi', 'toad'];

// let result = email.includes('!');
// let result = names.includes('bowser');

// console.log(result);

// comparison operators
// let age = 25;

/* console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25); */

/* let name = 'shaun';

console.log(name == 'shaun');
console.log(name == 'shaun');
console.log(name > 'crystal');
console.log(name > 'shaun');
console.log(name > 'crystal'); */

// let age = 25;

// loose comparison (different types can still be equal)

// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

// strict comparison (different types cannot be equal)
/* console.log(age === 25);
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25'); */


//type conversation 
// let score = '100';

// score = Number(score);
// console.log(score +1);
// console.log(typeof score);

// let result = Number('hello');
// let result = String(50);
// let result = Boolean(0);

// let result = Boolean('');

// console.log(result, typeof result);


// tutorial #3

// for loops

/* for(let i = 0; i < 5; i++){
  console.log('in loop:', i);
}

console.log('loop finished'); */

/* const  names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){
  // console.log(names[i]);
  let html = '<div>${names[i]}</div>';
  console.log(html);
} */

// while loops
// const names = ['shaun', 'mario', 'luigi'];
// let i = 0;

// while(i < 5){
// console.log('in loop: ', i);
//  i++;
// }

/* let i = 0;
while(i < names.length){
  console.log(names[i]);
  i++;
} */

// do while loops

/* let i = 5;

do {
  console.log('val of i is: ', i);
  i++;
} while(i < 5); */


// if statements
/* const age = 25;

if(age > 20){
  console.log('you are over 20 years old');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if(ninjas.length > 3){
  console.log("that's a lot of ninjas");
} */

// else if statements      // logical operatos - OR || and AND &&
/* const password  = 'p@ss12'; 

if(password.length >= 12 && password.includes('@')){
  console.log('that password is mighty strong');
} else if(password.length >= 8 || password.includes('@') && password.length > 5){
  console.log('that password is strong enough!');
} else {
  console.log('password is not strong enough!');
} */


// logical NOT (!)

/* let user = false;

if(!user){
  console.log('you must be logged in to continue');
}

console.log(!true); 
console.log(!false); */


// break and continue

/* const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){

  if(scores[i] === 0){
    continue;
  }

  console.log('your score: ', scores[i]);

  if(scores[i] === 100){
    console.log('congrats, you got the top score!');
    break;
  }
  
} */


// switch statements
// const grade = 'D';


// using if statements
/* if(grade === 'A'){

  { else if(grade === 'B')}

  { else if(grade === 'C')}
  
  { else if(grade === 'D')}
  
  { else if(grade === 'E')}
} */ 


// tutorial #4
  // function expression
 /* const speak = function(){
    console.log('good day!');
  }; */


// greet();
// greet();
// greet();

/* speak();
speak();
speak();

// function declaration
function greet(){
    console.log('hello there');
} */

// arguments & parameters

/* const speak = function(name = 'angie', time = 'night'){
  console.log(`good ${time} ${name}`);
};

speak();
speak('shaun'); */

// returing values

/* const speak = function(name = 'angie', time = 'night'){
  console.log(`good ${time} ${name}`);
}; */

/* const calcArea = function(radius){
  let area = 3.14 * radius**2;
} */

// arrow function
/* const calcArea = radius => 3.14 * radius**2;

const area = calcArea(5);
console.log('area is:', area); */

// practise arrow functions

/* const greet = function(){
  return 'hello, world';
} */

// const greet = () => 'hello, world';
// const result = greet();
// console.log(result);

/* const bill = function(products, tax){
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i] + products[i] * tax;
  }
  return total;
} */

/* const bill = (products, tax) => {
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(bill([10, 15, 30], 0.2)); */

/* const name = 'angie';

//functions
const greet = () => 'hello';

let resultOne = greet();
console.log(resultOne);


// methods
let resultTwo = name.toUpperCase();
console.log(resultTwo); */


// tutorial 5

// object literals

/* let user = {
  name: 'angie', 
  age: 18,
  email: 'angelina@gmail.com',
  location: 'nj',
  blogs: ['miffy', 'angelic']
};

console.log(user);
console.log(user.name);

// user.age = 82;
console.log(user.age);

console.log(user['location']);
user['name'] = 'ang';
console.log(user['name']);

console.log(typeof user); */

// object literals
/* let user = {
  name: 'angie', 
  age: 18,
  email: 'angelina@gmail.com',
  location: 'nj',
  blogs: ['miffy', 'angelic'],
  login: function(){
    console.log('the user logged in');
  },
  logout: function(){
    console.log('the user logged out');
  },
  logBlogs: function(){
    // console.log(this.blogs);
    console.log('this user has written the following blogs:');
    this.blogs.forEach(blog => {
    console.log(blog);
    })
    console.log(this);
  }
};

user.logBlogs();
console.log(this); */


// math object
/* console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100)); */


// tutorial 6
// const para = document.querySelector('body > h1');

// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// console.log(errors);

// get an element by ID
/* const title = document.getElementById('page-title');
console.log(title);

// get elements by thier class name
const errors = document.getElementsByClassName('.error');
console.log(errors);
console.log(errors[0]); */

// get elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

// const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'angie phan';

/* const paras = document.querySelectorAll('p');
paras.forEach(para => {
  console.log(para.innerText);
  para.innerText += ' new text';
}); */

/* const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.angelinaphan.com');
link.innterText = 'the net to angie phan web';

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: blue;'); */

/* const title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px;');

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'lightblue';
title.style.fontSize = '60px';
title.style.margin = ''; */

const paras = document.querySelectorAll('p');

paras.forEach(p => {
  if(p.textContent.includes('error')){
    p.classList.add('error');
  }
  if(p.innerText.includes('success')){
    p.classList.add('success');
  }
});

const title = document.querySelector('.title');

title.classList.toggle('test');
title.classList.toggle('test');