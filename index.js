const carouselWrapper = document.querySelector('.carousel-wrapper');
const discs = document.querySelectorAll('.disc__item');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const discTitle = document.getElementById('disc__title'); // reference to the title container

// Set the currentIndex to the middle index by default
let currentIndex = Math.floor(discs.length / 2); // Middle index

function updateCarousel() {
    // Update active class
    discs.forEach((disc, index) => {
        if (index === currentIndex) {
            disc.classList.add('active'); // Add active class
            discTitle.textContent = disc.getAttribute('data-title') // update title
        } else {
            disc.classList.remove('active'); // Remove active class
        }
    });
}

// Initialize the carousel to show the middle item as active
updateCarousel();

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : discs.length - 1; // Loop to last item
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < discs.length - 1) ? currentIndex + 1 : 0; // Loop to first item
    updateCarousel();
});
