document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor');
    
    // Move the cursor to follow the mouse pointer
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
  
  // Optional: You can also add an effect when clicking
  document.addEventListener('mousedown', () => {
    const cursor = document.getElementById('cursor');
    cursor.style.backgroundColor = 'red'; // Change color on click
  });
  
  document.addEventListener('mouseup', () => {
    const cursor = document.getElementById('cursor');
    cursor.style.backgroundColor = 'white'; // Reset color after click
  });
  window.onload = function() {
    gsap.to(".img1", {
      opacity: 0,
      duration: 0.05, // shorter duration for a faster flicker
      repeat: 12,     // increase the number of flickers
      yoyo: true,     // reverse the opacity back to 1
      ease: "power1.inOut", // smooth easing
      repeatDelay: 0.05     // shorter delay between flickers
    }).eventCallback("onComplete", function() {
      gsap.to(".img1", {
        opacity: 1,
        duration: 0.1 // duration for the final fade-in
      });
    });
  };

var finalPath = "M 10 100 Q 500 100 990 100";

// Initialize the path variable with finalPath
var path = finalPath;

var s = document.querySelector("#string");

s.addEventListener("mousemove", function(dets) {
    // Create a new path based on mouse coordinates
    path = `M 10 100 Q 500 ${dets.y} 990 100`;
    
    // Animate the path using GSAP
    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.2,
        ease: "power3.out"
    });
});

s.addEventListener("mouseleave", function() {
    // Reset the path to the finalPath when the mouse leaves
    gsap.to("svg path", {
        attr: { d: finalPath },
        ease: "elastic.out(1, 0.6)",
        duration: 0.5
    });
});

