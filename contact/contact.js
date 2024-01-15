// GSAP animation for preloader
gsap.fromTo('.preloader', {
    left: '-100%', // start from left -100%
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
document.addEventListener("DOMContentLoaded", function () {

    const sideNav = document.querySelector('.side-nav');
        const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    
        mobileMenuIcon.addEventListener('click', function () {
            const isOpen = sideNav.style.right === '0px';
    
            // Use GSAP for smooth rotation animation
            gsap.to(mobileMenuIcon, { rotation: isOpen ? 0 : -90, duration: 0.3 });
    
            const isMobileOrTablet = window.matchMedia('(max-width: 959px)').matches;
    
            if (isMobileOrTablet) {
                // Toggle the side navigation for mobile and big tablets
                sideNav.style.right = isOpen ? '-100%' : '0px';
            }
        });
    
        // Close the side navigation if the window is resized beyond the mobile range
        window.addEventListener('resize', function () {
            const isMobileOrTablet = window.matchMedia('(max-width: 959px)').matches;
    
            if (!isMobileOrTablet) {
                sideNav.style.right = '-150px';
            } else {
                // If the menu icon is visible, set it to -100%
                sideNav.style.right = mobileMenuIcon.style.display === 'none' ? '-150px' : '-100%';
            }
        });
    })