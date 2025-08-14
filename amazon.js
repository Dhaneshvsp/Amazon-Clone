// --- IMAGE SLIDER LOGIC ---

// Select all necessary DOM elements for the slider
let prevButton = document.getElementById("prevButton"); // The 'previous' button
let nextButton = document.getElementById("nextButton"); // The 'next' button
let slides = document.querySelectorAll(".slides"); // A list of all slide images
let container = document.querySelector('.hero-section'); // The main container for the slider

// Initialize a counter to keep track of the current slide index
let counter = 0;

// Event listener for the 'previous' button
prevButton.addEventListener('click', () => {
    // If the current slide is the first one, loop back to the last slide
    if (counter == 0) {
        counter = slides.length - 1;
    } else {
        // Otherwise, just go to the previous slide
        counter--;
    }
    // Call the function to update the slider position
    slideImages();
});

// Event listener for the 'next' button
nextButton.addEventListener('click', () => {
    // If the current slide is the last one, loop back to the first slide
    if (counter == slides.length - 1) {
        counter = 0;
    } else {
        // Otherwise, just go to the next slide
        counter++;
    }
    // Call the function to update the slider position
    slideImages();
});

// Function to move the slides
function slideImages() {
    // Loop through each slide element
    slides.forEach((slide) => {
        // Use CSS transform to move the entire slide container horizontally
        // `translateX(-${counter * 100}%)` moves the container left by 100% of its width for each slide
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

// --- AUTOMATIC SLIDING ---

// Set an interval to automatically click the 'next' button every 3 seconds (3000 milliseconds)
let autoSlide = setInterval(() => {
    nextButton.click();
}, 3000);

// Pause the automatic sliding when the mouse is over the slider container
container.addEventListener('mouseover', () => {
    clearInterval(autoSlide); // Stops the interval
});

// Resume the automatic sliding when the mouse leaves the slider container
container.addEventListener('mouseleave', () => {
    // Start the interval again
    autoSlide = setInterval(() => {
        nextButton.click();
    }, 3000);
});