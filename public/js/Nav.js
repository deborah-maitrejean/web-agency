/*---------- Active menu's links ----------*/
var navA = document.querySelectorAll('nav li a');
var homeLink = document.querySelector('nav li:nth-child(1) a');
var servicesLink = document.querySelector('nav li:nth-child(2) a');
var projectLink = document.querySelector('nav li:nth-child(3) a');
var contactLink = document.querySelector('nav li:nth-child(4) a');

var navHeight = document.getElementById('navigation').offsetHeight;
var topHeight = document.getElementById('top').offsetHeight - navHeight;
var serviceHeight = document.getElementById('nos-services').offsetHeight + topHeight ;
var projectHeight = document.getElementById('nos-projets').offsetHeight + serviceHeight - topHeight;
var contactUsHeight = document.getElementById('nous-contacter').offsetHeight + projectHeight;
var maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

var Nav = {
    init: function () {
        this.scrollEvents();
    },
    scrollEvents: function () {
        window.addEventListener('load', function () {
            window.addEventListener('scroll', function () {
                var z = document.documentElement.scrollTop || document.body.scrollTop; // document.body for Safari

                if (z <= topHeight) {
                    homeLink.classList.add('active-link');
                    Nav.activeLinks(homeLink);
                } else if (z <= serviceHeight) {
                    servicesLink.classList.add('active-link');
                    Nav.activeLinks(servicesLink);
                } else if (z <= projectHeight) {
                    projectLink.classList.add('active-link');
                    Nav.activeLinks(projectLink);
                } else if (z > projectHeight && z <= contactUsHeight && z <= maxHeight) {
                    contactLink.classList.add('active-link');
                    Nav.activeLinks(contactLink);
                }
            });
        })
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