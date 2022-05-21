const sliderSize = document.querySelector('.carousel-inner');
const navbar = document.querySelector('.navbar');

// setting the size of the slider to match the half of the page size

window.addEventListener('resize', function () {
    sliderSize.style.height = window.innerHeight + 'px';
    if (this.innerWidth >= 600) {
        sliderSize.style.width = 100 + '%';
    }
});
const carousel = new bootstrap.Carousel(heroSlider, {
    interval: 2000,
})