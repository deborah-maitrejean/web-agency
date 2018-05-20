var dropdownContent = document.querySelector('#dropdown-content');
var btnOpen = document.getElementById('dropbtn');
var btnClose = document.getElementById('dropbtn-close');

var DropdownMenu = {
    init: function () {
        btnClose.style.display = 'none';

        btnOpen.addEventListener('click', function () {
            btnOpen.style.display = 'none';
            btnClose.style.display = 'block';
            dropdownContent.style.display = 'block';
        });

        btnClose.addEventListener('click', function () {
            btnClose.style.display = 'none';
            btnOpen.style.display = 'block';
            dropdownContent.style.display = 'none';
        });

        dropdownContent.addEventListener('click', function () {
            btnClose.style.display = 'none';
            btnOpen.style.display = 'block';
            dropdownContent.style.display = 'none';
        });
    },
};
DropdownMenu.init();