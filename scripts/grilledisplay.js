var currentPage = 1;
var pageMax = 10;

$(window).load(function () {
    $('.slideunit').each(function (index, el) {
        $(el).click(function (event) {
            focusOn(index + 1);
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
        var nextPage = pageMax;
        if (currentPage > 0 && currentPage < pageMax - 3) {
            nextPage = currentPage + 4;
        }
        else if (currentPage < pageMax) {
            nextPage = currentPage + 1;
        }
        focusOn(nextPage);
        event.preventDefault();
    });
    $('.prev').click(function (event) {
        var nextPage = 1;
        if (currentPage > 5 && currentPage < pageMax + 1) {
            nextPage = currentPage - 4;
        }
        else if (currentPage >1) {
            nextPage = currentPage - 1;
        }
        focusOn(nextPage);
        event.preventDefault();
    });
});

function focusOn(index) {
    index = index
    var elem = $('.slideunit:eq(' + (index - 1) + ')');
    if (elem.hasClass('large')) {
        // document.documentElement.style.overflow = 'hidden';
        $('.picdetail').css('width', $(window).width())
        $('.picdetail').css('height', $(window).height())
        $('.picdetail').show(500);
    }
    else {
        var usetime = Math.abs(150 * (4 + (index - currentPage)));
        if (index <= pageMax) {
            $('.large').removeClass('large');
            elem.addClass('large');
            currentPage = index;
            console.log('focus on page: ' + currentPage);
        }
        var slideValue = ((index - 1) <= pageMax - 4) ? 145 * (index - 1) : 145 * (pageMax - 4);
        console.log(index);
        $('.slidecontainer').animate({
            'left': -slideValue
        }, usetime, 'swing');
        console.log(usetime);
    }

}