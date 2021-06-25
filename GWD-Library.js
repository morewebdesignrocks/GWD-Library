// Get elements
let element = document.getElementById(e);
        
// Convert string of text into individual letter spans
element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter' style='display: inline-block;'>$&</span>");
}

// DROP LETTERS
function dropLetters(id, duration, delay, stag) { 
splitLetters(id);

// Get letters spans
let targetElement = "#" + id + " .letter";
let elementLetters = document.querySelectorAll(targetElement);

// Run animation
gsap.set(elementLetters, { y:"-1000%" });
gsap.to(elementLetters, duration, { y:"0px", delay, stagger: stag, ease: Bounce.easeOut });

}

// LEFT TO RIGTH LETTERS
function leftToRightLetters(id, duration, delay, stag) { 
splitLetters(id);

// Get letters spans
let targetElement = "#" + id + " .letter";
let elementLetters = document.querySelectorAll(targetElement);

// Run animation
gsap.set(elementLetters, { x:"-1000px" });
gsap.to(elementLetters, duration, { x:"0px", delay, stagger: stag, ease: Elastic.easeOut.config(1.5, 0.5) });

}

// Request animation here, include element Id, duration, delay and stagger time) 
// Example: leftToRight("id", duration, delay, stagger);
dropLetters("main-text", .8, 0, 0.3);
leftToRightLetters("sub-text", .5, 0.1, 0.2);