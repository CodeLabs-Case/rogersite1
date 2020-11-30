$(document).ready(()=>{
    var windowHeight = $(window).height()
    $('.div-body').css('height', windowHeight)

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