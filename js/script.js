
$("document").ready(function(){
    $(".button1").hide();
    $(".porto-image").hover(function(){
        if($('#i0').is(':hover')){
            $("#b0").show();
            $("#b0").css('background-color', '#494c4e');
        }
        if($('#i1').is(':hover')){
            $("#b1").show();
            $("#b1").css('background-color', '#494c4e');
        }

        if($('#i2').is(':hover')){
            $("#b2").show();
            $("#b2").css('background-color', '#494c4e');
        }
    }, function(){$(".button1").hide();})

    $('ul li a[href^="#"]').on('click', function(event) {
        
            var target = $(this.getAttribute('href'));
        
            if( target.length ) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        
        });

   });
