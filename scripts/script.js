
document.addEventListener('DOMContentLoaded', function () {
    var navbarToggle = document.querySelector('.navbar-toggler');
    var targetId = navbarToggle.getAttribute('data-bs-target');
    var target = document.querySelector(targetId);
    console.log(navbarToggle, target);

    navbarToggle.addEventListener('click', function () {
        navbarToggle.classList.toggle('collapsed');
        target.classList.toggle('show');

        if (target.classList.contains('show')) {
            target.style.maxHeight = target.scrollHeight + 'px';
        } else {
            target.style.transition = 'max-height 0.3s ease-out';
            target.style.maxHeight = '0';

            target.addEventListener('transitionend', function () {
                target.style.transition = '';
                target.style.maxHeight = null;
            });
        }
    });
});