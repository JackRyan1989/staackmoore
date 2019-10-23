$(document).ready(function(){
    //Change NavBar on scroll:
    $(window).scroll(function(e) {
        let scroll = $(window).scrollTop();
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
        //Show divs on text:
        $("#liturgicalTitle").on("click", function(){
            anime({
                targets: "#churchDiv",
                height: 600,
                easing: 'linear',
                duration: 100
            });
            $("#customText").css('visibility', 'hidden');
            $("#commText").css('visibility', 'hidden');
            $("#resText").css('visibility', 'hidden'); 
            $("#liturgicalText").css('visibility', 'visible');
            $("#resDiv").css('height', 200);
            $("#commDiv").css('height', 200);
            $("#custManDiv").css('height', 200);
        });
        $("#residentialTitle").on("click", function(){
            anime({
                targets: "#resDiv",
                height: 600,
                easing: 'linear',
                duration: 100
            });
            $("#customText").css('visibility', 'hidden');
            $("#commText").css('visibility', 'hidden');
            $("#resText").css('visibility', 'visible'); 
            $("#liturgicalText").css('visibility', 'hidden');
            $("#churchDiv").css('height', 150);
            $("#commDiv").css('height', 150);
            $("#custManDiv").css('height', 150);
        });
        $("#commercialTitle").on("click", function(){
            anime({
                targets: "#commDiv",
                height: 600,
                easing: 'linear',
                duration: 100
            });
            $("#customText").css('visibility', 'hidden');
            $("#commText").css('visibility', 'visible');
            $("#resText").css('visibility', 'hidden'); 
            $("#liturgicalText").css('visibility', 'hidden');
            $("#churchDiv").css('height', 150);
            $("#resDiv").css('height', 150);
            $("#custManDiv").css('height', 150);
        });
        $("#customTitle").on("click", function(){
            anime({
                targets: "#custManDiv",
                height: 600,
                easing: 'linear',
                duration: 100
            });
            $("#customText").css('visibility', 'visible');
            $("#commText").css('visibility', 'hidden');
            $("#resText").css('visibility', 'hidden'); 
            $("#liturgicalText").css('visibility', 'hidden');
            $("#churchDiv").css('height', 150);
            $("#resDiv").css('height', 150);
            $("#commDiv").css('height', 150);
        });







});