var next = document.getElementById('next');
var previous = document.getElementById('previous');

var animationSlides = document.querySelector('#slider #slides'); //#slider:not(:hover) #slides
var animationTimeline = document.querySelector('#slider #timeline'); //#slider:not(:hover) #timeline

var slide1 = document.getElementById('slide-1');
var slide2 = document.getElementById('slide-2');

var Slider = {
    init: function () {
        slide1.style.backgroundImage = 'url("http://localhost/web-agency/public/images/slider/bg1.jpg")';
        slide2.style.backgroundImage = 'url("http://localhost/web-agency/public/images/slider/bg2.jpg")';
        //slide2.style.left = '-100%';
        this.start();
        this.controlSlideshow();
    },
    start: function () {
        animationSlides.style.animation = 'imagesSlide 15s linear alternate infinite';
        animationSlides.style.webkitAnimation = 'imagesSlide 15s linear alternate infinite';
        animationTimeline.style.animation = 'timeline 15s linear alternate infinite';
        animationTimeline.style.webkitAnimation = 'timeline 15s linear alternate infinite';
    },
    stop: function () {
        animationSlides.style.animation = '';
        animationSlides.style.webkitAnimation = '';
        animationTimeline.style.animation = '';
        animationTimeline.style.webkitAnimation = '';
    },
    previousSlide: function () {
        Slider.stop();
        slide1.style.backgroundImage = 'url("http://localhost/web-agency/public/images/slider/bg1.jpg")';
        slide2.style.left = '-100%';
    },
    nextSlide: function () {
        Slider.stop();
        slide2.style.left = '0';
    },
    controlSlideshow: function () {
        next.addEventListener('click', function () {
            Slider.nextSlide();
        });
        previous.addEventListener('click', function () {
            Slider.previousSlide();
        });
    }
};
Slider.init();