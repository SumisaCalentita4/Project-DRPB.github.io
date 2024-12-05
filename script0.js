document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("#background-slider img");
    let currentIndex = 0;
    function changeImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    images[currentIndex].classList.add("active");

    setInterval(changeImage, 4000);
});
