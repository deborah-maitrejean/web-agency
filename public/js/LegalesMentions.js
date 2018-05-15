var modalLink = document.getElementById('modal-link');
var legalesMentionsModal = document.getElementById('legales-mentions-modal');
var close = document.getElementById('close');

var LegalesMentions = {
    init: function () {
        modalLink.style.display = 'block';
        close.addEventListener('click', function (e) {
            legalesMentionsModal.style.display = 'none';
        });
    },

    end: function () {
        modalLink.style.display = 'none';
    },
};

modalLink.style.display = 'inline-block';
// When the user clicks on the link, open the modal
modalLink.addEventListener('click', function (e) {
    e.preventDefault();
    legalesMentionsModal.style.display = 'block';
    LegalesMentions.init();
});