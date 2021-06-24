function splitLetters(e) {
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
    gsap.set(elementLetters, {y:"-1000%"});
    gsap.to(elementLetters, duration, {y:"0%", delay, stagger: stag});
  
  }
  
  // Request animation here, include element Id, duration, delay and stagger time) 
  dropLetters("sub-text", .5, 0.1, 0.2);
  dropLetters("main-text", .8, 0, 0.3);