document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.querySelector(".preloader");
    const preloaderVideo = document.getElementById("preloader-video");

    gsap.to(preloader, { opacity: 0,delay:0.8, duration: .2, onComplete: hidePreloader });
    function hidePreloader() {
        preloader.style.display = "none";
        preloaderVideo.pause();
    }

    // Logo animation
    gsap.from(".logo-box", { x: "-190%", duration: 1, ease: "power2.out", delay: .6 });

    //slogan
    gsap.from(".slogan", { x: "-190%", duration: 1, ease: "power2.out", delay: 1 });

    //about
    gsap.from(".about", { x: "-190%", duration: 1, ease: "power2.out", delay: 1.5 });

    // Navbar animation
    gsap.from(".side-nav", { x: "100%", duration: 1, ease: "power2.out", delay: 2.5 });
    // Navbar animation
    gsap.from(".mobile-menu-icon", { x: "300%", duration: 1, ease: "power2.out", delay: 2.5 });

    // Punching bag animation
    gsap.fromTo(".punching-bag-container", { y: "-150%" }, { y: "0%", duration: 1, ease: "power2.out", delay: 1.9 });

    // Location display animation
    gsap.fromTo(".location-display", { x: "-190%" }, { x: "0%", duration: 1, ease: "power2.out", delay: 2.5 });
    gsap.fromTo(".getintouch", { x: "190%" }, { x: "0%", duration: 1, ease: "power2.out", delay: 2.5 });

   // GSAP Animation for Section Two
// GSAP Animation for Section Two

const locationDisplay = document.querySelector(".location-display");

// Initial position of the location display
gsap.set(locationDisplay, { x: 0 });

// Listen for scroll events
window.addEventListener("scroll", function () {
    // Check if the user has scrolled down a little bit
    if (window.scrollY > 50) { // Adjust the threshold as needed
        // Animate the location display to move completely to the left and hide it
        gsap.to(locationDisplay, { x: "-120%", duration: 0.5, ease: "power2.out" });
    } else {
        // Animate the location display to move back to its original position
        gsap.to(locationDisplay, { x: 0, duration: 0.5, ease: "power2.out" });
    }
});

const getintouch = document.querySelector(".getintouch");
// Initial position of the location display
gsap.set(getintouch, { x: 0 });

// Listen for scroll events
window.addEventListener("scroll", function () {
    // Check if the user has scrolled down a little bit
    if (window.scrollY > 50) { // Adjust the threshold as needed
        // Animate the location display to move completely to the left and hide it
        gsap.to(getintouch, { x: "120%", duration: 0.5, ease: "power2.out" });
        
    } else {
        // Animate the location display to move back to its original position
        gsap.to(getintouch, { x: 0, duration: 0.5, ease: "power2.out" });
        
    }
});

gsap.to("#typewriter", {
    duration: 4,
    text: {
        value: "",
        type: "chars",
        delay: 0.1
    },
    ease: "none"
});

})