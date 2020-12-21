$(document).ready(()=>{

    var windowHeight = $(window).height()
    var windowWidth = $(window).width()

    $('.div-body-h').css('height', windowHeight)
    $('.div-body-p').css('height', windowHeight)
    $('.div-body-a').css('height', windowHeight)
    $('[class^=div-sidebar-]').css('height', windowHeight)
    // Make the buffer so that the final element in the list can rise to the top
    $('.div-buffer').css('height', windowHeight)
    // Set height of header to be a fraction of he whole
    $('.div-home-header').height(windowHeight / 3)
    // Set the width of the home wrapper and update it when the width changes
    $('.div-wrapper-h').width(windowWidth)
    $(window).resize(()=>{
        windowWidth = $(window).width()
        $('.div-wrapper-h').width(windowWidth)
    })








    var navbarHeight = parseInt($('.ul-navbar').offset().top)
    window.scrollTo({ 
        top: navbarHeight, behavior: 'smooth'
    })





    // Check on rotation
    $(window).on( "orientationchange", (event)=>{
        if(!window.screen.orientation.angle){
            //alert('Portrait')
            location.reload();
        } else {
            //alert('Landscape')
            location.reload();
        }
    })




    // Make the selector hidden on page load
    $('.img-selector-p').css('visibility', "hidden")
    $('.img-selector-a').css('visibility', "hidden")
    // Make the Home tab section be the top one on page load
    $('.div-wrapper-h').css('z-index', "1")
    $('.div-wrapper-p').css('z-index', "0")
    $('.div-wrapper-a').css('z-index', "0")
    // Logic
    $('.p-home').on("click", ()=>{
        $('.div-wrapper-h').css('z-index', "1")
        $('.div-wrapper-p').css('z-index', "0")
        $('.div-wrapper-a').css('z-index', "0")

        $('.img-selector-p').css('visibility', "hidden")
        $('.img-selector-a').css('visibility', "hidden")

        $('.div-underline-move').stop(true, true).animate({"margin-left": "0px"}, 500)

        window.scrollTo({ 
            top: navbarHeight, behavior: 'smooth'
        })
    })

    $('.p-podcasts').on("click", ()=>{
        $('.div-wrapper-h').css('z-index', "0")
        $('.div-wrapper-p').css('z-index', "1")
        $('.div-wrapper-a').css('z-index', "0")

        $('.img-selector-p').css('visibility', "visible")
        $('.img-selector-a').css('visibility', "hidden")

        $('.div-underline-move').stop(true, true).animate({"margin-left": "96px"}, 500)

        window.scrollTo({ 
            top: navbarHeight, behavior: 'smooth'
        })
    })

    $('.p-articles').on("click", ()=>{
        $('.div-wrapper-h').css('z-index', "0")
        $('.div-wrapper-p').css('z-index', "0")
        $('.div-wrapper-a').css('z-index', "1")

        $('.img-selector-p').css('visibility', "hidden")
        $('.img-selector-a').css('visibility', "visible")

        
        $('.div-underline-move').stop(true, true).animate({"margin-left": "193px"}, 500)

        window.scrollTo({ 
            top: navbarHeight, behavior: 'smooth'
        })
    })
    




    // Make the image for the podcast become opaque and grow when hovered over ...
    // ... and then do the inverse
    $('.img-link').on('mouseenter', function(){
        $(this).stop(true, true).animate({ "opacity": "0.5" }, 500)
    })
    $('.img-link').on('mouseleave', function(){
        $(this).stop(true, true).animate({ "opacity": "1.0" }, 500)
    })





    // State information and animations for the sidebar
    // Boolean to deteremine if the sidebar is in the extended position
    var sidep = 0
    var sidea = 0

    $('.img-selector-p').css('z-index', "1")
    $('.img-selector-a').css('z-index', "0")
    $('.div-sidebar-p').css('margin-left', "-300px")
    $('.div-sidebar-a').css('margin-left', "-300px")


    $('.img-selector-p').on('click', ()=>{
        if(sidep == 1){
            $('.div-sidebar-p').stop(true, true).animate({'margin-left': "-300px"}, 250)
            $('.div-sidebar-a').stop(true, true).animate({'margin-left': "-300px"}, 250)
            sidep = 0
            sidea = 0
        }
        else if(sidep == 0){
            $('.div-sidebar-p').stop(true, true).animate({'margin-left': "0px"}, 250)
            $('.div-sidebar-a').stop(true, true).animate({'margin-left': "0px"}, 250)
            sidep = 1
            sidea = 1
        }
    })

    $('.img-selector-a').on('click', ()=>{
        if(sidea == 1){
            $('.div-sidebar-p').stop(true, true).animate({'margin-left': "-300px"}, 250)
            $('.div-sidebar-a').stop(true, true).animate({'margin-left': "-300px"}, 250)
            sidep = 0
            sidea = 0
        }
        else if(sidea == 0){
            $('.div-sidebar-p').stop(true, true).animate({'margin-left': "0px"}, 250)
            $('.div-sidebar-a').stop(true, true).animate({'margin-left': "0px"}, 250)
            sidep = 1
            sidea = 1
        }
    })

    $('[class^=div-sidebar-]').focusout(function(){
        if(sidea == 1){
            $('.div-sidebar-p').stop(true, true).animate({'margin-left': "-300px"}, 250)
            $('.div-sidebar-a').stop(true, true).animate({'margin-left': "-300px"}, 250)
            sidep = 0
            sidea = 0
        }
    })  





    // Make the proper podcast/article jump to the top of the list when the title in the sidebar is clicked on
    $(".ul-titles-p li").on('click', function(){
        // Determine which li was clicked on and save the index
        var index = $(this).index()
        index = index + 1

        // Make the selected box rise to the top
        var $container = $('.ul-body-center-p'), $scrollTo = $(`.ul-body-center-p li:nth-child(${index})`)
        $container.stop(true, true).animate({
            scrollTop: ($scrollTo.offset().top - $container.offset().top + $container.scrollTop()) - 5
        }, 500);
    })

    $(".ul-titles-a li").on('click', function(){
        // Determine which li was clicked on and save the index
        var index = $(this).index()
        index = index + 1

        // Make the selected box rise to the top
        var $container = $('.ul-body-center-a'), $scrollTo = $(`.ul-body-center-a li:nth-child(${index})`)
        $container.stop(true, true).animate({
            scrollTop: ($scrollTo.offset().top - $container.offset().top + $container.scrollTop()) - 5
        }, 500);
    })
})