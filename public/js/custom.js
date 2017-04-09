function changeDisplay() {
    $(".changePersonalCode").toggle('slow');
}
// --- MANUFACTURING MENU NO JUMP ON SCROLL --- //
function noScroll() {
    if (window.pageYOffset != null) {
        st = window.pageYOffset + '';
    }
    if (document.body.scrollWidth != null) {
        if (document.body.scrollTop) {
            st = document.body.scrollTop;
        }
        st = document.documentElement.scrollTop;
    }
    setTimeout('window.scroll(0,st)', 10);
}

// --- TOGGLE SEARCH MOBILE VS DESKTOP --- //
$(document).ready(function () {
    $('.col-xs-1.mobile').click(function () {
        $('#searchBox').removeClass('offSearch').addClass('onSearch');
        $('.navbar-collapse').toggleClass('in');
        $('.navbar-header').removeClass('hamMobBgColor');
    });
    $('#searchBox').on('mouseleave', function (e) {
        setTimeout(function () {
            $('#searchBox').removeClass('onSearch').addClass('offSearch');
        }, 600);
    });
    $('#searchSubmit').click(function () {
        $('#searchBox').removeClass('onSearch').addClass('offSearch');
    });
});
// --- BACKGROUND COLOR HAMBURGER ICON MOBILE ONLY --- //
$(document).ready(function () {
    $('button.navbar-toggle').click(function () {
        $('.navbar-header').toggleClass('hamMobBgColor');
        $('#searchBox').removeClass('onSearch').addClass('offSearch');
    });
});
// --- --- //
$(document).ready(function () {
    var sideslider = $('[data-toggle=collapse-side]');
    var sel = sideslider.attr('data-target');
    var sel2 = sideslider.attr('data-target-2');
    sideslider.click(function (event) {
        $(sel).toggleClass('in');
        $(sel2).toggleClass('out');
    });
});

// --- TABLE SHOW HIDE ROW CONTENT --- //
$(document).ready(function () {
    $("span.plus").click(function () {
        $(".childInvoice").toggle();
    });
});
