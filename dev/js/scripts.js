//QUIZ

import { gsap } from "gsap";

let mainTl = gsap.timeline({delay:1});

function cubeAni(){

    let tl = gsap.timeline({delay:1});
   
    tl
    .from(".graph", {duration:1, opacity:1})
    .from(".graph", {duration:1, opacity:0})
    .from(".red", {duration:1, x:"0", ease: "bounce.out", delay:2})
    .from(".blue", {duration:1, x:"350", ease: "bounce.out", delay:2})
    .from(".red", {duration:2, y:"0", delay:2})
    .from(".blue", {duration:2, y:"300", delay:2, rotation:360})
    .from(".green", {duration:3, scale:4, delay:0, rotation:360})
    ;
    
}
mainTl.add(cubeAni());
