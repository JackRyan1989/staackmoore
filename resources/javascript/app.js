$(document).ready(function(){

    //Change NavBar on scroll:
    $(window).scroll(function(e) {
        let scroll = $(window).scrollTop();
        console.log(scroll);
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
        if (scroll >= 500) {
            anime({
                targets: "#ourWork",
                height: 650,
                easing: 'linear',
                duration: 100
            }) ;
        }  else {
            $("#ourWork").css("height", 50);
        }
    
    });







});