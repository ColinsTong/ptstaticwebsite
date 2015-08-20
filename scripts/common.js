function scrollToCenter(el) {
    var windowHeight = $(window).height();
    var elObj = $(el);
    var elCenterOffset = Math.round(elObj.offset().top + elObj.height()/2);
    var elBottomOffset = Math.round(elObj.offset().top + elObj.height());
    var scrollValue = Math.round(elCenterOffset - windowHeight / 2);
    if (windowHeight < elBottomOffset && $(document).scrollTop() != scrollValue) {
        setTimeout(function() {
            $.scrollTo(scrollValue, 2000)
        }, 500);
    };
}
