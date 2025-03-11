// script.js

function showImage(carouselId, index) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.querySelectorAll('.carousel-image');
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function nextImage(carouselId) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.querySelectorAll('.carousel-image');
    let currentImageIndex = Array.from(images).findIndex(img => img.style.display === 'block');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(carouselId, currentImageIndex);
}

function prevImage(carouselId) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.querySelectorAll('.carousel-image');
    let currentImageIndex = Array.from(images).findIndex(img => img.style.display === 'block');
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(carouselId, currentImageIndex);
}


document.querySelectorAll('.carousel').forEach(carousel => {
    showImage(carousel.id, 0);
});

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
