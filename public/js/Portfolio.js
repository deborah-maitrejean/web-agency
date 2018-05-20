var allWorksLi = document.getElementById('allworks');
var creativeLi = document.getElementById('creative');
var corporateLi = document.getElementById('corporate');
var portfolioLi = document.getElementById('portfolio');

var creative = document.querySelectorAll('.creative');
var corporate = document.querySelectorAll('.corporate');
var portfolio = document.querySelectorAll('.portfolio');

var links = document.querySelectorAll('#projets-menu ul a');
var allWorksLink = document.querySelector('#allworks a');
var creativeLink = document.querySelector('#creative a');
var corporateLink = document.querySelector('#corporate a');
var portfolioLink = document.querySelector('#portfolio a');

var Portfolio = {
    init: function () {
        this.shortPortfolio();
        this.linksEvents();
    },
    shortPortfolio: function () {
        allWorksLi.addEventListener('click', function () {
            Portfolio.showElements(creative);
            Portfolio.showElements(corporate);
            Portfolio.showElements(portfolio);
        });
        creativeLi.addEventListener('click', function () {
            Portfolio.showElements(creative);
            Portfolio.hideElements(corporate);
            Portfolio.hideElements(portfolio);
        });
        corporateLi.addEventListener('click', function () {
            Portfolio.showElements(corporate);
            Portfolio.hideElements(creative);
            Portfolio.hideElements(portfolio);
        });
        portfolioLi.addEventListener('click', function () {
            Portfolio.showElements(portfolio);
            Portfolio.hideElements(creative);
            Portfolio.hideElements(corporate);
        });
    },
    showElements: function (param) {
        [].forEach.call(
            param,
            function (el) {
                el.style.display = 'block';
            }
        );
    },
    hideElements: function (param) {
        [].forEach.call(
            param,
            function (el) {
                el.style.display = 'none';
            }
        );
    },
    linksEvents: function () {
        allWorksLink.addEventListener('click', function () {
            Portfolio.activeLink(allWorksLink);
        });
        creativeLink.addEventListener('click', function () {
            Portfolio.activeLink(creativeLink);
        });
        corporateLink.addEventListener('click', function () {
            Portfolio.activeLink(corporateLink);
        });
        portfolioLink.addEventListener('click', function () {
            Portfolio.activeLink(portfolioLink);
        });
    },
    activeLink: function (link) {
        links.forEach(function (el) {
            el.classList.remove('active-projects-links');
            el.classList.remove('active-arrows');
        });
        link.classList.add('active-projects-links');
        link.classList.add('active-arrows');
    },
};
Portfolio.init();