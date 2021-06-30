// Split words into individual letter spans
function splitLetters(e) {
    // Get elements
    let element = document.getElementById(e);
    // Convert string of text into individual letter spans
    element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter' style='display: inline-block;'>$&</span>");
  }     
  
  /*
  // Generate a randomized list of indexes for total amount array items
  function randomIndex(length) {    
    // new empty array
    let numbers = [];
    let n,
        p,
        r = length,
        min = 0, 
        max = r - 1; // how many numbers to extract

    for (let i = 0; i < r; i++) {
      do {
        n = Math.floor(Math.random() * (max - min + 1)) + min;
        p = numbers.includes(n);
        if(!p){
          numbers.push(n);
        }
      }
      while(p);
    }
    return numbers;    
  }
  */
  /*
  function randomLetter(id, yDir, xDir, duration, delay, stag) {
    splitLetters(id);
    // Get letters spans
    let targetElement = "#" + id + " .letter";
    let elementLetters = document.querySelectorAll(targetElement);
    let indexNumbers = randomIndex(elementLetters.length);
    console.log(indexNumbers);
    
    for ( let i = 0; i < indexNumbers.length; i++ ) {
      console.log(indexNumbers[i]);
      let index = indexNumbers[i];
      
      // Run animation
      gsap.from(elementLetters[index], duration, {
        x: xDir,
        y: yDir,
        delay,
        stagger: stag,
        ease: Circ.easeOut
      });
    }
  }
  randomLetter("main-text", "-300px", "0px", 0.3, 0, 5);
  */
  
  
  // Animations Start Here ===== */
  // BOUNCE
  function bounce(id, yDir, xDir, duration, delayTime, stag) {
    splitLetters(id);
    // Get letters spans
    let targetElement = "#" + id + " .letter";
    let elementLetters = document.querySelectorAll(targetElement);
    // Run animation
    gsap.from(elementLetters, duration, {
      x: xDir,
      y: yDir,
      delay: delayTime,
      stagger: stag,
      ease: "Bounce.easeOut"
    });
  }
  // ZOOM
  function zoom(id, yDir, xDir, duration, delayTime, stag) {
    splitLetters(id);
    // Get letters spans
    let targetElement = "#" + id + " .letter";
    let elementLetters = document.querySelectorAll(targetElement);
    let tl = gsap.timeline();
    // Run animation
    gsap.from(elementLetters, duration, {
      x: xDir,
      y: yDir,
      delay: delayTime,
      fontSize: 0,
      stagger: stag,
      ease: "Sine.easeOut"
    });
  }
  // FALL
  function fall(id, yDir, xDir, duration, delayTime, stag) {
    splitLetters(id);
    // Get letters spans
    let targetElement = "#" + id + " .letter";
    let elementLetters = document.querySelectorAll(targetElement);
    // Run animation
    gsap.fromTo(elementLetters, {
      opacity: 'random(0, 0.5)',
      x: 'random(' + (xDir - 10) + ', ' + (xDir + 10) + ')',
      y: yDir,
      scale: 'random(0, 0.4)',
      repeatRefresh: true,
      transformOrigin: 'center'
    }, {
      duration: 'random(' + (duration) + ', ' + (duration + 5) + ')',
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      modifiers: {
        x: x => `${Math.sin(parseFloat(x)) * 50}px`
      },
      delay: delayTime,
      stagger: stag,
      ease: "Sine.inOut"
    });
  }
  // APPEAR
  function appear(id, yDir, xDir, duration, delayTime, stag) {
    splitLetters(id);
    // Get letters spans
    let targetElement = "#" + id + " .letter";
    let elementLetters = document.querySelectorAll(targetElement);
    // Run animation
    gsap.fromTo(elementLetters, {
      opacity: 0,
      x: xDir,
      y: yDir,    
    }, {
      duration: duration,
      opacity: 1,
      x: 0,
      y: 0,
      delay: delayTime,
      stagger: stag,
      ease: "Back.easeOut.config(1.7)"
    });
  }
  // WAVE
  function wave(id, yDir, xDir, duration, delayTime, stag) {
    splitLetters(id);
    // Get letters spans
    let targetElement = "#" + id + " .letter";
    let elementLetters = document.querySelectorAll(targetElement);
    // Run animation
    let tl = gsap.timeline({repeat: 0, repeatDelay: 1});
    tl.from(elementLetters, duration, {
      x: xDir,
      y: yDir,
      delay: delayTime,
      fontSize: "0.5em",
      stagger: stag,
      ease: "Sine.easeOut"
    });
    tl.to(elementLetters, duration, {
      delay: delayTime,
      fontSize: "0.5em",
      stagger: stag,
      ease: "Sine.easeOut"
    });
    tl.to(elementLetters, duration, {
      delay: delayTime,
      fontSize: "1em",
      stagger: stag,
      ease: "Sine.easeOut"
    });
  }
  
  // Request animation here, include element Id, vertical position, horizontal position, duration, delay and stagger time) 
  // Example: bounceLetters("id", "-300", "0", 0.5, 0, 0.3);
  wave("main-text", "0", "0", 0.01, 0.1, 0.1);