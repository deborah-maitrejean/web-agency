var allWorksLi = document.getElementById('allworks');
var creativeLi = document.getElementById('creative');
var corporateLi = document.getElementById('corporate');
var portfolioLi = document.getElementById('portfolio');

var creative = document.querySelectorAll('.creative');
var corporate = document.querySelectorAll('.corporate');
var portfolio = document.querySelectorAll('.portfolio');

var Portfolio = {
    init: function () {
        this.shortPortfolio();
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
    }
};
Portfolio.init();