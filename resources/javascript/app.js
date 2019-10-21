$(document).ready(function(){
    $(window).scroll(function(e) {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            $('#navBar').addClass("navbar-hide");
            $("#navBar").removeClass('navbar-expand-lg');
                anime({
                    targets: "#brandLogo",
                    scale: 0.5,
                    easing: 'linear',
                    translateX: -75,
                    duration: 250
                });
        } else {
            $("#navBar").addClass('navbar-expand-lg');
            $('#navBar').removeClass("navbar-hide");
            anime({
                targets: "#brandLogo",
                scale: 1,
                easing: 'easeInOutQuad',
                duration: 250
            }) ;
        }
    
    });







});