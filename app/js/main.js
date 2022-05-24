$(document).ready(function ($) {
    window.addEventListener('scroll', onScroll);
    function onScroll(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
            shrinkOn = 30;
        if (distanceY > shrinkOn) {
            $("header" ).addClass("scrolled");
        } else {
            $("header" ).removeClass("scrolled");
        }
    }
    onScroll();
    
    
    $(".mobile_menu").simpleMobileMenu({
        "menuStyle": "slide",
    });

    document.addEventListener( 'wpcf7mailsent', function( event ) {
        var inputs = event.detail.inputs;
        thankyouPage = getFieldValueByName(inputs, "thankyou-page");
        if(thankyouPage) window.location = thankyouPage;
    }, false );

    if($(window).width() < 950) {
        $("footer .col .title").on("click", function(){
            var cont = $(this).closest(".col");
            $(".content", cont).slideToggle();
        });
    }

    $(".tabs .tab-title").on("click", function(){
        var tab = $(this).closest(".tab");
        var tabs = $(this).closest(".tabs");

        if($(tab).hasClass("active")) {
            $(tab).removeClass("active")
            $(tab).find(".tab-content").slideUp();
        }
        else {
            $(tabs).find(".tab").removeClass("active");
            $(tabs).find(".tab .tab-content").slideUp();
            $(tab).addClass("active")
            $(tab).find(".tab-content").slideDown();
        }
        
    });


});

function getFieldValueByName(ar, name){
    var result = "";
    ar.forEach(function(item) {
        if(item.name == name) result = item.value;
    });
    return result;
}