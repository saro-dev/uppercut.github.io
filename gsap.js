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

    // Navbar animation
    gsap.from(".side-nav", { x: "100%", duration: 1, ease: "power2.out", delay: 2.5 });

    // Punching bag animation
    gsap.fromTo(".punching-bag-container", { y: "-150%" }, { y: "0%", duration: 1, ease: "power2.out", delay: 1.9 });

    // Location display animation
    gsap.fromTo(".location-display", { x: "-190%" }, { x: "0%", duration: 1, ease: "power2.out", delay: 2.5 });
    
})