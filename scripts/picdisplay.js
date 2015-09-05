$(window).ready(function () {
    $('.picunit a').each(function (index, el) {
        $(el).click(function (event) {
            //document.documentElement.style.overflow = 'hidden';
            $('.picdetail').css('width', $(window).width())
            $('.picdetail').css('height', $(window).height())
            $('.picdetail').show(500);
            event.preventDefault();
        });
    });
    $('.picdetail').click(function (event) {
        $('.picdetail').hide(500);
        //document.documentElement.style.overflow = 'auto';
        event.preventDefault();
    });
    $('.picarticle').click(function (event) {
        event.stopPropagation();
    });
    $('.close').click(function (event) {
        $('.picdetail').hide(500);
        //document.documentElement.style.overflow = 'auto';
        event.preventDefault();
    });
});