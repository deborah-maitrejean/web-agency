/*---------- Navigation fluide ----------*/
$(document).ready(function () {
    $('a.scroll').on('click', function (evt) {
        evt.preventDefault();
        var target = $(this).attr('href');
        $('html, body')
            .stop()
            .animate({scrollTop: $(target).offset().top - 150}, 1000);
    });
});

/*---------- Active menu's links ----------*/
var navA = document.querySelectorAll('nav li a');

var Nav = {
    init: function () {
        this.getLinks();
    },
    getLinks: function () {
        this.allLinks(navA);
    },
    allLinks: function (param) {
        [].forEach.call(
            param,
            function (el) {
                Nav.clickEvents(el);
            }
        );
    },
    clickEvents: function (el) {
        el.addEventListener('click', function () {
            Nav.activeLinks(el);
        });
    },
    activeLinks: function (param) {
        [].forEach.call(
            navA,
            function (el) {
                el.classList.remove('active-link');
            }
        );
        param.classList.add('active-link');
    },
};
Nav.init();

var navHeight = document.getElementById('navigation').offsetHeight;
var topHeight = document.getElementById('top').offsetHeight - navHeight;
var serviceHeight = document.getElementById('nos-services').offsetHeight + topHeight ;
var projectHeight = document.getElementById('nos-projets').offsetHeight + serviceHeight;
var contactUsHeight = document.getElementById('nous-contacter').offsetHeight + projectHeight ;
var maxDim = document.documentElement.scrollHeight - document.documentElement.clientHeight ;

"use strict";
var CalcPosition = {
    init: function () {
        this.scrollEvents();
    },
    scrollEvents: function () {
        window.addEventListener('load', function () {
            window.addEventListener('scroll', function () {
                var z = document.documentElement.scrollTop || document.body.scrollTop; // document.body Safari

                if (z <= topHeight) {
                    document.querySelector('nav li:nth-child(1) a').classList.add('active-link');
                } else if (z <= serviceHeight) {
                    document.querySelector('nav li:nth-child(2) a').classList.add('active-link');
                } else if (z <= projectHeight) {
                    document.querySelector('nav li:nth-child(3) a').classList.add('active-link');
                } else if (z > projectHeight && z <= maxDim) {
                    document.querySelector('nav li:nth-child(4) a').classList.add('active-link');
                }
            });
        })
    },
};
CalcPosition.init();