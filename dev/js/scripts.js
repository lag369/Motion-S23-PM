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

let mainTl = gsap.timeline({delay:1});//defaults:{duration:1, ease:"back.out"}

//position
//absolute 1,2,3
//relative "-=1", "+=1"
//Relative to previous tweens "<", ">", "<-0.5"
//Percent "-=50%", "<25%"

    // mainTl.to(".box", {duration:1, scale:0.5})
    // .addLabel("myLabel","+=2")//we just added a label to 1 second
    // .to(".red-box", {duration:1, backgroundColor:"#000"},"myLabel")
    // .to(".blue-box", {duration:0.5, rotation:180},"myLabel")

    // ;



function blueBoxAni(){

    let tl = gsap.timeline({delay:1});
    let mm = gsap.matchMedia();

    mm.add("(max-width:767px)", () =>{
    tl.to(".blue-box", {duration:0.5, scale:0.5, ease:"bounce.out"})
    .to(".blue-box", {duration:0.5, rotation:180})
    ;
    });

    mm.add("(min-width:768px)", () =>{
        tl.to(".blue-box", {duration:0.5, scale:1.5, ease:"bounce.out"})
        .to(".blue-box", {duration:0.5, rotation:360, backgroundColor:"yellow"})
        ;
        });

    return tl;
}

function redBoxAni(){

    let tl = gsap.timeline({delay:1});

    tl.to(".red-box", {duration:0.5, alpha:0.5})
    .to(".red-box", {duration:0.5, y:"+=100"})
    ;

    return tl;
}



mainTl.add(blueBoxAni())
.add(redBoxAni(), 0)

;


    