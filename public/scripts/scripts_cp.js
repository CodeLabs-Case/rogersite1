$(document).ready(()=>{


    $('.p-podcasts').on("click", ()=>{
        $('.div-underline-move').animate({"margin-left": "0px"}, 500)

        $('.div-wrapper-p').css('z-index', "1")
        $('.div-wrapper-a').css('z-index', "0")

        if($(window).width() < 600){
            $('.div-wrapper-p').css("opacity", "0")
            $('.div-wrapper-a').css('opacity', "1")
        }
    })

    $('.p-articles').on("click", ()=>{
        $('.div-underline-move').animate({"margin-left": "140px"}, 500)

        $('.div-wrapper-p').css('z-index', "0")
        $('.div-wrapper-a').css('z-index', "1")

        if($(window).width() < 600){
            $('.div-wrapper-p').css("opacity", "0")
            $('.div-wrapper-a').css('opacity', "1")
        }
    })

    

    // Show the sections again when the screen is resized above 600
    $(window).resize(()=>{
        if($(window).css("width") > 600){
            $('.div-wrapper-p').css("opacity", "1")
            $('.div-wrapper-a').css('opacity', "1")
        }
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
})