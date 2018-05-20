var allWorksLi = document.getElementById('allworks');
var creativeLi = document.getElementById('creative');
var corporateLi = document.getElementById('corporate');
var portfolioLi = document.getElementById('portfolio');

var creative = document.querySelectorAll('.creative');
var corporate = document.querySelectorAll('.corporate');
var portfolio = document.querySelectorAll('.portfolio');

var actives = document.querySelectorAll('.active-projects-links');
var allWorksLink = document.querySelector('#allworks a');
var creativeLink = document.querySelector('#creative a');
var corporateLink = document.querySelector('#corporate a');
var portfolioLink = document.querySelector('#portfolio a');

var Portfolio = {
    init: function () {
        this.shortPortfolio();
    },
    shortPortfolio: function () {
        allWorksLi.addEventListener('click', function () {
            Portfolio.showElements(creative);
            Portfolio.activeLink(allWorksLink);

            Portfolio.showElements(corporate);
            Portfolio.showElements(portfolio);
        });
        creativeLi.addEventListener('click', function () {
            Portfolio.showElements(creative);
            Portfolio.activeLink(creativeLink);

            Portfolio.hideElements(corporate);
            Portfolio.hideElements(portfolio);
        });
        corporateLi.addEventListener('click', function () {
            Portfolio.showElements(corporate);
            Portfolio.activeLink(corporateLink);

            Portfolio.hideElements(creative);
            Portfolio.hideElements(portfolio);
        });
        portfolioLi.addEventListener('click', function () {
            Portfolio.showElements(portfolio);
            Portfolio.activeLink(portfolioLink);

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
    activeLink: function (param) { /*ici*/
        [].forEach.call(
            actives,
            function (el) {
                el.classList.remove('active-projects-links');
            }
        );
        param.classList.add('active-projects-links');
    },
};
Portfolio.init();