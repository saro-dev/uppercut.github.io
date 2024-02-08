// GSAP animation for preloader
gsap.fromTo('.preloader', {
    left: '0%', // start from left -100%
    opacity: 1
}, {
    duration: 1,
    left: '0%', // cover full screen
    onComplete: () => {
        // Hide preloader after 1.5 seconds
        document.querySelector('.preloader').classList.add('hide-preloader');

        // GSAP animation to move back to left -100%
        gsap.to('.preloader', {
            duration: .7,
            left: '-100%',
            delay: .5, // delay for 1.5 seconds before starting to move back
            onComplete: () => {
                // Additional actions after the preloader goes back to left -100%
            }
        });
    }
});

    