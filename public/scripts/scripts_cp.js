$(document).ready(()=>{


    $('.p-podcasts').on("click", ()=>{
        $('.div-wrapper-p').css('z-index', "1")
        $('.div-wrapper-a').css('z-index', "0")

        $('.div-underline-move').animate({"margin-right": "140px"}, 500)
        // $('.div-underline-move').css("margin-left", "0px")
    })

    $('.p-articles').on("click", ()=>{
        $('.div-wrapper-p').css('z-index', "0")
        $('.div-wrapper-a').css('z-index', "1")

        $('.div-underline-move').animate({"margin-left": "140px"}, 500)
        // $('.div-underline-move').css("margin-right", "0px")
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