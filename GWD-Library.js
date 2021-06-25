 // Split words into individual letter spans
 function splitLetters(e) {
    // Get elements
    let element = document.getElementById(e);
    // Convert string of text into individual letter spans
    element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter' style='display: inline-block;'>$&</span>");
  }
  // BOUNCE
  function bounce(id, yDir, xDir, duration, delay, stag) {
    splitLetters(id);
    // Get letters spans
    let targetElement = "#" + id + " .letter";
    let elementLetters = document.querySelectorAll(targetElement);
    // Run animation
    gsap.from(elementLetters, duration, {
      x: xDir,
      y: yDir,
      delay,
      stagger: stag,
      ease: Bounce.easeOut
    });
  }
  // LEFT TO RIGTH LETTERS
  function leftToRightLetters(id, duration, delay, stag) {
    splitLetters(id);
    // Get letters spans
    let targetElement = "#" + id + " .letter";
    let elementLetters = document.querySelectorAll(targetElement);
    // Run animation
    gsap.set(elementLetters, {
      x: "-1000px"
    });
    gsap.to(elementLetters, duration, {
      x: "0px",
      delay,
      stagger: stag,
      ease: Elastic.easeOut.config(1.5, 0.5)
    });
  }
  // Request animation here, include element Id, vertical position, horizontal position, duration, delay and stagger time) 
  // Example: bounceLetters("id", "-300", "0", 0.5, 0, 0.3);
  bounce("main-text", "0", "-300px", 1.5, 0, 0);