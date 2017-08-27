    $(window).scroll(function() {
        var winScroll = $(this).scrollTop();
        $(".transparentImage").css({
            "transform" : "translate(0, " + winScroll / 100 + "%)"
        });
    });