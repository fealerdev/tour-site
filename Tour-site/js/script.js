$(document).ready(function(){
    $("a[href^='#']").click(function(){
        let valhref = $(this).attr("href");
        $("html, body").animate({scrollTop: $(valhref).offset().top-100+'px'});
    });
    $(".button_menu").click(function(){
        if ($(".btns_nav ul").hasClass("show_me2") && $(".btns_nav ul li").hasClass("show_me") && $("#li1").hasClass("animate__animated animate__fadeInDown") && $("#li1").hasClass("show_op") && $("#li2").hasClass("animate__animated animate__fadeInDown") && $("#li2").hasClass("show_op") && $("#li3").hasClass("animate__animated animate__fadeInDown") && $("#li3").hasClass("show_op")){
            
            $(".btns_nav ul").removeClass("show_me2");
            $(".btns_nav ul li").removeClass("show_me");
            $("#li1").removeClass("animate__animated animate__fadeInDown");
            $("#li1").removeClass("show_op");
            $("#li2").removeClass("animate__animated animate__fadeInDown")
            $("#li2").removeClass("show_op")
            $("#li3").removeClass("animate__animated animate__fadeInDown")
            $("#li3").removeClass("show_op")
            
        }
        
        else{
            
            
            
            
            
        $(".btns_nav ul").addClass("show_me2");
        $(".btns_nav ul li").addClass("show_me");
        $("#li1").addClass("animate__animated animate__fadeInDown");
        $("#li1").addClass("show_op");
        setTimeout(function(){
            $("#li2").addClass("animate__animated animate__fadeInDown");
            $("#li2").addClass("show_op");
        }, 200);
        setTimeout(function(){
            $("#li3").addClass("animate__animated animate__fadeInDown");
            $("#li3").addClass("show_op");
        }, 400);
        console.log($(".btns_nav ul li"));
            
        }
    });
    
    $("#bron").click(function(){
        $('html, body').animate({scrollTop: $('#date').offset().top-100+'px'})
    });
    $(window).scroll(function(){
        let scrollDisctance = $(this).scrollTop();
        console.log(scrollDisctance);
        
        if (scrollDisctance >= 400 && scrollDisctance <= 1000){
            $(".block_main_text_fairy_tail, .fairy_tail_img_text").addClass("animate__animated animate__fadeInRight");
        }
        
        if (scrollDisctance >= 1600 && scrollDisctance <= 2500){
            $(".block1_our_trip").addClass("animate__animated animate__fadeInLeft");
        }
        
        if (scrollDisctance >= 1850 && scrollDisctance <= 2500){
            setTimeout(function(){
               $(".day1").addClass("animate__animated animate__fadeInLeft"); 
            }, 500);
            setTimeout(function(){
               $(".day2").addClass("animate__animated animate__fadeInLeft"); 
            }, 1000);
            setTimeout(function(){
               $(".day3").addClass("animate__animated animate__fadeInLeft"); 
            }, 1500);
            setTimeout(function(){
               $(".day4").addClass("animate__animated animate__fadeInLeft"); 
            }, 2000);
            
            setTimeout(function(){
               $("#bron").addClass("animate__animated animate__fadeInLeft"); 
            }, 2500);
        }
        
         if (scrollDisctance >= 2900 && scrollDisctance <= 3700){
            $(".block1_hotel").addClass("animate__animated animate__fadeInDown");
             setTimeout(function(){
                 $(".hotel_text").addClass("animate__animated animate__backInRight");
             }, 500);
             
             setTimeout(function(){
                 $('#hotel1').addClass("animate__animated animate__fadeInRight");
             }, 1500);
             
             setTimeout(function(){
                 $('#hotel2').addClass("animate__animated animate__fadeInRight");
             }, 2000);
             
             setTimeout(function(){
                 $('#hotel3').addClass("animate__animated animate__fadeInRight");
             }, 2500);
             
             setTimeout(function(){
                 $('#hotel4').addClass("animate__animated animate__fadeInRight");
             }, 3000);
             
             
        }
        
        
        
        if (scrollDisctance >= 4050 && scrollDisctance <= 4500){
            $(".block_main_text_price").addClass("animate__animated animate__fadeInLeft");
            
            setTimeout(function(){
                $('.price_info_2').addClass("animate__animated animate__fadeInLeft");
            }, 500);
            
            setTimeout(function(){
                $('.price_info_1').addClass("animate__animated animate__fadeInLeft");
            }, 1000);
            
            setTimeout(function(){
                $('.baloon1').addClass("animate__animated animate__fadeInUp");
            }, 1300);
            
            setTimeout(function(){
                $('.baloon2').addClass("animate__animated animate__fadeInUp");
            }, 1500);
            
            setTimeout(function(){
                $('.baloon3').addClass("animate__animated animate__fadeInUp");
            }, 1700);
        }
        
        
        
        if (scrollDisctance >= 4750 && scrollDisctance <= 5300){
            $(".block_main_text_price2").addClass("animate__animated animate__fadeInRight");
            $(".block_main_text_price").addClass("animate__animated animate__fadeInRight");
            $(".woman_price").addClass("animate__animated animate__fadeInRight");
            
            setTimeout(function(){
                $(".block_request").addClass("animate__animated animate__fadeInLeft");
            }, 1000);
        }
        
        if (scrollDisctance >= 5750){
            $(".block_baloon").addClass("animate__animated animate__fadeInUp");
        }
        
        
        
        if (scrollDisctance >= 145){
            $(".nav_menu").addClass("black_menu");
            $(".nav_menu").addClass("animate__animated animate__slideInDown");
            $(".main").addClass("animate__animated animate__fadeInUp");
        }
        else if (scrollDisctance <= 145){
            $(".nav_menu").removeClass("black_menu");
            $(".nav_menu").removeClass("animate__animated animate__slideInDown");
            
        }
        
    });
    
    
    $('.btn2 button').click(function(){
        alert("Заявка отправлена!");
    });
    
    $(".main").addClass("animate__animated animate__slideInDown");
    
    
    fairy_tail
    
});