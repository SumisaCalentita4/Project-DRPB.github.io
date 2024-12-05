let currentSlides = [0, 0, 0, 0];

function showSlide(carouselIndex, index) {
    const carousel = document.querySelector(`#carousel-${carouselIndex}`);
    const slides = carousel.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlides[carouselIndex] = 0;
    } else if (index < 0) {
        currentSlides[carouselIndex] = totalSlides - 1;
    } else {
        currentSlides[carouselIndex] = index;
    }

    const offset = -currentSlides[carouselIndex] * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide(carouselIndex) {
    showSlide(carouselIndex, currentSlides[carouselIndex] + 1);
}

function prevSlide(carouselIndex) {
    showSlide(carouselIndex, currentSlides[carouselIndex] - 1);
}

currentSlides.forEach((_, index) => showSlide(index, 0));
