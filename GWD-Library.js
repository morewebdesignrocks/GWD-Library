// Split words into individual letter spans
function splitLetters(e) {
    // Get elements
    let element = document.getElementById(e);
    // Convert string of text into individual letter spans
    element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter' style='display: inline-block;'>$&</span>");
  }     
  // Select array item randomly
  function randomSelect(array) {
    let n = array.slice(0); // clone the array
    let currentIndex = n.length,  randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [n[currentIndex], n[randomIndex]] = [
        n[randomIndex], n[currentIndex]];
    }

    return n;
  }
  var arr = [2, 11, 37, 42];
  console.log(randomSelect(arr));

  
  // Animations Start Here ===== */
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
  // Zoom
  function zoom(id, yDir, xDir, duration, delay, stag) {
    splitLetters(id);
    // Get letters spans
    let targetElement = "#" + id + " .letter";
    let elementLetters = document.querySelectorAll(targetElement);
    let tl = gsap.timeline();
    // Run animation
    //gsap.set(elementLetters {fontSize: 0});
    gsap.from(elementLetters, duration, {
      x: xDir,
      y: yDir,
      delay,
      fontSize: 0,
      stagger: stag,
      ease: Sine.easeOut
    });
  }
  // FALL
  function fall(id, yDir, xDir, duration, delay, stag) {
    splitLetters(id);
    // Get letters spans
    let targetElement = "#" + id + " .letter";
    let elementLetters = document.querySelectorAll(targetElement);
    console.log(elementLetters);
    let randomElementLetters = Array.prototype.slice.call(elementLetters);
    console.log(randomSelect(randomElementLetters));
    
    // Run animation
    gsap.from(randomElementLetters, duration, {
      x: xDir,
      y: yDir,
      delay,
      stagger: stag,
      ease: Circ.easeOut
    });   
  }
  // Request animation here, include element Id, vertical position, horizontal position, duration, delay and stagger time) 
  // Example: bounceLetters("id", "-300", "0", 0.5, 0, 0.3);
  zoom("main-text", "-100px", "0px", 0.3, 0, 0.1);