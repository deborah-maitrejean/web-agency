var inputName =  document.getElementById('name');
var inputEmail =  document.getElementById('email');
var inputSubject =  document.getElementById('subject');
var inputMessage =  document.getElementById('message');
var submit = document.getElementById('input-contact');

var Form = {
    init: function () {
        this.delValue();
        this.sendMessage();
    },
    delValue: function () {
        inputName.addEventListener('click', function () {
            inputName.value = '';
        });
        inputEmail.addEventListener('click', function () {
            inputEmail.value = '';
        });
        inputSubject.addEventListener('click', function () {
            inputSubject.value = '';
        });
        inputMessage.addEventListener('click', function () {
            inputMessage.value = '';
        });
    },
    sendMessage: function () {
        submit.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Bonjour ! Pour me contacter, merci d\'envoyer un email à cette addresse: deborah.maitrejean@gmail.com');
        });
    },
};
Form.init();