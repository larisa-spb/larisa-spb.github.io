$(function () {
    const nav = $('#js-nav');
    const navToggle = $('#js-navToogle');

    navToggle.on('click', function(e) {
        e.preventDefault();
        nav.toggleClass("show");

        $('.burger').toggleClass("active");
    });
});