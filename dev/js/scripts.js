//QUIZ

import { gsap } from "gsap";

let mainTl = gsap.timeline({delay:1});

function cubeAni1(){

    let tl = gsap.timeline({delay:1});
   
    tl.from(".red", {duration:1, x:"0"})
    .from(".blue", {duration:1, x:"350"})
    ;
    
}
mainTl.add(cubeAni1());

function cubeAni2(){

    let tl = gsap.timeline({delay:1});
   
    tl.to(".red", {duration:2, y:"0", delay:2})
    .to(".blue", {duration:2, 7:"300", delay:2})
    ;
    
}
mainTl.add(cubeAni2());