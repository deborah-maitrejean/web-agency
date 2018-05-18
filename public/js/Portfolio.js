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
            creative.style.display = 'block';
            corporate.style.display = 'block';
            portfolio.style.display = 'block';
        });
        creativeLi.addEventListener('click', function () {
            creative.style.display = 'block';
            corporate.style.display = 'none';
            portfolio.style.display = 'none';
        });
        corporateLi.addEventListener('click', function () {
            corporate.style.display = 'block';
            creative.style.display = 'none';
            portfolio.style.display = 'none';
        });
        portfolioLi.addEventListener('click', function () {
            portfolio.style.display = 'block';
            creative.style.display = 'none';
            corporate.style.display = 'none';
        });
    },
};
Portfolio.init();