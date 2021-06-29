 // Split words into individual letter spans
 function splitLetters(e) {
    // Get elements
    let element = document.getElementById(e);
    // Convert string of text into individual letter spans
    element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter' style='display: inline-block;'>$&</span>");
  }     
        
  function randomIndex(id, yDir, xDir, duration, delay, stag) {
    splitLetters(id);
    // Get letters spans
    let targetElement = "#" + id + " .letter";
    let elementLetters = document.querySelectorAll(targetElement);
    console.log(stag);
    // new empty array
    /*
    let numbers = [];
    let n,
        p,
        r = elementLetters.length,
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
    */
    // Run animation
    let arr = [0,1];
    for ( let i = 0; i < arr.length; i++) {
      
      // for each iteration console.log a word
      // and make a pause after it
      (function (i, stag) {
        let interval = stag * 1000;
        console.log(stag);
        setTimeout(function () {              
          gsap.from(elementLetters[i], duration, {
            x: xDir,
            y: yDir,
            delay,
            ease: Circ.easeOut
          });             
        }, 500 * i);
        
        
        
        
        
      })(i);
      
      /*
      gsap.from(elementLetters[i], duration, {
        x: xDir,
        y: yDir,
        delay,
        stagger: stag,
        ease: Circ.easeOut
      });
      */
      
    }
  }
  //console.log(randomIndex("main-text", "-100px", "0px", 0.3, 0, 1));
  

  
  
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
      ease: "bounce.easeOut"
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
      ease: "sine.easeOut"
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
      ease: "sine.inOut"
    });
  }
  
  // Request animation here, include element Id, vertical position, horizontal position, duration, delay and stagger time) 
  // Example: bounceLetters("id", "-300", "0", 0.5, 0, 0.3);
  fall("main-text", "-300px", "0px", 2.5, 0, 0);