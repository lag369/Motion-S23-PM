import { gsap } from "gsap";

//Keywords - to store data

//var older avoid
//const new ES6 cannot be updated or re-declared
//let also new ES6 improved var "block-scoped{}"


//variable syntax =  keyword referenceName assignmentOperator value;

//General rules for reference name:
// 1.	Names can contain letters, digits, underscores, and dollar signs.
// 2.	Names must begin with a letter or can also begin with $ and _
// 3.	Names are case sensitive (y and Y are different variables)
// 4.	Reserved words (like JavaScript keywords) cannot be used as names

//examples
// let TweenDuration = "0.5";
 let someElement = document.querySelector('.red-box');
// let allElementsWithClass = document.querySelectorAll('.box');
// let mainTl = gsap.timeline();


//GSAP

//gsap.to(target, {duration, vars, ease});
//gsap.set(someElement,{x:200});
//gsap.set(".green-box",{scale:0.5, rotation:45});
//gsap.to(".blue-box", {duration:2, x:200, alpha:0.25, y:-200});
//gsap.to(".red-box", {duration:2, x:400});
//gsap.from(".green-box", {duration:2, scale:2, rotation:180});
gsap.to([".red-box",".green-box"], {duration:2, x:200, alpha:0.25, y:-200});

//.set 




