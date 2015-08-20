function scrollToCenter(el) {
    var windowHeight = $(window).height();
    var elObj = $(el);
    var elCenterOffset = Math.round(elObj.offset().top + elObj.height()/2);
    var elBottomOffset = Math.round(elObj.offset().top + elObj.height());
    var scrollValue = Math.round(elCenterOffset - windowHeight / 2);
    if (windowHeight < elBottomOffset && $(document).scrollTop() < scrollValue) {
        setTimeout(function() {
            $.scrollTo(scrollValue, 2000)
        }, 500);
    };
}

function scrollToTop(el,delay,delayExecute) {
    var elObj = $(el);
    var scrollValue = Math.round($(el).offset().top);
    if ($(document).scrollTop() < scrollValue) {
        setTimeout(function() {
            $.scrollTo(scrollValue, delay)
        }, delayExecute);
    };
}

function createNav(links){
    $('.nav')
}
