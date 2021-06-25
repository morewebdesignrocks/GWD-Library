 // Split words into individual letter spans
 function splitLetters(e) {
    // Get elements
    let element = document.getElementById(e);
    // Convert string of text into individual letter spans
    element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter' style='display: inline-block;'>$&</span>");
  }
  // Determine direction
  function animationDirection(d) {
    // Set coordinates variables
    let x;
    let y;
    // Assing values to coordinates
    switch (d) {
      case "up":
        x = "0px";
        y = "1000%";
        break;
      case "down":
        x = "0px";
        y = "-1000%";
        break;
      case "right":
        x = "-10000%";
        y = "0px";
        break;
      case "left":
        x = "10000%";
        y = "0px";
    }
    return [x, y];
  }
  // BOUNCE LETTERS
  function bounceLetters(id, direction, duration, delay, stag) {
    splitLetters(id);
    let dir = animationDirection(direction);
    // Get letters spans
    let targetElement = "#" + id + " .letter";
    let elementLetters = document.querySelectorAll(targetElement);
    // Run animation
    gsap.from(elementLetters, duration, {
      x: dir[0],
      y: dir[1],
      delay,
      stagger: stag,
      ease: Bounce.easeOut
    });
  }
  // BOUNCE LETTERS
  function bounceLetters2(id, yDir, xDir, duration, delay, stag) {
    splitLetters(id);
    //let dir = animationDirection(direction);
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
  // Request animation here, include element Id, direction, duration, delay and stagger) 
  // Example: bounceLetters("id", "up", 0.5, 0, 0.3);
  //bounceLetters("main-text", "down", 0.8, 0, 0.1);
  bounceLetters2("main-text", "-50px", "0", 0.8, 0, 0.1);