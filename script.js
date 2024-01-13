document.addEventListener("DOMContentLoaded", function () {
    const bag = document.getElementById('boxing-bag');
    const audio = new Audio("./images/punch-5-166698.mp3");
    let punchCount = 0;
    const requiredPunches = 5;

    bag.addEventListener("mouseenter", function () {
        // Reset the message and redirecting overlay when the mouse enters the #boxing-bag element
        removeMessage();
        removeRedirectingOverlay();
    });

    bag.addEventListener("click", function () {
        // Increment punch count
        punchCount++;

        // Check if the required punches have been reached
        if (punchCount >= requiredPunches) {
            // Display redirecting overlay and redirect to /contact.html
            showRedirectingOverlay();
            setTimeout(function () {
                window.location.href = "/contact.html";
            }, 3000); // Redirect after 3 seconds
        } else {
            // Play the audio when the mouse clicks the #boxing-bag element
            audio.currentTime = 0; // Reset audio to start if already playing
            audio.play();

            // Apply animation based on the direction
            const mouseX = event.clientX;
            const bagRect = bag.getBoundingClientRect();
            const bagCenterX = bagRect.left + bagRect.width / 2;
            const direction = mouseX > bagCenterX ? 1 : -1;

            bag.style.animation = direction === 1 ? "moveLeft 1s linear" : "moveRight 1s linear";

            // Display the message
            const remainingPunches = requiredPunches - punchCount;
            showMessage(`Hit ${remainingPunches} more times to contact!`);
        }
    });

    bag.addEventListener("animationend", function () {
        // Animation has ended
        bag.style.animation = ""; // Reset animation
    });

    function showMessage(message) {
        // Create a message element
        const messageElement = document.createElement('p');
        messageElement.id = 'message';
        messageElement.innerText = message;

        // Apply styles to the message element
        messageElement.style.color = "white";
        messageElement.style.backgroundColor = "rgba(0,0,0,0.6)";
        messageElement.style.paddingBottom = "12px";
        messageElement.style.paddingTop = "12px";
        messageElement.style.borderRadius = "5px";
        messageElement.style.transition = "opacity 1s ease-in-out"; // Transition for opacity

        // Append the message element to the body
        document.body.appendChild(messageElement);

        // Center the message element
        messageElement.style.position = "fixed";
        messageElement.style.left = "50%";
        messageElement.style.top = "50%";
        messageElement.style.transform = "translate(-50%, -50%)";

        // Trigger a reflow to apply the initial styles
        messageElement.offsetHeight;

        // Set a timeout to remove the message after 2 seconds
        setTimeout(function () {
            messageElement.style.opacity = 1; // Make the message slowly appear
            setTimeout(function () {
                messageElement.style.opacity = 0; // Make the message slowly disappear
                setTimeout(function () {
                    removeMessage();
                }, 1000); // Wait for the transition duration (1 second) before removing
            }, 2000); // Display the message for 2 seconds
        }, 0); // Delay the appearance to ensure the transition works
    }

    function removeMessage() {
        const messageElement = document.getElementById('message');
        if (messageElement) {
            document.body.removeChild(messageElement);
        }
    }

    var preloader = document.querySelector(".preloader");
    var video = document.getElementById("preloader-video");

    // Show the preloader when the document is loaded
    preloader.style.display = "flex";

    // Hide preloader after 5 seconds or when the video ends
    var hidePreloader = function () {
        preloader.style.display = "none";
    };
    
        setTimeout(function () {
            showRedirectingOverlay();
        }, 4000); // Delay for 4 seconds


    // Hide preloader when the video ends
    video.addEventListener("ended", hidePreloader);

    // Set a timeout to hide the preloader after 5 seconds
    setTimeout(hidePreloader, 5000);

    function showRedirectingOverlay() {
        // Create an overlay element for redirecting animation
        const overlay = document.createElement('div');
        overlay.id = 'redirecting-overlay';

        // Apply styles to the overlay element
        overlay.style.position = "fixed";
        overlay.style.width = "10px";
        overlay.style.height = "10px";
        overlay.style.borderRadius = "50%";
        overlay.style.backgroundColor = "white";
        overlay.style.transition = "all 3s ease"; // Transition for size and opacity

        // Append the overlay element to the body
        document.body.appendChild(overlay);

        // Trigger a reflow to apply the initial styles
        overlay.offsetHeight;

        // Set styles for the redirecting animation
        overlay.style.width = "200%";
        overlay.style.height = "200%";
        overlay.style.left = "-50%";
        overlay.style.top = "-50%";
        overlay.style.opacity = 0.4;

        const overlay2 = document.createElement('div');
        overlay2.id = 'redirecting-overlay2';

        // Apply styles to the overlay element
        overlay2.style.position = "fixed";
        overlay2.style.width = "10px";
        overlay2.style.height = "10px";
        overlay2.style.borderRadius = "50%";
        overlay2.style.backgroundColor = "white";
        overlay2.style.transition = "all 3s ease"; // Transition for size and opacity

        // Append the overlay element to the body
        document.body.appendChild(overlay2);

        // Trigger a reflow to apply the initial styles
        overlay2.offsetHeight;

        // Set styles for the redirecting animation
        overlay2.style.width = "200%";
        overlay2.style.height = "200%";
        overlay2.style.left = "-70%";
        overlay2.style.top = "-70%";
        overlay2.style.opacity = 1;

        // Set a timeout to remove the overlay after 3 seconds
        setTimeout(function () {
            removeRedirectingOverlay();
            removeRedirectingOverlay2();
        }, 3000);
    }

    function removeRedirectingOverlay() {
        const overlay = document.getElementById('redirecting-overlay');
        if (overlay) {
            document.body.removeChild(overlay);
        }
    }

    function removeRedirectingOverlay2() {
        const overlay2 = document.getElementById('redirecting-overlay2');
        if (overlay2) {
            document.body.removeChild(overlay2);
        }
    }
});
