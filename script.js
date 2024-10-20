// const carouselImages = document.querySelector('.carousel-images');
// const images = document.querySelectorAll('.carousel-images img');
// const pauseButton = document.getElementById('pauseButton');

// let currentIndex = 0;
// const imageCount = images.length;
// //const transitionInterval = 30 * 60 * 1000;  // 30 minutes in milliseconds
// const transitionInterval = 30 * 60;  // 30 minutes in milliseconds
// let isPaused = false;

// function changeImage() {
//     // Move to the next image
//     currentIndex = (currentIndex + 1) % imageCount;
    
//     // Slide the images by adjusting the transform
//     const offset = -currentIndex * 100; // Calculate the percentage for the offset
//     carouselImages.style.transform = `translateX(${offset}vw)`;
// }

// // Set the interval to change the image every 30 minutes
// setInterval(changeImage, transitionInterval);

// // Immediately change the image when the page loads
// window.onload = changeImage;


const images = document.querySelectorAll('.carousel img');
    const pauseButton = document.getElementById('pauseButton');

    let currentIndex = 0;
    let intervalId;
    let isPaused = false;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
        images[currentIndex].classList.add('active');
    }

    function startCarousel() {
        intervalId = setInterval(showNextImage, 10000); // Change image every 30 seconds
    }

    function pauseCarousel() {
        if (isPaused) {
            // Resume the carousel
            startCarousel();
            pauseButton.textContent = 'Pause';
        } else {
            // Pause the carousel
            clearInterval(intervalId);
            pauseButton.textContent = 'Resume';
        }
        isPaused = !isPaused;
    }

    pauseButton.addEventListener('click', pauseCarousel);

    // Start the carousel on page load
    startCarousel();
