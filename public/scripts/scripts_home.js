$(document).ready(()=>{
    var windowHeight = $(window).height()
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

    $('.p-podcasts').on("click", ()=>{
        $('.div-wrapper-p').css('z-index', "1")
        $('.div-wrapper-a').css('z-index', "0")

        $('.div-underline-move').animate({"margin-left": "0px"}, 500)
    })

    $('.p-articles').on("click", ()=>{
        $('.div-wrapper-p').css('z-index', "0")
        $('.div-wrapper-a').css('z-index', "1")
        
        $('.div-underline-move').animate({"margin-left": "140px"}, 500)
    })



    // State information and animations for the sidebar
    var sidep = 1
    var sidea = 0

    $('.img-selector-p').css('z-index', "1")
    $('.img-selector-a').css('z-index', "0")
    $('.img-selector-a').css('margin-left', "-300px")


    $('.img-selector-p').on('click', ()=>{
        if(sidep == 1){
            $('.img-selector-p').css('margin-left', "-300px")
            sidep = 0
        }
        else if(sidep == 0){
            $('.img-selector-p').css('margin-left', "0px")
            sidep = 1
        }
    })
})