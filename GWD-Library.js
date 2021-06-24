// Set elements to animate
const element01 = {elementId: "main-text", xInitialPos: "-300px", xFinalPos: "0", yInitialPos: "0", yFinalPos: "0", transitionTime: "1", delay: "0", stagger: "0.1"};
const element02 = {elementId: "sub-text", xInitialPos: "-300px", xFinalPos: "0", yInitialPos: "-300px", yFinalPos: "0", transitionTime: "0.8", delay: "0.5", stagger: "0"};

// Convert string of text into individual letter spans
function textWrapper(s) {
  s.innerHTML = s.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}

function splitLetters(e) {
  // Get elements
  let element = document.getElementById(e.elementId);
  
  // Convert string of text into individual letter spans
  element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter' style='display: inline-block;'>$&</span>");
}

// Animation Library
function animateLetters(e) {
  //let element = document.getElementById(e.elementId);
  splitLetters(e);
  
  // Get letters spans
  let elementLetters = document.getElementsByClassName("letter");
  
  // Animate individual letter spans
  gsap.set(".letter", {
    x: e.xInitialPos, y: e.yInitialPos
  });
  gsap.to(".letter", Number(e.transitionTime), {
    x: e.xFinalPos, y: e.yFinalPos, delay: e.delay, stagger: e.stagger
  });
}


function dropLetters(e) {
  splitLetters(e);
  
  // Get letters spans
  let elementLetters = document.getElementsByClassName("letter");
  
  // Animate individual letter spans
  gsap.set(".letter", {
    y: -100%
  });
  gsap.to(".letter", Number(e.transitionTime), {
    x: e.xFinalPos, y: e.yFinalPos, delay: e.delay, stagger: e.stagger
  });
}
    
// Request animations here
animateLetters(element01);