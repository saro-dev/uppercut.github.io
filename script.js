document.addEventListener("DOMContentLoaded", function () {
    
    const bag = document.getElementById('boxing-bag');
    const audio = new Audio("./images/punch-5-166698.mp3");
    let punchCount = 0;
    const requiredPunches = 5;

    bag.addEventListener("mouseenter", function () {
        // Reset the message and redirecting overlay when the mouse enters the #boxing-bag element
        // removeMessage();
        // removeRedirectingOverlay();
         // Increment punch count
        //  punchCount++;

         // Check if the required punches have been reached
        //  if (punchCount >= requiredPunches) {
             // Display redirecting overlay and redirect to /contact.html
            //  showRedirectingOverlay();
            //  setTimeout(function () {
            //      window.location.href = "/contact";
            // }, 3000); // Redirect after 3 seconds
        //  } else {
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
            //  const remainingPunches = requiredPunches - punchCount;
            //  showMessage(`Hit ${remainingPunches} more times to contact!`);
        //  }
    });

    bag.addEventListener("click", function () {
        // Increment punch count
        punchCount++;

        // Check if the required punches have been reached
        if (punchCount >= requiredPunches) {
            // Display redirecting overlay and redirect to /contact.html
            
            window.location.href = "/contact";
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
        messageElement.style.paddingLeft = "6px";
        messageElement.style.paddingRight="6px";
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
    
        


    // Hide preloader when the video ends
    video.addEventListener("ended", hidePreloader);

    // Set a timeout to hide the preloader after 5 seconds
    setTimeout(hidePreloader, 1000);


    const currentPath = window.location.pathname;

    // Find the corresponding link and add the "active" class to the i element
    const navLinks = document.querySelectorAll('.side-nav a i');
    navLinks.forEach(icon => {
        const link = icon.parentElement; // Get the parent a element
        const href = link.getAttribute('href');

        if (currentPath === '/' && href === '/') {
            // Home page
            icon.classList.add('active');
        } else if (currentPath === '/contact' && href === '/contact') {
            // Contact page
            icon.classList.add('active');
        }
        else{
            console.log(icon)
        }
        // Add more conditions for other pages if needed
    });
    const cursor = document.getElementById("custom-cursor");

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
    });

    document.body.addEventListener("mouseover", () => {
        cursor.classList.add("hover");
    });

    document.body.addEventListener("mouseout", () => {
        cursor.classList.remove("hover");
    });
   
    
});


  