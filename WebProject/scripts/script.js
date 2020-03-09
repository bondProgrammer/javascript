/******************
Variables and Data types 
Datatypes:
    Number
    Strings
    Boolean
    UnDefined
    NaN
    null
Valid variablename ebc,ecb2,_as,as_as,$as ,$_as
*/
// var firstName = 'Pawan';
// console.log(firstName);

// var lastName = 'Khatri';
// console.log(lastName);

// var fullAge = true ;
// console.log(fullAge);




/******************
Variables mutation and type coersion 
*/

// var firstName = 'Pawan';
// var job , isMarried , firstName , lastanme ;
// firstName = prompt("What is your firstName ?");
// lastName = prompt("What is your LastName ?");
// job = 'Developer';
// isMarried = false;

// console.log(firstName + ' '+ lastName + ' is a ' + job +
//  '. And is he married ? ' + isMarried);

// //  dynamic Typing
// //  isMarried = 'yes';
//  alert(firstName + ' '+ lastName + ' is a ' + job +
//  '. And is he married ? ' + isMarried);

/******************
Basic Operator
*/

// var yearJohn = 2019 - 22;
// console.log(yearJohn);
// let yearJohn1;
// console.log(typeof(yearJohn1)); //number
// console.log(typeof yearJohn1); //undefined

/****************** 
    Truthy Values and falsy values 
*/

//Flasy values : Undefined , null , 0 , '' , NaN

// thruth Values : != falsey avlues

/**
 * calling function through array values 
 */

// function pawan() {
//     console.log("pawan");
// }

// function sahil() {
//     console.log("sahil");
// }

// var arr = ["hello","world",213,,,];
// console.log(arr)

// console.log("-------------");
// var arr1 = [1,2,3,4,5];
// console.log(arr.concat(arr1));

// console.log("-------------");
// console.log(arr.fill(100,1,123));

// console.log("---------filter----");
// console.log(arr.filter(hello));

// function hello(ele) {
//     return ele == 100;
// }

// console.log("-------------");
// var myImage = document.querySelector('img');

// myImage.onclick = function(){
//     let mySrc= myImage.getAttribute('src');
//     if(mySrc === 'images/download.jpeg'){
//         myImage.setAttribute('src','images/image2.jpeg');
//         myImage.style.border ="thick solid #0000FF";
//     }
//     else{
//         myImage.setAttribute('src','images/download.jpeg');
//         myImage.style.border ="none";
//     }
// }

// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');

// function setUserName() {
//     let myName = prompt('Please enter your name.');
//     if(!myName || myName === null ){
//         setUserName();
//     }else{
//         localStorage.setItem('name', myName);
//         myHeading.textContent = 'Mozilla is cool, ' + myName;
//     }
// }

//   if(!localStorage.getItem('name')){
//     setUserName();
// }else {
//     let storedName = localstorage.getItem('name');
//     myHeading.textContent = 'Welocme Mozilla is cool with '+ storedName ;
// }
// myButton.onclick =function(){
//     console.log("Button Click");
//     setUserName();
// }