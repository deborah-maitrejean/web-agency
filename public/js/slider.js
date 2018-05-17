var next = document.getElementById('next');
var previous = document.getElementById('previous');

var animationSlides = document.querySelector('#slider #slides');
var slide1 = document.getElementById('slide-1');
var slide2 = document.getElementById('slide-2');

var animationTimeline = document.querySelector('#slider #timeline');
var timeline = document.getElementById('timeline');

var Slider = {
    init: function () {
        this.start();
        this.controlSlideshow();
    },
    initStyle: function () {
        slide1.style.backgroundImage = 'url("http://localhost/web-agency/public/images/slider/bg1.jpg")';
        slide1.style.backgroundSize = 'cover';

        slide2.style.backgroundImage = 'url("http://localhost/web-agency/public/images/slider/bg2.jpg")';
        slide2.style.backgroundSize = 'cover';
        slide2.style.left = '100%';

        timeline.style.width = '10%';
    },
    start: function () {
        Slider.initStyle();
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
        Slider.timeOut();
    },
    nextSlide: function () {
        Slider.stop();
        slide2.style.left = '0';
        timeline.style.width = '100%';
        Slider.timeOut();
    },
    timeOut: function () {
        setTimeout(function () {
            Slider.init();
        }, 4000);
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