const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    const totalSlides = slideItems.length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    slides.style.transform = `translateY(${offset}%)`; // Use translateY for vertical sliding
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 3000); // Change slide every 3 seconds
}

// Initialize slider
autoSlide();
