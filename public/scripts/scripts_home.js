$(document).ready(()=>{
    var windowHeight = $(window).height()
    $('.div-body-h').css('height', windowHeight)
    $('.div-body-p').css('height', windowHeight)
    $('.div-body-a').css('height', windowHeight)
    $('[class^=div-sidebar-]').css('height', windowHeight)





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
    })

    $('.p-podcasts').on("click", ()=>{
        $('.div-wrapper-h').css('z-index', "0")
        $('.div-wrapper-p').css('z-index', "1")
        $('.div-wrapper-a').css('z-index', "0")

        $('.img-selector-p').css('visibility', "visible")
        $('.img-selector-a').css('visibility', "hidden")

        $('.div-underline-move').stop(true, true).animate({"margin-left": "96px"}, 500)
    })

    $('.p-articles').on("click", ()=>{
        $('.div-wrapper-h').css('z-index', "0")
        $('.div-wrapper-p').css('z-index', "0")
        $('.div-wrapper-a').css('z-index', "1")

        $('.img-selector-p').css('visibility', "hidden")
        $('.img-selector-a').css('visibility', "visible")

        
        $('.div-underline-move').stop(true, true).animate({"margin-left": "193px"}, 500)
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
            $('.div-sidebar-p').stop(true, true).animate({'margin-left': "-300px"}, 500)
            $('.div-sidebar-a').stop(true, true).animate({'margin-left': "-300px"}, 500)
            sidep = 0
            sidea = 0
        }
        else if(sidep == 0){
            $('.div-sidebar-p').stop(true, true).animate({'margin-left': "0px"}, 500)
            $('.div-sidebar-a').stop(true, true).animate({'margin-left': "0px"}, 500)
            sidep = 1
            sidea = 1
        }
    })

    $('.img-selector-a').on('click', ()=>{
        if(sidea == 1){
            $('.div-sidebar-p').stop(true, true).animate({'margin-left': "-300px"}, 500)
            $('.div-sidebar-a').stop(true, true).animate({'margin-left': "-300px"}, 500)
            sidep = 0
            sidea = 0
        }
        else if(sidea == 0){
            $('.div-sidebar-p').stop(true, true).animate({'margin-left': "0px"}, 500)
            $('.div-sidebar-a').stop(true, true).animate({'margin-left': "0px"}, 500)
            sidep = 1
            sidea = 1
        }
    })
})