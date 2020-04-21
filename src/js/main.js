(function ($) {
    
    //preloader //
    $(window).on('load', function () {
        jQuery('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // open nav //
    $('#open-nav').click(function(e){
        e.preventDefault()

        let open_nav = ($(this));
        let close_nav = $('#close-nav')
        let drop_nav = $('#nav-drop')


        if(drop_nav.hasClass('hidden')){
            open_nav.removeClass('block').addClass('hidden')
            close_nav.removeClass('hidden').addClass('block')
           drop_nav.removeClass('hidden').addClass('block')
        }
    });

    // close nav //
    $('#close-nav').click(function(e) {
        e.preventDefault()

        let close_nav = ($(this));
        let open_nav = $('#open-nav')
        let drop_nav = $('#nav-drop')


        if(drop_nav.hasClass('block')){
            close_nav.removeClass('block').addClass('hidden')
            open_nav.removeClass('hidden').addClass('block')
            drop_nav.removeClass('block').addClass('hidden')
        }
    })

    $('.carousel').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 3000
    });

    if($('.slick-slide').hasClass('slick-active')){
        let h1 = $('.carousel-content h1')
        let p = $('.carousel-content p')
        let b = $('.carousel-content a')

        h1.addClass('animated fadeInDown')
        p.addClass('animated fadeInDown')
        b.addClass('animated bounceIn')
        
    }
    else{
        let h1 = $('.carousel-content h1')
        let p = $('.carousel-content p')
        let b = $('.carousel-content a')

        h1.removeClass('animated fadeInDown')
        p.removeClass('animated fadeInDown')
        b.removeClass('animated bounceIn')
    }

    $('.carousel').on('beforeChange', function(){

        var dataId = $('.slick-current').attr("data-slick-index");

        console.log(dataId)

        if(dataId == 2){
            let title = $('.carousel-content.caption1 h1')
            let p = $('.carousel-content.caption1 p')
            let b = $('.carousel-content.caption1 a')

            title.removeClass('animated fadeInDown').hide()
            p.removeClass('animated fadeInDown').hide()
            b.removeClass('animated bounceIn').hide()

            setTimeout(() => {    
                title.addClass('animated fadeInDown').show()
                p.addClass('animated fadeInDown').show()
                b.addClass('animated bounceIn').show()
            }, 1000);
        
        }else if(dataId == 0){
            let title = $('.carousel-content.caption2 h1')
            let p = $('.carousel-content.caption2 p')
            let b = $('.carousel-content.caption2 a')

            title.removeClass('animated fadeInLeft').hide()
            p.removeClass('animated fadeInLeft').hide()
            b.removeClass('animated bounceIn').hide()

            setTimeout(() => {    
                title.addClass('animated fadeInLeft').show()
                p.addClass('animated fadeInLeft').show()
                b.addClass('animated bounceIn').show()
            }, 1000);
        }else {
            let title = $('.carousel-content.caption3 h1')
            let p = $('.carousel-content.caption3 p')
            let b = $('.carousel-content.caption3 a')

            title.removeClass('animated fadeInRight').hide()
            p.removeClass('animated fadeInRight').hide()
            b.removeClass('animated bounceIn').hide()

            setTimeout(() => {    
                title.addClass('animated fadeInRight').show()
                p.addClass('animated fadeInRight').show()
                b.addClass('animated bounceIn').show()
            }, 1000);
        }
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots: false,
        autoplay:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    })

    new WOW().init();
  
})(jQuery);
  