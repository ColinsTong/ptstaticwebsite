var page = 10;

$(window).load(function () {
    $('.large').each(function (index, el) {
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
    $('.next').click(function (event) {
        page += 1
        $('.large').css('background-image', 'url(../images/grilledisplay/' + ((page + 1) % 11 + 1) + '.0.jpg)');
        $('.small').each(function (index, el) {
            $(el).css('background-image', 'url(../images/grilledisplay/' + ((page + 1 + index + 1) % 11 + 1) + '.0.jpg)');
            // console.log(el);
        });
        event.preventDefault();
    });
    $('.prev').click(function (event) {
        if (page < 0) {
            page = 10;
        }
        page -= 1;
        $('.large').css('background-image', 'url(../images/grilledisplay/' + ((page + 1) % 11 + 1) + '.0.jpg)');
        $('.small').each(function (index, el) {
            $(el).css('background-image', 'url(../images/grilledisplay/' + ((page + 1 + index + 1) % 11 + 1) + '.0.jpg)');
            // console.log(el);
        });
        event.preventDefault();
    });
    $('.small').each(function (index, el) {
        $(el).click(function (event) {
            $('.large').css('background-image', $(el).css('background-image'));
            page += (index + 1);
            $('.small').each(function (i, el) {
                $(el).css('background-image', 'url(../images/grilledisplay/' + ((page + 1 + i + 1) % 11 + 1) + '.0.jpg)');
                // console.log(el);
            });
            event.preventDefault();
        });
    });



});