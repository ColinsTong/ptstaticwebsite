$(window).load(function () {
    //禁用滚动条
    document.documentElement.style.overflow = 'hidden';
    // 导航点点击事件
    $('.dot').each(function (index, el) {
        $(el).click(function (event) {
            scrollToCenter('.scroll_unit:eq(' + index + ')', 1000);
        });
    });
    // 第一图的下箭头
    $('.next_button_a').click(function (event) {
        scrollToCenter('.scroll_unit:eq(1)', 1000);
    });
    // 添加鼠标滚轮事件
    addMouseWheelHandler(mouseWheelHandler);
});

$(window).ready(function () {
    relocateNav();
});

// unit位置关联导航点
$(window).scroll(function (event) {
    $('.scroll_unit').each(function (index, el) {
        if (isOffestInWindow(elOffset(el).center)) {
            $('.dot:lt(' + index + ')').removeClass('active');
            $('.dot:gt(' + index + ')').removeClass('active');
            $('.dot:eq(' + index + ')').addClass('active');
        }
    });
});



$(window).resize(function () {
    relocateNav();
});


function relocateNav() {
    $('.scorll_nav').css('top', ($(window).height() - $('.scorll_nav').height()) / 2);
}

var count = 0;
var __lock = true;
var scrollDelay = 750; //ms

function lockRun(handler) {
    if (__lock) {
        __lock = false;
        handler();
        setTimeout(function () {
            __lock = true;
        }, scrollDelay);
    } else {
        console.log('lock is locked!');
    }
}

function mouseWheelTo(nextIndex) {
    lockRun(function () {
        scrollToCenter('.scroll_unit:eq(' + nextIndex + ')', scrollDelay);
    });
    console.log('scroll to ' + nextIndex);
};

function mouseWheelToOffset(offset) {
    lockRun(function () {
        scrollToValue(offset, scrollDelay);
    });
    console.log('scroll to ' + offset + 'px');
};

// function mouseWheelPrev(currentIndex) {
//     var nextIndex = currentIndex - 1;
//     lockRun(function () {
//         scrollToCenter('.scroll_unit:eq(' + nextIndex + ')', scrollDelay);
//     });
//     console.log('scroll to ' + nextIndex);
// };

// function mouseWheelNext(currentIndex) {
//     var nextIndex = currentIndex + 1;
//     lockRun(function () {
//         scrollToCenter('.scroll_unit:eq(' + nextIndex + ')', scrollDelay);
//     });
//     console.log('scroll to ' + nextIndex);
// }

function mouseWheelHandler(e) {
    // cross-browser wheel delta
    e = e || window.event;
    var value = e.wheelDelta || -e.deltaY || -e.detail;
    var delta = Math.max(-1, Math.min(1, value));
    var currentIndex = parseInt($(".dot.active").text()) - 1;

    // 检查参数
    if (currentIndex < 0 || currentIndex > 7) {
        console.log('error, current element index is ' + currentIndex);
        return false;
    }
    // //文档头部可见，直接滚动到第一页顶部
    if (delta < 0 && $(document).scrollTop() < $('.scroll_view').offset().top) {
        mouseWheelToOffset($('.scroll_view').offset().top);
    }

    console.log('wheel delta is ' + delta);

    if (currentIndex == 0) {
        // 在第一页，只能向下滚动
        if (delta < 0) {
            mouseWheelTo(currentIndex + 1);
        } else if (delta > 0) {
            // 可向上滚至页面顶端
            mouseWheelToOffset(0);
        }
    } else if (currentIndex == 7) {
        // 在最后一页，只能向上滚动
        if (delta > 0) {
            mouseWheelTo(currentIndex - 1);
        }
    } else {
        //处于1-6页，可以随意滚动
        if (delta < 0) {
            mouseWheelTo(currentIndex + 1);
        } else if (delta > 0) {
            mouseWheelTo(currentIndex - 1);
        }
    }
};


// window.addEventListener("mousewheel", function(event) {
//     event.returnValue = false;
// });
// document.onkeydown = function(e) {
//     e = e || event;
//     alert(e.keyCode);
// }
