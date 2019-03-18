$(function(e){

              
    $('header button').click(function(e){
        $('html,body').animate({scrollTop:$('#contato').offset().top},1000)
    });
   
    $('nav ul#menu-desktop li:nth-child(1)').click(function(e){
        $('html,body').animate({scrollTop:$('header').offset().top},1000)
    });
    $('nav ul#menu-desktop li:nth-child(2)').click(function(e){
        $('html,body').animate({scrollTop:$('#titulo').offset().top},1000)
    });
    $('nav ul#menu-desktop li:nth-child(3)').click(function(e){
        $('html,body').animate({scrollTop:$('#contato').offset().top},1000)
    });
    $('div#mySidebar a#1').click(function(e){
        $('html,body').animate({scrollTop:$('header').offset().top},1000)
    });
    $('div#mySidebar a#2').click(function(e){
        $('html,body').animate({scrollTop:$('#titulo').offset().top},1000)
    });
    $('div#mySidebar a#3').click(function(e){
        $('html,body').animate({scrollTop:$('#contato').offset().top},1000)
    });

    $('#seta_up').hide();
    
    $(window).scroll(function(e) {
        if($(this).scrollTop() > 800) {
            $('#seta_up').fadeIn(300)	;
        }
        if($(this).scrollTop() < 150 ) {
            $('#seta_up').fadeOut(300);	
        }
    });
    
    $('#seta_up').click(function(e) {
        $("html, body").animate({scrollTop:0 }, 1000);	
    });

  
});


