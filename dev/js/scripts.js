/* =============
    Demo Timeline - Stagger - Match media
============= */

import { gsap } from "gsap";


//**********
//STAGGER
//*********

//gsap.to(".box", {duration: 0.5, scale:0.5, delay:1, stagger:0.1});

// gsap.to(".box", {
//     duration: 0.5, 
//     scale:0.5, 
//     delay:1, 
//     stagger:{
//         //each:0.1,
//         amount:0.5,
//         grid:[3,4],
//         from:"start",//"start", "center", "edges","random", "end"
//         axis:"y"
//     }
// });

//**********
//TIMELINE
//*********

//let mainTl = gsap.timeline({delay:1});

//chaining 

gsap.to(".box", {duration:0.5, scale:0.5});
    gsap.to(".blue-box", {duration:0.5, rotation:180});
    gsap.to(".red-box", {duration:1, backgroundColor:"#000"});


    


    